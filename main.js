img="";
nose_x=0;
nose_y=0;
mario_x=325;
mario_y=325;
function preload() {
	world_start = loadSound("world_start.wav");
	
mario_gameOver=loadSound("gameover.wav");
mario_jump=loadSound("jump.wav");
mario_coin=loadSound("coin.wav");
mario_kick=loadSound("kick.wav");
mario_die=loadSound("mariodie.wav");
setSprites();
	MarioAnimation();

}

function setup() {
	canvas = createCanvas(1240,336);
canvas.parent('canvas');
instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
video.parent('game_console');
poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on('pose',gotPoses);
}

function modalLoaded(){
	console.log("Pose net is initalized");
}

function gotPoses(results){
if (results.length>0){
	console.log(results);
	nose_x=results[0].pose.nose.x;
	nose_y=results[0].pose.nose.y;
console.log("Nose x is"+nose_x+". Nose y is"+nose_y);
}
}

function draw() {
	game();
}







