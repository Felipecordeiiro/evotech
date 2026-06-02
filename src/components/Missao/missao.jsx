import './missao.css';

const Icon = ({ type }) => {
    const commonProps = {
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '1.7',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
        focusable: false,
    };

    if (type === 'values') {
        return (
            <svg {...commonProps}>
                <path d="M12 3l7 3v5c0 4.6-2.9 8.4-7 10-4.1-1.6-7-5.4-7-10V6l7-3z" />
                <path d="M9 12.4l2 2 4-4" />
            </svg>
        );
    }

    if (type === 'vision') {
        return (
            <svg {...commonProps}>
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        );
    }

    return (
        <svg {...commonProps}>
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3" />
            <path d="M12 19v3" />
            <path d="M2 12h3" />
            <path d="M19 12h3" />
        </svg>
    );
};

const principles = [
    {
        title: 'Missão',
        icon: 'mission',
        text: 'Transformar desafios industriais complexos em sistemas robóticos claros, seguros e eficientes.',
    },
    {
        title: 'Valores',
        icon: 'values',
        text: 'Colaboração, engenhosidade, responsabilidade técnica, humanidade e inovação aplicada.',
    },
    {
        title: 'Visão',
        icon: 'vision',
        text: 'Ser referência em soluções integradas de robótica e automação para a indústria brasileira.',
    },
];

const Missao = () => {
    return (
        <section className="principles-section" id="missao">
            <div className="principles-heading">
                <span>Base estratégica</span>
                <h2>Clareza para construir tecnologia que chega na operação.</h2>
            </div>
            <div className="missao-container">
                {principles.map((principle) => (
                    <article className="missao-description" key={principle.title}>
                        <div className="principle-icon">
                            <Icon type={principle.icon} />
                        </div>
                        <h3>{principle.title}</h3>
                        <p>{principle.text}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Missao;   
