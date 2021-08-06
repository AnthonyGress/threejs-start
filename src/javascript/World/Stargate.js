import * as THREE from "three";

export default class Stargate {
  constructor(_option) {
    this.resources = _option.resources;
    this.time = _option.time;

    this.debug = _option.debug;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    if (this.debug) {
      this.debugFolder = this.debug.addFolder("stargate");
      this.debugFolder.open();
    }

    this.setStargate();
  }

  setStargate() {
    this.gltf = this.resources.items.stargate;
    this.gltf.scene.scale.set(0.2, 0.2, 0.2);
    this.container.add(this.gltf.scene);

    this.gltf.scene.position.set(0.0, 0.298, 0.0);

    if (this.debug) {
      this.debugFolder.add(this.gltf.scene, "visible").name("visible");
      this.debugFolder
        .add(this.gltf.scene.position, "x")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionX");
      this.debugFolder
        .add(this.gltf.scene.position, "y")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionY");
      this.debugFolder
        .add(this.gltf.scene.position, "z")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionZ");
      this.debugFolder
        .add(this.gltf.scene.rotation, "x")
        .step(0.001)
        .min(-Math.PI)
        .max(Math.PI)
        .name("rotateX");
      this.debugFolder
        .add(this.gltf.scene.rotation, "y")
        .step(0.001)
        .min(-Math.PI)
        .max(Math.PI)
        .name("rotateY");
      this.debugFolder
        .add(this.gltf.scene.rotation, "z")
        .step(0.001)
        .min(-Math.PI)
        .max(Math.PI)
        .name("rotateZ");
    }
  }
}
