// (A) LOAD MODULES
const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

// (B) SETTINGS
const sFile = "demo.png"  // source image
const sSave = "demoA.png"  // "save as"

// (C) LOAD IMAGE + DRAW TEXT
loadImage(sFile).then(img => {
    // (C1) CREATE CANVAS
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");

    // (C2) DRAW IMAGE ONTO CANVAS
    ctx.drawImage(img, 0, 0);

    // (C3) WRITE TEXT ONTO IMAGE
    ctx.font = 'bold 12px Verdana';
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgb(0, 0, 0)";

    ctx.fillText("NEOBOX-TH", 10, 370);
    ctx.fillText("", 10, 385);

    ctx.textAlign = 'right'
    ctx.fillText("200.00", 280, 370);
    ctx.fillText("บาท", 280, 385);

    // (C4) SAVE
    const out = fs.createWriteStream(sSave);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on("finish", () => console.log("Done"));
});