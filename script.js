const canvas = document.getElementById('c');
const context = canvas.getContext('2d');

const CONFIG = {
	angle: 0
};

class Axis {
	static canvasWidth=0;
	static canvasHeight=0;

	static draw(context) {
		context.beginPath();
		context.moveTo(this.canvasWidth/2,0);
		context.lineTo(this.canvasWidth/2,this.canvasHeight);
		context.strokeStyle='#000';
		context.stroke();

		context.beginPath();
		context.moveTo(0,this.canvasHeight/2);
		context.lineTo(this.canvasWidth,this.canvasHeight/2);
		context.strokeStyle='#000';
		context.stroke();
	}
}

class MainCircle {
	static rad=100;
	static x=0;
	static y=0;

	static draw(context) {
		context.beginPath();
		context.arc(this.x,this.y,this.rad,0,2*Math.PI);
		context.strokeStyle='green';
		context.stroke();
	}	
}

class Dot {
	static x=0;	
	static y=0;
	static rad=5;

	static draw(context) {
		context.beginPath();
		context.arc(this.x,this.y,this.rad,0,2*Math.PI);
		context.fillStyle='red';
		context.fill();
	}
}

class Hypot {
	static x=0;
	static y=0;
	static dx=0;
	static dy=0;

	static draw(context) {
		context.beginPath();
		context.moveTo(this.x,this.y);
		context.lineTo(this.dx, this.dy);
		context.strokeStyle='blue';
		context.stroke();
	}	
}

class Leg {
	static x=0;
	static y=0;
	static dx=0;
	static dy=0;
	static color='black';

	static draw(context) {
		context.beginPath();
		context.moveTo(this.x,this.y);
		context.lineTo(this.dx, this.dy);
		context.strokeStyle=this.color;
		context.stroke();
	}
}


(function draw() {
	window.requestAnimationFrame(draw);
	context.clearRect(0,0,canvas.width,canvas.height);

	MainCircle.x=canvas.width/2;
	MainCircle.y=canvas.height/2;
	MainCircle.draw(context);

	Axis.canvasWidth=canvas.width;
	Axis.canvasHeight=canvas.height;
	Axis.draw(context);

	const angle = CONFIG.angle*Math.PI/180;
	const sin = Math.sin(angle) * MainCircle.rad;
	const cos = Math.cos(angle) * MainCircle.rad;

	Hypot.x=canvas.width/2;
	Hypot.y=canvas.height/2;
	Hypot.dx=canvas.width/2 + cos;
	Hypot.dy=canvas.height/2 + sin;
	Hypot.draw(context);

	Leg.x=canvas.width/2+cos;
	Leg.y=canvas.height/2;
	Leg.dx=canvas.width/2 + cos;
	Leg.dy=canvas.height/2 + sin;
	Leg.color='orange';
	Leg.draw(context);

	Leg.x=canvas.width/2;
	Leg.y=canvas.height/2;
	Leg.dx=canvas.width/2+cos;
	Leg.dy=canvas.height/2;
	Leg.color='cyan';
	Leg.draw(context);

	Dot.x=canvas.width/2 + cos;
	Dot.y=canvas.height/2 + sin;
	Dot.draw(context);


	CONFIG.angle+=0.1;

	if (CONFIG.angle >= 360) {
		CONFIG.angle = 0;
	}
})();
