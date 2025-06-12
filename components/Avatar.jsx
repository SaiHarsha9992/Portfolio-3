import React, { useEffect, useState, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/optimized.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[Object.keys(actions)[0]];
    if (action) {
      action.reset().fadeIn(0.5).play();
    }
  }, [actions]);
  const blinkInterval = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);

  const startBlinking = () => {
    if (blinkInterval.current) clearInterval(blinkInterval.current);
    blinkInterval.current = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 80); // blink duration
    }, 3000); // blink every 3 seconds
  };

  useEffect(() => {
    startBlinking();
    return () => clearInterval(blinkInterval.current);
  }, []);

  useFrame(() => {
    if (!nodes.AvatarHead002 || !nodes.AvatarEyelashes002) return;

    // Blink morph target influence
    const leftEyeIdxHead =
      nodes.AvatarHead002.morphTargetDictionary["eyeBlinkLeft"];
    const rightEyeIdxHead =
      nodes.AvatarHead002.morphTargetDictionary["eyeBlinkRight"];
    const leftEyeIdxLash =
      nodes.AvatarEyelashes002.morphTargetDictionary["eyeBlinkLeft"];
    const rightEyeIdxLash =
      nodes.AvatarEyelashes002.morphTargetDictionary["eyeBlinkRight"];

    if (isBlinking) {
      nodes.AvatarHead002.morphTargetInfluences[leftEyeIdxHead] = 1;
      nodes.AvatarHead002.morphTargetInfluences[rightEyeIdxHead] = 1;
      nodes.AvatarEyelashes002.morphTargetInfluences[leftEyeIdxLash] = 1;
      nodes.AvatarEyelashes002.morphTargetInfluences[rightEyeIdxLash] = 1;
    } else {
      nodes.AvatarHead002.morphTargetInfluences[leftEyeIdxHead] = 0;
      nodes.AvatarHead002.morphTargetInfluences[rightEyeIdxHead] = 0;
      nodes.AvatarEyelashes002.morphTargetInfluences[leftEyeIdxLash] = 0;
      nodes.AvatarEyelashes002.morphTargetInfluences[rightEyeIdxLash] = 0;
    }

    // Keep mouth dimples active (optional)
    nodes.AvatarHead002.morphTargetInfluences[
      nodes.AvatarHead002.morphTargetDictionary["mouthDimpleLeft"]
    ] = 1;
    nodes.AvatarHead002.morphTargetInfluences[
      nodes.AvatarHead002.morphTargetDictionary["mouthDimpleRight"]
    ] = 1;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera"
          position={[122.763, 128.287, 816.265]}
          rotation={[-Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4" />
        </group>
        <group
          name="Camera001"
          position={[119.738, 127.672, 816.745]}
          rotation={[-Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4001" />
        </group>
        <group
          name="Camera002"
          position={[119.922, 127.642, 816.617]}
          rotation={[-Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4002" />
        </group>
        <group
          name="Camera003"
          position={[121.387, 127.672, 816.692]}
          rotation={[Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4003" />
        </group>
        <group
          name="Camera004"
          position={[121.571, 127.642, 816.564]}
          rotation={[Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4004" />
        </group>
        <group
          name="Camera005"
          position={[121.571, 127.642, 816.564]}
          rotation={[-Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4005" />
        </group>
        <group
          name="Camera006"
          position={[122.578, 128.317, 816.393]}
          rotation={[Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4006" />
        </group>
        <group
          name="Camera007"
          position={[122.763, 128.287, 816.265]}
          rotation={[Math.PI, 0.756, 2.68]}
          scale={100}
        >
          <group name="Object_4007" />
        </group>
        <group
          name="Sketchfab_model001"
          position={[-0.019, 0.002, 0.05]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group
            name="14556ffca3f14e5da4b8f4d0802a012bfbx001"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode1">
              <group
                name="Camera008"
                position={[122.763, 128.287, 816.265]}
                rotation={[-Math.PI, 0.756, 2.68]}
                scale={100}
              >
                <group name="Object_4008" />
              </group>
              <group
                name="CICADABodyguard_ARM001"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={435.123}
              />
            </group>
          </group>
        </group>
        <group
          name="Armature"
          position={[-0.028, -0.034, -0.036]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <skinnedMesh
            name="AvatarEyelashes002"
            geometry={nodes.AvatarEyelashes002.geometry}
            material={materials["AvatarEyelashes.005"]}
            skeleton={nodes.AvatarEyelashes002.skeleton}
            morphTargetDictionary={
              nodes.AvatarEyelashes002.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.AvatarEyelashes002.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="AvatarHead002"
            geometry={nodes.AvatarHead002.geometry}
            material={materials["AvatarHead.001"]}
            skeleton={nodes.AvatarHead002.skeleton}
            morphTargetDictionary={nodes.AvatarHead002.morphTargetDictionary}
            morphTargetInfluences={nodes.AvatarHead002.morphTargetInfluences}
          />
          <skinnedMesh
            name="AvatarLeftEyeball002"
            geometry={nodes.AvatarLeftEyeball002.geometry}
            material={materials["AvatarRightEyeball.002"]}
            skeleton={nodes.AvatarLeftEyeball002.skeleton}
          />
          <skinnedMesh
            name="AvatarRightEyeball002"
            geometry={nodes.AvatarRightEyeball002.geometry}
            material={materials["AvatarRightEyeball.002"]}
            skeleton={nodes.AvatarRightEyeball002.skeleton}
          />
          <skinnedMesh
            name="AvatarTeethLower002"
            geometry={nodes.AvatarTeethLower002.geometry}
            material={materials["AvatarTeethUpper.005"]}
            skeleton={nodes.AvatarTeethLower002.skeleton}
            morphTargetDictionary={
              nodes.AvatarTeethLower002.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.AvatarTeethLower002.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="AvatarTeethUpper002"
            geometry={nodes.AvatarTeethUpper002.geometry}
            material={materials["AvatarTeethUpper.005"]}
            skeleton={nodes.AvatarTeethUpper002.skeleton}
          />
          <skinnedMesh
            name="Object_13001"
            geometry={nodes.Object_13001.geometry}
            material={materials.Coat_d}
            skeleton={nodes.Object_13001.skeleton}
          />
          <skinnedMesh
            name="Object_14001"
            geometry={nodes.Object_14001.geometry}
            material={materials.Turtleneck_D}
            skeleton={nodes.Object_14001.skeleton}
          />
          <skinnedMesh
            name="Object_16001"
            geometry={nodes.Object_16001.geometry}
            material={materials["pants_d2.004"]}
            skeleton={nodes.Object_16001.skeleton}
          />
          <skinnedMesh
            name="Object_18001"
            geometry={nodes.Object_18001.geometry}
            material={materials["pants_d2.004"]}
            skeleton={nodes.Object_18001.skeleton}
          />
          <skinnedMesh
            name="Object_19001"
            geometry={nodes.Object_19001.geometry}
            material={materials.pants_d}
            skeleton={nodes.Object_19001.skeleton}
          />
          <skinnedMesh
            name="Object_21001"
            geometry={nodes.Object_21001.geometry}
            material={materials.Shoes_d3}
            skeleton={nodes.Object_21001.skeleton}
          />
          <skinnedMesh
            name="Object_23001"
            geometry={nodes.Object_23001.geometry}
            material={materials.Shoes_d3}
            skeleton={nodes.Object_23001.skeleton}
          />
          <skinnedMesh
            name="Object_25001"
            geometry={nodes.Object_25001.geometry}
            material={materials.Boots_d}
            skeleton={nodes.Object_25001.skeleton}
          />
          <skinnedMesh
            name="Object_27001"
            geometry={nodes.Object_27001.geometry}
            material={materials["arms_d.005"]}
            skeleton={nodes.Object_27001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/optimized.glb");
