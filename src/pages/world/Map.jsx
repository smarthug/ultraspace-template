import { RigidBody } from "@react-three/rapier";
import { useControls } from "leva";

import { Waluigi } from "./Waluigi2";

import CyberTruck from "./CyberTruck";

export default function Floor({ size = 10 }) {
  const settings = useControls("floor", {
    color: { value: "#2a2a2a" },
  });

  return (
    <>
      <RigidBody type="fixed">
        <mesh scale={[size, 1, size]} position-y={-0.5} receiveShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshLambertMaterial dithering color={settings.color} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed"  colliders={"cuboid"}>
        <Waluigi position={[0, 0, 3]} rotation-y={Math.PI} />
      </RigidBody>

      {/* <CyberTruck position={[-3, 0, -2]} rotation-y={Math.PI} /> */}
    </>
  );
}



