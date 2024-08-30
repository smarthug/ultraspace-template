import { EcctrlJoystick } from "ecctrl";
import { useEffect, useMemo } from "react";
import {
  BoxGeometry,
  CylinderGeometry,
  Euler,
  MeshBasicMaterial,
  SphereGeometry,
  Vector3,
} from "three";
import useGame from "./stores/useGame.jsx";
import { useKeyboardControls } from "@react-three/drei";

export default function TouchControls() {
  const [isTouch] = useGame((state) => [state.isTouch]);
  // const [isTouch] = useGame((state) => [state.isTouch]);
  const talk = useGame((state) => state.talk);

  const ePressed = useKeyboardControls((state) => state.talk);

  const cylinderGeometry = useMemo(
    () => new CylinderGeometry(2.3, 2.1, 0.3, 32, 1),
    []
  );
  const sphereGeometry = useMemo(() => new SphereGeometry(1.4, 32, 8), []);
  const boxGeometry = useMemo(() => new BoxGeometry(0.5, 0.5, 0.5), []);
  const activeMaterial = useMemo(
    () => new MeshBasicMaterial({ color: 0xffffff, wireframe: false }),
    []
  );
  const passiveMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );

  const passiveMaterial2 = useMemo(
    () =>
      new MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );

  const activeMaterial2 = useMemo(
    () => new MeshBasicMaterial({ color: 0xff5722, wireframe: false }),
    []
  );

  useEffect(() => {
    console.log("ePressed", ePressed);
    if (ePressed) {
      talk();
    }
  }, [ePressed]);

  if (!isTouch) return null;

  return (
    <EcctrlJoystick
      joystickPositionBottom={56}
      joystickBaseProps={{
        geometry: cylinderGeometry,
        material: passiveMaterial,
      }}
      joystickStickProps={{
        material: passiveMaterial,
      }}
      joystickHandleProps={{
        geometry: sphereGeometry,
        rotation: new Euler(Math.PI * 0.5, 0, 0),
        material: activeMaterial,
      }}
      buttonPositionBottom={56}
      buttonLargeBaseProps={{
        scale: new Vector3(4, 4, 4),
        geometry: boxGeometry,
        material: passiveMaterial,
      }}
      buttonNumber={2}
      buttonTop1Props={{
        scale: new Vector3(2, 2, 2),
        geometry: boxGeometry,
        material: activeMaterial,
      }}
      buttonTop2Props={{
        scale: new Vector3(2, 2, 2),
        geometry: boxGeometry,
        material: activeMaterial,
        onClick: talk,
      }}
    />
  );
}
