import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


import logoImg from '../images/nsoramma-editora.png'
import '../styles/home.css'


import mundoPai from '../images/mundopai.png'


function Home() {

    return (

        <div className='container'>


            <div className='header'>



                <div className='menu' /*Transformar em Componente*/>


                    <a href='#' id='logoImg' >
                        <img src={logoImg}></img>
                    </a>
                    <a href='' >Loja</a>
                    <a href='' >Livros</a>
                    <a href=''>Sobre</a>
                    <a href=''>Autores</a>
                    <a href=''>Contato</a>




                </div>



            </div>

            
            <div className='slideArea'>

                <div className='slideContainer'/*Falta adicionar função de passar o slide*/ >

                    <div className='backSlide'>                        
                      
                    <FontAwesomeIcon icon={faAngleLeft}/>
                    </div>


                    <div className='dataLivro'>

                        <div className='capaLivro'>
                            <img src={mundoPai} alt='MundoPai'></img>
                        </div>

                        <div className='livroAcesso'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum tincidunt iaculis.
                            Nam et odio non dolor tincidunt tempus vitae non ex. Curabitur eget dignissim enim. Ut non laoreet eros.</p>
                            <button className='acessarLivro'>Acesse Aqui</button>
                        </div>

                    </div>


                    <div className='nextSlide'>

                    <FontAwesomeIcon icon={faAngleRight}/>

                    </div>

                    <div className='slideCounter'>
                        <div className='active'>
                                
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                    </div>

                </div>

            </div>

            <div className='lancamentosArea'>


            </div>

            <div className='destaqueArea'>


            </div>


            <footer>

            </footer>


        </div>

    )

}


export default Home