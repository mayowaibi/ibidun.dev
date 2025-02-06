"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ThreejsScene: React.FC = () => {
	const mountRef = useRef<HTMLDivElement | null>(null);
	const modelSrc = new URL(
		"@/assets/models/avatar-with-macbook.glb",
		import.meta.url
	).href;

	useEffect(() => {
		if (!mountRef.current) return;

		// Scene, camera, and renderer setup
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 4;
		camera.position.y = 1;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		// Ambient light
		const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
		scene.add(ambientLight);

		// Directional light for avatar
		const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight1.position.set(0, 3, 5);
		scene.add(directionalLight1);

		// Directional light for macbook
		const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
		directionalLight2.position.set(0, -2, 5);
		scene.add(directionalLight2);

		// Load 3D model
		const loader = new GLTFLoader();
		let model: THREE.Object3D | undefined;
		let head: THREE.Object3D | undefined;
		let macbook: THREE.Object3D | undefined;

		loader.load(
			modelSrc,
			(gltf) => {
				model = gltf.scene;

				model.scale.set(2, 2, 2);
				scene.add(model);

				head = model.getObjectByName("Head");
			},
			undefined,
			(error) => {
				console.error("An error occurred while loading the model:", error);
			}
		);

		// Handle resizing
		const handleResize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};
		window.addEventListener("resize", handleResize);

		// Mouse interaction
		const mouse = new THREE.Vector2();
		let targetRotation = new THREE.Vector2(0, 0);

		const handleMouseMove = (event: MouseEvent) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = (event.clientY / window.innerHeight) * 2 - 1;

			targetRotation.set(mouse.y, mouse.x);
		};

		window.addEventListener("pointermove", handleMouseMove);

		const animate = () => {
			requestAnimationFrame(animate);

			const maxTilt = Math.PI / 7;
			const minTilt = -Math.PI / 5;

			if (head) {
				// Smooth interpolation
				head.rotation.x += (targetRotation.x - head.rotation.x) * 0.06;
				head.rotation.y += (targetRotation.y - head.rotation.y) * 0.06;

				// Clamping X-axis rotation
				head.rotation.x = THREE.MathUtils.clamp(
					head.rotation.x,
					minTilt,
					maxTilt
				);
			}

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener("pointermove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
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
				top: "-26%",
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
