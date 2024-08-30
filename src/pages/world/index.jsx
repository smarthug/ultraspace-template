// import "./style.css";
import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { KeyboardControls } from "@react-three/drei";
// import Interface from "./Interface.jsx";
import TouchControls from "./TouchControls.jsx";
import { Leva } from "leva";
import { OrthographicCamera } from "@react-three/drei";

export default function App() {
  return (
    <>
      {/* <StreamingComponent /> */}
      <Leva collapsed hidden />
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
          { name: "jump", keys: ["Space"] },
          { name: "talk", keys: ["KeyE"] },
        ]}
      >
        <TouchControls />
        <Canvas
          flat
          shadows
          camera={{
            fov: 25,
            near: 0.1,
            far: 200,
            position: [0, 4, 6],
            zoom: 1,
          }}
        >
          {/* <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={30} /> */}
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}



function StreamingComponent() {
  const [response, setResponse] = useState('hello world');

  useEffect(() => {
    const source = new EventSource("/api"); // Workers AI streaming endpoint
    
    source.onmessage = (event) => {
      if (event.data === "[DONE]") {
        source.close();
        return;
      }
      const data = JSON.parse(event.data);
      setResponse(prevResponse => prevResponse + data.response);
    };

    // Clean up the EventSource when the component is unmounted
    return () => {
      source.close();
    };
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: response }} />
    </div>
  );
}




// POST https://hello-ai.kirklayer6590.workers.dev/ HTTP/1.1
// content-type: application/json

// {
// 	"question": "Do you like 2Pac?"
// }
