import './Capa.css';
import banner from '../../assets/banner.jpg';
// import bannerMobile from '../../assets/banner-mobile.jpg'

export default function Capa() {
    return (

        <section className='secao_capa'
        style={{
            backgroundImage: `url(${banner})`,
        }}
        >
            <div className='texto'>
                <h2>Preview</h2>
                <h1>Verão 2026</h1>
                <button className='btn'>Comprar</button>
            </div>

        </section>
    )
}