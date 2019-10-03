const fs = require('fs');
console.log('In the converter file');


const video = fs.createWriteStream('./videos/videoCopy.mp4')
const path = './videos/interstellar.mp4' ;
const stats = fs(path);
const fileSize = fs.fileSize(stats.size);
// let bufferArray = Buffer.alloc(1000);
const file = fs.createReadStream(path, {start: 0, end: fileSize});
file.pipe(video);

