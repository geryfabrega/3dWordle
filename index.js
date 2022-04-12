import './style/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
/**
 * GUI Controls
 */
import * as dat from 'dat.gui'

function addCubes(x,y,letter,color){
  var geometry = new THREE.BoxGeometry(50,50,10) 
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

  var mesh = new THREE.Mesh(geometry, material2)

  var geometry2 = new THREE.BoxGeometry(55,55,15)

  var geo = new THREE.EdgesGeometry( geometry2 );
  var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 100 } );
  var wireframe = new THREE.LineSegments( geo, mat );
  wireframe.renderOrder = 1; 

  mesh.add( wireframe );

  mesh.position.setX(x);
  mesh.position.setY(y);

  sceneObj.push(mesh)

  scene.add(mesh)

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

var sceneObj = []
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


// Now to add the plane 

const floor = new THREE.CubeGeometry( 1000, 1000 );
const floorMaterial = new THREE.MeshBasicMaterial( {color: 0xc7d6ed, side: THREE.DoubleSide, wireframe: true } );
const plane = new THREE.Mesh( floor, floorMaterial );
plane.position.setY(-100);
plane.rotation.x = Math.PI / 2;
scene.add( plane );

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
camera.position.x = 300
camera.position.y = 50
camera.position.z = 400
scene.add(camera)

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
// wordArray is all entered chars.
var wordArray = ["","","",""]
var globalKeyCount = 0;
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
 var b;
 b = 0;
 // the cube in the spin array will get a spin, spin array changes every complete 360 rotation
  if (spin){
    sceneObj[spinArray[0]].rotation.x += 0.30 * Math.sin(1);
    console.log(sceneObj[spinArray[0]].rotation.x);
    if (sceneObj[spinArray[0]].rotation.x >= 2 * 3.14159){
      changeCube(spinArray[0],wordArray[spinArray[0]],"green");
      spinArray[0] += 1;
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
function onDocumentKeyDown(event) {
    
    var keyCode = event.which;
    if (globalKeyCount < 4){
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
      if (globalKeyCount > 0){
        globalKeyCount -= 1;
        changeCube(globalKeyCount,"","rgb(19,19,20)");
        wordArray[globalKeyCount] = c;
        console.log(wordArray);
      }
  }
  if ((globalKeyCount == 4) && (keyCode == 13)){
    spin = true;
  }
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

