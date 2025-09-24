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


// Rather complex things I should cover in the project that I can't cover
// consistently (also reference notes fsor myself)

// Rotation

// I taught myself how to rotate rectangles effeciently, I did this by using the translate
// function to move the origin to where I want the rectangle to be, then make the actual
// rectangle's position 0,0 so it's at the new origin and it's centered so rotating it doesn't
// mean I have to fight rotating it on an axis, I also use push to start it and pop to end it
// If I don't do this, p5js won't know how much stuff to rotate and rotate the entire thing

// Sounds

// I yet again taught myself how to use sounds and isPlaying() functions, also including
// "!" which means not in for instance if(!ExampleSound.isPlaying()) would just check if
// it's not playing

// Fade in/out Effects

// For these it's pretty simple since I just use the alpha part of fill and attach it to a variable
// then I do something like AlphaVariable -= 5; to give it a smooth fade in or += 5; for a fade out

// Multiplication

// Like the fade in/out effects, isn't really that hard to explain since all you're doing is just
// using multiplication in p5js for stuff like sizes so if I set the size variable to 0.75, the
// size of things attached to the variable are set to x0.75 size so like 0.75% of 15 if that's
// how big one part is

// Label Argument

// This one is kind of the same as when you define something with x and y, giving it this format to follow
// saying that the label, x, and y position are the only customizable things while the function
// itself defines what the design should look like
// If I were to say function drawTwoOutlinedCircles(x,y) {
// stroke(0);
// strokeWeight(5);
// ellipse(x, y, 20, 20)
// ellipse(x + 20, y, 20, 20)
//}
// I'd be defining what drawOutLineCircle means while being able to tell it where to draw multiple objects

// Game Files

// GIFS
let FanBlades;

// JPG's
let camMapReference;
let bonnieAngry;

// MP3's
let plushieNoseSound;
let FNAFDoorClose;
let FNAFLightFlick;
let OfficeAmbience;
let MenuTheme;
let phoneGuyRingSound;
let phoneGuyPickupSound;
let phone1;
let phone2;
let phone3;
let phone4;
let phone5;
let phone6;
let phone7;
let monitorOpen;
let monitorStreaming;
let fnafCutScream;
let monitorSwitchSound;

// Funny Event Variables
let bonnieScare = false;
let bonnieScareSize = 1;
let bonnieScareTime = 0;

// Menu Variables
let staticLineX = 300;
let staticLineY = 175;
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
let phoneGuyDialogueStage = 0;
let phoneGuyTextInterval = 0;
let phoneGuySoundPlayed = 0;

// Time Variables
let time = 12;

// Power Variables
let powerConsumptionLevel = 1;
let power = 100;

// Camera Variables
let tabletX = 300;
let tabletY = 600; // Change to 600 when done
let tabletOpened = false;
let tabletAvailable = true;
let screenCasting = false;
let CameraMapSize = 0.55;
let cameraOpenSoundOnCooldown = false;
let cameraStreamSoundOnCooldown = false;
let currentCamera = 0;

// Animatronic Variables

// Freddy Variables
let freddyCamPosition = 1;
let freddyInOffice = false;
let readyFreddy = false; // I took the oppertunity to name it ready freddy instead of freddy ready
// because it's funny

// Foxy Variables
let foxyCamPosition = 1.2;
let foxyRunDistance = 0;
let foxyInOffice = false;
let foxyStage = 0;
let foxyReady = false;
let foxyRunning = false;

// Golden Freddy Variables
let goldenFreddySpawned = false;
let goldenFreddyStareDuration = 0;
let goldenFreddyDuration = 0;
let goldenFreddyDurationSetCooldown = false;
let goldenFreddyStareDurationSetCooldown = false;

// Bonnie Variables
let bonnieCamPosition = 1;
let bonnieInOffice = false;
let bonnieReady = false;
let bonniePath = 0;

// Chica Variables
let chicaCamPosition = 11
let chicaInOffice = false;
let chicaReady = false;
let chicaPath = 0;

// X Positions for Icons
let cam1AXPos = 420;
let cam1BXPos = 395;
let cam1CXPos = 380;
let cam2AXPos = 415;
let cam2BXPos = 415;
let cam3XPos = 370;
let cam4AXPos = 485;
let cam4BXPos = 485;
let cam5XPos = 340;
let cam6XPos = 552.5;
let cam7XPos = 568;
let youIconXPos = 450;


// Y Positions for Icons
let cam1AYPos = 102.5;
let cam1BYPos = 135;
let cam1CYPos = 190;
let cam2AYPos = 267;
let cam2BYPos = 290;
let cam3YPos = 252.5;
let cam4AYPos = 267;
let cam4BYPos = 290;
let cam5YPos = 150;
let cam6YPos = 250;
let cam7YPos = 157.5;
let youIconYPos = 300;


// Left Door Variables
let leftDoorY = 0;
let leftDoorButtonAvailable = true;
let leftDoorClosed = false;

// Right Door Variables
let rightDoorY = 0;
let rightDoorButtonAvailable = true;
let rightDoorClosed = false;

// Left Light Button Variables
let leftLightActivated = false;
let leftLightSoundPlayed = false;

// Right Light Button Variables
let rightLightActivated = false;
let rightLightSoundPlayed = false;

// Animatronic Design Variables

// Blocky
let freddyX = 100;
let freddyY = 50;
let freddySize = 0.5;

