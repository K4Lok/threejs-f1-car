/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/car.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/car.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.black} position={[-1.84, 1.74, 0]} scale={[0.26, 0.03, 1.51]} />
      <group position={[5.7, 2.83, 0]} scale={[0.37, 0.02, 0.96]}>
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.body} />
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.Grey} />
        <mesh geometry={nodes.Cube002_3.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube002_4.geometry} material={materials['Livery Colour 2']} />
        <mesh geometry={nodes.Cube002_5.geometry} material={materials.backlight} />
        <mesh geometry={nodes.Cube002_6.geometry} material={materials['mirror.001']} />
      </group>
      <group position={[5.26, 1.98, -0.19]} rotation={[0, 0, -Math.PI / 2]} scale={[0.07, 0.4, 0.07]}>
        <mesh geometry={nodes.Cylinder005.geometry} material={materials.exhaust} />
        <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.Grey} />
      </group>
      <group position={[-4.32, 1.52, -1.64]} rotation={[Math.PI, 0, Math.PI]} scale={[0.1, 0.17, 0.17]}>
        <mesh geometry={nodes.Cube018.geometry} material={materials.tyre} />
        <mesh geometry={nodes.Cube018_1.geometry} material={materials.rims} />
        <mesh geometry={nodes.Cube018_2.geometry} material={materials.dark} />
        <mesh geometry={nodes.Cube018_3.geometry} material={materials['tyre type colour']} />
      </group>
      <group position={[5.17, 1.52, -1.64]} rotation={[Math.PI, 0, Math.PI]} scale={[0.1, 0.17, 0.17]}>
        <mesh geometry={nodes.Cube020.geometry} material={materials.tyre} />
        <mesh geometry={nodes.Cube020_1.geometry} material={materials.rims} />
        <mesh geometry={nodes.Cube020_2.geometry} material={materials.dark} />
        <mesh geometry={nodes.Cube020_3.geometry} material={materials['tyre type colour']} />
      </group>
      <group position={[-1.22, 2.31, -0.04]} rotation={[0, Math.PI / 2, 0]} scale={[0.09, 0.09, 0.03]}>
        <mesh geometry={nodes.Cube005_1.geometry} material={materials['Steering Wheel']} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials.black} />
        <mesh geometry={nodes.Cube005_3.geometry} material={materials['LED ']} />
        <mesh geometry={nodes.Cube005_4.geometry} material={materials['Steering Wheel Screen']} />
        <mesh geometry={nodes.Cube005_5.geometry} material={materials['Gear up/down']} />
      </group>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Steering Wheel Button 1']} position={[-1.2, 2.22, -0.01]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.02} />
      <group position={[-1.22, 2.22, -0.01]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.04}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Switch Pointer']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.Metal} />
      </group>
      <group position={[-1.2, 2.38, -0.18]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.02}>
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Button Cover']} />
        <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['Pit Confirm']} />
      </group>
      <group position={[-1.2, 2.38, 0.17]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.02}>
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Button Cover']} />
        <mesh geometry={nodes.Cylinder006_1.geometry} material={materials.Neutral} />
      </group>
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['Rotary Switch']} position={[-1.19, 2.17, 0.09]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.01} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials['Rotary Switch']} position={[-1.19, 2.21, 0.06]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.01} />
      <group position={[-1.21, 2.22, 0.06]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.02}>
        <mesh geometry={nodes.Cylinder010_1.geometry} material={materials['Switch Pointer']} />
        <mesh geometry={nodes.Cylinder010_2.geometry} material={materials['S.P. Colour 1']} />
        <mesh geometry={nodes.Cylinder010_3.geometry} material={materials['S.P. Colour 2']} />
        <mesh geometry={nodes.Cylinder010_4.geometry} material={materials['S.P. Colur 3']} />
        <mesh geometry={nodes.Cylinder010_5.geometry} material={materials['S.P. Colour 4']} />
        <mesh geometry={nodes.Cylinder010_6.geometry} material={materials['S.P. Colour 5']} />
        <mesh geometry={nodes.Cylinder010_7.geometry} material={materials['S.P. Colour 6']} />
        <mesh geometry={nodes.Cylinder010_8.geometry} material={materials['S.P. Colour 7']} />
        <mesh geometry={nodes.Cylinder010_9.geometry} material={materials['S.P. Colour 8']} />
        <mesh geometry={nodes.Cylinder010_10.geometry} material={materials['S.P. Colour 9']} />
        <mesh geometry={nodes.Cylinder010_11.geometry} material={materials['S.P. Colour 10']} />
      </group>
      <group position={[-1.21, 2.17, 0.09]} rotation={[Math.PI / 2, 0, -1.57]} scale={0.02}>
        <mesh geometry={nodes.Cylinder013_1.geometry} material={materials['Switch Pointer']} />
        <mesh geometry={nodes.Cylinder013_2.geometry} material={materials['S.P. Colour 1']} />
        <mesh geometry={nodes.Cylinder013_3.geometry} material={materials['S.P. Colour 2']} />
        <mesh geometry={nodes.Cylinder013_4.geometry} material={materials['S.P. Colur 3']} />
        <mesh geometry={nodes.Cylinder013_5.geometry} material={materials['S.P. Colour 4']} />
        <mesh geometry={nodes.Cylinder013_6.geometry} material={materials['S.P. Colour 5']} />
        <mesh geometry={nodes.Cylinder013_7.geometry} material={materials['S.P. Colour 6']} />
        <mesh geometry={nodes.Cylinder013_8.geometry} material={materials['S.P. Colour 7']} />
        <mesh geometry={nodes.Cylinder013_9.geometry} material={materials['S.P. Colour 8']} />
        <mesh geometry={nodes.Cylinder013_10.geometry} material={materials['S.P. Colour 9']} />
        <mesh geometry={nodes.Cylinder013_11.geometry} material={materials['S.P. Colour 10']} />
      </group>
      <mesh geometry={nodes.Cylinder001.geometry} material={materials.black} position={[-5.39, 1.6, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.21, 0.21, 0.07]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials.Background} position={[0, 14.52, 0]} scale={[26.05, 13.87, 26.05]} />
    </group>
  )
}

useGLTF.preload('/car.glb')
