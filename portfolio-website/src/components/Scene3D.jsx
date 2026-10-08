import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scene3D() {
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for all rotating 3D elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Outer Geodesic Icosahedron Wireframe (Neural Lattice)
    const outerGeometry = new THREE.IcosahedronGeometry(2.2, 2);
    const outerWireframe = new THREE.WireframeGeometry(outerGeometry);
    const outerLine = new THREE.LineSegments(
      outerWireframe,
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.45,
      })
    );
    globeGroup.add(outerLine);

    // 2. Inner Core Wireframe (Violet)
    const innerGeometry = new THREE.IcosahedronGeometry(1.4, 1);
    const innerWireframe = new THREE.WireframeGeometry(innerGeometry);
    const innerLine = new THREE.LineSegments(
      innerWireframe,
      new THREE.LineBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.6,
      })
    );
    globeGroup.add(innerLine);

    // 3. Node Points (Vertices on outer lattice)
    const nodeCount = outerGeometry.attributes.position.count;
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', outerGeometry.attributes.position);

    // Create a circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(56, 189, 248, 1)');
    grad.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
    grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();
    const particleTexture = new THREE.CanvasTexture(canvas);

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    globeGroup.add(nodes);

    // 4. Orbiting Data Particles
    const particlesCount = 200;
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.1,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x38bdf8, 2, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      if (isDragging) {
        const deltaX = event.clientX - prevMouseX;
        const deltaY = event.clientY - prevMouseY;
        globeGroup.rotation.y += deltaX * 0.01;
        globeGroup.rotation.x += deltaY * 0.01;
        prevMouseX = event.clientX;
        prevMouseY = event.clientY;
      } else {
        targetX = x * 1.2;
        targetY = y * 1.2;
      }
    };

    const handleMouseDown = (event) => {
      isDragging = true;
      prevMouseX = event.clientX;
      prevMouseY = event.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousemove', handleMouseMove);
    currentMount.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Window Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(currentMount);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse orientation follow
      if (!isDragging) {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;
        globeGroup.rotation.y += 0.0035;
        globeGroup.rotation.x = mouseY * 0.6;
        globeGroup.rotation.z = mouseX * 0.4;
      }

      // Pulse and gentle wave
      const scale = 1 + Math.sin(elapsedTime * 1.8) * 0.03;
      innerLine.scale.set(scale, scale, scale);
      innerLine.rotation.y -= 0.005;
      innerLine.rotation.x += 0.002;

      // Particle cloud orbit
      particleCloud.rotation.y = elapsedTime * 0.08;
      particleCloud.rotation.x = Math.sin(elapsedTime * 0.05) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      currentMount.removeEventListener('mousemove', handleMouseMove);
      currentMount.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      outerGeometry.dispose();
      outerWireframe.dispose();
      innerGeometry.dispose();
      innerWireframe.dispose();
      nodeGeometry.dispose();
      particleGeo.dispose();
      nodeMaterial.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative flex h-[380px] sm:h-[440px] md:h-[480px] w-full items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="h-full w-full" />

      {/* Futuristic 3D Overlay Badges */}
      <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[#050811]/80 px-3 py-1 text-xs font-mono text-cyan-300 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
        </span>
        <span>AI // DATA LATTICE 3D</span>
      </div>

      <div className="pointer-events-none absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider text-slate-400/80 bg-slate-900/60 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {isHovered ? 'Drag to rotate 3D node' : 'Interactive WebGL'}
      </div>
    </div>
  );
}
