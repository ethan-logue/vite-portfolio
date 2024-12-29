import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';

const FlowerScene: React.FC = () => {
    const { scene } = useGLTF('/src/models/FlowerScene.glb');
    scene.position.set(0, -5, 0); // Move the flower object down by adjusting its position
    scene.rotateY(-Math.PI / 2); // Rotate the flower object to face the camera
    scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;

            // Ensure the material supports lighting
            if (object.material && !(object.material instanceof THREE.MeshStandardMaterial)) {
                object.material = new THREE.MeshStandardMaterial({
                    color: object.material.color || 0xffffff,
                    map: object.material.map || null,
                });
            }

            // Fix normals if needed
            if (object.geometry) {
                object.geometry.computeVertexNormals();
            }
        }
    });

    return (
        <Canvas
        shadows
            camera={{ position: [0, 0, 10] }}
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <ambientLight intensity={0.5} />
            <SpotLightWithHelper position={[-5, 10, 10]} />
            <mesh receiveShadow position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[50, 50]} />
                <shadowMaterial opacity={0.5} />
            </mesh>
            <primitive object={scene} />
            <axesHelper args={[5]} />
            <OrbitControls />
        </Canvas>
    );
};

const SpotLightWithHelper: React.FC<{ position: [number, number, number] }> = ({ position }) => {
    const spotLightRef = useRef<THREE.SpotLight>(null!);
    useHelper(spotLightRef, THREE.SpotLightHelper, 'cyan');
    return (
        <spotLight
            ref={spotLightRef}
            position={position}
            angle={0.5}
            penumbra={1}
            color={0xffffff}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
        />
    );
};

export default FlowerScene;