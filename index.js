import './style/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
/**
 * GUI Controls
 */
import * as dat from 'dat.gui'
import { color } from 'dat.gui';

function addCubes(x,y,letter,color){
  var geometry = new THREE.BoxGeometry(50,50,10) ;
  // ---------------------------------
  var off = 'rgb(19,19,20)'
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle=off;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle='white';
  ctx.font = "80px Sans-serif";
  ctx.textAlign = 'center';
  ctx.fillText(letter, 65, 90);  
  let canvasTexture = new THREE.CanvasTexture( canvas );
  let material2 = new THREE.MeshBasicMaterial({ map: canvasTexture });
  material2.needsUpdate = true


 // -----------------------------------
  var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors,color: 0x36454F})

  var mesh = new THREE.Mesh(geometry, material2);

  var geometry2 = new THREE.BoxGeometry(55,55,15);

  var geo = new THREE.EdgesGeometry( geometry2 );
  var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 100 } );
  var wireframe = new THREE.LineSegments( geo, mat );
  wireframe.renderOrder = 1; 

  mesh.add( wireframe );

  mesh.position.setX(x);
  mesh.position.setY(y);
  mesh.position.setZ(-100);

  sceneObj.push(mesh)

  scene.add(mesh)

}

function createKey(x,y,z,letter,color){
  var scale = .8
  var geometry = new THREE.BoxGeometry(40 * scale,10 * scale,50 * scale);
  // ---------------------------------
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle=color;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle='white';
  ctx.font = "40px Sans-serif";
  ctx.textAlign = 'center';
  ctx.fillText(letter, 30, 45);  
  let canvasTexture = new THREE.CanvasTexture( canvas );
  let material2 = new THREE.MeshBasicMaterial({ map: canvasTexture });
  material2.needsUpdate = true

 // -----------------------------------
  var material = new THREE.MeshBasicMaterial({vertexColors: THREE.FaceColors,color: 0x36454F})

  var mesh = new THREE.Mesh(geometry, material2);

  var geometry2 = new THREE.BoxGeometry(45 * scale,15 * scale,55 * scale);

  var geo = new THREE.EdgesGeometry( geometry2 );
  var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 100 } );
  var wireframe = new THREE.LineSegments( geo, mat );
  wireframe.renderOrder = 1; 

  mesh.add( wireframe );
  
  mesh.position.setX(x);
  mesh.position.setY(y);
  mesh.position.setZ(z);

  // dictionary to interact with key later on.
  keysObj[letter] = mesh;
  scene.add(mesh);

}

function createEndCard(x,y,z,letter,color){
  var scale = .8
  var geometry = new THREE.BoxGeometry(50,50,1);
  // ---------------------------------
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 512;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle=color;
  ctx.fillRect(0, 0, 512, 512);
  ctx.fillStyle='white';
  ctx.font = "24px Sans-serif";
  ctx.textAlign = 'center';
  ctx.fillText(letter, 250, 50); // the thank you message
  ctx.strokeStyle = 'white';

  ctx.lineWidth = 2;
  ctx.moveTo(60, 60);
  ctx.lineTo(450, 60);
  ctx.stroke();
  ctx.font = "20px Sans-serif";
  ctx.fillText("Gery Fabrega - Software Engineer/Data Scientist", 250, 90);
  ctx.fillText("Email: geryfabrega@gmail.com", 250, 120);
  ctx.fillText("LinkedIn: https://www.linkedin.com/in/geryfabrega/",250,150);

  ctx.font = "12px Sans-serif";
  ctx.fillText("Wordle is a product of the New Yorks Times",250,400);
  ctx.fillText("This website serves as an interactive resume.",250,420);
  ctx.fillText("Not for commercial use.",250,440);

  


  let canvasTexture = new THREE.CanvasTexture( canvas );
  let material2 = new THREE.MeshBasicMaterial({ map: canvasTexture });
  material2.needsUpdate = true

 // -----------------------------------
  var mesh = new THREE.Mesh(geometry, material2);

  mesh.position.setX(x);
  mesh.position.setY(y);
  mesh.position.setZ(z);

  // dictionary to interact with key later on.
  keysObj[letter] = mesh;
  camera.add(mesh);

}

