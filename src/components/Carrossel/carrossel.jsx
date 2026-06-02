import React, { useState, useRef, useEffect } from 'react';
import './carrossel.css'; 
import Robo1 from '../../assets/robo-1.png';
import Robo2 from '../../assets/robo-2.png';
import Robo3 from '../../assets/robo-3.png';
import Robo4 from '../../assets/robo-4.png';
import Robo5 from '../../assets/robo-5.png';
import Robo6 from '../../assets/robo-7.png';
import ProjetoSiraRobo from '../../assets/projeto-sira-robo.png';
import PalmilhaInteligente from '../../assets/prototipo.png';

const siraDetailBlocks = [
  {
    title: 'Como funciona',
    items: [
      'Imagem da peça ou chapa é enviada para a interface.',
      'O operador marca a ROI com cliques positivos e negativos.',
      'FastSAM ou SAM2 segmenta a geometria e extrai o contorno.',
      'O sistema gera pontos físicos e script KUKA KRL.',
    ],
  },
  {
    title: 'Diferenciais',
    items: [
      'Conversão de pixels para coordenadas reais em milímetros.',
      'Homografia por 4 cantos para corrigir perspectiva da chapa.',
      'Debug visual da mesa, chapa, ROI e trajetória final.',
      'Geração de CSV e programa .src para rastreabilidade.',
    ],
  },
  {
    title: 'Segurança e precisão',
    items: [
      'Bloqueio quando a trajetória sai dos limites da chapa.',
      'Margem interna parametrizável para área útil de soldagem.',
      'Movimento por HOME antes e depois da operação.',
      'Aproximação em altura segura antes do ponto de trabalho.',
    ],
  },
  {
    title: 'Impactos industriais',
    items: [
      'Reduz tempo de programação manual no teach pendant.',
      'Aumenta repetibilidade e padronização do cordão.',
      'Diminui retrabalho causado por erro de trajetória.',
      'Facilita adaptação para geometrias diferentes.',
    ],
  },
  {
    title: 'Aplicação',
    items: [
      'Soldagem robotizada com KUKA em célula industrial.',
      'Operações por contorno, preenchimento ou contorno + preenchimento.',
      'Provas de conceito, validação de processo e implantação em chão de fábrica.',
    ],
  },
];

