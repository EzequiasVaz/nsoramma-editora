import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'


import Header from '../components/Header/'
import Footer from '../components/Footer/'
import BookCard from '../components/BookCard/'


import '../styles/loja.css'




function Loja() {

    const lojaItem = ['', '', '', '', '', '', '', '', '']

    return (

        <div className='container'>

            <Header />

            <div className='headerLoja'>


                <div className='menuLoja'>

                    <button className='userProfile'>

                        <FontAwesomeIcon icon={faUser} />

                    </button>

                    <button className='userShoppingBasket'>

                        <FontAwesomeIcon icon={faShoppingBasket} />
                    </button>

                </div>



            </div>

            <div className='ordenacao'>

                <div className='ordenacaoLista'>

                    <label >Ordernar por:</label>
                    <select name='ordenar' id='ordernar'>
                        <option value=''>--</option>
                        <option value='menorPreco'>Menor Preço</option>
                        <option value='menorPreco'>Maior Preço</option>
                        <option value='menorPreco'>Mais Vendido</option>
                    </select>

                </div>


            </div>

            <div className='lojaItens'>

                {lojaItem.map(book => <BookCard key={book.id} />)}

            </div>

            <Footer />


        </div>






    )


}


export default Loja