// for some odd reason the keys all come out to be the same color, there fore I am running my change cube function after making them
function createKeyboard(){
  var x = -20;
  var y = 0;
  // QWERTY ROW 1
  createKey(x-200,y-90,150,"Q","grey");
  createKey(x-150,y-90,150,"W","grey");
  createKey(x-100,y-90,150,"E","grey");
  createKey(x-50,y-90,150,"R","grey");
  createKey(x-0,y-90,150,"T","grey");
  createKey(x+50,y-90,150,"Y","grey");
  createKey(x+100,y-90,150,"U","grey");
  createKey(x+150,y-90,150,"I","grey");
  createKey(x+200,y-90,150,"O","grey");
  createKey(x+250,y-90,150,"P","grey");

  // ROW 2
  createKey(x-175,y-90,200,"A","grey");
  createKey(x-125,y-90,200,"S","grey");
  createKey(x-75,y-90,200,"D","grey");
  createKey(x-25,y-90,200,"F","grey");
  createKey(x+25,y-90,200,"G","grey");
  createKey(x+75,y-90,200,"H","grey");
  createKey(x+125,y-90,200,"J","grey");
  createKey(x+175,y-90,200,"K","grey");
  createKey(x+225,y-90,200,"L","grey");

  //R0W 3
  createKey(x-200,y-90,250,"↵","grey");
  createKey(x-150,y-90,250,"Z","grey");
  createKey(x-100,y-90,250,"X","grey");
  createKey(x-50,y-90,250,"C","grey");
  createKey(x-0,y-90,250,"V","grey");
  createKey(x+50,y-90,250,"B","grey");
  createKey(x+100,y-90,250,"N","grey");
  createKey(x+150,y-90,250,"M","grey");
  createKey(x+200,y-90,250,"⌫","grey");
}


const gui = new dat.GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x171717 );

/**
 * Object
 */

var sceneObj = [];
var keysObj = {};
// CUBE MAKER --------------------------------------------------------------------------------------------------

var xoffset = 60
var xShift = 90
var yoffset = 60


addCubes(xoffset * 0 -xShift,yoffset * 2,"","off")
addCubes(xoffset * 1- xShift,yoffset * 2,"","off")
addCubes(xoffset * 2- xShift,yoffset * 2,"","off")
addCubes(xoffset * 3- xShift,yoffset * 2,"","off")

addCubes(xoffset * 0- xShift,yoffset * 1,"","off")
addCubes(xoffset * 1- xShift,yoffset * 1,"","off")
addCubes(xoffset * 2- xShift,yoffset * 1,"","off")
addCubes(xoffset * 3- xShift,yoffset * 1,"","off")

addCubes(xoffset * 0- xShift,yoffset * 0,"","off")
addCubes(xoffset * 1- xShift,yoffset * 0,"","off")
addCubes(xoffset * 2- xShift,yoffset * 0,"","off")
addCubes(xoffset * 3- xShift,yoffset * 0,"","off")

addCubes(xoffset * 0- xShift,yoffset * -1,"","off")
addCubes(xoffset * 1- xShift,yoffset * -1,"","off")
addCubes(xoffset * 2- xShift,yoffset * -1,"","off")
addCubes(xoffset * 3- xShift,yoffset * -1,"","off")

createKeyboard();

// Now to add the plane 
/**
 
 */
const floor = new THREE.CubeGeometry( 50, 50);
const floorMaterial = new THREE.MeshBasicMaterial( {color: 0x131314, side: THREE.DoubleSide} );

const plane = new THREE.Mesh( floor, floorMaterial );
plane.position.setZ(-100);
plane.position.setY(-10);
plane.position.setX(0);

//lane.rotation.x = Math.PI / 2;





/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.001,
  5000
)
camera.position.x = 0
camera.position.y = 250
camera.position.z = 500
scene.add(camera)
// camera.add(plane);

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.autoRotate = true
// controls.enableZoom = false
controls.enablePan = false
controls.dampingFactor = 0.05
controls.maxDistance = 1000
controls.minDistance = 30
controls.touches = {
  ONE: THREE.TOUCH.ROTATE,
  TWO: THREE.TOUCH.DOLLY_PAN,
}
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

