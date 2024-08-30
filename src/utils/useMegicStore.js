import { create } from "zustand";


export const useMegicStore = create((set) => ({
    //   sum: 2,
    //   setSum: (sum) => set({ sum }),
    //   isOdd: false,
    //   setIsOdd: (isOdd) => set({ isOdd }),
    //   isYourGuessOdd: false,
    //   setIsYourGuessOdd: (isYourGuessOdd) => set({ isYourGuessOdd }),
    //   betAmount: 100,
    //   setBetAmount: (betAmount) => set({ betAmount }),

    //   firstDice: 1,
    //   setFirstDice: (firstDice) => set({ firstDice }),
    //   isFirstDiceRolling: false,
    //   setIsFirstDiceRolling: (isFirstDiceRolling) => set({ isFirstDiceRolling }),
    //   secondDice: 1,
    //   setSecondDice: (secondDice) => set({ secondDice }),
    //   isSecondDiceRolling: false,
    //   setIsSecondDiceRolling: (isSecondDiceRolling) => set({ isSecondDiceRolling }),
    //   //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    //   //   removeAllBears: () => set({ bears: 0 }),
    //   diceArray: [],
    //   setDiceArray: (diceArray) => set({ diceArray }),

    megicPoints: 1000,
    setMegicPoints: (megicPoints) => set({ megicPoints }),
    // setMegicPoints: (megicPoints) => {
    //     if (megicPoints < 0) megicPoints = 0;
    //     // const betAmount = useDiceStore.getState().betAmount;


    //     // set((state) => {
    //     //     if (state.megicPoints < betAmount) {

    //     //         return { megicPoints }
    //     //     }
    //     // })
    //     // return null 

    //     set({ megicPoints })
    // },

    // increaseMegicPointByOne: () => set((state) => ({ megicPoints: Number(state.megicPoints) + 1 })),
    // increaseMegicPoints: () => set((state) => ({ megicPoints: Number(state.megicPoints) + 10 })),
    // increaseMegicPointByNumber: (num) => set((state) => ({ megicPoints: Number(state.megicPoints) + num })),
    // decreaseMegicPointByNumber: (num) => set((state) => ({ megicPoints: Number(state.megicPoints) - num })),
    // decreaseMegicPoints: (megicPoints) => set({ megicPoints: megicPoints - 1 }),

}));
