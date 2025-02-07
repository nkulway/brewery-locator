const vision = require('@google-cloud/vision')

const client = new vision.ImageAnnotatorClient()


async function detectLabels() {
    const imagePath = 'best-end-brew.jpeg'

    const [result] = await client.textDetection(imagePath)
    console.log(result)
    const labels = result.textAnnotations

    console.log('Labels detected:', labels)
    labels.forEach(label => console.log(label.description))
}

detectLabels().catch(console.error)