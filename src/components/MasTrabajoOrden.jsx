import React from 'react'
import '../styles/MasTrabajoOrden.css'

import neumaticoIcon from '../assets/icons/neumatico_icon.svg'
import pointsIcon from '../assets/icons/points_icon.svg'
import calendarIcon from '../assets/icons/calendar_icon.svg'

const MasTrabajoOrden = () => {
    return (
        <div className='informacion-principal'>
            <div className='titulo-principal'>
                <h2>LISTA DE TRABAJOS &gt; Nro. Orden 219226</h2>
            </div>

            <div className='informacion-empleado-cliente-costo'>
                <div className='informacion-tarjeta-1'>
                    <p className='titulo-informacion'><strong>EMPLEADO</strong></p>
                    <p><strong>Recepcionista: </strong>Juan Perez</p>
                    <p><strong>Sucursal: </strong>Recabol Oruro</p>
                    <p><strong>Celular: </strong>71234567</p>
                </div>
                <div className='informacion-tarjeta-2'>
                    <p className='titulo-informacion'><strong>CLIENTE</strong></p>
                    <p><strong>Nombre Cliente: </strong>Juan Benitez</p>
                    <p><strong>Celular Cliente:</strong>79876543</p>
                </div>
                <div className='informacion-tarjeta-3'>
                    <p className='titulo-informacion'><strong>COSTOS (Bs.)</strong></p>
                    <p><strong>Anticipo: </strong>30</p>
                    <p><strong>Cotización: </strong>1170</p>
                </div>
            </div>
            <div className='informacion-neumaticos'>
                <img src={neumaticoIcon} alt="" />
                <p>NEUMÁTICOS</p>
            </div>

            <div className='contenedor-tarjeta-neumatico'>
                <table className='tarjeta-neumatico'>
                    <tr>
                        <td rowSpan='2' className='color-trabajo'><p>TRABAJO REALIZADO</p></td>
                        <th>Nombre Empleado:</th>
                        <td className='puntos-editar-eliminar'>Luis Paredes <button><img src={pointsIcon} alt="" /></button></td>
                    </tr>
                    <tr>
                        <th>Celular Empleado: </th>
                        <td>77654321</td>
                    </tr>
                    <tr>
                        <th>Neumatico Alfa: </th>
                        <td colSpan='2'>21921-A</td>
                    </tr>
                    <tr>
                        <th>Marca:</th>
                        <th>Tipo de Trabajo:</th>
                        <th>Costo</th>
                    </tr>
                    <tr>
                        <td>XYZ</td>
                        <td>XYZ</td>
                        <td>XYZ</td>
                    </tr>
                    <tr>
                        <th>Medida:</th>
                        <th>Serie:</th>
                    </tr>
                    <tr>
                        <td>XYZ</td>
                        <td>XYZ</td>
                    </tr>
                    <tr>
                        <th>Accesorios:</th>
                        <td colSpan='2'>Aros</td>
                    </tr>
                    <tr >
                        <th>Fecha de Inicio: </th>
                        <td>00-00-0000</td>
                        <td rowSpan='2'><img src={calendarIcon} alt="" /></td>
                    </tr>
                    <tr>
                        <th>Fecha de Finalizacion: </th>
                        <td>00-00-0000</td>
                    </tr>
                </table>
            </div>
        </div>

    )
}

export default MasTrabajoOrden
