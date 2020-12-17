import React from 'react'


import '../styles/sobre.css'

import Header from '../components/Header/'
import Footer from '../components/Footer/'

import logoImg from '../images/nsoramma-editora.png'
import nsorammaImage from '../images/nsoramma-image.png'
import googleMaps from '../images/googleMaps.png'

function Sobre() {
    return (

        <div className='container'>

            <Header />

            <div className='main'>



                <div className='aEditora'>

                    <img src={logoImg} />
                    <p>A Editora Nsoromma, nasceu do desejo do casal de escritores Gió e Noélia Miranda
                    de ter sua própria editora para publicar seus livros e, também, de quem
                    escreva com sensibilidade e queira confiar a nós a publicação do seu trabalho.</p>


                </div>

                <div className='descNomeEditora'>

                    <img src={nsorammaImage} />
                    <p>Nsoromma é uma palavra africana do povo Akan,
                    significa: “Criança do Céu (estrelas) Símbolo da Guarda,
                    um lembrete que o Deus é o pai e zela por todos os povos”.</p>

                </div>

                <div className='enderecoEditora'>

                    <img src={googleMaps} />
                    <p>Sediada em Vitória, ES, CNPJ 36.947.105/0001-08,
                    entretanto a editora pretende ultrapassar as barreiras geográficas que nos divide.</p>

                </div>




            </div>




            <Footer />


        </div>


    )

}


export default Sobre