function preload() {
    FanBlades = loadImage("img/Fan Spinning.gif");
    camMapReference = loadImage("img/CameraMap.jpg");
    bonnieAngry = loadImage("img/Bonnie Angry.jpg")
    plushieNoseSound = loadSound("mp3/FNAF_Nose.mp3");
    FNAFDoorClose = loadSound("mp3/FNAF Door Close.mp3");
    FNAFLightFlick = loadSound("mp3/LightSound.mp3");
    OfficeAmbience = loadSound("mp3/Office Ambience.mp3");
    MenuTheme = loadSound("mp3/MenuTheme.mp3");
    phoneGuyRingSound = loadSound("mp3/Phone Ringing.mp3");
    phoneGuyPickupSound = loadSound("mp3/Phone Pickup Sound.mp3")
    phone1 = loadSound("mp3/Phone1.mp3");
    phone2 = loadSound("mp3/Phone2.mp3");
    phone3 = loadSound("mp3/Phone3.mp3");
    phone4 = loadSound("mp3/Phone4.mp3");
    phone5 = loadSound("mp3/Phone5.mp3");
    phone6 = loadSound("mp3/Phone6.mp3");
    phone7 = loadSound("mp3/Phone7.mp3");
    monitorOpen = loadSound("mp3/FNAF Monitor Sound.mp3")
    monitorStreaming = loadSound("mp3/FNAF Monitor Static.mp3")
    fnafCutScream = loadSound("mp3/FNAF Cut Scream.mp3")
    monitorSwitchSound = loadSound("mp3/Camera Switch Sound.mp3")
}


function setup() {
    createCanvas(600, 400);
    background(240);
    frameRate(30);
    rectMode(CENTER);
    imageMode(CENTER);

}

