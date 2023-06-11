import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AlmacenForm = ({ estado, cambiarEstado }) => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>{
            estado &&
            <Formik
                initialValues={{
                    material: '',
                    costo: ''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.material) {
                        errores.material = 'Por favor ingrese un material'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.material)) {
                        errores.material = 'El material solo puede contener letras y espacios'
                    }

                    if (!valores.costo) {
                        errores.costo = 'Por favor ingrese el valor del material'
                    } else if (!/^[0-9]+$/.test(valores.costo)) {
                        errores.costo = 'El cosot solo puede contener numeros'
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
                    <div className='fixed ml-60 bg-gray-800 py-20 px-12 lg:px-24 shadow-xl mb-24 rounded-2xl'>
                        <h1 className='text-white text-3xl font-bold'>Añadir Material</h1>
                        <Form>
                            <div>
                                <label htmlFor="material" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Material</label>
                                <Field
                                    type='text'
                                    id='material'
                                    name='material'
                                    placeholder='Pegamento'
                                    className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                />
                                <ErrorMessage name='material' component={() => (<div className='text-red-500 text-xs italic'>{errors.material}</div>)} />
                            </div>
                            <div>
                                <label htmlFor="costo" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Costo</label>
                                <Field
                                    type='number'
                                    id='costo'
                                    name='costo'
                                    placeholder='Valor del pegamento'
                                    className='w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3'
                                />
                                <ErrorMessage name='costo' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.costo}</div>)} />
                            </div>

                            <div className='-mx-3 md:flex mb-6 justify-end gap-2'>
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

export default AlmacenForm
