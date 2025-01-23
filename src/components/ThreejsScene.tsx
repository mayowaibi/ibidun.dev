"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ThreejsScene: React.FC = () => {
	const mountRef = useRef<HTMLDivElement | null>(null);
	const head = new URL("@/assets/models/head.glb", import.meta.url).href;

	useEffect(() => {
		if (!mountRef.current) return;

		// Set up the scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 4;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		// Add ambient light
		const ambientLight = new THREE.AmbientLight(0xffffff, 1);
		scene.add(ambientLight);

		// Add a directional light to cast shadows
		const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight.position.set(5, 5, 5);
		scene.add(directionalLight);

		// Load the 3D model
		const loader = new GLTFLoader();
		let model: THREE.Object3D | undefined;

		loader.load(
			head,
			(gltf) => {
				model = gltf.scene;

				model.scale.set(0.5, 0.5, 0.5);
				scene.add(model);
			},
			undefined,
			(error) => {
				console.error("An error occurred while loading the model:", error);
			}
		);

		// Handle mouse interaction
		const mouse = new THREE.Vector2();
		let targetRotation = new THREE.Vector2(0, 0);

		const handleMouseMove = (event: MouseEvent) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1; // Horizontal
			mouse.y = (event.clientY / window.innerHeight) * 2 - 1; // Vertical

			targetRotation.set(mouse.y, mouse.x);
		};

		window.addEventListener("pointermove", handleMouseMove);

		// Animation loop with damping
		const animate = () => {
			requestAnimationFrame(animate);

			if (model) {
				// Smoothly interpolate the model's rotation towards the target rotation
				model.rotation.x += (targetRotation.x - model.rotation.x) * 0.1;
				model.rotation.y += (targetRotation.y - model.rotation.y) * 0.1;
			}

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener("pointermove", handleMouseMove);
			if (mountRef.current) {
				mountRef.current.removeChild(renderer.domElement);
			}
		};
	}, []);

	return (
		<div
			ref={mountRef}
			style={{
				position: "absolute",
				top: "-20%",
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: -1,
			}}
			className="animate-appear"
		/>
	);
};

export default ThreejsScene;