const initialItemsData = [
  {
    id: 1,
    imgSrc: Robo1,
    alt: 'Robô industrial usado em célula de automação',
    title: 'Automação Industrial',
    topic: 'Célula Robótica',
    des: 'Projeto de integração de robôs industriais para executar tarefas repetitivas com mais precisão, segurança e padronização dentro do ambiente produtivo.',
    detailTitle: 'Célula Robótica Industrial',
    detailDes: 'Integração de robô, ferramentas, sensores e área de operação para reduzir esforço manual, aumentar repetibilidade e preparar a produção para processos automatizados.',
    specifications: [
      ['Aplicação', 'Indústria'],
      ['Foco', 'Precisão'],
      ['Controle', 'Integrado'],
      ['Operação', 'Segura'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Integração de robô, sensores e lógica de controle.', 'Operação pensada para reduzir esforço repetitivo.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Mais padronização no processo.', 'Maior segurança para a equipe de operação.'],
      },
      {
        title: 'Aplicação',
        items: ['Células produtivas com tarefas repetitivas.', 'Processos que exigem repetibilidade.'],
      },
    ],
  },
  {
    id: 2,
    imgSrc: ProjetoSiraRobo,
    imageClass: 'project-photo',
    alt: 'Robô KUKA de soldagem do projeto SIRA',
    hideTitle: true,
    topic: 'SIRA',
    des: 'Sistema aplicado de robótica industrial desenvolvido com foco em soldagem automatizada, integração de célula robótica e operação assistida em ambiente produtivo.',
    detailTitle: 'Projeto SIRA',
    detailDes: 'O SIRA utiliza um robô industrial KUKA em uma célula de soldagem para estudar, validar e demonstrar soluções de automação com precisão, segurança operacional e repetibilidade no processo.',
    specifications: [
      ['Robô', 'KUKA'],
      ['Processo', 'Soldagem'],
      ['Ambiente', 'Industrial'],
      ['Status', 'Real'],
    ],
    detailBlocks: siraDetailBlocks,
  },
  {
    id: 8,
    imgSrc: PalmilhaInteligente,
    imageClass: 'project-photo palmilha-photo',
    alt: 'Protótipo de palmilha inteligente com sensores e dashboard de análise de marcha',
    hideTitle: true,
    compactTitle: true,
    statusFlag: 'Em desenvolvimento',
    topic: 'Palmilha Inteligente (IoT)',
    des: 'Sistema vestível de aquisição de dados biomecânicos. Integra sensores inerciais (IMU) e matriz de força (FSR) com transmissão BLE de baixíssimo consumo para análise de marcha em tempo real.',
    detailTitle: 'Palmilha Inteligente (IoT)',
    detailDes: 'Solução vestível para capturar dados de marcha, pressão plantar e movimento em tempo real, conectando sensores embarcados a uma interface de análise biomecânica.',
    specifications: [
      ['Sensores', 'IMU + FSR'],
      ['Conexão', 'BLE'],
      ['Uso', 'Marcha'],
      ['Energia', 'Baixo consumo'],
    ],
    detailBlocks: [
      {
        title: 'Como funciona',
        items: [
          'Sensores FSR registram distribuição de força e pressão plantar.',
          'A IMU captura aceleração, orientação e padrões de movimento.',
          'Os dados são transmitidos via BLE para análise em tempo real.',
          'A interface exibe métricas como cadência, contato e simetria.',
        ],
      },
      {
        title: 'Diferenciais',
        items: [
          'Dispositivo vestível discreto para coleta contínua.',
          'Integra leitura de força e movimento no mesmo sistema.',
          'Arquitetura de baixíssimo consumo para uso prolongado.',
          'Base pronta para dashboards, relatórios e acompanhamento remoto.',
        ],
      },
      {
        title: 'Impactos industriais',
        items: [
          'Apoia validação de produtos, ergonomia e saúde ocupacional.',
          'Reduz dependência de laboratórios fixos para medições iniciais.',
          'Facilita monitoramento de performance, fadiga e assimetria.',
        ],
      },
      {
        title: 'Aplicação',
        items: [
          'Análise de marcha, reabilitação, esporte e pesquisa biomecânica.',
          'Monitoramento em tempo real para clínicas, equipes técnicas e P&D.',
        ],
      },
    ],
  },
  {
    id: 3,
    imgSrc: Robo2,
    alt: 'Robô articulado para testes de automação',
    title: 'Pesquisa Aplicada',
    topic: 'Robótica',
    des: 'Desenvolvimento de soluções robóticas para validar movimentos, rotinas de operação e possibilidades de automação em processos industriais.',
    detailTitle: 'Pesquisa em Robótica Aplicada',
    detailDes: 'Projeto voltado para testes de integração, simulação de rotinas e evolução de sistemas robóticos que possam ser adaptados a diferentes demandas da indústria.',
    specifications: [
      ['Área', 'Pesquisa'],
      ['Foco', 'Rotinas'],
      ['Uso', 'Testes'],
      ['Meta', 'Escalar'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Testes de movimento e integração em ambiente controlado.', 'Base técnica para evoluir protótipos em soluções aplicadas.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Reduz risco antes da implantação.', 'Ajuda a validar produtividade e segurança do processo.'],
      },
      {
        title: 'Aplicação',
        items: ['Pesquisa, simulação e validação de rotinas robóticas.'],
      },
    ],
  },
  {
    id: 4,
    imgSrc: Robo3,
    alt: 'Robô industrial para solução de soldagem automatizada',
    title: 'Soldagem',
    topic: 'Automatizada',
    des: 'Projeto para padronizar operações de soldagem com apoio robótico, reduzindo variações no processo e melhorando a produtividade.',
    detailTitle: 'Soldagem Automatizada',
    detailDes: 'Solução pensada para células produtivas que precisam de maior repetibilidade, controle do cordão de solda e operação mais segura para a equipe.',
    specifications: [
      ['Processo', 'MIG/MAG'],
      ['Ganho', 'Padrão'],
      ['Segurança', 'Maior'],
      ['Ciclo', 'Otimizado'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Trajetórias repetíveis para cordões mais consistentes.', 'Automação preparada para ciclos produtivos contínuos.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Mais qualidade na solda.', 'Menos exposição do operador a calor, arco e respingos.'],
      },
      {
        title: 'Aplicação',
        items: ['Soldagem de componentes metálicos e células de produção.'],
      },
    ],
  },
  {
    id: 5,
    imgSrc: Robo4,
    alt: 'Robô utilizado em integração de processos industriais',
    title: 'Integração',
    topic: 'Processos',
    des: 'Aplicação de robótica, lógica de controle e dispositivos auxiliares para conectar etapas produtivas e tornar a operação mais fluida.',
    detailTitle: 'Integração de Processos',
    detailDes: 'Projeto voltado à conexão entre equipamentos, fluxos de trabalho e rotinas de automação, criando uma base mais eficiente para o chão de fábrica.',
    specifications: [
      ['Sistema', 'Robótico'],
      ['Controle', 'Lógico'],
      ['Fluxo', 'Contínuo'],
      ['Equipe', 'Assistida'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Conexão entre equipamentos, rotinas e pontos de controle.', 'Projeto adaptável ao fluxo real da operação.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Menos interrupções no processo.', 'Operação mais previsível e fácil de monitorar.'],
      },
      {
        title: 'Aplicação',
        items: ['Linhas produtivas que precisam conectar etapas manuais e automatizadas.'],
      },
    ],
  },
  {
    id: 6,
    imgSrc: Robo5,
    alt: 'Robô industrial em projeto de tecnologia aplicada',
    title: 'Tecnologia',
    topic: 'Aplicada',
    des: 'Criação de soluções sob medida para levar automação, análise e controle para tarefas que exigem confiabilidade e eficiência.',
    detailTitle: 'Tecnologia Aplicada',
    detailDes: 'Projeto focado em transformar demandas reais em protótipos e soluções funcionais, aproximando pesquisa, engenharia e aplicação prática.',
    specifications: [
      ['Entrega', 'Protótipo'],
      ['Modelo', 'Sob medida'],
      ['Impacto', 'Eficiência'],
      ['Base', 'EvoTech'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Soluções desenvolvidas a partir de necessidades reais.', 'Integração entre software, robótica e automação.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Ganho de eficiência operacional.', 'Maior clareza para medir resultados do processo.'],
      },
      {
        title: 'Aplicação',
        items: ['Protótipos funcionais, pilotos industriais e automações sob medida.'],
      },
    ],
  },
  {
    id: 7,
    imgSrc: Robo6,
    alt: 'Robô industrial para desenvolvimento de automação',
    title: 'Desenvolvimento',
    topic: 'Robótico',
    des: 'Evolução de projetos com robôs industriais, do planejamento da célula aos testes de movimentação, segurança e operação.',
    detailTitle: 'Desenvolvimento Robótico',
    detailDes: 'Frente de desenvolvimento para validar ferramentas, melhorar processos e adaptar sistemas robóticos a novos desafios de automação.',
    specifications: [
      ['Etapa', 'Validação'],
      ['Base', 'Robôs'],
      ['Uso', 'Industrial'],
      ['Foco', 'Evolução'],
    ],
    detailBlocks: [
      {
        title: 'Diferenciais',
        items: ['Validação de ferramentas e rotinas antes da operação final.', 'Evolução contínua com base em testes práticos.'],
      },
      {
        title: 'Impactos industriais',
        items: ['Menor risco na adoção de novas tecnologias.', 'Mais confiança para escalar automações.'],
      },
      {
        title: 'Aplicação',
        items: ['Projetos de desenvolvimento robótico e melhoria de processos.'],
      },
    ],
  },
  
];

