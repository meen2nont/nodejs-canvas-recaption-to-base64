// (A) LOAD MODULES
const fs = require("fs"),
      { registerFont, createCanvas, loadImage } = require("canvas");

// (B) SETTINGS - CHANGE FONT TO YOUR OWN!
const
sFile = "demo.png",   // source image
sSave = "demoC.png",  // "save as"
sText = "FRIED RICE"; // text to write
registerFont("C:/Windows/Fonts/arialbd.ttf", { family: "Arial Bold" }); // CHANGE TO YOUR OWN!

// (C) LOAD IMAGE + DRAW TEXT
loadImage(sFile).then(img => {
  // (C1) CREATE CANVAS + DRAW IMAGE
  const canvas = createCanvas(img.width, img.height),
        ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  // (C2) TEXT DIMENSIONS
  ctx.font = '36px "Arial Bold"';
  ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 0)";
  let td = ctx.measureText(sText),
      tw = td.width,
      th = td.actualBoundingBoxAscent + td.actualBoundingBoxDescent;

  // (C3) CALCULATE CENTER & WRITE ON CENTER
  let x = Math.floor((img.naturalWidth - tw) / 2),
      y = Math.floor((img.naturalHeight + th) / 2);
  ctx.strokeText(sText, x, y);
  ctx.fillText(sText, x, y);

  // (C4) SAVE
  const out = fs.createWriteStream(sSave),
        stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Done"));
});