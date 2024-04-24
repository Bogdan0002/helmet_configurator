import { useCustomization } from "../assets/Customization";

const Configurator = () => {
    const { ears, setEars, visor, setVisor, helmetColors, helmetColor, setHelmetColor } = useCustomization();
    return (
        <div className="configurator">
            <div className="configurator__section">
                <div className="configurator__section__title">Helmet color</div>
                <div className="configurator__section__values">
                    {helmetColors.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${
                                item.color === helmetColor.color
                                    ? "item--active"
                                    : ""
                            }`}
                            onClick={() => setHelmetColor(item)}
                        >
                            <div
                                className="item__dot"
                                style={{ backgroundColor: item.color }}
                            />
                            <div className="item__label">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Visor</div>
                <div className="configurator__section__values">
                    <div
                        className={`item ${visor === 1 ? "item--active" : ""}`}
                        onClick={() => setVisor(1)}
                    >
                        <div className="item__label">Show</div>
                    </div>
                    <div
                        className={`item ${visor === 2 ? "item--active" : ""}`}
                        onClick={() => setVisor(2)}
                    >
                        <div className="item__label">Hide</div>
                    </div>
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Ears</div>
                <div className="configurator__section__values">
                    <div
                        className={`item ${ears === 1 ? "item--active" : ""}`}
                        onClick={() => setEars(1)}
                    >
                        <div className="item__label">Show</div>
                    </div>
                    <div
                        className={`item ${ears === 2 ? "item--active" : ""}`}
                        onClick={() => setEars(2)}
                    >
                        <div className="item__label">Hide</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Configurator;
