import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor(_option) {
    this.time = _option.time;
    this.sizes = _option.sizes;
    this.debug = _option.debug;
    this.renderer = _option.renderer;

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    if (this.debug) {
      this.debugFolder = this.debug.addFolder("camera");
      this.debugFolder.open();
    }

    this.setInstance();
    this.setOrbitControls();
  }

  setInstance() {
    const { width, height } = this.sizes.viewport;
    this.instance = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    this.instance.position.set(0.25, 0.4, 2.8);
    this.instance.lookAt(new THREE.Vector3());
    this.container.add(this.instance);

    this.sizes.on("resize", () => {
      const { width, height } = this.sizes.viewport;
      this.instance.aspect = width / height;
      this.instance.updateProjectionMatrix();
    });

    if (this.debug) {
      this.debugFolder.add(this.instance, "visible").name("visible");
      this.debugFolder
        .add(this.instance.position, "x")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionX");
      this.debugFolder
        .add(this.instance.position, "y")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionY");
      this.debugFolder
        .add(this.instance.position, "z")
        .step(0.001)
        .min(-2)
        .max(2)
        .name("positionZ");
    }
  }

  setOrbitControls() {
    this.orbitControls = new OrbitControls(
      this.instance,
      this.renderer.domElement
    );
    this.orbitControls.enableDamping = true;
    this.orbitControls.autoRotate = true;
    this.orbitControls.autoRotateSpeed = -1.1;
    this.orbitControls.maxPolarAngle = Math.PI / 2.3;
    this.orbitControls.minPolarAngle = 0.85;
    this.orbitControls.minDistance = 0.3;
    this.orbitControls.maxDistance = 1.8;
    this.orbitControls.enablePan = false;

    this.time.on("tick", () => this.orbitControls.update());
  }
}
