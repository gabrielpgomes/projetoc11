var runner_running
var path
function preload(){
//imagens pré-carregadas
runner_running = loadAnimation("Runner-1.png","Runner-2.png");
path = loadImage("path.png")



}



function setup(){
  createCanvas(400,400);
  //crie sprite aqui
 LeftBoundary.invisible = false;
 LeftBoundary.visible = true;
 LeftBoundary.invisible = true;
 LeftBoundary.visible = false;
}

function draw() {
  background(0);

}
