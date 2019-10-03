// const NodeMediaServer = require('node-media-server');
// const onlinePath = 'rtmp://40.137.149.82:10004/live/AST-PAR-10032019-UEL';
// const config = {
//   rtmp: {
//     port: 1935,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: 8000,
//     mediaroot: './media',
//     allow_origin: '*'
//   },
//   trans: {
//     ffmpeg: '/usr/local/bin/ffmpeg',
//     tasks: [
//       {
//         app: 'live',
//         mp4: true,
//         mp4Flags: '[movflags=faststart]',
//       }
//     ]
//   }
// };

// var nms = new NodeMediaServer(config)
// nms.run();
