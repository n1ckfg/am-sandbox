const SPEED = 0.01;

let lastLog = new Date().getTime()

const logOncePerSecond = (timestamp, frame, three) => {
  const now = new Date().getTime()
  if (now > lastLog + 1000) {
    lastLog = now
    console.log({ timestamp, frame, three })
  }
}

/*
 * this function will run once per three.js frame,
 * timestamp: frames since engine started
 * frame: the current frame (only in webxr)
 * three: object holding references to a lot of the scene objects, see below for details
 */

export default (timestamp, frame, scene, THREE) => {
  logOncePerSecond(timestamp, frame, scene)

  /*
   * destructure the individual keys from the scene object
   */
  const {
    model,      // the gltf file
    // camera,     // the threejs camera. !can not be rotated or positioned!
    // renderer,   // the threejs renderer
    // controller, // the "user" object, has a matrixWorld, can be used for distance or orientation calculations
    // clock,      // threejs clock, only runs if animations are running
    // actions,    // array of animations
    // mixer,      // threejs animation mixer
  } = scene

  model.rotation.x += SPEED * 2;
  model.rotation.y += SPEED;
  model.rotation.z += SPEED * 3;
}