function draw() {
    background(250);

    // drawMainMenu();
    // gameStarted();

    mouseDebug();

    drawBlocky();
    textSize(15);
    fill('black');
    text("Currently in: Design Workspace", 150, 50);
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

    if (gameBegan == false) {
        // Funny Event Variables
        bonnieScare = false;
        bonnieScareSize = 1;
        bonnieScareTime = 0;

        // Menu Variables
        fadeInEffectWaitTime = 0;
        fadeInEffectTransparency = 255;
        textFadeInEffectTransparency = 255;
        staticParticles = [];

        // Start of Game Variables
        phoneGuyRinging = false;
        phoneGuyPickedUpOn = false;
        phoneGuyHungUpOn = false;
        phoneGuyDialogueBoxX = 300;
        phoneGuyDialogueBoxY = 200;
        phoneGuyDialogueStage = 0;
        phoneGuyTextInterval = 0;
        phoneGuySoundPlayed = 0;


        // Camera Variables
        tabletX = 300;
        tabletY = 600;
        tabletOpened = false;
        tabletAvailable = true;
        screenCasting = false;
        CameraMapSize = 0.55;
        cameraOpenSoundOnCooldown = false;
        cameraStreamSoundOnCooldown = false;
        currentCamera = 0;

        // Animatronic Variables

        // Freddy Variables
        freddyCamPosition = 1
        freddyInOffice = false;
        readyFreddy = false;

        // Foxy Variables
        foxyCamPosition = 1.2;
        foxyRunDistance = 0;
        foxyInOffice = false;
        foxyStage = 0;
        foxyReady = false;
        foxyRunning = false;

        // Left Door Variables
        leftDoorY = 0;
        leftDoorButtonAvailable = true;
        leftDoorClosed = false;

        // Right Door Variables
        rightDoorY = 0;
        rightDoorButtonAvailable = true;
        rightDoorClosed = false;

        // Left Light Button Variables
        leftLightActivated = false;
        leftLightSoundPlayed = false;

        // Right Light Button Variables
        rightLightActivated = false;
        rightLightSoundPlayed = false;

        plushieNoseSound.stop();
        FNAFDoorClose.stop();
        FNAFLightFlick.stop();
        OfficeAmbience.stop();
        phoneGuyRingSound.stop();
        phoneGuyPickupSound.stop();
        phone1.stop();
        phone2.stop();
        phone3.stop();
        phone4.stop();
        phone5.stop();
        phone6.stop();
        phone7.stop();
        monitorOpen.stop();
        monitorStreaming.stop();
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
    strokeWeight(1);
    line(235, 210, 235, 217.5);


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

    push();
    translate(520, 400);
    rotate(radians(25));
    rect(0, 0, 100, 40);
    pop();

    push();
    translate(505, 0)
    rotate(radians(-15));
    rect(0, 0, 110, 240);
    pop();

    push();
    translate(80, 400);
    rotate(radians(-25));
    rect(0, 0, 100, 40);
    pop();

    push();
    translate(90, 0)
    rotate(radians(15));
    rect(0, 0, 120, 240);
    pop();

    rect(300, 200, 210, 150);
    rect(300, 0, 200, 250);
    rect(550, -20, 150, 250);
    rect(480, 200, 10, 500);
    rect(120, 200, 10, 500);
    rect(300, 325, 210, 150);

    push();
    translate(165, 135);
    rotate(radians(15));
    rect(0, -90, 100, 200);
    pop();

    push();
    translate(165, 280);
    rotate(radians(-15));
    rect(0, 0, 80, 50);
    pop();

    push();
    translate(430, 135);
    rotate(radians(-15));
    rect(10, -90, 90, 200);
    pop();

    push();
    translate(435, 300);
    rotate(radians(15));
    rect(0, 0, 77.5, 100);
    pop();
    rect(160, 350, 80, 150);
    rect(440, 350, 80, 150);
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
    noStroke();
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
    if (!OfficeAmbience.isPlaying()) {
        OfficeAmbience.loop();
    }
    phoneGuyLogic();
    drawPhoneGuyDialogueUI();
    drawCameraMonitor();
    drawCameraScreen();
    drawCameraButton();
    drawBonnieScare();

    // Animatronic Logic
    freddyLogic();
    foxyLogic();
    goldenFreddyLogic();
    bonnieLogic();
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

    if (mouseY > 375) {
        stroke('black');
        fill('white');
        text('Y:', mouseX - 40, mouseY)
        text(mouseY, mouseX - 25, mouseY)
    }
}

function drawCameraMonitor() {
    strokeWeight(1);
    stroke(0);
    fill(120, 255);
    rect(300, tabletY, 590, 300);

    strokeWeight(2);
    line(5, tabletY - 95, 595, tabletY - 95);

    fill(255);
    textSize(30);
    text("Rectangular Monitor v1.2", 140, tabletY - 110);

    fill(110);
    rect(300, tabletY + 185, 590, 75);
    ellipse(550, tabletY + 185, 60, 60);

    stroke(255);
    strokeWeight(3);
    line(550, tabletY + 185, 550, tabletY + 156);

    strokeWeight(1);
    stroke('black');
    fill('red');
    rect(50, tabletY + 185, 40, 40, 10); // 4th Argument is used to curve the rectangle

    fill('white');
    rect(120, tabletY + 185, 40, 40, 10); // 4th Argument is used to curve the rectangle

    fill('black');
    rect(300, tabletY + 26, 580, 235);

    if (tabletOpened == true && tabletY > 175) {
        tabletY -= 25;
        tabletAvailable = false;
        screenCasting = false;
        if (!monitorOpen.isPlaying() && cameraOpenSoundOnCooldown == false) {
            monitorStreaming.stop();
            monitorOpen.play();
            cameraOpenSoundOnCooldown = true;
        }
    }

    if (tabletOpened == true && tabletY == 175) {
        tabletAvailable = true;
        screenCasting = true;
        if (!monitorStreaming.isPlaying() && cameraStreamSoundOnCooldown == false) {
            monitorStreaming.play();
            cameraStreamSoundOnCooldown = true;
            cameraOpenSoundOnCooldown = false;
        }
    }

    if (tabletOpened == false && tabletY < 600) {
        tabletY += 25;
        tabletAvailable = false;
        screenCasting = false;
        cameraStreamSoundOnCooldown = false;
        if (monitorStreaming.isPlaying() || cameraOpenSoundOnCooldown == false) {
            monitorStreaming.stop();
            monitorOpen.play();
            cameraOpenSoundOnCooldown = true;
        }
    }

    if (tabletOpened == false && tabletY == 600) {
        tabletAvailable = true;
        screenCasting = false;
        cameraOpenSoundOnCooldown = false;
    }
}

function drawCameraScreen() {
    // Camera Map
    // image(camMapReference, 500, 200, 200, 200); // Reference image for design


    if (screenCasting == true) {
        // General Outline for Camera Map
        fill('white');
        stroke('white');
        strokeWeight(1.5);
        noFill();
        rect(450, 290, 27.5, 40);
        rect(415, 270, 25, 80);
        rect(485, 270, 25, 80);
        rect(467.5, 295, 8, 10);
        rect(431.5, 295, 8, 10);
        rect(397, 262.5, 10, 10);
        rect(379, 262.5, 25, 50);
        rect(415, 225, 10, 10);
        rect(485, 225, 10, 10);
        rect(450, 172.5, 160, 95);
        rect(360, 200, 20, 30);
        rect(365, 140, 10, 10);
        rect(350, 145, 18, 40);
        rect(450, 115, 70, 20);
        rect(535, 155, 10, 10);
        rect(549, 175, 17.5, 85);
        rect(563, 170, 10, 10);
        rect(576, 170, 15, 20);
        rect(563, 205, 10, 10);
        rect(576, 205, 15, 20);
        rect(515, 225, 10, 10);
        rect(530, 253, 50, 45);




        // YOU Icon
        fill('white');
        strokeWeight(0.2);
        textSize(15 * CameraMapSize);
        rect(youIconXPos, youIconYPos,
            10 * CameraMapSize, 10 * CameraMapSize);
        text("YOU",
            youIconXPos - 15 * CameraMapSize,
            youIconYPos - 10 * CameraMapSize);

        // Cam Icons
        // I know they seem terrifying to look at but they're understandable
        // once you really look at them it's just big because
        // I kept adding * CameraMapSize to the scale


        // CAM 1A
        if (currentCamera === 1) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam1AXPos, cam1AYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam1AXPos - 20 * CameraMapSize, cam1AYPos - 2.5 * CameraMapSize);
        text("1A", cam1AXPos - 20 * CameraMapSize, cam1AYPos + 12.5 * CameraMapSize);

        // CAM 1B
        if (currentCamera === 1.1) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam1BXPos, cam1BYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam1BXPos - 20 * CameraMapSize, cam1BYPos - 2.5 * CameraMapSize);
        text("1B", cam1BXPos - 20 * CameraMapSize, cam1BYPos + 12.5 * CameraMapSize);

        // CAM 1C
        if (currentCamera === 1.2) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam1CXPos, cam1CYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam1CXPos - 20 * CameraMapSize, cam1CYPos - 2.5 * CameraMapSize);
        text("1C", cam1CXPos - 20 * CameraMapSize, cam1CYPos + 12.5 * CameraMapSize);

        // CAM 2A
        if (currentCamera === 2) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam2AXPos, cam2AYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam2AXPos - 20 * CameraMapSize, cam2AYPos - 2.5 * CameraMapSize);
        text("2A", cam2AXPos - 20 * CameraMapSize, cam2AYPos + 12.5 * CameraMapSize);

        // CAM 2B
        if (currentCamera === 2.1) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam2BXPos, cam2BYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam2BXPos - 20 * CameraMapSize, cam2BYPos - 2.5 * CameraMapSize);
        text("2B", cam2BXPos - 20 * CameraMapSize, cam2BYPos + 12.5 * CameraMapSize);

        // CAM 3
        if (currentCamera === 3) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam3XPos, cam3YPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam3XPos - 20 * CameraMapSize, cam3YPos - 2.5 * CameraMapSize);
        text("3", cam3XPos - 20 * CameraMapSize, cam3YPos + 12.5 * CameraMapSize);

        // CAM 4A
        if (currentCamera === 4) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam4AXPos, cam4AYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam4AXPos - 20 * CameraMapSize, cam4AYPos - 2.5 * CameraMapSize);
        text("4A", cam4AXPos - 20 * CameraMapSize, cam4AYPos + 12.5 * CameraMapSize);

        // CAM 4B
        if (currentCamera === 4.1) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam4BXPos, cam4BYPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam4BXPos - 20 * CameraMapSize, cam4BYPos - 2.5 * CameraMapSize);
        text("4B", cam4BXPos - 20 * CameraMapSize, cam4BYPos + 12.5 * CameraMapSize);

        // CAM 5
        if (currentCamera === 5) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam5XPos, cam5YPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam5XPos - 20 * CameraMapSize, cam5YPos - 2.5 * CameraMapSize);
        text("5", cam5XPos - 20 * CameraMapSize, cam5YPos + 12.5 * CameraMapSize);

        // CAM 6
        if (currentCamera === 6) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam6XPos, cam6YPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam6XPos - 20 * CameraMapSize, cam6YPos - 2.5 * CameraMapSize);
        text("6", cam6XPos - 20 * CameraMapSize, cam6YPos + 12.5 * CameraMapSize);

        // CAM 7
        if (currentCamera === 7) {
            fill(147, 180, 5);
        } else {
            fill(100);
        }
        stroke('white'); strokeWeight(2);
        rect(cam7XPos, cam7YPos, 45 * CameraMapSize, 35 * CameraMapSize);
        fill('white'); strokeWeight(0); textSize(15 * CameraMapSize);
        text("CAM", cam7XPos - 20 * CameraMapSize, cam7YPos - 2.5 * CameraMapSize);
        text("7", cam7XPos - 20 * CameraMapSize, cam7YPos + 12.5 * CameraMapSize);


    }

    // The ACTUAL Screens

    if (screenCasting == true && currentCamera == 0) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("[No Video Feed]", 60, 200);
        textSize(15);
        text("Please, select a Camera!", 80, 220);
    }

    if (screenCasting == true && currentCamera == 1) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("1A", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }


    if (screenCasting == true && currentCamera == 1.1) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("1B", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }

    if (screenCasting == true && currentCamera == 1.2) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("1C", 155, 210);
        textSize(15);

        if (foxyCamPosition == currentCamera) {
            text("Foxy is here", 125, 250)
        }

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }

    if (screenCasting == true && currentCamera == 5) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("5", 155, 210);
        textSize(15);
    }

    if (screenCasting == true && currentCamera == 3) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("3", 155, 210);
        textSize(15);

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }


    if (screenCasting == true && currentCamera == 2) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("2A", 155, 210);
        textSize(15);

        if (foxyCamPosition == currentCamera) {
            text("Foxy is here", 125, 250)
        }

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }

    if (screenCasting == true && currentCamera == 2.1) {

        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("2B", 155, 210);
        textSize(15);

        if (freddyCamPosition == 2.1) {
            text("Freddy is Here", 125, 230);
        }

        if (bonnieCamPosition == currentCamera) {
            text("Bonnie is Here", 125, 270);
        }
    }

    if (screenCasting == true && currentCamera == 4) {

        // Actual Monitor Screen
        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("4", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }
    }

    if (screenCasting == true && currentCamera == 4.1) {

        // Actual Monitor Screen
        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("4B", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }
    }

    if (screenCasting == true && currentCamera == 6) {

        // Actual Monitor Screen
        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("6", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }
    }


    if (screenCasting == true && currentCamera == 7) {

        // Actual Monitor Screen
        fill(10);
        rect(170, 200, 300, 200);
        fill('white');
        textSize(30);
        text("7", 155, 210);
        textSize(15);

        if (freddyCamPosition == currentCamera) {
            text("Freddy is Here", 125, 230);
        }
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

    if (mouseX >= 12 && mouseX <= 37 && mouseY >= 197 && mouseY <= 221 && leftDoorClosed == false && leftDoorButtonAvailable == true && phoneGuyPickedUpOn == true) {
        FNAFDoorClose.play();
        leftDoorClosed = true;
        // print(leftDoorClosed);
    }

    else if (mouseX >= 12 && mouseX <= 37 && mouseY >= 197 && mouseY <= 221 && leftDoorClosed == true && leftDoorButtonAvailable == true && phoneGuyPickedUpOn == true) {
        FNAFDoorClose.play();
        leftDoorClosed = false;
        // print(rightDoorClosed);
    }


    // Right Door Detection

    if (mouseX >= 567 && mouseX <= 592 && mouseY >= 197 && mouseY <= 221 && rightDoorClosed == false && phoneGuyPickedUpOn == true && rightDoorButtonAvailable == true) {
        FNAFDoorClose.play();
        rightDoorClosed = true;
        // print(rightDoorClosed);
    }
    else if (mouseX >= 567 && mouseX <= 592 && mouseY >= 197 && mouseY <= 221 && rightDoorClosed == true && phoneGuyPickedUpOn == true && rightDoorButtonAvailable == true) {
        FNAFDoorClose.play();
        rightDoorClosed = false;
        // print(rightDoorClosed);
    }


    // Left Light Button Detection

    if (mouseX >= 12 && mouseX <= 38 && mouseY >= 267 && mouseY <= 292 && leftLightActivated == false && phoneGuyPickedUpOn == true) {
        leftLightActivated = true;
        // print(leftLightActivated);
    }

    else if (mouseX >= 12 && mouseX <= 38 && mouseY >= 267 && mouseY <= 292 && leftLightActivated == true && phoneGuyPickedUpOn == true) {
        leftLightActivated = false;
        // print(leftLightActivated);
    }

    // Right Light Button Detection

    if (mouseX >= 568 && mouseX <= 592 && mouseY >= 267 && mouseY <= 292 && rightLightActivated == false && phoneGuyPickedUpOn == true) {
        rightLightActivated = true;
        // print(rightLightActivated);
    }

    else if (mouseX >= 568 && mouseX <= 592 && mouseY >= 267 && mouseY <= 292 && rightLightActivated == true && phoneGuyPickedUpOn == true) {
        rightLightActivated = false;
        // print(rightLightActivated);
    }

    // Phone Guy Detection
    if (mouseX >= 335 && mouseX <= 395 && mouseY >= 198 && mouseY <= 235 && phoneGuyPickedUpOn == false && textFadeInEffectTransparency <= 0) {
        // print("Phone picked up")
        phoneGuyPickedUpOn = true;
        phoneGuyRinging = false;
        if (phoneGuyRingSound.isPlaying()) {
            phoneGuyRingSound.stop();
            phoneGuyPickupSound.play();
        }
    }

    if (mouseX >= 426 && mouseX <= 498 && mouseY >= 312 && mouseY <= 348 && phoneGuyPickedUpOn == true && phoneGuyDialogueStage < 8 && phoneGuyHungUpOn == false) {
        // print("Hung Up");
        phoneGuyPickupSound.play();
        phoneGuyHungUpOn = true;
        phone1.stop();
        phone2.stop();
        phone3.stop();
        phone4.stop();
        phone5.stop();
        phone6.stop();
        phone7.stop();
    }

    // Camera Button Detection

    if (mouseX >= 120 && mouseX <= 475 && mouseY >= 360 && mouseY <= 395 && tabletOpened == false && tabletAvailable == true && phoneGuyPickedUpOn == true) {
        tabletOpened = true;
    }

    else if (mouseX >= 120 && mouseX <= 475 && mouseY >= 360 && mouseY <= 395 && tabletOpened == true && tabletAvailable == true && phoneGuyPickedUpOn == true) {
        tabletOpened = false;
    }

    // Camera Map Button Detection

    if (mouseX >= 402 && mouseX <= 429 && mouseY >= 280 && mouseY <= 300 && screenCasting == true) {
        currentCamera = 2.1;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 402 && mouseX <= 429 && mouseY >= 256 && mouseY <= 277 && screenCasting == true) {
        currentCamera = 2;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 472 && mouseX <= 498 && mouseY >= 256 && mouseY <= 278 && screenCasting == true) {
        currentCamera = 4;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 472 && mouseX <= 498 && mouseY >= 280 && mouseY <= 300 && screenCasting == true) {
        currentCamera = 4.1;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 357 && mouseX <= 383 && mouseY >= 242 && mouseY <= 263 && screenCasting == true) {
        currentCamera = 3;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 367 && mouseX <= 394 && mouseY >= 180 && mouseY <= 199 && screenCasting == true) {
        currentCamera = 1.2;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 327 && mouseX <= 354 && mouseY >= 139 && mouseY <= 160 && screenCasting == true) {
        currentCamera = 5;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 382 && mouseX <= 408 && mouseY >= 125 && mouseY <= 145 && screenCasting == true) {
        currentCamera = 1.1;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 407 && mouseX <= 433 && mouseY >= 92 && mouseY <= 112 && screenCasting == true) {
        currentCamera = 1;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 554 && mouseX <= 581 && mouseY >= 147 && mouseY <= 167 && screenCasting == true) {
        currentCamera = 7;
        monitorSwitchSound.play();
    }

    else if (mouseX >= 537 && mouseX <= 565 && mouseY >= 239 && mouseY <= 259 && screenCasting == true) {
        currentCamera = 6;
        monitorSwitchSound.play();
    }





}

