const fs = require('fs');
const Ffmpeg = require('ffmpeg');
const URL = require('url').URL;

console.log('In the converter file');

const onlinePath = 'rtmp://40.137.149.82:10001/live/FEY-POR-10032019-UEL';
const path = './videos/interstellar.mp4' ;
function createInterstellarCopy(){
    const video = fs.createWriteStream('./videos/videoCopy.mp4');

    const stats = fs.statSync(path);
    const fileSize = stats.size;
    const file = fs.createReadStream(path, {start: 0, end: fileSize});
    file.pipe(video);
    console.log(video)
}

function createLiveStreamCopy(){
    const urlToStream = new URL(onlinePath);
    console.log(urlToStream)
    try {
        var process = new Ffmpeg(onlinePath);
        process.then(function (video) {
            console.log('The video is ready to be processed', video);
        }, function (err) {
            console.log('Error: ' + err);
        });
    } catch (err) {
        console.log(err);
    }
}

// createInterstellarCopy();
createLiveStreamCopy();