const getDetailBlocks = (item) => {
  if (Array.isArray(item.detailBlocks) && item.detailBlocks.length > 0) {
    return item.detailBlocks;
  }

  if (item.topic === 'SIRA') {
    return siraDetailBlocks;
  }

  return [
    {
      title: 'Resumo da solução',
      items: [item.detailDes || item.des || 'Projeto desenvolvido pela EvoTech.'],
    },
    {
      title: 'Indicadores',
      items: (item.specifications || []).map(([label, value]) => `${label}: ${value}`),
    },
  ];
};

const getBlockIconName = (title = '') => {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('segurança') || normalizedTitle.includes('precisão')) {
    return 'shield';
  }
  if (normalizedTitle.includes('impactos') || normalizedTitle.includes('indicadores')) {
    return 'chart';
  }
  if (normalizedTitle.includes('aplicação')) {
    return 'target';
  }
  if (normalizedTitle.includes('diferenciais')) {
    return 'spark';
  }
  return 'workflow';
};

const DetailIcon = ({ name }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  };

  if (name === 'shield') {
    return (
      <svg {...commonProps}>
        <path d="M12 3l7 3v5c0 4.6-2.9 8.4-7 10-4.1-1.6-7-5.4-7-10V6l7-3z" />
        <path d="M9.5 12l1.7 1.7 3.6-4" />
      </svg>
    );
  }

  if (name === 'chart') {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M8 15l3-4 3 2 4-6" />
      </svg>
    );
  }

  if (name === 'target') {
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
  }

  if (name === 'spark') {
    return (
      <svg {...commonProps}>
        <path d="M12 3l1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3z" />
        <path d="M18 14l.7 2.1L21 17l-2.3.9L18 20l-.7-2.1L15 17l2.3-.9L18 14z" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M5 7h4v4H5z" />
      <path d="M15 5h4v4h-4z" />
      <path d="M15 15h4v4h-4z" />
      <path d="M9 9h3a3 3 0 0 1 3 3v3" />
    </svg>
  );
};

