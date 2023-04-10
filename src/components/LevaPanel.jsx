import { useEffect } from "react"
import { useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { useConfigurator } from "../context/Configurator"

export function LevaPanel() {
    const { setCarBody, setCarFrontAndNose, setCarBase, setCarExhaust, setCarRims, setCarTyreType, setCarTest, } = useConfigurator()

    // const position = {
    //     x: -5.2,
    //     y: 1.6,
    //     z: 1.6
    // }
    const position = {
        x: -1.3,
        y: 0.5,
        z: 0.7
    }

    const cameraOptions = {
        x: {
            value: position.x,
            min: -10,
            max: 10,
            step: 0.1,
        },
        y: {
            value: position.y,
            min: -10,
            max: 10,
            step: 0.1,
        },
        z: {
            value: position.z,
            min: -10,
            max: 10,
            step: 0.1,
        },
    }

    const {x, y, z, enableOrbitControl} = useControls('Position & Camera', {
        ...cameraOptions,
        enableOrbitControl: false,
    })

    const { carBody, carFrontAndNose, carBase, carExhaust, carRims, carTyreType, carTest, } = useControls('Car Styling', {
        carBody: "#d54e4e",
        carFrontAndNose: "#ffffff",
        carBase: "#141414",
        carExhaust: "#000000",
        carRims: "#767676",
        carTyreType: "#ffdc00",
        // carTest: "#FF0000",
    })

    useEffect(() => {
        setCarBody(carBody);
        setCarFrontAndNose(carFrontAndNose);
        setCarBase(carBase);
        setCarExhaust(carExhaust);
        setCarRims(carRims);
        setCarTyreType(carTyreType);
        setCarTest(carTest);
    }, [carBody, carFrontAndNose, carBase, carExhaust, carRims, carTyreType, carTest])

    useFrame((state) => {
        if (!enableOrbitControl) {
            state.camera.position.lerp({ x, y, z }, 0.1)
        }
    })
    return <></>
}
