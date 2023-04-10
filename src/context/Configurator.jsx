import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export function ConfiguratorProvider({ children }) {
    const [carBody, setCarBody] = useState("#d54e4e")
    const [carFrontAndNose, setCarFrontAndNose] = useState("#ffffff")
    const [carBase, setCarBase] = useState("#242424")
    const [carExhaust, setCarExhaust] = useState("#525252")
    const [carRims, setCarRims] = useState("#525252")
    const [carTyreType, setCarTyreType] = useState("#ffdc00")
    const [carTest, setCarTest] = useState("#ff0000")

    return (
        <ConfiguratorContext.Provider
            value={{
                carBody,
                carBase,
                carFrontAndNose,
                carExhaust,
                carRims,
                carTyreType,
                carTest,
                setCarBody,
                setCarFrontAndNose,
                setCarBase,
                setCarExhaust,
                setCarRims,
                setCarTyreType,
                setCarTest,
            }}
        >
            {children}
        </ConfiguratorContext.Provider>
    );
}

export function useConfigurator() {
    return useContext(ConfiguratorContext);
}