var spin = false;
var spinArray = [0];

var rowCount = 4;

// wordArray is all entered chars.
var wordArray = ["","","",""];
// the secretWord will be hardcoded below as a global variable
var secretWord = ["G","E","R","Y"];
//
var colorArray = [];
var globalKeyCount = 0;
var clockRun = 0;

var winner = false;
const clock = new THREE.Clock()
const tick = () => {
  const elapsedTime = clock.getElapsedTime()

    //mesh.rotation.y += 0.01 * Math.sin(1)
    //mesh.rotation.y += 0.01 * Math.sin(1)
    /**
    sceneObj[0].rotation.z += 0.01 * Math.sin(1)
    sceneObj[1].rotation.z += 0.01 * Math.sin(1)
    sceneObj[2].rotation.z += 0.01 * Math.sin(1)
    sceneObj[3].rotation.z += 0.01 * Math.sin(1)
    */
   // this is the fluid floating animation you see the cubes do while idle
  var i = 0;
  for (i = 0;i < 16; i++){
    if(i < 4){
      sceneObj[i].position.y += 0.25 * Math.sin(clockRun);
    }
    else if (i > 3 && i < 8){
      sceneObj[i].position.y += 0.15 * Math.sin(clockRun);
    }
    else if (i > 7 && i < 12){
      sceneObj[i].position.y -= 0.15 * Math.sin(clockRun);
    }
    else if (i > 11 && i < 16){
      sceneObj[i].position.y -= 0.25 * Math.sin(clockRun);
    }
  }
    for (i = 0;i < 16; i++){
      if(i == 0 || i == 4 || i == 8 || i == 12){
      sceneObj[i].position.x -= 0.25 * Math.sin(clockRun);
      }
      else if (i == 1 || i == 5 || i == 9 || i == 13){
      sceneObj[i].position.x -= 0.15 * Math.sin(clockRun);
      }
      else if (i == 2 || i == 6 || i == 10 || i == 14){
      sceneObj[i].position.x += 0.15 * Math.sin(clockRun);
      }
      else if (i == 3 || i == 7 || i == 11 || i == 15){
      sceneObj[i].position.x += 0.25 * Math.sin(clockRun);
      }
    }
  clockRun += .05;
  // end of the floating animation 
  var b;
  b = 0;
  // the cube in the spin array will get a spin, spin array changes every complete 360 rotation
    if (spin && spinArray[0] < rowCount){
      sceneObj[spinArray[0]].rotation.x += 0.30 * Math.sin(1);
      console.log(sceneObj[spinArray[0]].rotation.x);
      if (sceneObj[spinArray[0]].rotation.x >= 2 * 3.14159){
        console.log(colorArray);
        // changeCube(cubeIndex,letter,cubeColor)
        changeCube(spinArray[0],wordArray[spinArray[0]],colorArray[spinArray[0]]);
        spinArray[0] += 1;
        if (spinArray[0] == rowCount){
          spin = false;
          rowCount += 4;
          console.log("ROW COUNT IS");
          console.log(rowCount);
          if (rowCount == 20){
            createEndCard(0,-10,-100,"THANK YOU FOR PLAYING!","rgb(19,19,20)");
          }
          else if(winner){
            createEndCard(0,-10,-100,"WINNER!","rgb(19,19,20)");
          }
        }
      }
    }
    // Update controls
  controls.update()
  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
document.addEventListener("keydown", onDocumentKeyDown, true);
document.addEventListener("keyup", onDocumentKeyUp, true);
// KEY DOWN EVENT
function onDocumentKeyDown(event) {
    
    var keyCode = event.which;
    if (globalKeyCount < rowCount){
      // Will only go down this path if the key pressed is NOT ENTER or BACKSPACE
      if ((keyCode != 8) && (keyCode != 13 )){
        var c = String.fromCharCode(keyCode);
        console.log(c);
        var off = 'rgb(19,19,20)'
        changeCube(globalKeyCount,c,off);
        wordArray[globalKeyCount] = c;
        console.log(wordArray);
        globalKeyCount += 1;
      }
  }
    if (keyCode == 8){
      keysObj["⌫"].position.y -= 10;
      // This is the back space, it sets the index back and makes the letter an empty string.
      if (globalKeyCount > 0){

        globalKeyCount -= 1;
        changeCube(globalKeyCount,"","rgb(19,19,20)");
        wordArray[globalKeyCount] = c;
        console.log(wordArray);

      }
  }
  // if all 4 letters are entered and the enter key is pressed, the letter will be looked at.
  if ((globalKeyCount%4 == 0) && (keyCode == 13)){
    var i = 0;

    /**
      There are 16 cubes on screen, (ignoring the keyboard) the attribute of each cube can be
      modified by accessing the desired cube with the scenObj[index] array
      things such as color, rotation and x,y,z position can be set here as well as the canvas
      object that holds their character or letter "A","B","C" ect..

      Every time the 'enter' key is pressed AND an entire row is filled out, we can proceed with the 
      following checks

      - is the current letter the exact same letter and position as the letter in the secret word?
        is so make it green
      - if not, is the current letter atleast in the secret word? 
        if so make it yellow
      - is the letter not all all in the secret word?
        make it charcoal via the rgb color code
      
      since there are 16 cubes we need to ensure we index from the appropriate row,
      we only look at 4 cubes at a time, so everytime we do this check lets grab a slice 
      from the global wordArray that holds up to all 16 characters,
      the rowCount increases by 4 every time the enter key is pressed to the tempWordArray 
      window adjusts accordingly.
      rangei, rangef;

      0,4
      4,8
      8,12
      12,16
     */ 

    var rangei = -4 + rowCount;
    var rangef = 4 + rowCount;
    var tempWordArray = wordArray.slice(rangei,rangef);
    if (JSON.stringify(tempWordArray)==JSON.stringify(secretWord)){
      winner = true;
    }
    console.log(tempWordArray);
    console.log(secretWord);
    for (i = 0;i<4;i++){
      if(tempWordArray[i] == secretWord[i]){
        const green = "rgb(71,129,73)";
        updateKeyboard(tempWordArray[i],green);
        colorArray.push(green);
      }
      else if(secretWord.includes(tempWordArray[i])){
        const yellow = "rgb(171,147,62)";
        updateKeyboard(tempWordArray[i],yellow);
        colorArray.push(yellow);
      }
      else{
        const dark = "rgb(51,51,52)";
        updateKeyboard(tempWordArray[i],dark);
        colorArray.push(dark);
      }
    }
    spin = true;
  }
  // this is what happens when we push enter
  if (keyCode ==  13){
    keysObj["↵"].position.y -= 10;
    }
  else{
  var c = String.fromCharCode(keyCode);
  keysObj[c].position.y -= 10;
  }
}
// KEY UP EVENT
function onDocumentKeyUp(event) {
  var keyCode = event.which;
  if (keyCode ==  8){
  keysObj["⌫"].position.y += 10;
  }
  else if (keyCode == 13){
    keysObj["↵"].position.y += 10;
  }
  else{
    var c = String.fromCharCode(keyCode);
    keysObj[c].position.y += 10;
  }
}

function updateKeyboard(letter,color){

  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle=color;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle='white';
  ctx.font = "40px Sans-serif";
  ctx.textAlign = 'center';
  ctx.fillText(letter, 30, 45);  
  let canvasTexture = new THREE.CanvasTexture( canvas );
  let material2 = new THREE.MeshBasicMaterial({ map: canvasTexture });
  material2.needsUpdate = true

  keysObj[letter].material = material2;
}


function changeCube(cubeIndex,letter,cubeColor){
  var off = 'rgb(19,19,20)'
  var canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  var ctx = canvas.getContext("2d");
  ctx.fillStyle=cubeColor;
  ctx.fillRect(0, 0, 256, 256);
  ctx.fillStyle='white';
  ctx.font = "80px sans-serif";
  ctx.textAlign = 'center';
  ctx.fillText(letter, 65, 90);  
  let canvasTexture = new THREE.CanvasTexture( canvas );
  let material2 = new THREE.MeshBasicMaterial({ map: canvasTexture });
  sceneObj[cubeIndex].material = material2;
}


