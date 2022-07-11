rightWristY = 0;
rightWristX = 0;

function setup()
{
canvas = createCanvas(550,450);
canvas.center();

video = createCapture(VIDEO);
video.size(550, 450);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function draw()
{
  background(0); 
  image(video,0,0,550,450);

  }