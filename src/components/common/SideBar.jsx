import React from 'react'
import '../../styles/sidebar.css'

import imgRecabol from '../../assets/images/logo-recabol.png'

import userIcon from '../../assets/icons/user_icon.svg'
import confIcon from '../../assets/icons/conf_icon.svg'
import docuIcon from '../../assets/icons/docu_icon.svg'
import listaIcon from '../../assets/icons/lista_icon.svg'
import rechazoIcon from '../../assets/icons/rechazo_icon.svg'
import salirIcon from '../../assets/icons/salir_icon.svg'
import almacenIcon from '../../assets/icons/almacen_icon.svg'

const SideBar = ({onClick}) => {
    return (
        <div className='sidebar-main'>
            <div className='logo-recabol'>
                <img src={imgRecabol} alt="" />
            </div>
            <div className='lista-menu-sidebar'>
                <button onClick={onClick}><img src={listaIcon} alt="" />LISTA DE TRABAJOS</button>
                <button onClick={onClick}><img src={docuIcon} alt="" />DOCUMENTOS DE RECEPCION Y ENTREGA</button>
                <button onClick={onClick}><img src={rechazoIcon} alt="" />REPORTES DE RECHAZO</button>
                <button onClick={onClick}><img src={almacenIcon} alt="" />ALMACEN</button>
                <button onClick={onClick}><img src={userIcon} alt="" />USUARIOS</button>
            </div>
            <div className='lista-conf-salir'>
                <button onClick={onClick}><img src={confIcon} alt="" />CONFIGURACIONES</button>
                <button onClick={onClick}><img src={salirIcon} alt="" />SALIR</button>
            </div>
        </div>
    )
}

export default SideBar
