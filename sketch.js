// Computer Science Project
// Joshua Corcoran
// Date: 9/19/2025

// Description

// My project is going to be a Five Nights at Freddy's-like game. It will be rebranded into "A Singular Night at Blocky's" since their bodies will be rectangles.


// User Interaction

// - They can click the nose of the Freddy Plush in the office to play a sound
// - They can click the phone to answer the phone guy and have a button to hang up
// - They can click the door or light button to use them
// - They can click the bottom arrow to check Cameras

// List of Features

// - Phone Call w/Dialogue
// - Working Doors and Lights
// - A Camera Map to cycle through Cameras
// - Animatronics that sneak towards the office
// - Working Time System
// - Foxy that will run to the office like he does in the original
// - Golden Freddy
// - Sound Effects for the Game
// - Possible Difficulty Setter and Night Duration Setter
// - Main Menu
// - Game Over and Victory Screen

// MP3's & GIFS
let FanBlades;
let plushieNoseSound;
let FNAFDoorClose;
let FNAFLightFlick;
let OfficeAmbience;
let MenuTheme;
let phoneGuyRingSound;
let phoneGuyPickupSound;

// Menu Variables
let staticLineX = 300;
let staticLineY = 200;
let gameBegan = false;
let fadeInEffectWaitTime = 0;
let fadeInEffectTransparency = 255;
let textFadeInEffectTransparency = 255;
let staticParticles = []

// Start of Game Variables
let phoneGuyRinging = false;
let phoneGuyPickedUpOn = false;
let phoneGuyHungUpOn = false;
let phoneGuyDialogueBoxX = 300;
let phoneGuyDialogueBoxY = 200;

// Left Door Variables
let leftDoorY = -50;
let leftDoorButtonAvailable = true;
let leftDoorClosed = false;

// Right Door Variables
let rightDoorY = -50;
let rightDoorClosed = false;

// Left Light Button Variables
let leftLightActivated = false;
let leftLightSoundPlayed = false;

// Right Light Button Variables
let rightLightActivated = false;
let rightLightSoundPlayed = false;

function preload() {
    FanBlades = loadImage("img/Fan Spinning.gif");
    plushieNoseSound = loadSound("mp3/FNAF_Nose.mp3");
    FNAFDoorClose = loadSound("mp3/FNAF Door Close.mp3");
    FNAFLightFlick = loadSound("mp3/LightSound.mp3");
    OfficeAmbience = loadSound("mp3/Office Ambience.mp3");
    MenuTheme = loadSound("mp3/MenuTheme.mp3");
    phoneGuyRingSound = loadSound("mp3/Phone Ringing.mp3");
    phoneGuyPickupSound = loadSound("mp3/Phone Pickup Sound.mp3")
}


function setup() {
    createCanvas(600, 400);
    background(240);
    frameRate(30);
    rectMode(CENTER);
    imageMode(CENTER);

}

function draw() {
    background(0);

    drawMainMenu();
    // gameStarted();


    mouseDebug();


}

// function drawMainMenu() {
//     background(50);
// }



