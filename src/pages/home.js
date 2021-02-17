import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'




import '../styles/home.css'

import Header from '../components/Header/'
import Footer from '../components/Footer/'
import BookCard from '../components/BookCard/'


import mundoPai from '../images/mundopai.png'




function Home() {

    const lancamentoItem = ['','','']
    const destaqueItem = ['','','','','','','','','']
    
    


    return (

        <div className='container'>


           <Header/>


            <div className='slideArea'>

                <div className='slideContainer'/*Falta adicionar função de passar o slide*/ >

                    <div className='backSlide'>
                        <FontAwesomeIcon icon={faAngleLeft} />
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

                        <FontAwesomeIcon icon={faAngleRight} />

                    </div>

                    <div className='slideCounter'>
                        <div className='activeSlide'>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>

                </div>

            </div>

            <div className='lancamentosArea'>

                <div className='headerLancamentos'>
                    <h1 className='titulo'>Lançamentos</h1>
                    <div className='borderTitulo'></div>
                </div>

                <div className='lancamentosItens'>


                    {lancamentoItem.map(() => <BookCard/>)}


                </div>



            </div>

            <div className='destaqueArea'>

                <div className='headerDestaque'>
                    <h1 className='titulo'>Destaques</h1>
                    <div className='borderTitulo'></div>
                </div>

                <div className='destaqueItens'>

                    {destaqueItem.map(book => <BookCard key={book.id}/> )}

                </div>
            </div>




            <Footer />







        </div>

    )

}


export default Home