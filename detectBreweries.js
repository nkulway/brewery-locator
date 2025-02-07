import express from "express"
import multer from "multer"
import vision from "@google-cloud/vision"
import fetch from "node-fetch"

const app = express()
const upload = multer({ dest: "uploads/" })
const client = new vision.ImageAnnotatorClient()

async function findBreweryByName(name) {
  const response = await fetch(
    `https://api.openbrewerydb.org/breweries?by_name=${encodeURIComponent(
      name
    )}`
  )
  const breweries = await response.json()
  return breweries.length ? breweries[0] : null
}

app.post("/detect-brewery", upload.single("image"), async (req, res) => {
  try {
    const filePath = req.file.path

    const [logoResult] = await client.logoDetection(filePath)
    const logos = logoResult.logoAnnotations.map((logo) => logo.description)

    const [textResult] = await client.textDetection(filePath)
    const detectedText = textResult.textAnnotations.map(
      (text) => text.description
    )

    // Try matching brewery from detected info
    const matches = await Promise.all(
      [...logos, ...detectedText].map(findBreweryByName)
    )
    const brewery = matches.find((b) => b !== null)

    res.json({
      detectedLogos: logos,
      detectedText,
      matchedBrewery: brewery || "No match found",
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Image processing failed" })
  }
})

async function detectLabels() {
  const imagePath = "best-end-brew.jpeg"

  const [result] = await client.textDetection(imagePath)
  console.log(result)
  const labels = result.textAnnotations

  console.log("Labels detected:", labels)
  labels.forEach((label) => console.log(label.description))
}

app.listen(3000, () => console.log("Server running on port 3000"))
