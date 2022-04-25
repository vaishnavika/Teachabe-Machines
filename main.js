
camera=document.getElementById("camera");

Webcam.attach('#camera');
Webcam.set({
    width:350,
    hight:300,
    image_format:'png',
    png_qulity:90
});
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version:',ml5.version);

classifer=ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/2rtBGkKBN/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function identify(){
    img=document.getElementById('captured_imge');
    classifer.classify(img, gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }else{
  console.log(results);
  document.getElementById("result_object_name").innerHTML=results[0].label;
  document.getElementById("reslt_object_accurecy").innerHTML=results[0].confidence.toFixed(3)
    }
}