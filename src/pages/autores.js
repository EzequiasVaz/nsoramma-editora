import React from 'react'


import Header from '../components/Header/'
import Footer from '../components/Footer/'

import '../styles/autores.css'

import geoniasAutor from '../images/geonias-autor.png'

import noeliaAutor from '../images/noelia-autor.png'

function Autores() {
    return (

        <div className='container'>

            <Header />

            <div className='autoresLista'>

                <div className='autor'>

                    <img src={geoniasAutor} />
                    <h3>Geonias Araújo</h3>
                    <p>Sou Geonias Araújo ou Gió,
                    conforme relatos de amigos antigos e parentes,
                    sempre gostei de ficar num canto sozinho desenhando...</p>
                    <button className='lerMais'>Ler Mais</button>

                </div>

                <div className='autor'>

                    <img src={noeliaAutor} />
                    <h3>Noélia da Silva Miranda</h3>
                    <p>Mestranda em Educação no PPGMPE-UFES.
                    Possui graduação em Licenciatura em Pedagogia
                    pela Universidade Federal do Espírito Santo (2007)...</p>
                    <button className='lerMais'>Ler Mais</button>

                </div>




            </div>


            <Footer />


        </div>


    )

}


export default Autores