function drawLeftDoor() {

    if (leftDoorClosed == true && leftDoorY < 300) {
        leftDoorY += 40;
        leftDoorButtonAvailable = false;
    }

    if (leftDoorClosed == true && leftDoorY >= 300) {
        leftDoorButtonAvailable = true;
    }

    if (leftDoorClosed == false && leftDoorY > 0) {
        leftDoorY -= 40;
        leftDoorButtonAvailable = false;
    }

    if (leftDoorClosed == false && leftDoorY == 0) {
        leftDoorButtonAvailable = true;
    }

    strokeWeight(1);
    stroke(0);
    fill(150);
    push();
    rotate(radians(-2.5));
    noStroke();
    rect(60, leftDoorY - 100, 100, 360);
    pop();
}

function drawRightDoor() {

    if (rightDoorClosed == true && rightDoorY < 300) {
        rightDoorY += 40;
        rightDoorButtonAvailable = false;
    }

    if (rightDoorClosed == true && rightDoorY >= 300) {
        rightDoorButtonAvailable = true;
    }

    if (rightDoorClosed == false && rightDoorY > 0) {
        rightDoorY -= 40;
        rightDoorButtonAvailable = false;
    }

    if (rightDoorClosed == false && rightDoorY == 0) {
        rightDoorButtonAvailable = true;
    }

    strokeWeight(1);
    stroke(0);
    fill(150);
    push();
    rotate(radians(2.5));
    noStroke();
    rect(540, rightDoorY - 100, 100, 360);
    pop();
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
        // print("Ring ring, pick up the phone");

        // If the ring sound is not playing, play it
        if (phoneGuyRinging == true && !phoneGuyRingSound.isPlaying()) {
            phoneGuyRingSound.play();
        }
    }
}

