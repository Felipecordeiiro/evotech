import "./about.css";

const About = () => {
    return (
        <section className="about-container" id="sobre">
            <div className="about-content">
                <div className="about-text-content">
                    <span>Sobre nós</span>
                    <h2>Engenharia aplicada para levar robótica do protótipo ao chão de fábrica.</h2>
                    <p>
                        A EvoTech une software, visão computacional, automação e integração robótica para criar
                        soluções que melhoram processos industriais reais, com foco em precisão, segurança e adoção prática.
                    </p>
                </div>
                <div className="about-signal" aria-label="Áreas de atuação da EvoTech">
                    <div className="signal-card">
                        <strong>Visão</strong>
                        <p>Interpretação de imagens para orientar decisões de processo.</p>
                    </div>
                    <div className="signal-card">
                        <strong>Robótica</strong>
                        <p>Trajetórias, células e rotinas preparadas para operação industrial.</p>
                    </div>
                    <div className="signal-card">
                        <strong>Integração</strong>
                        <p>Conexão entre sensores, interfaces, controladores e fluxo produtivo.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;   
