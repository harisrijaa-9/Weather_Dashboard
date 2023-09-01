import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function Globe({ cityCoordinates }) {
  const containerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

   
    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x00aaff });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);

  
    scene.add(globe);

    camera.position.z = 5;

    // Handle window resize
    const handleResize = () => {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    containerRef.current.appendChild(renderer.domElement);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cityCoordinates]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "300px" }}></div>
  );
}

export default Globe;
