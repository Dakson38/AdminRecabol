import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/sidebar.css'
import SideBar from './components/common/SideBar'

import imgAdmin from './assets/images/img-admin.png'
import imgRecabol from './assets/images/logo-recabol.png'
import userIcon from './assets/icons/user_icon.svg'
import confIcon from './assets/icons/conf_icon.svg'
import docuIcon from './assets/icons/docu_icon.svg'
import listaIcon from './assets/icons/lista_icon.svg'
import rechazoIcon from './assets/icons/rechazo_icon.svg'
import salirIcon from './assets/icons/salir_icon.svg'
import almacenIcon from './assets/icons/almacen_icon.svg'



import MasTrabajoOrden from './components/MasTrabajoOrden'
import DataListaTrabajos from './components/ListaTrabajos'

import { defaultData } from './components/utils/defaultData'
import { dataReportes } from './components/utils/dataReportes'
import { dataAlmacen } from './components/utils/dataAlmacen'
import { dataDocumentoRecepcion } from './components/utils/dataDocumentoRecepcion'
import { dataDocumentoEntrega } from './components/utils/dataDocumentoEntrega'
import { dataUsuario } from './components/utils/dataUsuario'

import DataReporteRechazo from './components/ReportesRechazo'
import DataAlmacen from './components/Almacen'
import DataDocumentoRecepcionEntrega from './components/DocumentosRecepcionEntrega'
import DataUsuario from './components/Usuarios'
import AlmacenForm from './components/forms/AlmacenForm'


function App() {
  const [view, setView] = useState(null);

  const cambiarContenido = (opcion) => {
    setView(opcion);
  }

  let contenido;
  switch (view) {
    case 1:
      contenido = <DataListaTrabajos dataTrabajos={defaultData} />;
      break;
    case 2:
      contenido = <DataDocumentoRecepcionEntrega dataDocumentoEntrega={dataDocumentoEntrega} dataDocumentoRecepcion={dataDocumentoRecepcion} />;
      break;
    case 3:
      contenido = <DataReporteRechazo dataReporteRechazo={dataReportes} />;
      break;
    case 4:
      contenido = <DataAlmacen dataAlmacen={dataAlmacen} />;
      break;
    case 5:
      contenido = <DataUsuario dataUsuario={dataUsuario} />
      break;
    default:
      contenido = <DataListaTrabajos dataTrabajos={defaultData} />;
      break;
  }
  return (
    <div className='pantalla-principall'>
      <div className='sidebar-main'>
        <div className='logo-recabol'>
          <img src={imgRecabol} alt="" />
        </div>
        <div className='lista-menu-sidebar'>
          <button onClick={() => cambiarContenido(1)}><img src={listaIcon} alt="" />LISTA DE TRABAJOS</button>
          <button onClick={() => cambiarContenido(2)}><img src={docuIcon} alt="" />DOCUMENTOS DE RECEPCION Y ENTREGA</button>
          <button onClick={() => cambiarContenido(3)}><img src={rechazoIcon} alt="" />REPORTES DE RECHAZO</button>
          <button onClick={() => cambiarContenido(4)}><img src={almacenIcon} alt="" />ALMACEN</button>
          <button onClick={() => cambiarContenido(5)}><img src={userIcon} alt="" />USUARIOS</button>
        </div>
        <div className='lista-conf-salir'>
          <button><img src={confIcon} alt="" />CONFIGURACIONES</button>
          <button ><img src={salirIcon} alt="" />SALIR</button>
        </div>
      </div>
      <div className='segunda-columna'>

        <div className='header-bar'>
          <p>ADMIN</p>
          <img src={imgAdmin} alt="" />
        </div>
        {view && <>{contenido}</>}
      </div>
    </div>
  )
}

export default App
