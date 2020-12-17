import React from 'react'


import FreeBookCard from '../components/freeBookCard'

import Header from '../components/Header/'
import Footer from '../components/Footer/'

import '../styles/livros.css'

function Livros() {

    const freeBookItem = ['', '']

    return (

        <div className='container'>

            <Header />

            <div className='headerDescricao'>
                
                <div className='descricao'>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed condimentum tincidunt iaculis.
                    Nam et odio non dolor tincidunt tempus vitae non ex.  Curabitur eget dignissim enim. Ut non laoreet eros.
                </p>

                </div>
               
            </div>

            <div className='ordenacao'>

                <div className='ordenacaoLista'>

                    <label >Ordernar por:</label>
                    <select name='ordenar' id='ordernar'>
                        <option value=''>--</option>
                        <option value='menorPreco'>Mais recente</option>
                        <option value='menorPreco'>Mais acessado</option>
                    </select>

                </div>

            </div>


            <div className='freeBooksList'>

                {freeBookItem.map( Book => <FreeBookCard/>)/* cadastrar os livros*/ }
                
                

            </div>





            <Footer />


        </div>


    )

}


export default Livros