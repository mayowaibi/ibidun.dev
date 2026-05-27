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

		const mount = mountRef.current;

		const getFrustumHeight = () => (window.innerWidth < 768 ? 4.2 : 3.8);
		const getScale = () => (window.innerWidth < 768 ? 1.35 : 1.55);
		const updateCamera = () => {
			const frustumHeight = getFrustumHeight();
			const aspect = mount.clientWidth / mount.clientHeight;

			camera.left = (-frustumHeight * aspect) / 2;
			camera.right = (frustumHeight * aspect) / 2;
			camera.top = frustumHeight;
			camera.bottom = 0;
			camera.updateProjectionMatrix();
		};
		const pinModelToCanvasBottom = (object: THREE.Object3D) => {
			const scale = getScale();
			object.scale.set(scale, scale, scale);
			object.position.set(0, 0, 0);

			const box = new THREE.Box3().setFromObject(object);
			const center = box.getCenter(new THREE.Vector3());

			object.position.set(-center.x, -box.min.y, -center.z);
		};

		// Scene, camera, and renderer setup
		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(
			-1,
			1,
			1,
			0,
			0.1,
			1000
		);
		camera.position.set(0, 0, 10);
		camera.lookAt(0, 0, 0);
		updateCamera();

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(mount.clientWidth, mount.clientHeight);
		mount.appendChild(renderer.domElement);

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

		loader.load(
			modelSrc,
			(gltf) => {
				model = gltf.scene;
				pinModelToCanvasBottom(model);
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
			if (!mountRef.current) return;

			renderer.setSize(
				mountRef.current.clientWidth,
				mountRef.current.clientHeight
			);
			updateCamera();

			if (model) {
				pinModelToCanvasBottom(model);
			}
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
			if (mount.contains(renderer.domElement)) {
				mount.removeChild(renderer.domElement);
			}
		};
	}, [modelSrc]);

	return (
		<div
			ref={mountRef}
			style={{
				position: "absolute",
				inset: 0,
				left: 0,
				width: "100%",
				height: "100%",
			}}
			className="animate-appear"
		/>
	);
};

export default ThreejsScene;
