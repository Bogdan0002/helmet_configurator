import {
    MeshReflectorMaterial,
    PresentationControls,
    Stage,
} from "@react-three/drei";
import { useCustomization } from "../assets/Customization";
import Helmet from "./models/Helmet";
import YesEar from "./models/YesEar";
import NoEar from "./models/NoEar";
import BatteryPack from "./models/BatteryPack";
import Visor from "./models/Visor";
import Light from "./models/Light";

function Scene() {}

const Experience = () => {
    const { ears, visor } = useCustomization();

    return (
        <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-1, Math.PI / 2]}
        >
            <Stage adjustCamera={1.3} shadows="accumulative">
                <Helmet />
                {ears === 1 ? <YesEar /> : <NoEar />}
                <BatteryPack />
                <Light />
                {visor === 1 ? <Visor /> : ""}
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-100}>
                <planeGeometry args={[17000, 17000]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>
    );
};

export default Experience;
