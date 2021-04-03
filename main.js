nosex=0;
nosey=0;
function preload(){
img= loadImage('https://i.postimg.cc/sxbvP7Cj/Clown-Nose-Download-PNG-Image.png');
}

function setup(){
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0 ,0, 350, 350);
    fill(255, 0, 0);
    stroke(255, 0 , 0);
    
    image(img , nosex - 120, nosey - 89, 30 , 30)
    
    }

function gotPoses(results)
{
    if(results.length > 0){
    
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
nosex= results[0].pose.nose.x;
nosey= results[0].pose.nose.y;
    }
}

function modeloaded(){
    console.log("poseNet is initialized");
}



function take_snapshot(){
    save("photo.png");
}

