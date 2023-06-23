import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model1() {
    const model = useGLTF("Perseverance.glb");
    const x = 1.2;
    return (
        <primitive object={model.scene} dispose={null} position={[0, -2, 0]} scale={[x, x, x]} />
    )
}

export function Model2() {
    const model = useGLTF("Ingenuity.glb");
    const y = 5;
    return (
        <primitive object={model.scene} dispose={null} position={[0, -1.2, 0]} scale={[y, y, y]} />
    )
}