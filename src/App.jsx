import './index.css'

import { Canvas, useFrame } from '@react-three/fiber'
import { Stage, OrbitControls, Sky, Stars } from '@react-three/drei'
import { Car } from './components/Car'
import { LevaPanel } from './components/LevaPanel'

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [-1.3, 0.5, 0.7], fov: 45 }}>
        {/* <color args={['ivory']} attach="background" />         */}
        <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
          <Car scale={[0.1, 0.1, 0.1]}/>
        </Stage>
        <Sky />
        <LevaPanel />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}

export default App
