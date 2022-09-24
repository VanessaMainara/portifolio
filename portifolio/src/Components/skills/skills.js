import { useEffect } from 'react';
import './skills.css'

export default function Skills() {

    var passou = true;

    const restDescription = 'de experiência com essa tecnologia.'
    const listColors = ['#83cd29', '#FF0000', ' #00BFFF', '#e62c2d', '#61dafb', '#FFFF00', ' #e54d26']; 
    const titles = ['Node.js', 'Java', 'React', 'HTML5', 'CSS3', 'JavaScript', 'Git'];
    const progress = ['50', '10', '50', '110', '110', '50', '110']
    const descriptions = 
    [
    `6 meses ${restDescription}`,
    `1 meses ${restDescription}`,
    `6 meses ${restDescription}`,
    `1 ano ${restDescription}`,
    `1 ano ${restDescription}`,
    `6 meses ${restDescription}`,
    `1 ano ${restDescription}`,

    ];

    function criaListener(id) {
        return function() {
            document.querySelector('progress').value = progress[id];
            document.querySelector('.description').innerHTML = descriptions[id];
            document.querySelector('.title-description').innerHTML = titles[id];
            document.body.style.setProperty('--skillColor', listColors[id]);
        }
    }

    useEffect(() => {
        if (passou) {
            passou = false
            const items = document.querySelectorAll('.single-item');

            for (var i = 0; i < items.length; i++) {
                items[i].onmouseover = criaListener(i);
            }
        }  
    }, []);

    return (
        <section class="page-section" id="skills">
            <h2 class="title-page"><span>Minhas skills</span></h2>
            <div class="wrapper">
                <div class="description-skills">
                    <h2 class="title-description">Skill</h2>
                    <progress max="200" value="0"></progress>
                    <p class="description">Passe o mouse/aperte em cima de alguma skill para ver o tempo de experiência</p>
                </div>
                <div class="container-skills">
                    <div class="single-item">
                        <i class="devicon-nodejs-plain colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-java-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-react-original colored" id="icon-language"></i>
                    </div>
                    
                    <div class="single-item mg-1">
                        <i class="devicon-html5-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-css3-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item">
                        <i class="devicon-javascript-plain colored" id="icon-language"></i>
                    </div>
                    <div className="single-item">
                    <i class="devicon-git-plain colored" id="icon-language"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}