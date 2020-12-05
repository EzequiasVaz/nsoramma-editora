import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons'


import logoImg from '../images/nsoramma-editora.png'
import '../styles/home.css'
import logoPagSeguro from '../images/pagseguro.png'


import mundoPai from '../images/mundopai.png'


function Home() {

    return (

        <div className='container'>


            <div className='header'>



                <div className='menu' /*Transformar em Componente*/>

                    <div>
                        <a href='' id='logoImg' >
                            <img src={logoImg}></img>
                        </a>
                    </div>

                    <div>
                        <a href='' >Loja</a>
                    </div>

                    <div>
                        <a href='' >Livros</a>
                    </div>

                    <div>
                        <a href=''>Sobre</a>
                    </div>

                    <div>
                        <a href=''>Autores</a>
                    </div>

                    <div>
                        <a href=''>Contato</a>
                    </div>








                </div>



            </div>


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

                <div className='headerLancamentos'>
                    <h1 className='titulo'>Lançamentos</h1>
                    <div className='borderTitulo'></div>
                </div>

                <div className='lancamentosItens'>

                    <div className='lancamentoItem'>

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

                    </div>
                    <div className='lancamentoItem'>

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

                    </div>
                    <div className='lancamentoItem'>

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

                    </div>


                </div>



            </div>

            <div className='destaqueArea'>

                <div className='headerDestaque'>
                    <h1 className='titulo'>Destaques</h1>
                    <div className='borderTitulo'></div>
                </div>

                <div className='destaqueItens'>

                    <div className='destaqueItem'>
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
                    </div>

                    <div className='destaqueItem'>
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
                    </div>

                    <div className='destaqueItem'>
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
                    </div>


                    <div className='destaqueItem'>
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
                    </div>

                    <div className='destaqueItem'>
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
                    </div>


                    <div className='destaqueItem'>
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
                    </div>

                </div>
            </div>


            <footer>

                <div className='headerFooter'>
                    <p>© Editora Nsoromma, 2020 - Todos direitos reservados. Endereço Av. , Vitoria - ES, CNPJ 36.947.105/0001-08 </p>
                </div>

                <div className='footer'>
                    <div className='socialMedia'>
                        <p>Siga-nos nas nossas redes sociais</p>
                        <div className='socialMediaLinks'>

                            <div className='facebookLink'>
                                <a href=''><FontAwesomeIcon icon={faFacebookF} /></a>
                            </div>
                            <div className='pinterestLink'>
                                <a href=''><FontAwesomeIcon icon={faPinterest} /></a>
                            </div>
                            <div className='instagramLink'>
                                <a href=''><FontAwesomeIcon icon={faInstagram} /></a>
                            </div>
                        </div>

                    </div>
                    <div className='formasPagamentos'>
                        <p>Formas de Pagamento:</p>
                        <img src={logoPagSeguro} alt='PagSeguro Pagamentos'></img>
                    </div>
                </div>


            </footer>


        </div>

    )

}


export default Home