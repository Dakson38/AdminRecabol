import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const UsuarioForm = ({ estado, cambiarEstado }) => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>{
            estado &&
            <Formik
                initialValues={{
                    nombres: '',
                    apellidos: '',
                    ci: '',
                    rol: '',
                    sucursal:'',
                    usuario:'',
                    password:'',
                    fecha_contratacion:'',
                    fecha_finalizacion:''
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.nombres) {
                        errores.nombres = 'Por favor ingrese un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombres)) {
                        errores.nombres = 'Solo puede contener letras y espacios'
                    }

                    if (!valores.apellidos) {
                        errores.apellidos = 'Por favor ingrese los apellidos'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellidos)) {
                        errores.apellidos = 'Solo puede contener letras y espacios'
                    }

                    if (!valores.ci) {
                        errores.ci = 'Por favor ingrese el ci'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.ci)) {
                        errores.ci = 'Solo puede contener numeros'
                    }

                    if (!valores.rol) {
                        errores.rol = 'Por favor seleccione un rol'
                    }

                    if (!valores.sucursal) {
                        errores.sucursal = 'Por favor seleccione una sucursal'
                    }

                    if (!valores.usuario) {
                        errores.usuario = 'Por favor ingrese un usuario'
                    }

                    if (!valores.password) {
                        errores.password = 'Por favor ingrese una contraseña'
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
                    <div className='z-10 fixed bg-gray-800 pt-10 pb-10 px-12 shadow-xl rounded-2xl ml-20 mt-1'>
                        <h1 className='text-white text-3xl font-bold'>Añadir Usuario</h1>
                        <Form>
                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="nombres" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Nombres</label>
                                    <Field
                                        type='text'
                                        id='nombres'
                                        name='nombres'
                                        placeholder='Ingrese el nombre'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    />
                                    <ErrorMessage name='nombres' component={() => (<div className='text-red-500 text-xs italic'>{errors.nombres}</div>)} />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="apellidos" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Apellidos</label>
                                    <Field
                                        type='text'
                                        id='apellidos'
                                        name='apellidos'
                                        placeholder='Ingrese el apellido'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    />
                                    <ErrorMessage name='apellidos' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.apellidos}</div>)} />
                                </div>
                            </div>
                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="ci" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>CI</label>
                                    <Field
                                        type='text'
                                        id='ci'
                                        name='ci'
                                        placeholder='Ingrese el ci'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    />
                                    <ErrorMessage name='ci' component={() => (<div className='text-red-500 text-xs italic'>{errors.ci}</div>)} />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="rol" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Rol</label>
                                    <Field
                                        as='select'
                                        id='rol'
                                        name='rol'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    >
                                        <option value="">Seleccione un rol</option>
                                        <option value="operario">Operario</option>
                                        <option value="secretario">Secretario</option>
                                        <option value="recolector">Recolector</option>
                                        <option value="admin">Administrador</option>
                                    </Field>
                                    <ErrorMessage name='rol' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.rol}</div>)} />
                                </div>
                            </div>
                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="sucursal" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Sucursal</label>
                                    <Field
                                        as='select'
                                        id='sucursal'
                                        name='sucursal'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    >
                                        <option value="">Seleccione una Sucursal</option>
                                        <option value="operario">La Paz</option>
                                        <option value="secretario">Santa Cruz</option>
                                        <option value="recolector">Oruro</option>
                                    </Field>
                                    <ErrorMessage name='sucursal' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.sucursal}</div>)} />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
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
                            </div>

                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="usuario" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Usuario</label>
                                    <Field
                                        type='text'
                                        id='usuario'
                                        name='usuario'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    />
                                    <ErrorMessage name='usuario' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.usuario}</div>)} />
                                </div>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
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
                            </div>

                            <div className='-mx-3 md:flex mb-1'>
                                <div className='md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="password" className='uppercase tracking-wide text-white text-xs font-bold mb-2'>Contraseña</label>
                                    <Field
                                        type='password'
                                        id='password'
                                        name='password'
                                        className='w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3'
                                    />
                                    <ErrorMessage name='password' component={() => (<div className='text-red-500 text-xs italic mb-3'>{errors.password}</div>)} />
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

export default UsuarioForm
