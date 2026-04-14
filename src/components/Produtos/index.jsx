import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return(
        <section className='produtos'>
            <div className='titulos'>
                <h2>Produtos</h2>
                <p></p>

                <div className='produtos_grid'>
                    <div className='card'>
                        <div className='card-image'>
                        <img src={sandalia1} alt="Sandália" />
                        <span className='badge-venda'>Mais vendido</span>
                    </div>
                        <div className='card-info'>
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                                        <div className='card'>
                        <div className='card-image'>
                        <img src={sandalia2} alt="Sandália" />
                    </div>
                        <div className='card-info'>
                            <h3>Sandália Pink</h3>
                            <p className='preco'>R$ 249,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}