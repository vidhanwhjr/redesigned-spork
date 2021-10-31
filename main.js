noseX = 0;
noseY = 0;
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();

    pose = ml5.poseNet(img, modelLoaded);
    pose.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is loaded');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    image(img, 0, 0, 300, 300);
}

function download(){
    save('myjokerpicture.png')
}