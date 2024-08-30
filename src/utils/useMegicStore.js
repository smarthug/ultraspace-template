import { create } from "zustand";


export const useMegicStore = create((set) => ({


    megicPoints: 1000,
    setMegicPoints: (megicPoints) => set({ megicPoints }),
 
}));
