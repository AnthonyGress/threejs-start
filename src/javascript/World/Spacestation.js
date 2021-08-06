import * as THREE from "three";

export default class Spacestation {
  constructor(_option) {
    this.resources = _option.resources;
    this.time = _option.time;

    this.debug = _option.debug;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    if (this.debug) {
      this.debugFolder = this.debug.addFolder("spacestation");
      this.debugFolder.open();
    }

    this.setSpacestation();
  }

  setSpacestation() {
    this.gltf = this.resources.items.spacestation;
    this.gltf.scene.scale.set(0.029, 0.029, 0.029);
    this.container.add(this.gltf.scene);

    if (this.debug) {
      this.debugFolder.add(this.gltf.scene, "visible").name("visible");
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
        .add(this.gltf.scene.position, "x")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionX");
    }
  }
}
