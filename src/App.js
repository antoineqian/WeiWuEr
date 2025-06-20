import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ParticleSystem from './ParticleSystem'

function App() {
  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ParticleSystem count={8000} />
      <OrbitControls />
    </Canvas>
  )
}

export default App