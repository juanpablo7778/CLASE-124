narizx=0;
narizy=0;
diferencia=0;
muñecaderecha=0;
muñecaizquierda=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,150);

estimacion_pose=ml5.poseNet(video,cargar_modelo);
estimacion_pose.on('pose',reconocer_pose)
}

function cargar_modelo(){
    console.log('poseNet, el modelo de estimación de poses se inicializó')
}

function reconocer_pose(results){
    if(results.length>0)
    console.log(results);

    narizx=results[0].pose.nose.x;
    narizy=results[0].pose.nose.y;
    console.log("narizx = "+narizx+"narizy ="+narizy);
    muñecaderecha=results[0].pose.rightWrist.x;
    muñecaizquierda=results[0].pose.leftWrist.x;
    diferencia=floor(muñecaderecha-muñecaizquierda);
    console.log("muñecaizquierda = "+muñecaizquierda+"muñecaderecha ="+muñecaderecha+"diferencia ="+diferencia);
}


function draw(){
    background('gray');
    fill('red');
    stroke('black');
    square(narizx,narizy,diferencia);
}



