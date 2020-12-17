import React from 'react'

import logoImg from '/Users/Zeca Vaz/Documents/Projetos/nsoramma editora/nsoramma/src/images/nsoramma-editora.png'

import '../Header/styles.css'

import {Link} from 'react-router-dom'

function Header() {

    



    return (
        <>
            <div className='header'>

                

                <div className='menu'>


                    <div>
                        <a href='/' id='logoImg' >
                            <img src={logoImg}></img>
                        </a>
                    </div>


                    <div>
                        <a href='/loja'>Loja</a>
                    </div>                  
                    

                    <div>
                        <a href='/livros'>Livros</a>
                    </div>

                    <div >
                        <a href='/sobre' >Sobre</a>
                    </div>

                    <div>
                        <a href='/autores' >Autores</a>
                    </div>

                    <div>
                        <a href='/contato' >Contato</a>
                    </div>








                </div>



            </div>
        </>

    )

}


export default Header