import { create } from "zustand";


export const useMegicStore = create((set) => ({


    megicPoints: 1000,
    setMegicPoints: (megicPoints) => set({ megicPoints }),
    
    rideCyberTruck: false,
    setRideCyberTruck: (rideCyberTruck) => set({ rideCyberTruck }),
}));
