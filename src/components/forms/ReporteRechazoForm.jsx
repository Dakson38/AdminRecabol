import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ReporteRechazoForm = ({ estado, cambiarEstado }) => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>{
            estado &&
            <Formik
                initialValues={{
                    estado_rechazo: '',
                    momento_rechazo: '',
                    causa: '',
                    observaciones: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.estado_rechazo) {
                        errores.estado_rechazo = 'Por favor ingrese el estado del neumatico'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.estado_rechazo)) {
                        errores.estado_rechazo = 'Solo puede contener letras y espacios'
                    }
                    if (!valores.momento_rechazo) {
                        errores.momento_rechazo = 'Por favor ingrese el momento en el que se rechazo'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.momento_rechazo)) {
                        errores.momento_rechazo = 'Solo puede contener letras y espacios'
                    }
                    if (!valores.causa) {
                        errores.causa = 'Por favor ingrese la causa del rechazo'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.causa)) {
                        errores.causa = 'Solo puede contener letras y espacios'
                    }
                    if (!valores.observaciones) {
                        errores.observaciones = 'Por favor ingrese si tuvo observaciones'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.observaciones)) {
                        errores.observaciones = 'Solo puede contener letras y espacios'
                    }
                    return errores
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
            >
                {({ errors }) => (
                    <div className='z-10 fixed bg-gray-800 py-20 px-12 shadow-xl rounded-2xl ml-20 mt-10'>
                        <h1 className='text-white text-3xl font-bold'>Editar Reporte de Rechazo</h1>
                        <p className='text-white mb-2'>Neumático Alfa: 371823-A</p>
                        <p className='text-white mb-2'>Empleado: Mario Lujan</p>
                        <Form>
                            <div className='-mx-3 md:flex mb-6'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="momento_rechazo" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Momento de Rechazo</label>
                                    <Field
                                        type='text'
                                        id='momento_rechazo'
                                        name='momento_rechazo'
                                        placeholder='Ingrese el momento del rechazo'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                    />
                                    <ErrorMessage name='momento_rechazo' component={() => (<div className='text-red-500 text-xs italic'>{errors.momento_rechazo}</div>)} />
                                </div>
                                <div  className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="estado_rechazo" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Estado</label>
                                    <Field
                                        type='number'
                                        id='estado_rechazo'
                                        name='estado_rechazo'
                                        placeholder='Ingrese el estado del neumatico'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                    />
                                    <ErrorMessage name='estado_rechazo' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.estado_rechazo}</div>)} />
                                </div>
                            </div>
                            <div className='-mx-3 md:flex mb-6'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="causa" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Causa</label>
                                    <Field
                                        id='causa'
                                        name='causa'
                                        as='textarea'
                                        placeholder='Causa'
                                        className='w-full h bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                    />
                                    <ErrorMessage name='causa' component={() => (<div className='text-red-500 text-xs italic'>{errors.causa}</div>)} />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="observaciones" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Observaciones</label>
                                    <Field
                                        id='observaciones'
                                        name='observaciones'
                                        as='textarea'
                                        placeholder='Observaciones'
                                        className='w-full h bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                    />
                                    <ErrorMessage name='observaciones' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.observaciones}</div>)} />
                                </div>
                            </div>
                            <div className=' -mx-3 md:flex mb-1 justify-end gap-2'>
                                <button onClick={() => cambiarEstado(false)} className='md:w-30 bg-red-400 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-xl'>Cancelar</button>
                                <button type='submit' className='md:w-30 bg-blue-400 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-xl mr-3'>Guardar</button>
                            </div>

                            {formularioEnviado && <p>Formulario enviado con exito</p>}
                        </Form>
                    </div>
                )
                }
            </Formik>
        }
        </>
    )
}

export default ReporteRechazoForm
