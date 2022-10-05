import './projects.css';
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <section class="page-light" id="projects">
            <h3 class="title-page">Projetos</h3>
            <div class="container-projects">
                <Slider {...settings}>
                    <div class="item-projects img-1">
                        <div class="img-overlay"></div>
                        <a href="https://github.com/VanessaMainara/labe-commerce11" target="_blank" rel="noopener noreferrer">
                            <h3>Ecommerce</h3>
                            <p>Projeto desenvolvido em grupo durante o curso Web Full Stack Labenu.</p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://github.com/VanessaMainara" target="_blank" rel="noopener noreferrer">
                            <h3>Fundação Brado</h3>
                            <p>Site feito durante o desafio Fundação Casas Bahia.</p>
                        </a>
                    </div>
                    <div class="item-projects img-3">
                        <a href="https://github.com/VanessaMainara" target="_blank" rel="noopener noreferrer">
                            <h3>Github</h3>
                            <p>Para acessar todos meus projetos acesse meu github.</p>
                        </a>
                    </div>
                    
                </Slider>
            </div>
        </section>
    );
}