function drawMainMenu() {

    if (gameBegan == false) {

        // Blocky (Freddy)

        // Body
        strokeWeight(1);
        fill(161, 97, 42);
        rect(450, 300, 200, 400);

        // Hat
        fill(30)
        rect(450, 90, 150, 20);
        rect(450, 50, 100, 60);

        // Eyes

        fill('white');
        ellipse(400, 185, 70, 70);
        ellipse(500, 185, 70, 70);
        fill(130, 160, 212);
        ellipse(500, 185, 40, 40);
        ellipse(400, 185, 40, 40);
        fill(3, 7, 3);
        ellipse(500, 185, 20, 20);
        ellipse(400, 185, 20, 20);
        fill('black');
        arc(400, 175, 65, 50, 3.14, 6.28); // Uses Pi and Pi * 2 to make even arc
        arc(500, 175, 65, 50, 3.14, 6.28); // Uses Pi and Pi * 2 to make even arc




        // Eyebrows
        strokeWeight(20);
        line(370, 130, 430, 130);
        line(470, 130, 530, 130);

        // Mouth
        strokeWeight(1);
        rect(450, 285, 100, 50);
        fill('white');
        rect(410, 302.5, 15, 15);
        rect(430, 302.5, 15, 15);
        rect(450, 302.5, 15, 15);
        rect(470, 302.5, 15, 15);
        rect(490, 302.5, 15, 15);

        // Nose
        fill(174, 108, 50);
        ellipse(450, 260, 150, 70);
        fill('black');
        ellipse(450, 235, 50, 25);
        strokeWeight(3);
        line(450, 235, 450, 294);
        strokeWeight(1);
        ellipse(490, 255, 10, 10);
        ellipse(510, 250, 10, 10);
        ellipse(505, 270, 10, 10);
        fill('black');
        ellipse(410, 255, 10, 10);
        ellipse(390, 250, 10, 10);
        ellipse(395, 270, 10, 10);

        // Tie

        ellipse(450, 350, 30, 30);
        rect(420, 350, 40, 25);
        rect(480, 350, 40, 25);

        // Ears
        fill(170);
        push();
        translate(340, 100); // Moves the origin to 340,110
        rotate(radians(30)); // Rotates the rectangle below by 30 degrees
        rect(0, 0, 40, 20); // Rectangle is at 0,0 because the origin is where the rectangles positon should be
        pop();
        fill(157, 93, 49);
        ellipse(310, 80, 60, 60);
        fill(101, 53, 14);
        ellipse(310, 80, 40, 40);

        fill(170);
        push(); // Seperates it from the rest of code so no rotation to it
        translate(560, 100); // Moves the origin to 340,110
        rotate(radians(150)); // Rotates the rectangle below by 30 degrees
        rect(0, 0, 40, 20); // Rectangle is at 0,0 because the origin is where the rectangles positon should be
        pop();  // Seperates it from the rest of code so no rotation to it
        fill(157, 93, 49);
        ellipse(590, 80, 60, 60);
        fill(101, 53, 14);
        ellipse(590, 80, 40, 40);

        // Arms
        fill(161, 97, 42);
        push();
        translate(330, 340);
        rotate(radians(10));
        ellipse(0, 0, 50, 200);
        pop();
        push();
        translate(570, 340);
        rotate(radians(-10));
        ellipse(0, 0, 50, 200);
        pop();

        // Static
        for (let index = 0; index < 150; index += 1) {
            fill('white');
            noStroke();
            ellipse(random(0, 600), random(0, 400), 2.5, 2.5);
        }

        // Static Line

        fill(255, 80);
        noStroke();
        rect(staticLineX, staticLineY, 650, 20);
        staticLineY -= 5;
        if (staticLineY < random(-250, -400)) {
            staticLineY = random(550, 650);
        }
        stroke(0);
        // Title Screen Text

        fill('white');
        textSize(40);
        text('One Singular', 50, 50);
        text('Night', 50, 100);
        text('at', 50, 150);
        text("Blocky's", 50, 200);
        text("New Game", 50, 300);
        textSize(15);
        text("(you don't have a choice)", 65, 320);
    }

    if (gameBegan == false && !MenuTheme.isPlaying()) {
        MenuTheme.play();
    }

    if (gameBegan && MenuTheme.isPlaying()) {
        MenuTheme.stop();
    }

    else if (gameBegan == true) {
        fadeInEffectWaitTime += 2.5
        if (fadeInEffectWaitTime >= 100) {
            gameStarted();
            fill(0, textFadeInEffectTransparency);
            noStroke();
            textSize(25);
            text("The Singular Night in Question", 130, 300);
            fill(0, fadeInEffectTransparency)
            rect(300, 200, 1000, 1000);
            fadeInEffectTransparency -= 2.5; // Use variables to change the alpha colors
            if (fadeInEffectTransparency <= 0) {
                textFadeInEffectTransparency -= 2.5;
            }
        }
    }
}


function drawOfficeDesk() {
    stroke(0);
    fill(176, 138, 97);
    rect(300, 250, 300, 30);
    rect(165, 320, 30, 110);
    rect(435, 320, 30, 110);
}

