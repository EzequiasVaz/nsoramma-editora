
import React from 'react'

import './styles.css'

import mundoPai from '/Users/Zeca Vaz/Documents/Projetos/nsoramma editora/nsoramma/src/images/mundopai.png'

function BookCard() {

    return (

        <div className='bookCard'>

            <div className='bookImg'>
                <img src={mundoPai}></img>
            </div>

            <div className='tituloBook'>
                <h1>Mundo Pai</h1>
            </div>
            <div className='bookPreco'>
                <div className='precoReal'>
                    Preço Real
                                </div>
                <div className='precoPromocional'>
                    Preço Promocional
                                </div>
            </div>
            <button className='btnComprar'>Comprar</button>
        </div>
    )
}



export default BookCard

