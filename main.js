canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_img_array = ["Nasa_img_1.jpg", "Nasa_img_2.jpg", "Nasa_img_3.jpg", "Nasa_img_4.jpg"];
random_number = Math.floor(Math.random()*4);

rover_width = 100;
rover_height = 99;

rover_x = 10;
rover_y = 10;

background_image = nasa_mars_img_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image; 
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    KeyPressed = e.keyCode;
    console.log(KeyPressed);

    if(KeyPressed == '38'){
        up();
        console.log("up");
    }

    if(KeyPressed == '40'){
        down();
        console.log("down");
    }

    if(KeyPressed == '37'){
        left();
        console.log("left");
    }

    if(KeyPressed == '39'){
        right();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log("When up arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        console.log("When down arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        console.log("When left arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        console.log("When right arrow is pressed, X = " + rover_x + "| Y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}