function drawOfficeDeskDecoration() {

    // Monitor 1
    stroke(0);
    fill(200)
    rect(300, 200, 80, 50);
    fill(0);
    rect(300, 200, 60, 40);
    fill(150)
    rect(300, 230, 80, 10);
    fill(210)
    ellipse(270, 230, 10, 10);
    ellipse(285, 230, 10, 10);
    fill('red');
    rect(325, 230, 5, 10);


    // Monitor 2
    stroke(0);
    fill(200);
    rect(190, 205, 50, 40);
    fill(150);
    rect(190, 230, 50, 10);
    fill(100);
    ellipse(205, 230, 10, 10);
    stroke(255);
    line(205, 225, 205, 230);
    fill('black');
    stroke(0);
    rect(190, 205, 40, 30);

    // Fan


    fill(100);
    stroke(0);
    ellipse(400, 235, 50, 20);
    rect(400, 200, 20, 50);
    noFill();
    ellipse(400, 175, 50, 50);
    image(FanBlades, 400, 175, 50, 50);

    // Freddy Plush

    // Hat & Body
    fill(161, 97, 42);
    rect(235, 210, 30, 50);
    fill('black');
    rect(235, 180, 25, 10);
    rect(235, 170, 15, 10);

    // Eyes
    fill(255);
    ellipse(228, 200, 13, 13);
    fill('cyan');
    ellipse(228, 200, 7, 7);
    fill('black');
    ellipse(228, 200, 3, 3);

    fill(255);
    ellipse(242, 200, 13, 13);
    fill('cyan');
    ellipse(242, 200, 7, 7);
    fill('black');
    ellipse(242, 200, 3, 3);

    // Eyebrows
    strokeWeight(5);
    line(225, 190, 230, 190);
    line(245, 190, 240, 190);
    strokeWeight(1);

    // Nose
    fill(212, 138, 61);
    ellipse(235, 212.5, 20, 10);
    fill('black');
    ellipse(235, 207, 10, 5);
    strokeWeight(2);
    point(230, 212.5);
    point(227.5, 213.5);
    point(227.5, 210.5);
    point(240, 212.5);
    point(242.5, 213.5);
    point(242.5, 210.5);


    // Phone
    fill(178, 20, 19);
    rect(365, 225, 40, 25);
    fill('white');
    ellipse(365, 223, 20, 20);
    fill(178, 20, 19);
    rect(365, 205, 60, 10);
    rect(390, 215, 10, 10);
    rect(340, 215, 10, 10);

}


function drawOfficeFrame() {
    noStroke();
    fill(200);
    rect(0, 400, 90, 800);
    rect(600, 400, 90, 600);
    rect(300, 400, 600, 40);
    rect(300, 0, 600, 240);
    rect(300, 200, 210, 500);
    rect(480, 200, 10, 370);
    rect(120, 200, 10, 370);
    rect(300, 325, 350, 150);
    rect(300, 125, 350, 10);
}

function drawLeftDoorButtons() {

    // Door Button
    fill(150);
    rect(25, 210, 30, 30);
    fill('red');
    ellipse(25, 210, 25, 25);
    noFill();
    ellipse(25.25, 210, 17, 17);
    ellipse(25.25, 210, 10, 10);
    fill(150)
    rect(25, 235, 30, 15);
    fill(255);
    textSize(11.5);
    text('Door', 12, 237.5)


    // Light Button
    fill(150);
    rect(25, 280, 30, 30);
    fill('white');
    ellipse(25, 280, 25, 25);
    noFill();
    ellipse(25.25, 280, 17, 17);
    ellipse(25.25, 280, 10, 10);
    fill(150)
    rect(25, 305, 30, 15);
    fill(255);
    text('Light', 12, 307.5)
}

function drawRightDoorButtons() {

    // Door Button
    fill(150);
    rect(580, 210, 30, 30);
    fill('red');
    ellipse(580, 210, 25, 25);
    noFill();
    ellipse(580.25, 210, 17, 17);
    ellipse(580.25, 210, 10, 10);
    fill(150)
    rect(580, 235, 30, 15);
    fill(255);
    text('Door', 567, 237.5)


    // Light Button
    fill(150);
    rect(580, 280, 30, 30);
    fill('white');
    ellipse(580, 280, 25, 25);
    noFill();
    ellipse(580.25, 280, 17, 17);
    ellipse(580.25, 280, 10, 10);
    fill(150)
    rect(580, 305, 30, 15);
    fill(255);
    text('Light', 567, 307.5)
}

