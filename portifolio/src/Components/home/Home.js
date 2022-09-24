import './Home.css';
import {useTypewriter} from 'react-simple-typewriter'
import img from './assets/programador.webp';



export default function Home() {

  const {text} = useTypewriter({
    words: [" Desenvolvedora "," Fullstack "],
    loop: 0, 
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  return (
    <section id="home">
      <div class="home">
        <div class="blob">
          
        </div>
        <div class="max-width">
          <div class="texto1">Bem vindo, meu nome é:</div>
          <div class="texto2"><span>Vanessa</span></div>
          <div class="texto3">
          &nbsp;{text}
          </div>
          <a href="https://github.com/VanessaMainara" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Encontre-me</a>
        </div>
        <div class="right-img">
          <img src={img} alt="imagem programdor" class="img-home"></img>
        </div>
      </div>
    </section>
  );
}
