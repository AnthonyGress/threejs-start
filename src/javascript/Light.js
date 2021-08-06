import * as THREE from "three";

export default class Light {
  constructor(_option) {
    this.debug = _option.debug;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    // if (this.debug) {
    //   this.debugFolder = this.debug.addFolder("light");
    //   this.debugFolder.open();
    // }

    this.setInstance();
  }

  setInstance() {
    let color = 0xffffff;
    let intensity = 1;
    this.ambientLight = new THREE.AmbientLight(color, intensity);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 0);

    this.container.add(this.ambientLight);
    this.container.add(this.directionalLight);

    // if (this.debug) {
    //   this.debugFolder.add(this.ambientLight, "visible").name("visible");
    //   this.debugFolder
    //     .add(this.ambientLight, "")
    //     .step(0.001)
    //     .min(-2)
    //     .max(2)
    //     .name("intensity");
    // }
  }
}
