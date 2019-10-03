const fs = require('fs');
console.log('In the converter file');


const video = fs.createWriteStream('./videos/videoCopy.mp4');
const path = './videos/interstellar.mp4' ;
const stats = fs.statSync(path);
const fileSize = stats.size;
const file = fs.createReadStream(path, {start: 0, end: fileSize});
file.pipe(video);
console.log(video)
