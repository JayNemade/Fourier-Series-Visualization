let time = 1;
let wave = [];
let path = [];
let num;
let slider;
let slider_time;
let color;
let color2;
let slider_radius;
var changer;
var changerTheme;
let height = 1070;

function setup() {
  var c1 = createCanvas(1000, 600);
  c1.parent("canvas");
  
  //Slider for the values of n
  slider = createSlider(1,100,7)
  slider.position(20,height+550);
  slider.style('width', '300px');
  
  //Slider for radius
  slider_radius = createSlider(10,100,70)
  slider_radius.position(20,height+500);
  slider_radius.style('width', '300px');
  //Slider for time
  slider_time = createSlider(0,10,4)
  slider_time.position(20,height+450);
  slider_time.style('width', '300px');

  //Changer for waves
  changer = createSelect();
  changer.position(800,height+550);
  changer.option('Sawtooth');
  changer.option('Square');
  changer.option('Triangle');
 
  //num = 10;
}

function draw() {
  //setting the background
  background("#ECECEC");
  document.body.style.background = "#ECECEC";
  translate(100, 200);
  
  doFourier();
}

//Function doFourier
function doFourier(){
    let x = 0;
    let y = 0;

    for (let i = 0; i < slider.value(); i++) {
      //Variable declaration
      let prevx = x;
      let prevy = y;
      let coef;
      let n;
      //Options for Types of waves
      if(changer.value() === 'Square'){
        n = i * 2 + 1;
        coef = (4/ ( n * PI));

        }else if(changer.value() === 'Triangle'){
         n = i * 2 + 1;
         coef = Math.pow(-1,((n-1)/2))*8/(n*n * PI*PI);
        }else{
          n = i * 1 + 1;
          coef = (2/ ( n * PI));
        }
      color2 = '#000000';
      let radius = slider_radius.value() * coef;
      x += radius * cos(n * time );
      y += radius * sin(n * time );



      stroke(color2);
      noFill();
      ellipse(prevx, prevy, radius * 2);

      fill(color2);
      stroke(color2);
      line(prevx, prevy, x, y);
      //ellipse(x, y, 8);
    }
      textSize(25);
      text("Value of n: "+slider.value().toString(),230, 350);
      text("Value of Radius: "+slider_radius.value().toString(), 230, 300);
      text("Value of Time Period: "+slider_time.value()*0.01.toString(), 230, 250);
      text('Wave type', 670, 300);

    wave.unshift(y);

    translate(200, 0);
    stroke(200);
    line(x - 200, y, 0, wave[0]);

    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
    color = '#0100FA';
    stroke(color);
    vertex(i, wave[i]);
    }
    endShape();

    time -= 0.01 * slider_time.value();

    if (wave.length > 1000) {
      wave.pop();
    }
}

function changeBgC(){
  if(changerTheme.value()="Dark"){
  }
}