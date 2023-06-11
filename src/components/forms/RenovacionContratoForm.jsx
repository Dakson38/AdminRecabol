import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RenovacionContratoForm = ({ estado, cambiarEstado }) => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>{
            estado &&
            <Formik
                initialValues={{
                    fecha_contratacion: '',
                    fecha_finalizacion: ''
                }}
                validate={(valores) => {
                    let errores = {};

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
                    <div className='z-10 fixed bg-gray-800 pt-10 pb-10 px-12 shadow-xl rounded-2xl ml-80 mt-40 w-96'>
                        <h1 className='text-white text-3xl font-bold'>RENOVACIÓN DE CONTRATO</h1>
                        <Form>
                            <div className='md:w-full px-3 mb-6 md:mb-0'>
                                <label htmlFor="fecha_contratacion" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Fecha de Contratacion</label>
                                <Field
                                    id='fecha_contratacion'
                                    name='fecha_contratacion'
                                >
                                    {({ field }) => (
                                        <input type="date" {...field} className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3' />
                                    )}
                                </Field>
                                <ErrorMessage name='fecha_contratacion' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.fecha_contratacion}</div>)} />
                            </div>

                            <div className='md:w-full px-3 mb-6 md:mb-0'>
                                <label htmlFor="fecha_finalizacion" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Fecha de Finalización</label>
                                <Field
                                    id='fecha_finalizacion'
                                    name='fecha_finalizacion'
                                >
                                    {({ field }) => (
                                        <input type="date" {...field} className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3' />
                                    )}
                                </Field>
                                <ErrorMessage name='fecha_finalizacion' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.fecha_finalizacion}</div>)} />
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

export default RenovacionContratoForm