function Carousel() {
  const [items, setItems] = useState(initialItemsData);
  const [carouselClass, setCarouselClass] = useState('');
  const [isClickDisabled, setIsClickDisabled] = useState(false);
  const [activeBlocks, setActiveBlocks] = useState({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showSlider = (type) => {
    if (isClickDisabled) return;
    setIsClickDisabled(true); 
    setCarouselClass(type); 

    if (type === 'next') {
      setItems((prevItems) => {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      });
    } else {
      setItems((prevItems) => {
        const last = prevItems[prevItems.length - 1];
        const rest = prevItems.slice(0, -1);
        return [last, ...rest];
      });
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsClickDisabled(false);
    }, 2000);
  };

  const handleSeeMore = (itemId) => {
    setActiveBlocks((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ?? 0,
    }));
    setCarouselClass('showDetail');
  };

  const handleBack = () => {
    setCarouselClass('');
  };

  const setActiveBlock = (itemId, index) => {
    setActiveBlocks((prev) => ({
      ...prev,
      [itemId]: index,
    }));
  };
    
  return (
    <>
    <h1 className='titulo' id='projetos'>Projetos</h1>
      <div className={`carousel ${carouselClass}`} >
        <div className="list">
          {items.map((item, itemIndex) => {
            const detailBlocks = getDetailBlocks(item);
            const activeBlockIndex = Math.min(activeBlocks[item.id] ?? 0, detailBlocks.length - 1);
            const activeBlock = detailBlocks[activeBlockIndex] || detailBlocks[0];
            const isDetailFocusable = carouselClass === 'showDetail' && itemIndex === 1;

            return (
            <div className="item" key={item.id}>
              
              <img src={item.imgSrc} alt={item.alt} className={item.imageClass || ''} />
              <div className={`introduce ${item.compactTitle ? 'compactTitle' : ''}`}>
                {item.statusFlag && <span className="projectStatusFlag">{item.statusFlag}</span>}
                {!item.hideTitle && <div className="title">{item.title || 'DESIGN SLIDER'}</div>}
                <div className="topic">{item.topic || 'Aerphone'}</div>
                <div className="des">
                  {item.des || 'Lorem ipsum dolor sit amet...'}
                </div>
                <button className="seeMore" onClick={() => handleSeeMore(item.id)}>
                  Explorar solução &#8599;
                </button>
              </div>
              <div className="detail">
                {item.statusFlag && <span className="projectStatusFlag detailFlag">{item.statusFlag}</span>}
                <div className="title">{item.detailTitle || 'Aerphone GHTK'}</div>
                <div className="des">
                  {item.detailDes || 'Lorem ipsum dolor sit amet...'}
                </div>
                <div className="specifications">
                  {item.specifications.map(([label, value]) => (
                    <div key={`${item.id}-${label}`}>
                      <p>{label}</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  <button onClick={handleBack} tabIndex={isDetailFocusable ? 0 : -1}>Retornar</button>
                </div>
                <div className="detailExplorer">
                  <div className="verticalTabs" role="tablist" aria-orientation="vertical" aria-label={`Seções de ${item.detailTitle}`}>
                    {detailBlocks.map((block, index) => {
                      const isActive = activeBlockIndex === index;
                      const iconName = getBlockIconName(block.title);

                      return (
                        <button
                          type="button"
                          className={`verticalTab ${isActive ? 'active' : ''}`}
                          key={`${item.id}-tab-${block.title}`}
                          id={`project-${item.id}-tab-${index}`}
                          role="tab"
                          aria-selected={isActive}
                          aria-controls={`project-${item.id}-panel-${index}`}
                          tabIndex={isDetailFocusable && isActive ? 0 : -1}
                          onClick={() => setActiveBlock(item.id, index)}
                        >
                          <span className="tabIcon"><DetailIcon name={iconName} /></span>
                          <span>{block.title}</span>
                        </button>
                      );
                    })}
                  </div>
                  <article
                    className="tabPanel"
                    id={`project-${item.id}-panel-${activeBlockIndex}`}
                    role="tabpanel"
                    aria-labelledby={`project-${item.id}-tab-${activeBlockIndex}`}
                  >
                    <div className="panelTitle">
                      <span className="tabIcon"><DetailIcon name={getBlockIconName(activeBlock?.title)} /></span>
                      <h3>{activeBlock?.title}</h3>
                    </div>
                    <ul>
                      {(activeBlock?.items || []).map((text) => (
                        <li key={`${item.id}-${activeBlock?.title}-${text}`}>{text}</li>
                      ))}
                    </ul>
                  </article>
                  <div className="mobileAccordion">
                    {detailBlocks.map((block, index) => {
                      const isActive = activeBlockIndex === index;
                      const iconName = getBlockIconName(block.title);

                      return (
                        <section className={`accordionItem ${isActive ? 'active' : ''}`} key={`${item.id}-accordion-${block.title}`}>
                          <button
                            type="button"
                            className="accordionTrigger"
                            aria-expanded={isActive}
                            aria-controls={`project-${item.id}-accordion-panel-${index}`}
                            tabIndex={isDetailFocusable ? 0 : -1}
                            onClick={() => setActiveBlock(item.id, index)}
                          >
                            <span className="tabIcon"><DetailIcon name={iconName} /></span>
                            <span>{block.title}</span>
                            <span className="accordionChevron" aria-hidden="true">+</span>
                          </button>
                          <div
                            className="accordionPanel"
                            id={`project-${item.id}-accordion-panel-${index}`}
                          >
                            <ul>
                              {block.items.map((text) => (
                                <li key={`${item.id}-${block.title}-${text}`}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
          })}
        </div>
        <div className="arrows">
          <button id="prev" onClick={() => showSlider('prev')} disabled={isClickDisabled}>
            &lt;
          </button>
          <button id="next" onClick={() => showSlider('next')} disabled={isClickDisabled}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
