import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
        <div className="hero-shell">
            <div className="hero-copy">
                <span className="hero-eyebrow">Robótica avançada para indústria</span>
                <h1>Transformando complexidade em eficiência.</h1>
                <p>
                    Desenvolvemos sistemas robóticos inteligentes que conectam visão computacional,
                    automação e controle para operações mais precisas, seguras e produtivas.
                </p>
                <div className="hero-actions" aria-label="Ações principais">
                    <a className="hero-cta hero-cta-primary" href="#projetos">Ver projetos</a>
                    <a className="hero-cta hero-cta-secondary" href="https://wa.me/5585991317493" target="_blank" rel="noreferrer">Falar com a EvoTech</a>
                </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
                <div className="visual-orbit visual-orbit-one"></div>
                <div className="visual-orbit visual-orbit-two"></div>
                <div className="visual-core">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="particle-network">
                    {Array.from({ length: 18 }).map((_, index) => (
                        <span className={`particle particle-${index + 1}`} key={index}></span>
                    ))}
                    {Array.from({ length: 12 }).map((_, index) => (
                        <i className={`connector connector-${index + 1}`} key={index}></i>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Hero;