function drawCameraButton() {
    fill(150, 170);
    rect(300, 380, 350, 30);
    strokeWeight(4);
    stroke('white');
    line(265, 390, 305, 370);
    line(345, 390, 305, 370);
}


function gameStarted() {
    drawLeftLight();
    drawRightLight();
    drawLeftDoor();
    drawRightDoor();
    drawOfficeFrame();
    strokeWeight(1);
    drawOfficeDeskDecoration();
    strokeWeight(1);
    drawOfficeDesk();
    drawLeftDoorButtons();
    drawRightDoorButtons();
    drawCameraButton();
    if (!OfficeAmbience.isPlaying()) {
        OfficeAmbience.loop();
    }
    phoneGuyLogic();
    drawPhoneGuyDialogueUI();
}

function mouseDebug() {
    textSize(12.5);
    if (mouseX < 300) {
        stroke('black');
        fill('white');
        text('X:', mouseX + 10, mouseY)
        text(mouseX, mouseX + 25, mouseY)
        text('Y:', mouseX + 10, mouseY + 20)
        text(mouseY, mouseX + 25, mouseY + 20)
    }
    if (mouseX > 300) {
        stroke('black');
        fill('white');
        text('X:', mouseX - 40, mouseY)
        text(mouseX, mouseX - 25, mouseY)
        text('Y:', mouseX - 40, mouseY + 20)
        text(mouseY, mouseX - 25, mouseY + 20)
    }
}

function mouseClicked() {

    userStartAudio(); // This code makes it so the Office Audio can play properly when you click the site

    if (mouseX >= 227 && mouseX <= 245 && mouseY >= 203 && mouseY <= 210) {
        plushieNoseSound.play();
    }

    // New Game Detection

    if (mouseX >= 45 && mouseX <= 250 && mouseY >= 265 && mouseY <= 300) {
        gameBegan = true;
    }

    // Left Door Detection

    if (mouseX >= 12 && mouseX <= 37 && mouseY >= 197 && mouseY <= 221 && leftDoorClosed == false && leftDoorButtonAvailable == true) {
        FNAFDoorClose.play();
        leftDoorClosed = true;
        // print(leftDoorClosed);
    }

    else if (mouseX >= 12 && mouseX <= 37 && mouseY >= 197 && mouseY <= 221 && leftDoorClosed == true && leftDoorButtonAvailable == false) {
        FNAFDoorClose.play();
        leftDoorClosed = false;
        // print(leftDoorClosed);
    }


    // Right Door Detection

    if (mouseX >= 567 && mouseX <= 592 && mouseY >= 197 && mouseY <= 221 && rightDoorClosed == false) {
        FNAFDoorClose.play();
        rightDoorClosed = true;
        // print(leftDoorClosed);
    }
    else if (mouseX >= 567 && mouseX <= 592 && mouseY >= 197 && mouseY <= 221 && rightDoorClosed == true) {
        FNAFDoorClose.play();
        rightDoorClosed = false;
        // print(leftDoorClosed);
    }


    // Left Light Button Detection

    if (mouseX >= 12 && mouseX <= 38 && mouseY >= 267 && mouseY <= 292 && leftLightActivated == false) {
        leftLightActivated = true;
        // print(leftLightActivated);
    }

    else if (mouseX >= 12 && mouseX <= 38 && mouseY >= 267 && mouseY <= 292 && leftLightActivated == true) {
        leftLightActivated = false;
        // print(leftLightActivated);
    }

    // Right Light Button Detection

    if (mouseX >= 568 && mouseX <= 592 && mouseY >= 267 && mouseY <= 292 && rightLightActivated == false) {
        rightLightActivated = true;
        // print(rightLightActivated);
    }

    else if (mouseX >= 568 && mouseX <= 592 && mouseY >= 267 && mouseY <= 292 && rightLightActivated == true) {
        rightLightActivated = false;
        // print(rightLightActivated);
    }

    // Phone Guy Detection
    if (mouseX >= 335 && mouseX <= 395 && mouseY >= 198 && mouseY <= 235 && phoneGuyPickedUpOn == false && textFadeInEffectTransparency <= 0) {
        print("Phone picked up")
        phoneGuyPickedUpOn = true;
        phoneGuyRinging = false;
        if (phoneGuyRingSound.isPlaying()) {
            phoneGuyRingSound.stop();
            phoneGuyPickupSound.play();
        }
    }

    if (mouseX >= 426 && mouseX <= 498 && mouseY >= 312 && mouseY <= 348 && phoneGuyPickedUpOn == true) {
        // print("Hung Up");
        phoneGuyPickupSound.play();
        phoneGuyHungUpOn = true;
    }


}

