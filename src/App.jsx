import LabelBienvenida from "./assets/components/Bienvenida/Bienvenida"
import BotonIniciarSesion from "./assets/components/BotonIniciarSesion/BotonIniciarSesion"
import Login from './assets/components/Login/Login'
import Mockup from "./assets/components/Mockup/Mockup"
import Politicas from "./assets/components/Politicas/Politicas"
function App() {
  

  return (
    <div>
      <LabelBienvenida />
      <Login />
      <BotonIniciarSesion />
      <Mockup />
      <Politicas />
    </div>
  )
}

export default App
