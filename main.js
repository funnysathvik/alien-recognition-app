function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YZuvXLeDw/model.json" , modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r_1 = Math.floor(Math.random() * 255)+1;
        r_2 = Math.floor(Math.random() * 255)+1;
        b_1 = Math.floor(Math.random() * 255)+1;
        b_2 = Math.floor(Math.random() * 255)+1;
        g_1 = Math.floor(Math.random() * 255)+1;
        g_2 = Math.floor(Math.random() * 255)+1;

        document.getElementById("name").innerHTML="I hear - " + results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy - "+(results[0].confidence * 100).toFixed(2)+"%";

        document.getElementById("name").style.color="rgb("+r_1+","+b_1+","+g_1+")";
        document.getElementById("accuracy").style.color="rgb("+r_2+","+b_2+","+g_2+")";

        img=document.getElementById("aliens_01");
        img_2=document.getElementById("aliens_02");
        img_3=document.getElementById("aliens_03");
        img_4=document.getElementById("aliens_04");

        if(results[0].label == "piano"){
            img.src="aliens-01.gif";
            img_2.src="alien-02.png";
             img_3.src="alien-03.png";
            img_4.src="alien-04.png";
        }
        else if(result[0].label == "drum"){
            img.src="aliens-01.png";
            img_2.src="alien-02.gif";
            img_3.src="alien-03.png";
            img_4.src="alien-04.png";
        }
        else if(result[0].label == "guitar"){
            img.src="aliens-01.png";
            img_2.src="alien-02.png";
            img_3.src="alien-03.gif";
            img_4.src="alien-04.png";
        }
        else{
            img.src="aliens-01.png";
            img_2.src="alien-02.png";
            img_3.src="alien-03.png";
            img_4.src="alien-04.gif";
        }
            }
    }