function drawPhoneGuyDialogueUI() {
    if (phoneGuyPickedUpOn == true && phoneGuyHungUpOn == false) {
        if (phoneGuyDialogueStage == 0) {
            phoneGuyDialogueStage = 1;
        }
        phoneGuyTextInterval += 1;
        // print(phoneGuyDialogueStage);

        // Stage 1
        if (phoneGuyDialogueStage == 1) {
            if (!phone1.isPlaying() && phoneGuyDialogueStage == 1 && phoneGuySoundPlayed == 0) {
                phone1.play();
                phoneGuySoundPlayed = 1;
                print(phoneGuySoundPlayed);
            }
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
            if (phoneGuyTextInterval >= 170 && phoneGuyDialogueStage == 1) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 2;
                if (phoneGuyDialogueStage == 2) {
                    phone1.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 2
        if (phoneGuyDialogueStage == 2) {
            if (!phone2.isPlaying() && phoneGuyDialogueStage == 2 && phoneGuySoundPlayed == 0) {
                phone2.play();
                phoneGuySoundPlayed = 1;
            }
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
            text("Allow me to teach you how to play.", 210, 270);
            text("", 210, 290);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 70 && phoneGuyDialogueStage == 2) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 3;
                if (phoneGuyDialogueStage == 3) {
                    phone2.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 3
        if (phoneGuyDialogueStage == 3) {
            if (!phone3.isPlaying() && phoneGuyDialogueStage == 3 && phoneGuySoundPlayed == 0) {
                phone3.play();
                phoneGuySoundPlayed = 1;
            }
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
            text("So if you didn't notice already, the", 210, 270);
            text("button on the bottom is your cameras.", 210, 290);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 120 && phoneGuyDialogueStage == 3) {
                // print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 4;
                if (phoneGuyDialogueStage == 4) {
                    phone3.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 4
        if (phoneGuyDialogueStage == 4) {
            if (!phone4.isPlaying() && phoneGuyDialogueStage == 4 && phoneGuySoundPlayed == 0) {
                phone4.play();
                phoneGuySoundPlayed = 1;
            }
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
            text("The door and light buttons in your office", 210, 270);
            text("do exactly what you think they do.", 210, 290);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 120 && phoneGuyDialogueStage == 4) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 5;
                if (phoneGuyDialogueStage == 5) {
                    phone4.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 5
        if (phoneGuyDialogueStage == 5) {
            if (!phone5.isPlaying() && phoneGuyDialogueStage == 5 && phoneGuySoundPlayed == 0) {
                phone5.play();
                phoneGuySoundPlayed = 1;
            }
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
            text("So I mean your only concern here is that", 210, 270);
            text("the animatronics will try and stuff you", 210, 290);
            text("in a suit if they get in your office.", 210, 310);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 170 && phoneGuyDialogueStage == 5) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 6;
                if (phoneGuyDialogueStage == 6) {
                    phone5.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 6
        if (phoneGuyDialogueStage == 6) {
            if (!phone6.isPlaying() && phoneGuyDialogueStage == 6 && phoneGuySoundPlayed == 0) {
                phone6.play();
                phoneGuySoundPlayed = 1
            }
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
            text("But I think you'll be perfectly fine", 210, 270);
            text("I shouldn't have to tell you how to play.", 210, 290);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 140 && phoneGuyDialogueStage == 6) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 7;
                if (phoneGuyDialogueStage == 7) {
                    phone6.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }

        // Stage 7
        if (phoneGuyDialogueStage == 7) {
            if (!phone7.isPlaying() && phoneGuyDialogueStage == 7 && phoneGuySoundPlayed == 0) {
                phone7.play();
                phoneGuySoundPlayed = 1;
            }
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
            text("Anyways good luck, your minimum wage", 210, 270);
            text("is counting on you.", 210, 290);
            fill(190);
            strokeWeight(1);
            rect(463, 331, 70, 35);
            fill('white');
            text("Hang Up", 435, 335);
            if (phoneGuyTextInterval >= 115 && phoneGuyDialogueStage == 7) {
                print("Next Dialogue");
                phoneGuyTextInterval = 0;
                phoneGuyDialogueStage = 8;
                if (phoneGuyDialogueStage == 8) {
                    phone7.stop();
                    phoneGuySoundPlayed = 0;
                }
            }
        }
    }
}

function keyPressed() {
    if (key === 'b' && gameBegan == true) {
        fnafCutScream.play();
        bonnieScare = true;
    }

    if (key === 'm') {
        readyFreddy = true;
    }

    if (key === 'n') {
        foxyReady = true;
    }

    if (key === 'g') {
        goldenFreddySpawned = true;
    }

    if (key === 'k') {
        bonnieReady = true;
    }
}

function drawBonnieScare() {
    if (bonnieScare == true && bonnieScareTime < 500) {
        image(bonnieAngry, 300, 200, bonnieScareSize, bonnieScareSize);
        bonnieScareSize += 250
        bonnieScareTime += 100
    }

    if (bonnieScareTime == 500) {
        bonnieScare = false;
        bonnieScareTime = 0;
        bonnieScareSize = 1;
        gameBegan = false;
    }
}

function freddyLogic() {
    if (freddyCamPosition == 1 && readyFreddy == true) {
        freddyCamPosition = 1.1;
        readyFreddy = false;
    }

    if (freddyCamPosition == 1.1 && readyFreddy == true) {
        freddyCamPosition = 7;
        readyFreddy = false;
    }

    if (freddyCamPosition == 7 && readyFreddy == true) {
        freddyCamPosition = 6;
        readyFreddy = false;
    }

    if (freddyCamPosition == 6 && readyFreddy == true && leftDoorClosed == false) {
        freddyCamPosition = 4;
    }

    if (freddyCamPosition == 4 && readyFreddy == true) {
        freddyCamPosition = 4.1;
        readyFreddy = false;
    }

    if (freddyCamPosition == 4.1 && readyFreddy == true && leftDoorClosed == false) {
        freddyCamPosition = 0;
        freddyInOffice = true;
    }

    if (freddyCamPosition == 4.1 && readyFreddy == true && leftDoorClosed == true) {
        freddyCamPosition = 1;
        readyFreddy = false;
        print("Freddy: Bum");
    }

    if (freddyInOffice == true && tabletY < 600) {
        freddyCamPosition = 0;
        freddyInOffice = true;
        print("Freddy: Close your camera bub");
    }

    if (freddyInOffice == true && tabletY == 600) {
        freddyCamPosition = 0;
        freddyInOffice = true;
        print("Freddy: Boo");
    }

}

function foxyLogic() {
    if (foxyStage == 0 && foxyReady == true) {
        foxyStage = 1;
        foxyReady = false;
    }

    if (foxyStage == 1 && foxyReady == true) {
        foxyStage = 2;
        foxyReady = false;
    }

    if (foxyStage == 2 && foxyReady == true) {
        foxyStage = 3;
        foxyReady = false;
    }

    if (foxyStage == 3 && foxyReady == true) {
        foxyRunDistance = 250;
        foxyRunning = true;
        foxyReady = false;
    }

    if (foxyRunning == true) {
        foxyCamPosition = 2
        foxyRunDistance -= 5
        print(foxyRunDistance);
    }

    if (foxyRunDistance == 5 && leftDoorClosed == false) {
        print("Foxy: I've got you now!")
        foxyRunning = false;
        foxyRunDistance = 0;
    }

    if (foxyRunDistance == 5 && leftDoorClosed == true) {
        print("Foxy: I do NOT got you now.. :(")
        foxyRunning = false;
        foxyRunDistance = 0;
    }
}


function goldenFreddyLogic() {

    if (goldenFreddySpawned == true && goldenFreddyDurationSetCooldown == false) {
        goldenFreddyDuration = 1000;
        goldenFreddyDurationSetCooldown = true;
    }

    if (goldenFreddySpawned == true) {
        goldenFreddyDuration -= 5
        // print(goldenFreddyDuration)
    }

    if (goldenFreddySpawned == true && goldenFreddyStareDurationSetCooldown == false) {
        goldenFreddyStareDuration = 300;
        goldenFreddyStareDurationSetCooldown = true;
        print(goldenFreddyStareDuration)
    }

    if (goldenFreddySpawned == true && tabletOpened == false) {
        goldenFreddyStareDuration -= 2.5;
        print(goldenFreddyStareDuration);
    }

    if (goldenFreddyStareDuration < 10 && goldenFreddySpawned == true) {
        // print("*Golden Freddy Scream*")
        print(goldenFreddyStareDuration);
        goldenFreddySpawned = false;
    }

    if (goldenFreddyDuration < 10 && goldenFreddySpawned == true) {
        // print("*Golden Freddy go no scream")
        goldenFreddySpawned = false;
    }

    if (goldenFreddySpawned == false) {
        goldenFreddyDurationSetCooldown = false;
        goldenFreddyStareDurationSetCooldown = false;
        goldenFreddyStareDuration = 0;
    }
}

function bonnieLogic() {
    if (bonnieCamPosition == 1 && bonnieReady == true) {
        bonnieCamPosition = 1.1;
        bonnieReady = false;
    }

    if (bonnieCamPosition == 1.1 && bonnieReady == true) {
        bonnieCamPosition = 1.2;
        bonnieReady = false;
    }

    if (bonnieCamPosition == 1.2 && bonnieReady == true) {
        bonnieCamPosition = 2;
        bonnieReady = false;
    }

    if (bonnieCamPosition == 2 && bonnieReady == true && leftDoorClosed == false) {
        bonnieCamPosition = 2.1;
    }

    if (bonnieCamPosition == 2.1 && bonnieReady == true && leftDoorClosed == false) {
        bonnieCamPosition = 0;
        bonnieInOffice = true;
    }

    if (bonnieCamPosition == 2.1 && bonnieReady == true && leftDoorClosed == true) {
        bonnieCamPosition = 1;
        bonnieReady = false;
        print("Bonnie: Bum");
    }

    if (bonnieInOffice == true) {
        print("*Bonnie Jumpscare");
        bonnieCamPosition = 1;
        bonnieInOffice = false;
    }
}

function drawBlocky() {
    // Blocky (Freddy)
    push();
    // Movement for Freddy
    translate(freddyX, freddyY)

    // Body
    strokeWeight(1);
    fill(161, 97, 42);
    rect(450 * freddySize, 300 * freddySize, 200 * freddySize, 400 * freddySize);

    // Hat
    fill(30)
    rect(450 * freddySize, 90 * freddySize, 150 * freddySize, 20 * freddySize);
    rect(450 * freddySize, 50 * freddySize, 100 * freddySize, 60 * freddySize);

    // Eyes

    fill('white');
    ellipse(400 * freddySize, 185 * freddySize, 70 * freddySize, 70 * freddySize);
    ellipse(500 * freddySize, 185 * freddySize, 70 * freddySize, 70 * freddySize);
    fill(130, 160, 212);
    ellipse(500 * freddySize, 185 * freddySize, 40 * freddySize, 40 * freddySize);
    ellipse(400 * freddySize, 185 * freddySize, 40 * freddySize, 40 * freddySize);
    fill(3, 7, 3);
    ellipse(500 * freddySize, 185 * freddySize, 20 * freddySize, 20 * freddySize);
    ellipse(400 * freddySize, 185 * freddySize, 20 * freddySize, 20 * freddySize);
    fill('black');
    arc(400 * freddySize, 175 * freddySize, 65 * freddySize, 50 * freddySize, 3.14, 6.28); // Uses Pi and Pi * 2 to make even arc
    arc(500 * freddySize, 175 * freddySize, 65 * freddySize, 50 * freddySize, 3.14, 6.28); // Uses Pi and Pi * 2 to make even arc




    // Eyebrows
    strokeWeight(20 * freddySize);
    line(370 * freddySize, 130 * freddySize, 430 * freddySize, 130 * freddySize);
    line(470 * freddySize, 130 * freddySize, 530 * freddySize, 130 * freddySize);

    // Mouth
    strokeWeight(1 * freddySize);
    rect(450 * freddySize, 285 * freddySize, 100 * freddySize, 50 * freddySize);
    fill('white');
    rect(410 * freddySize, 302.5 * freddySize, 15 * freddySize, 15 * freddySize);
    rect(430 * freddySize, 302.5 * freddySize, 15 * freddySize, 15 * freddySize);
    rect(450 * freddySize, 302.5 * freddySize, 15 * freddySize, 15 * freddySize);
    rect(470 * freddySize, 302.5 * freddySize, 15 * freddySize, 15 * freddySize);
    rect(490 * freddySize, 302.5 * freddySize, 15 * freddySize, 15 * freddySize);

    // Nose
    fill(174, 108, 50);
    ellipse(450 * freddySize, 260 * freddySize, 150 * freddySize, 70 * freddySize);
    fill('black');
    ellipse(450 * freddySize, 235 * freddySize, 50 * freddySize, 25 * freddySize);
    strokeWeight(3);
    line(450 * freddySize, 235 * freddySize, 450 * freddySize, 294 * freddySize);
    strokeWeight(1);
    ellipse(490 * freddySize, 255 * freddySize, 10 * freddySize, 10 * freddySize);
    ellipse(510 * freddySize, 250 * freddySize, 10 * freddySize, 10 * freddySize);
    ellipse(505 * freddySize, 270 * freddySize, 10 * freddySize, 10 * freddySize);
    fill('black');
    ellipse(410 * freddySize, 255 * freddySize, 10 * freddySize, 10 * freddySize);
    ellipse(390 * freddySize, 250 * freddySize, 10 * freddySize, 10 * freddySize);
    ellipse(395 * freddySize, 270 * freddySize, 10 * freddySize, 10 * freddySize);

    // Tie

    ellipse(450 * freddySize, 350 * freddySize, 30 * freddySize, 30 * freddySize);
    triangle(450 * freddySize, 350 * freddySize, 400 * freddySize, 370 * freddySize, 400 * freddySize, 330 * freddySize);
    triangle(450 * freddySize, 350 * freddySize, 500 * freddySize, 370 * freddySize, 500 * freddySize, 330 * freddySize);

    // Ears
    fill(170);
    push();
    translate(340 * freddySize, 100 * freddySize); // Moves the origin to 340,110
    rotate(radians(30)); // Rotates the rectangle below by 30 degrees
    rect(0, 0, 40 * freddySize, 20 * freddySize); // Rectangle is at 0,0 because the origin is where the rectangles positon should be
    pop();
    fill(157, 93, 49);
    ellipse(310 * freddySize, 80 * freddySize, 60 * freddySize, 60 * freddySize);
    fill(101, 53, 14);
    ellipse(310 * freddySize, 80 * freddySize, 40 * freddySize, 40 * freddySize);

    fill(170);
    push(); // Seperates it from the rest of code so no rotation to it
    translate(560 * freddySize, 100 * freddySize); // Moves the origin to 340,110
    rotate(radians(150)); // Rotates the rectangle below by 30 degrees
    rect(0, 0, 40 * freddySize, 20 * freddySize); // Rectangle is at 0,0 because the origin is where the rectangles positon should be
    pop();  // Seperates it from the rest of code so no rotation to it
    fill(157, 93, 49);
    ellipse(590 * freddySize, 80 * freddySize, 60 * freddySize, 60 * freddySize);
    fill(101, 53, 14);
    ellipse(590 * freddySize, 80 * freddySize, 40 * freddySize, 40 * freddySize);

    // Arms
    fill(161, 97, 42);
    push();
    translate(330 * freddySize, 340 * freddySize);
    rotate(radians(10));
    ellipse(0, 0, 50 * freddySize, 200 * freddySize);
    pop();
    push();
    translate(570 * freddySize, 340 * freddySize);
    rotate(radians(-10));
    ellipse(0, 0, 50 * freddySize, 200 * freddySize);
    pop();

    // Legs
    ellipse(250 * freddySize, 270 * freddySize, 30 * freddySize, 100 * freddySize);
    ellipse(200 * freddySize, 270 * freddySize, 30 * freddySize, 100 * freddySize);
    pop();
}
