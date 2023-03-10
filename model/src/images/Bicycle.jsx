/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 bicycle.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/bicycle.glb");
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        geometry={nodes.frame.geometry}
        material={materials.frame}
        position={[0.07, 0.35, 0.44]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["welding-seams"].geometry}
        material={materials["Material.001"]}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.mudgaurd.geometry}
        material={materials.mudgaurd}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.front_rim.geometry}
        material={materials.front_rim}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rare_rim.geometry}
        material={materials.rare_rim}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tire.geometry}
        material={materials.tire}
        position={[0, 0.33, -0.63]}
      />
      <mesh
        geometry={nodes.Cylinder004_Cylinder007.geometry}
        material={materials.fork}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Circle001002.geometry}
        material={materials.cables}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.BezierCurve006.geometry}
        material={materials["cable-sleeves"]}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.steam.geometry}
        material={materials.steam}
        position={[0, 0.33, 0.45]}
      />
      <mesh
        geometry={nodes.handlebar.geometry}
        material={materials.handlebar}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.seat.geometry}
        material={materials.Seat}
        position={[0, 0.33, 0.45]}
      />
      <mesh
        geometry={nodes.brake.geometry}
        material={materials.brake}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.front_derailleur.geometry}
        material={materials["front-derailleur"]}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[0, 0.33, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cylinder013_Cylinder010.geometry}
          material={materials.gear_shiter_right}
        />
        <mesh
          geometry={nodes.Cylinder013_Cylinder010_1.geometry}
          material={materials.gear_shifter_left}
        />
        <mesh
          geometry={nodes.Cylinder013_Cylinder010_2.geometry}
          material={materials.gear_shiter_glass}
        />
      </group>
      <mesh
        geometry={nodes.reflector.geometry}
        material={materials.reflector}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[0, 0.33, 0.45]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["reflector-transparent_Circle005005"].geometry}
          material={materials.reflector_r}
        />
        <mesh
          geometry={nodes["reflector-transparent_Circle005005_1"].geometry}
          material={materials.reflector_w}
        />
      </group>
      <mesh
        geometry={nodes.rare_derailluer.geometry}
        material={materials.rare_derailleur}
        position={[0.01, 0.32, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.crankset.geometry}
        material={materials.crankset}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.cap.geometry}
        material={materials.cap}
        position={[0, 0.33, 0.45]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.sprockets.geometry}
        material={materials.sprockets}
        position={[0, 0.33, 0.45]}
      />
    </group>
  );
}

useGLTF.preload("/bicycle.glb");