function drawLeftDoor() {

    if (leftDoorClosed == true && leftDoorY <= 260) {
        leftDoorY += 30;
        leftDoorButtonAvailable = false;
    }

    if (leftDoorClosed == false && leftDoorY >= -50) {
        leftDoorY -= 30;
        leftDoorButtonAvailable = true;
    }

    strokeWeight(1);
    stroke(0);
    fill(150);
    rect(80, leftDoorY, 75, 330);
}

function drawRightDoor() {

    if (rightDoorClosed == true && rightDoorY <= 260) {
        rightDoorY += 30;
    }

    if (rightDoorClosed == false && rightDoorY >= -50) {
        rightDoorY -= 30;
    }

    strokeWeight(1);
    stroke(0);
    fill(150);
    rect(518, rightDoorY, 75, 330);
}

function drawLeftLight() {           // If the sound is NOT playing, turn it on
    if (leftLightActivated == true && !FNAFLightFlick.isPlaying()) {
        FNAFLightFlick.play();
    }
    // If the sound IS playing, turn it off
    if (leftLightActivated == false && FNAFLightFlick.isPlaying() && rightLightActivated == false) {
        FNAFLightFlick.stop();
    }
    if (leftLightActivated == true) {
        noStroke();
        fill(21, 27, 37);
        rect(80.5, 240, 72, 310);
        rect(160, 240, 80, 310);
    }
}


function drawRightLight() {           // If the sound is NOT playing, turn it on
    if (rightLightActivated == true && !FNAFLightFlick.isPlaying()) {
        FNAFLightFlick.play();
    }
    // If the sound IS playing, turn it off
    if (rightLightActivated == false && FNAFLightFlick.isPlaying() && leftLightActivated == false) {
        FNAFLightFlick.stop();
    }
    if (rightLightActivated == true) {
        noStroke();
        fill(21, 27, 37);
        rect(518, 240, 72, 310);
        rect(450, 240, 80, 310);
    }
}

function phoneGuyLogic() {
    if (gameBegan == true && phoneGuyHungUpOn == false && phoneGuyPickedUpOn == false && textFadeInEffectTransparency <= 0) {
        phoneGuyRinging = true
    }

    if (phoneGuyRinging == true) {
        noStroke();
        fill(0, 255, 0, 100);
        rect(365, 215, 65, 40);
        print("Ring ring, pick up the phone");

        // If the ring sound is not playing, play it
        if (phoneGuyRinging == true && !phoneGuyRingSound.isPlaying()) {
            phoneGuyRingSound.play();
        }
    }
}

function drawPhoneGuyDialogueUI() {
    if (phoneGuyPickedUpOn == true && phoneGuyHungUpOn == false) {
        fill(190);
        stroke(0);
        strokeWeight(1);
        rect(300, 300, 400, 100);
        strokeWeight(2.5);
        line(200, 250, 200, 350);
        line(200, 325, 100, 325);
        fill(255);
        textSize(15);
        text("Phone Guy", 112.5, 342.5);
        fill('black');
        ellipse(150, 287.5, 55, 55);
        fill('white');
        text("Hey so uh, welcome to your One Singular", 210, 270);
        text("Night!", 210, 290);
        fill(190);
        strokeWeight(1);
        rect(463, 331, 70, 35);
        fill('white');
        text("Hang Up", 435, 335);
    }
}