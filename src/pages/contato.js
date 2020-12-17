import React from 'react'


import Header from '../components/Header/'
import Footer from '../components/Footer/'

import '../styles/contato.css'

function Contato() {
    return (

        <div className='container'>

            <Header />

            <div className='main'>


                <div className='pageTitle'>

                    <p>
                        Em breve estaremos disponibilizando serviços de ilustrações,
                        edição e publicação de livros.
            </p>
                    <div />

                </div>

                <div className='formulario'>

                    <form>


                        <div className='inputBlock'>

                            <label htmlFor='emailTxt'>Email:</label>
                            <input type='text' className='emailTxt' id='emailTxt'></input>

                        </div>

                        <div className='inputBlock'>

                            <label htmlFor='telefoneTxt'>Telefone:</label>
                            <input type='text' className='telefoneTxt' id='telefoneTxt'></input>


                        </div>

                        <div className='inputBlock'>

                            <label htmlFor='mensagemTxt'>Mensagem:</label>
                            <textarea type='text' className='mensagemTxt' id='mensagemTxt'></textarea>


                        </div>

                        <button type='submit'>Enviar</button>

                    </form>

                </div>

            </div>



            <Footer />


        </div>


    )

}


export default Contato