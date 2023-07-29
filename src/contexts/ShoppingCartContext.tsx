import React, { createContext } from "react";

interface CartCounts {
  [id: string]: number;
}

function shoppingCartReducer(state: CartCounts, action: { type: "add" | "remove"; payload: { id: string } }) {
  const id = action.payload.id;
  const currentCount = state[id] ? state[id] : 0;
  switch (action.type) {
    case "add":
      return { ...state, [id]: currentCount + 1 };
    case "remove":
      return { ...state, [id]: currentCount - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const ShoppingCartContext = createContext<{ cartCounts: CartCounts; cartCountsDispatch: React.Dispatch<any> }>({
  cartCounts: {},
  cartCountsDispatch: () => {},
});

export function ShoppingCartContextProvider({ children }: { children: React.ReactNode }) {
  const [cartCounts, cartCountsDispatch] = React.useReducer(shoppingCartReducer, {});
  return <ShoppingCartContext.Provider value={{ cartCounts, cartCountsDispatch }}>{children}</ShoppingCartContext.Provider>;
}
