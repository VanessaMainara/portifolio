import './certificates.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import techja from "./assets/techja.png";
import android from "./assets/android.png";
import euprogramo from "./assets/euprogramo.png";
import logica from "./assets/logica.png";
import lgpd from "./assets/lgpd.png";
import elastech from "./assets/elastech.png";

export default function Certificates() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    return (
        <section class="page-section" id="certificates">
            <h3 class="title-page">Certificados</h3>
            <div class="container-owl-certificates">
            <Slider {...settings}>
                <div class="item">
                    <div class="img-item">
                        <img src={techja} alt="Certificado Suporte em TI 2021"></img>
                    </div>
                    <h3><span>Certificado Suporte em TI 2021</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={android} alt="Certificado Anfroid"></img>
                    </div>
                    <h3><span>Certificado APP Android</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={euprogramo} alt="Certificado Eu Programo"></img>
                    </div>
                    <h3><span>Certificado Eu Programo</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={logica} alt="Certificado Lógica de Programação"></img>
                    </div>
                    <h3><span>Certificado Lógica Programação</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={lgpd} alt="Certificado LGPD"></img>
                    </div>
                    <h3><span>Certificado LGPD</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={elastech} alt="Certificado ElasTech"></img>
                    </div>
                    <h3><span>Certificado ElasNaTech</span></h3>
                </div>

            </Slider>
            </div>
        </section>
    );
}