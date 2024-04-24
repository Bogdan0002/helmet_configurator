import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";

function App() {
    return (
        <CustomizationProvider>
            <div className="App">
                <Canvas>
                    <color attach={"background"} args={["#55638a"]} />
                    <Experience />
                </Canvas>
                <Configurator />
            </div>
        </CustomizationProvider>
    );
}

export default App;
