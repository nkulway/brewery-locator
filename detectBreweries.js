const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient()


async function detectText(imagePath) {
    const [result] = await client.textDetection(imagePath)
    const detections = result.textAnnotations

    console.log("Detect text: ")
    detections.forEach(text => console.log(text.description))
}

async function detectLogos(imagePath) {
    const [result] = await client.textDetection(imagePath)
    const logos = result.textAnnotations

    console.log("Detect logo: ")
    logos.forEach(logo => console.log(logo.description))
}

const imagePath = 'best-end-brew.jpeg'
detectText(imagePath)
detectLogos(imagePath)