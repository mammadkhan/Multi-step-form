import { createSlice } from "@reduxjs/toolkit";

export interface infoType {
  name: string;
  email: string;
  number: string;
  plan: {
    type: string;
    option: string;
  };
  addons: {
    "Online service": boolean;
    "Larger storage": boolean;
    "Customizable profile": boolean;
  };
  planPrices: {
    Arcade: string;
    Advanced: string;
    Pro: string;
  };
  addonPrices: {
    "Online service": string;
    "Larger storage": string;
    "Customizable profile": string;
  };
  final: string;
}

const initialState: infoType = {
  name: "",
  email: "",
  number: "",
  plan: {
    type: "Monthly",
    option: "",
  },
  addons: {
    "Online service": false,
    "Larger storage": false,
    "Customizable profile": false,
  },
  planPrices: {
    Arcade: "$9/mo",
    Advanced: "$12/mo",
    Pro: "$15/mo",
  },
  addonPrices: {
    "Online service": "$1/mo",
    "Larger storage": "$2/mo",
    "Customizable profile": "$2/mo",
  },
  final: "0",
};

export const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    saveFirst: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.number = action.payload.number;
    },
    saveSecond: (state, action) => {
      state.plan = action.payload;
      if (state.plan.type === "Monthly") {
        state.planPrices = {
          Arcade: "$9/mo",
          Advanced: "$12/mo",
          Pro: "$15/mo",
        };
        state.addonPrices = {
          "Online service": "$1/mo",
          "Larger storage": "$2/mo",
          "Customizable profile": "$2/mo",
        };
      } else if (state.plan.type === "Yearly") {
        state.planPrices = {
          Arcade: "$90/yr",
          Advanced: "$120/yr",
          Pro: "$150/yr",
        };
        state.addonPrices = {
          "Online service": "$10/yr",
          "Larger storage": "$20/yr",
          "Customizable profile": "$20/yr",
        };
      }
    },
    saveThird: (state, action) => {
      state.addons = action.payload;
      let finalBasket: number[] = [];
      Object.entries(state.addons).forEach((addon) => {
        if (addon[1] === true) {
          finalBasket.push(
            Number(
              state.addonPrices[addon[0] as keyof typeof state.addonPrices]
                .match(/\d/g)
                ?.join("")
            )
          );
        }
      });
      finalBasket.push(
        Number(
          state.planPrices[state.plan.option as keyof typeof state.planPrices]
            .match(/\d/g)
            ?.join("")
        )
      );
      state.final = `$${finalBasket.reduce((a, b) => a + b, 0)}/${
        state.plan.type === "Monthly" ? "mo" : "yr"
      }`;
    },
  },
});

export const { saveFirst, saveSecond, saveThird } = formSlice.actions;
export default formSlice.reducer;
