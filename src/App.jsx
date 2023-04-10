import { Canvas, useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, Sky, Stars } from '@react-three/drei'
import { Leva } from 'leva'
import { useMediaQuery } from 'react-responsive'

import './index.css'
import { Car } from './components/Car'
import { LevaPanel } from './components/LevaPanel'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)'})

  return (
    <div className="App">
      <Canvas camera={{ position: isMobile ? [-2.7, 100, 1.3] : [-1.3, 100, 0.7], fov: 45 }}>
        {/* <color args={['ivory']} attach="background" />         */}
        <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
          <Car scale={[0.1, 0.1, 0.1]}/>
        </Stage>
        <Sky />
        <LevaPanel />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>
      <Leva collapsed={isMobile ? true : false}/>
    </div>
  )
}

export default App
