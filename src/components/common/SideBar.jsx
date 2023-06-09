import React from 'react'
import '../../styles/sidebar.css'

import imgRecabol from '../../assets/images/logo-recabol.png'

import userIcon from '../../assets/icons/user_icon.svg'
import confIcon from '../../assets/icons/conf_icon.svg'
import docuIcon from '../../assets/icons/docu_icon.svg'
import finalIcon from '../../assets/icons/final_icon.svg'
import listaIcon from '../../assets/icons/lista_icon.svg'
import puntosIcon from '../../assets/icons/puntos_icon.svg'
import rechazoIcon from '../../assets/icons/rechazo_icon.svg'
import salirIcon from '../../assets/icons/salir_icon.svg'

const SideBar = () => {
    return (
        <div className='sidebar-main'>
            <div className='logo-recabol'>
                <img src={imgRecabol} alt="" />
            </div>
            <div className='lista-menu-sidebar'>
                <a href=""><img src={listaIcon} alt="" />LISTA DE TRABAJOS</a>
                <a href=""><img src={puntosIcon} alt="" />PUNTOS DE RECOLECCION</a>
                <a href=""><img src={docuIcon} alt="" />DOCUMENTOS DE RECEPCION Y ENTREGA</a>
                <a href=""><img src={rechazoIcon} alt="" />REPORTES DE RECHAZO</a>
                <a href=""><img src={finalIcon} alt="" />REPORTES DE FINALIZACION DE TRABAJO</a>
                <a href=""><img src={userIcon} alt="" />USUARIOS</a>
            </div>
            <div className='lista-conf-salir'>
                <a href=""><img src={confIcon} alt="" />CONFIGURACIONES</a>
                <a href=""><img src={salirIcon} alt="" />SALIR</a>
            </div>
        </div>
    )
}

export default SideBar
