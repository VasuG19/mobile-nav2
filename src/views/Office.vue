<template>
  <div class="about">
    <h1>Office page</h1>
    <p>This page displays a replica model of my Home Office.</p>
    <p>The model was made using blender and then loaded onto the page using THREE.js.</p>
    <div id="three-container" class="canvas-container"></div>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls from the correct path
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Import GLTFLoader

export default {
  mounted() {
    let scene, camera, renderer, controls;

    function init() {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 5);

      // Renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x181818); // Set background color to #181818
      document.getElementById('three-container').appendChild(renderer.domElement);

      // Orbit Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; // Disable zoom

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      // Load model
      const loader = new GLTFLoader();
      loader.load(
        'src/assets/Room.glb',
        function (gltf) {
          scene.add(gltf.scene);
          gltf.scene.position.set(-0.75, 0, 0);
          // gltf.scene.rotation.y = Math.PI;
          gltf.scene.scale.set(0.1, 0.1, 0.1);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    }

    window.addEventListener('resize', onWindowResize);

    init();
    animate();
  }
}
</script>

<style scoped>
.canvas-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
</style>
