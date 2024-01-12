var SpeedchRecognition=window.webkitSpeechRecognition;
var recognition=new SpeedchRecognition();

function start(){
    document.getElementById("voice_output").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){

    console.log(event);

    var Content=event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("voice_output").innerHTML=Content;
}