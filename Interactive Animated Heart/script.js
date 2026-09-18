const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const btn = document.getElementById("loveBtn");

let w, h;
let heartParticles = [];
let sparkles = [];
let burst = [];

function resize(){
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;

  createHeart();
}

window.addEventListener("resize",resize);

function heartPoint(t){

  let x = 16 * Math.pow(Math.sin(t),3);

  let y =
    13*Math.cos(t)
    -5*Math.cos(2*t)
    -2*Math.cos(3*t)
    -Math.cos(4*t);

  return {x,y};
}

function createHeart(){

  heartParticles=[];
  sparkles=[];

  let scale=Math.min(w,h)/38;

  for(let i=0;i<2200;i++){

    let t=Math.random()*Math.PI*2;

    let p=heartPoint(t);

    let fill=Math.sqrt(Math.random());

    let x=p.x*fill;
    let y=p.y*fill;

    heartParticles.push({
      x:w/2+x*scale,
      y:h/2-70-y*scale,

      ox:w/2+x*scale,
      oy:h/2-70-y*scale,

      size:Math.random()*2+0.8,
      hue:Math.random()*360,
      speed:Math.random()*0.8+0.2,
      angle:Math.random()*Math.PI*2
    });
  }

  for(let i=0;i<180;i++){

    sparkles.push({
      x:Math.random()*w,
      y:Math.random()*h,
      size:Math.random()*1.8,
      alpha:Math.random()
    });
  }
}

function drawSparkles(){

  sparkles.forEach(s=>{

    ctx.beginPath();

    ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;

    ctx.arc(s.x,s.y,s.size,0,Math.PI*2);

    ctx.fill();
  });
}

function drawHeart(time){

  heartParticles.forEach(p=>{

    let wave=Math.sin(time*0.002+p.angle)*1.5;

    let x=p.ox+wave;
    let y=p.oy+Math.cos(time*0.002+p.angle)*1.5;

    let hue=(p.hue+time*0.03)%360;

    let color=`hsl(${hue},100%,65%)`;

    ctx.beginPath();

    ctx.shadowBlur=18;
    ctx.shadowColor=color;

    ctx.fillStyle=color;

    ctx.arc(x,y,p.size,0,Math.PI*2);

    ctx.fill();
  });
}

function drawGlow(){

  let g=ctx.createRadialGradient(
    w/2,h/2-70,20,
    w/2,h/2-70,260
  );

  g.addColorStop(0,"rgba(255,40,180,.22)");
  g.addColorStop(.5,"rgba(150,70,255,.08)");
  g.addColorStop(1,"transparent");

  ctx.fillStyle=g;

  ctx.fillRect(0,0,w,h);
}

function drawOrbit(time){

  ctx.save();

  ctx.translate(w/2,h/2-70);

  ctx.rotate(time*0.0004);

  ctx.strokeStyle="rgba(255,120,220,.45)";
  ctx.shadowBlur=15;
  ctx.shadowColor="#ff4db8";

  ctx.lineWidth=1.2;

  ctx.beginPath();
  ctx.ellipse(0,0,220,70,0,0,Math.PI*2);
  ctx.stroke();

  ctx.rotate(-time*0.0008);

  ctx.beginPath();
  ctx.ellipse(0,0,170,55,0,0,Math.PI*2);
  ctx.stroke();

  ctx.restore();
}

function drawBurst(){

  burst.forEach((p,index)=>{

    p.x+=p.vx;
    p.y+=p.vy;

    p.life--;

    ctx.beginPath();

    ctx.fillStyle=`hsla(${p.hue},100%,65%,${p.life/80})`;

    ctx.shadowBlur=15;
    ctx.shadowColor=`hsl(${p.hue},100%,65%)`;

    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);

    ctx.fill();

    if(p.life<=0) burst.splice(index,1);
  });
}

btn.addEventListener("click",()=>{

  for(let i=0;i<250;i++){

    burst.push({
      x:w/2,
      y:h/2-70,

      vx:(Math.random()-.5)*8,
      vy:(Math.random()-.5)*8,

      size:Math.random()*3+1,

      hue:Math.random()*360,

      life:80
    });
  }
});

function animate(time){

  ctx.clearRect(0,0,w,h);

  drawGlow();
  drawSparkles();
  drawOrbit(time);
  drawHeart(time);
  drawBurst();

  requestAnimationFrame(animate);
}

resize();
animate();
