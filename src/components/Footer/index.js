import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons'


import '../Footer/styles.css'



import logoPagSeguro from '/Users/Zeca Vaz/Documents/Projetos/nsoramma editora/nsoramma/src/images/pagseguro.png'


function Footer() {


    return (
        <>
        <footer>

        <div className='headerFooter'>
                <p>© Editora Nsoromma, 2021 - Todos direitos reservados. Endereço Av. , Vitoria - ES, CNPJ 36.947.105/0001-08 </p>
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
            
        </>



    )



}



export default Footer


