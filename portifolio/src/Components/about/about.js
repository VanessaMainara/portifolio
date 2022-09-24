import icon from '../header/assets/img-icon.png';
import Curriculo from './assets/curriculo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Olá me chamo Vanessa Mainara, tenho 24 anos, moro em Salto do Itararé PR, Sou dedicada, persistente acima de tudo honesta.<br></br>
                        Sempre tive muito apoio da minha família para seguir na profissão. Eles acreditam que o conhecimento é a única coisa que ninguém pode tirar de nós. No meu tempo livre gosto de assistir filmes de animação, desenhos. Tenho muita disposição em aprender e conhecer coisas novas. Gosto de trabalhar em grupo e interagindo com outras pessoas.
                        <br></br>
                        Estou em busca do meu primeiro emprego....
                        </p>
                        <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}