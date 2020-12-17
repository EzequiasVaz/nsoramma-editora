import React from 'react'

import './styles.css'

import mundoPai from '/Users/Zeca Vaz/Documents/Projetos/nsoramma editora/nsoramma/src/images/mundopai.png'

function freeBookCard() {

    return (


        <div className='freeBookCard'>

            <div className='left'>

                <div className='bookImg'>
                    <img src={mundoPai}></img>
                </div>

            </div>



            <div className='right'>

                <div className='descBook'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed condimentum tincidunt iaculis.
                    Nam et odio non dolor tincidunt tempus vitae non ex.
                    Curabitur eget dignissim enim. Ut non laoreet eros.</p>
                </div>

                <div className='buttons'>                

                    <button className='btnDownloadPDF'>Baixar PDF</button>
                    <button className='btnReadOnline'>Ler Online</button>

                </div>



            </div>


            
        
            

            


        </div>

    )


}



export default freeBookCard