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
                        <img src={tamanco} alt="Tamanco" />
                    </div>
                        <div className='card-info'>
                            <h3>Tamanco</h3>
                            <p className='preco'>R$ 149,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                                        <div className='card'>
                        <div className='card-image'>
                        <img src={bolsa} alt="Bolsa" />
                    </div>
                        <div className='card-info'>
                            <h3>Bolsa</h3>
                            <p className='preco'>R$ 749,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                                        <div className='card'>
                        <div className='card-image'>
                        <img src={note} alt="note" />
                    </div>
                        <div className='card-info'>
                            <h3>Porta Notebook</h3>
                            <p className='preco'>R$ 149,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                                        <div className='card'>
                        <div className='card-image'>
                        <img src={tenis} alt="Tenis" />
                    </div>
                        <div className='card-info'>
                            <h3>Tênis</h3>
                            <p className='preco'>R$ 449,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                    
                                        <div className='card'>
                        <div className='card-image'>
                        <img src={sandalia2} alt="Tamanco" />
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