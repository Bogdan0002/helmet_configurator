import { createContext, useContext, useState } from "react";

const helmetColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const CustomizationContex = createContext({});

export const CustomizationProvider = (props) => {
    const [ears, setEars] = useState(1);
    const [visor, setVisor] = useState(1);
    const [helmetColor, setHelmetColor] = useState(helmetColors[0]);
    return (
        <CustomizationContex.Provider value={{
            ears,
            setEars,
            visor,
            setVisor,
            helmetColors,
            helmetColor,
            setHelmetColor
        }}>
            {props.children}
        </CustomizationContex.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContex);
    return context;
};
