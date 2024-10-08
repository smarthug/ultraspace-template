import { Vector3 } from "three";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import axios from "axios";


function parseEventSourceData(data) {
  // 데이터의 각 줄을 분리하여 배열로 변환
  const lines = data.split('\n').filter(line => line.startsWith('data:'));
  
  // response를 담을 배열
  let responses = [];
  
  // 각 라인의 data 부분을 파싱하여 response를 추출
  lines.forEach(line => {
    if(line === 'data: [DONE]') {
      return;
    }
    try {
      const jsonString = line.replace('data: ', '').trim();
      const parsedData = JSON.parse(jsonString);
      responses.push(parsedData.response);
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  });

  // responses 배열을 문자열로 결합하여 최종 텍스트 반환
  return responses.join('');
}

async function Llama() {
  console.log("Llama");
  const question = prompt("What do you want from me?", "Do you like Kimchi?");
  let tmp = ""
  try {
    const res = await axios.post(
      "https://hello-ai.kirklayer6590.workers.dev/",
      {
        question: question,
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed to send request");
    }

    // console.log("res", res);

    const result = parseEventSourceData(res.data);

    console.log("result", result);

    alert(result);

    // const source = new EventSource("/api"); // Workers AI streaming endpoint
    
    // source.onmessage = (event) => {
    //   if (event.data === "[DONE]") {
    //     source.close();
    //     console.log("tmp", tmp);
    //     return;
    //   }
    //   const data = JSON.parse(event.data);
    //   // console.log("data", data);
    //   tmp = tmp + data.response;
    //   // setResponse(prevResponse => prevResponse + data.response);
    // };
  } catch (error) {
    console.error("Error:", error);
  }
}


export default create(
  subscribeWithSelector((set) => {
    return {
      talk: Llama,
      status: "playing", // intro | loading | playing | finishing | finished
      setStatus: (status) => {
        console.log("setStatus");
        set((state) => ({ status }));
      },

      isTouch: true,
      setIsTouch: (isTouch) => {
        set((state) => ({ isTouch }));
      },

      levels: [
        {
          modelPath: "./levels/0.glb",
          instructions: "Walk on the blue square",
        },
        {
          modelPath: "./levels/1.glb",
          instructions: "How about multiple squares?",
        },
        {
          modelPath: "./levels/2.glb",
          instructions: "That red one looks friendly",
        },
        { modelPath: "./levels/3.glb", instructions: "Press SPACE to jump" },
        {
          modelPath: "./levels/4.glb",
          instructions: "I know you like to break stuff",
        },
        { modelPath: "./levels/5.glb", instructions: "You get the idea" },
        { modelPath: "./levels/6.glb", instructions: "Press SHIFT to sprint" },
        { modelPath: "./levels/7.glb", instructions: "Huh?" },
        { modelPath: "./levels/8.glb", instructions: "You got this!" },
        { modelPath: "./levels/9.glb", instructions: "Do you like puzzles?" },
        {
          modelPath: "./levels/10.glb",
          instructions: 'Don\'t forget to scream "Parkour!"',
        },
        { modelPath: "./levels/11.glb", instructions: "Take it slow" },
      ],
      levelIndex: 0,
      start: () => {
        set((state) => ({
          status: "playing",
          levelIndex: 0,
        }));
      },
      finishLevel: () => {
        set((state) => ({ status: "finishing" }));

        setTimeout(() => {
          set((state) => ({ status: "finished" }));

          setTimeout(() => {
            set((state) => {
              if (state.levelIndex >= state.levels.length - 1)
                return {
                  status: "outro",
                };
              else
                return {
                  levelIndex: state.levelIndex + 1,
                  status: "playing",
                };
            });
          }, 500);
        }, 1000);
      },

      playerPosition: new Vector3(0, 1, 0),

      goodBlockDistance: { value: 999 },
      badBlockDistance: { value: 999 },

      goodVisitedCount: 0,
      goodVisited: () => {
        set((state) => ({ goodVisitedCount: state.goodVisitedCount + 1 }));
      },

      deathCount: 0,
      death: () => {
        set((state) => ({ deathCount: state.deathCount + 1 }));
      },
    };
  })
);

