var mediafile=function(){
     var gumVideo = document.querySelector('video#gum');
        var recordButton = document.querySelector('button#record');
        var submitButton = document.querySelector('button .name-submit-btn');
    var mediaSource = new MediaSource();
    mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
    var mediaRecorder;
    var recordedBlobs;
    var finalblob;

    var constraints = {
          audio: true,
          video: true
        };
    
     function handleSuccess(stream) {
          recordButton.disabled = false;
          console.log('getUserMedia() got stream: ', stream);
          window.stream = stream;
          if (window.URL) {
            gumVideo.src = window.URL.createObjectURL(stream);
          } else {
            gumVideo.src = stream;
          }
        }

        function handleError(error) {
          console.log('navigator.getUserMedia error: ', error);
        }

        navigator.mediaDevices.getUserMedia(constraints).
            then(handleSuccess).catch(handleError);

        function handleSourceOpen(event) {
          console.log('MediaSource opened');
          var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
          console.log('Source buffer: ', sourceBuffer);
        }

        

        function handleDataAvailable(event) {
          recordedBlobs=[];
            finalblob=[];
        
          if (event.data && event.data.size > 0) {
            recordedBlobs.push(event.data);
              finalblob.push(recordedBlobs);
          }
            
            console.log(finalblob);
            
        }

        function handleStop(event) {
          console.log('Recorder stopped: ', event);
        }

        this.toggleRecording=function(){
          if (recordButton.textContent === 'Start Recording') {
            startRecording();
          } else {
            stopRecording();
            recordButton.textContent = 'Start Recording';
            
          }
        }

        function startRecording() {
          
          var options = {mimeType: 'video/webm;codecs=vp9'};
          if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = {mimeType: 'video/webm;codecs=vp8'};
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
              console.log(options.mimeType + ' is not Supported');
              options = {mimeType: 'video/webm'};
              if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + ' is not Supported');
                options = {mimeType: ''};
              }
            }
          }
          try {
            mediaRecorder = new MediaRecorder(window.stream, options);
          } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            alert('Exception while creating MediaRecorder: '
              + e + '. mimeType: ' + options.mimeType);
            return;
          }
          console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
          recordButton.textContent = 'Stop Recording';
          mediaRecorder.onstop = handleStop;
          mediaRecorder.ondataavailable = handleDataAvailable;
          mediaRecorder.start(1); // collect 10ms of data
          console.log('MediaRecorder started', mediaRecorder);
        }

        function stopRecording() {
          mediaRecorder.stop();
          
          
            console.log($(".name").val());
            

        }
    this.submit=function(){
        name=$(".name").val();
        
        $.ajax({
                type: 'POST',
                url: '/senddata',
                data: finalblob,
                processData: false,
                contentType: false,
                
                })
        console.log("date sent");
        console.log(name);
        console.log(finalblob);
    }

}