<template>
  <div class="about">
    <h1>Office page</h1>
    <ul>
      <li>This page displays a replica model of my Home Office.</li>
      <li>The model was made using Blender and then loaded onto the page using THREE.js.</li>
      <li>The Office has orbit controls so you can move it around and get a full 360° view.</li>
    </ul>
    <div id="office" class="office"></div>
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
      // Create a new Three.js scene
      scene = new THREE.Scene();

      // Set up the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 4); // Set camera position

      // Create a WebGL renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x181818); // Set background color to #181818
      document.getElementById('office').appendChild(renderer.domElement);

      // Initialize OrbitControls for camera manipulation
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; // Enable smooth camera movement
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; // Disable zoom

      // Add ambient light to the scene
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
      scene.add(ambientLight);

      // Add directional light to the scene
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White directional light
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      // Load the 3D model
      const loader = new GLTFLoader();
      loader.load(
        'src/assets/Room.glb',
        function (gltf) {
          // Add the loaded model to the scene
          scene.add(gltf.scene);
          gltf.scene.position.set(-0.75, 0, 0); // Set initial position of the model
          gltf.scene.rotation.y = Math.PI / 4; // Set initial rotation of the model (45 degrees)
          gltf.scene.scale.set(0.1, 0.1, 0.1); // Set scale of the model
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }

    // Function to handle window resize events
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Function to animate the scene
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update(); // Update controls for camera movement
    }

    window.addEventListener('resize', onWindowResize); // Event listener for window resize

    init(); // Initialize the scene
    animate(); // Start animation loop
  }
}
</script>

<style scoped>
.office {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
}
</style>
