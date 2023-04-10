import { useEffect } from "react"
import { Leva, useControls } from "leva"
import { useFrame } from "@react-three/fiber"
import { useConfigurator } from "../context/Configurator"

import { useMediaQuery } from "react-responsive"

export function LevaPanel() {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)'})
    const { setCarBody, setCarFrontAndNose, setCarBase, setCarExhaust, setCarRims, setCarTyreType, setCarTest, } = useConfigurator()

    const mobilePosition = {
        x: -2.7,
        y: 2.7,
        z: 1.3
    }
    const desktopPosition = {
        x: -1.3,
        y: 0.5,
        z: 0.7
    }

    const position = isMobile ? mobilePosition : desktopPosition

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
    }, {
        collapsed: isMobile ? true : false
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
