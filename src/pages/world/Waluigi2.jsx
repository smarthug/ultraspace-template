/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 waluigi2.glb --transform 
Files: waluigi2.glb [39.6KB] > C:\Users\kirkl\Desktop\20240717\megic-pwa-test\public\models\waluigi2-transformed.glb [13.09KB] (67%)
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Waluigi(props) {
  const { nodes, materials } = useGLTF('models/waluigi2-transformed.glb')
  return (
    <group {...props} dispose={null} castShadow>
      <mesh geometry={nodes.unnamed_mtl_0002.geometry} castShadow material={materials['img1.png']} rotation={[Math.PI / 2, 0, 0]} scale={0.15} />
      <mesh geometry={nodes.unnamed_mtl_0003.geometry} castShadow material={materials['img2.png']} rotation={[Math.PI / 2, 0, 0]} scale={0.15} />
      <mesh geometry={nodes.unnamed_mtl_0004.geometry} castShadow material={materials['img3.png']} rotation={[Math.PI / 2, 0, 0]} scale={0.15} />
    </group>
  )
}

useGLTF.preload('models/waluigi2-transformed.glb')
