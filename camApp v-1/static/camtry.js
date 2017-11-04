window.onload=function(){
    var mediafileobj=new mediafile();
        var gumVideo = document.querySelector('video#gum');
        var recordButton = document.querySelector('button#record');
        var submitButton = document.querySelector('.name-submit-btn');
        
        $(".name-submit-btn").on("click",function(){
                        mediafileobj.submit();
                        })
        $("#record").on("click",function(){
            mediafileobj.toggleRecording();
        })
        
    /* window.isSecureContext could be used for Chrome
        var isSecureOrigin = location.protocol === 'https:' ||
        location.hostname === 'localhost';
        if (!isSecureOrigin) {
          alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
            '\n\nChanging protocol to HTTPS');
          location.protocol = 'HTTPS';
        }*/

        

       
        
};