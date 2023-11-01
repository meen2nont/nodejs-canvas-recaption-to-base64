// (A) LOAD MODULES
const fs = require("fs"),{ registerFont, createCanvas, loadImage } = require("canvas");


// (B) SETTINGS - CHANGE FONT TO YOUR OWN!
const
sFile = "demo.png",   // source image
sSave = "demoB.png",  // "save as"
sText = "FRIED RICE", // text to write
sX = 80, sY = 80;    // text position
registerFont("https://github.com/google/fonts/raw/master/ofl/baskervville/Baskervville-Italic.ttf", { family: "Arial Bold" }); // CHANGE TO YOUR OWN!

// (C) LOAD IMAGE + DRAW TEXT
loadImage(sFile).then(img => {
  // (C1) CREATE CANVAS
  const canvas = createCanvas(img.width, img.height),
        ctx = canvas.getContext("2d");

  // (C2) DRAW IMAGE ONTO CANVAS
  ctx.drawImage(img, 0, 0);

  // (C3) WRITE TEXT ONTO IMAGE
  ctx.font = '36px "Arial Bold"';
  ctx.fillStyle = "rgba(255, 0, 0, 0.4)";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgb(0, 0, 0)";
  ctx.fillText(sText, sX, sY);
  ctx.strokeText(sText, sX, sY);

  // (C4) SAVE
  const out = fs.createWriteStream(sSave),
        stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on("finish", () => console.log("Done"));
});