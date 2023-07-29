import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Product from "../components/Product";

const meta = {
  title: "Shop/Product",
  component: Product,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", defaultValue: "Toothbrush" },
  },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export function BasicProduct({
  name = "Undefined Product",
  price = 123,
  description = "Some Description",
  image = "https://images.unsplash.com/photo-1520013573795-38516d2661e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80",
  isOnSale = false,
  cartCount = 0,
}: Story["args"]) {
  const [cartCountState, setCartCount] = useState(cartCount);
  const props = {
    id: "3",
    name,
    price,
    description,
    image,
    isOnSale,
    handleAddToCart: () => {
      setCartCount(cartCountState + 1);
    },
    cartCount: cartCountState,
  };
  return <Product {...props} />;
}
