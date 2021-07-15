var canvas = new fabric.Canvas('canvas');

ball_y = 0;
ball_x = 0;

hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

ball_obj = "";
hole_obj = "";

function loadImage(){
    fabric.Image.fromURL("golf-h.png", function (Img){
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_obj);
    });
}

function newImage(){
    fabric.Image.fromURL("ball.png", function (Img){
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_obj);
    });
}

window.addEventListener('keydown', keydown);

function keydown(e){
    //loadImage(); //looks awesome with this line over here and newImage(); function inside this function before the ending of this function

    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((ball_x==hole_x)&&(ball_y==hole_y)){
        canvas.remove(ball_obj);
        document.getElementById("goaler").innerHTML = "YOU HAVE HIT THE GOAL!!!!!!!!!!";
        document.getElementById("canvas").style.borderColor = "Blue";
    }
    if(keyPressed == '38')
		{
			up();
            loadImage();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
           loadImage();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
            loadImage();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
            loadImage();
			console.log("right");
		}    
}

function up(){
    if(ball_y >=0){
        ball_y = ball_y - block_image_height;
        console.log("Blck Img Heght = "+block_image_height);
        console.log("U ke press x = "+ball_x+" y = "+ball_y);
        canvas.remove(ball_obj);
        newImage();
    }
}

function down(){
    if(ball_y <=450){
        ball_y = ball_y + block_image_height;
        console.log("Blck Img Heght = "+block_image_height);
        console.log("D ke press x = "+ball_x+" y = "+ball_y);
        canvas.remove(ball_obj);
        newImage();
    }
}
function left(){
    if(ball_x >=5){
        ball_x = ball_x - block_image_width;
        console.log("Blck Img Wdth = "+block_image_width);
        console.log("U ke press x = "+ball_x+" y = "+ball_y);
        canvas.remove(ball_obj);
        newImage();
    }
}

function right(){
    if(ball_y <=1050){
        ball_x = ball_x + block_image_width;
        console.log("Blck Img Wdth = "+block_image_width);
        console.log("U ke press x = "+ball_x+" y = "+ball_y);
        canvas.remove(ball_obj);
        newImage();
    }
}