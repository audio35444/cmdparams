var youtubedl = require('youtube-dl');
function youtubeShowInfo(){
  var url = 'https://www.youtube.com/watch?v=PFC8KlBFStU';
// Optional arguments passed to youtube-dl.
  var options = ['--username=user', '--password=hunter2'];
  youtubedl.getInfo(url, function(err, info) {
    if (err) console.log(err);;

    console.log('id:', info.id);
    console.log('title:', info.title);
    console.log('url:', info.url);
    console.log('thumbnail:', info.thumbnail);
    console.log('description:', info.description);
    console.log('filename:', info._filename);
    console.log('format id:', info.format_id);
    console.log('remaining bytes: ' + info.size);
    console.log(info);
  });
}

function youtubeDownload(){
  //['--format=18']
  var fs = require('fs');
var youtubedl = require('youtube-dl');
var video = youtubedl('https://www.youtube.com/watch?v=zjpSX6fCPDc')
console.log(video.info);
var video = youtubedl('https://www.youtube.com/watch?v=zjpSX6fCPDc',
  // Optional arguments passed to youtube-dl.
  ['--format=best'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname });

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started');
  console.log('filename: ' + info.filename);
  console.log('size: ' + info.size);
  console.log(info);
});

video.pipe(fs.createWriteStream('myvideo.mp4'));
}
module.exports.youtube = youtubeShowInfo;
module.exports.youtubeDownload = youtubeDownload;
