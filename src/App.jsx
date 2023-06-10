import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/common/SideBar'

import imgAdmin from './assets/images/img-admin.png'
import MasTrabajoOrden from './components/MasTrabajoOrden'
import DataListaTrabajos from './components/ListaTrabajos'

import { defaultData } from './components/utils/defaultData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='pantalla-principall'>
      <SideBar></SideBar>
      <div className='segunda-columna'>

        <div className='header-bar'>
          <p>ADMIN</p>
          <img src={imgAdmin} alt="" />
        </div>
        <DataListaTrabajos dataTrabajos={defaultData}/>
      </div>
    </div>
  )
}

export default App
