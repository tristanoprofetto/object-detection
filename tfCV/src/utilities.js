//Function to draw a box around detected objects
export const drawRectangle = (detections, ctx) => {
    detections.forEach(pred => {

        const [x, y, w, h] = pred['bbox'] //Dimensions of object
        const text = pred['class'] //Classification category/class

        ctx.strokeStyle = 'red'
        ctx.fillStyle = 'red'
        ctx.font = '18px Arial'

        ctx.beginPath()
        ctx.fillText(text, x, y)
        ctx.rect(x, y, w, h)
        ctx.stroke()
    })
}