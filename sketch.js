let xBolinha  =  300 ;
let yBolinha  =  200 ;
let diametro = 15;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha = xBolinha + 1;
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    yBolinha += velocidadeYBolinha;
}

function draw() {
    background(0);
    
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    rect(5, 150, 10, 90);

}
//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
  
function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
  function draw() 
    background(0);}
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
}
 function movimentaMinhaRaquete() 
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) 
        yRaquete += 10;
    
      function draw() 
    background(0);
  }