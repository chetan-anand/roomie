/*// note: make sure hostname available to all connecting clients
  // (ie. probably not `localhost`)
  //rtc.connect('ws://yourserveraddress:8001');

rtc.createStream({"video": true, "audio": true}, function(stream){
    // get local stream for manipulation
    rtc.attachStream(stream, 'local');
});
  rtc.createStream({
      "video": {"mandatory": {}, "optional": []},
      "audio": true
    }, function(stream) {
      document.getElementById('local').src = URL.createObjectURL(stream);
      document.getElementById('local').play();
      //videos.push(document.getElementById('you'));
      //rtc.attachStream(stream, 'you');
      //subdivideVideos();
    });
  // more rtc callbacks are available*/