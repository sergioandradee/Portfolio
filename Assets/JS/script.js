// ----- Idioma: botão PT / ES que troca todos os textos do site -----
// Para traduzir mais uma frase, acrescenta uma linha  'texto em português': 'texto en español',  na lista DICIONARIO.
(function () {
  const DICIONARIO = {
    // menu
    'Home': 'Inicio', 'Sobre': 'Sobre mí', 'Criar': 'Crear', 'Projetos': 'Proyectos',
    'Abrir menu': 'Abrir menú',
    // títulos da página
    'Sergio Andrade | Designer Multimídia': 'Sergio Andrade | Diseñador Multimedia',
    'Portfólio de Sergio Andrade, designer multimídia.': 'Portafolio de Sergio Andrade, diseñador multimedia.',
    'Projetos | Sergio Andrade': 'Proyectos | Sergio Andrade',
    // home e crachá
    'Designer Multimídia': 'Diseñador Multimedia',
    'Crachá de Sergio Andrade. Clique ou pressione Enter para virar.': 'Credencial de Sergio Andrade. Haz clic o pulsa Enter para darle la vuelta.',
    'Portfólio': 'Portafolio',
    'Disponível para projetos': 'Disponible para proyectos',
    'Clique para virar ↻': 'Haz clic para girar ↻',
    'testar e evoluir.': 'probar y evolucionar.',
    'Mudar as cores da Home': 'Cambiar los colores del Inicio',
    'Mudar as cores': 'Cambiar los colores',
    // sobre
    'Contatos': 'Contactos',
    'Sobre mim': 'Acerca de mí',
    'Designer multimídia.': 'Diseñador multimedia.',
    'Sempre a experimentar.': 'Siempre experimentando.',
    'Olá, me chamo Sergio': 'Hola, me llamo Sergio',
    'O design, para mim, é uma forma de transformar ideias em experiências visuais. É explorar, experimentar e encontrar novas maneiras de comunicar aquilo que nem sempre precisa ser dito com palavras.':
      'El diseño, para mí, es una forma de transformar ideas en experiencias visuales. Es explorar, experimentar y encontrar nuevas maneras de comunicar aquello que no siempre necesita decirse con palabras.',
    'Experimentar, testar e evoluir.': 'Experimentar, probar y evolucionar.',
    'Ver projetos': 'Ver proyectos',
    'Animação do meu personagem': 'Animación de mi personaje',
    'Vamos criar algo juntos?': '¿Creamos algo juntos?',
    'PRONTO': 'LISTO', 'PUXANDO...': 'TIRANDO...', 'IMPRIMINDO': 'IMPRIMIENDO', 'CONCLUÍDO': 'COMPLETADO',
    // habilidades
    'Identidade visual': 'Identidad visual', 'Ilustrações': 'Ilustraciones', 'Design editorial': 'Diseño editorial',
    'Marketing digital': 'Marketing digital', 'Cartazes': 'Afiches', 'Tipografia': 'Tipografía',
    'Programação': 'Programación', 'Idealização de marca': 'Ideación de marca',
    'Cada habilidade é uma peça': 'Cada habilidad es una pieza',
    'Encaixando as habilidades...': 'Encajando las habilidades...',
    'Habilidades encaixadas ✓': 'Habilidades encajadas ✓',
    'Próxima': 'Siguiente', 'Peças': 'Piezas', '↻ Jogar de novo': '↻ Jugar de nuevo',
    // processo
    'Processo': 'Proceso',
    'Ouvir': 'Escuchar',
    'Entender a marca, o público e o objetivo antes de desenhar qualquer coisa.': 'Entender la marca, el público y el objetivo antes de dibujar cualquier cosa.',
    'Explorar': 'Explorar',
    'Referências, croquis soltos e muitas ideias em cima da mesa.': 'Referencias, bocetos sueltos y muchas ideas sobre la mesa.',
    'Dar forma ao conceito escolhido, com cor, tipografia e composição.': 'Dar forma al concepto elegido, con color, tipografía y composición.',
    'Refinar': 'Refinar',
    'Testar, ajustar os detalhes e entregar tudo pronto para usar.': 'Probar, ajustar los detalles y entregar todo listo para usar.',
    'Chegamos ao fim do processo.': 'Llegamos al final del proceso.',
    // conversa e correio
    'Tem um projeto em mente? Me conte a ideia e vamos ver como tirá-lo do papel.': '¿Tienes un proyecto en mente? Cuéntame la idea y vemos cómo hacerla realidad.',
    'Enviar email': 'Enviar email',
    'CORREIO': 'CORREO',
    'Girar a manivela para tirar uma carta do correio': 'Girar la manivela para sacar una carta del correo',
    'Carta do correio': 'Carta del correo',
    'Fechar carta': 'Cerrar carta',
    'Carta 1 · Contatos': 'Carta 1 · Contactos',
    'Me conte sua ideia. Respondo o mais rápido que puder.': 'Cuéntame tu idea. Te respondo lo más rápido que pueda.',
    'Copiado!': '¡Copiado!',
    'Carta 2 · Projetos': 'Carta 2 · Proyectos',
    'Quer ver o que já fiz?': '¿Quieres ver lo que ya hice?',
    'Identidades, ilustrações, cartazes e mais. Passe pela galeria de projetos e veja como cada ideia ganhou forma.':
      'Identidades, ilustraciones, afiches y más. Pasa por la galería de proyectos y mira cómo cada idea tomó forma.',
    // projetos
    'Em breve': 'Próximamente', '': 'Espera',
    'Projeto em breve': 'Proyecto próximamente',
    // página de projeto
    '← Todos os projetos': '← Todos los proyectos',
    'Categoria': 'Categoría', 'Ferramentas': 'Herramientas', 'Ano': 'Año',
    'Descrição:': 'Descripción:',
    'Explora o projeto ↓': 'Explora el proyecto ↓',
    'Ver em tela cheia ⤢': 'Ver en pantalla completa ⤢',
    'Próximo projeto': 'Siguiente proyecto',
    'Ver todos os projetos': 'Ver todos los proyectos',
    'Sair ×': 'Salir ×',
    'Imagem anterior': 'Imagen anterior', 'Próxima imagem': 'Imagen siguiente',
    // descrições dos projetos
    'Pluma Smoothies é uma marca vibrante e descontraída que transforma smoothies em uma explosão de sabor e frescor. Em seu food truck, combina frutas selecionadas de alta qualidade com uma textura cremosa e sabores intensos, criando bebidas irresistíveis.':
      'Pluma Smoothies es una marca vibrante y desenfadada que transforma los smoothies en una explosión de sabor y frescura. En su food truck, combina frutas seleccionadas de alta calidad con una textura cremosa y sabores intensos, creando bebidas irresistibles.',
    'Com cores marcantes e uma mascote cheia de personalidade desenhada unicamente para a marca, Pluma transmite uma energia tropical, divertida e refrescante a cada gole.':
      'Con colores llamativos y una mascota llena de personalidad dibujada exclusivamente para la marca, Pluma transmite una energía tropical, divertida y refrescante en cada sorbo.',
    'O projeto de identidade visual Dama Centeio busca traduzir o cuidado e a delicadeza da panificação artesanal por meio de uma estética elegante, acolhedora e atemporal. A marca ganha vida através de uma tipografia marcante, uma paleta de tons terrosos e uma ilustração feminina que representa o lado humano e cuidadoso por trás de cada produto. O resultado é uma identidade que busca tornar cada detalhe da experiência mais especial, autêntico e memorável.':
      'El proyecto de identidad visual Dama Centeio busca traducir el cuidado y la delicadeza de la panadería artesanal a través de una estética elegante, acogedora y atemporal. La marca cobra vida mediante una tipografía llamativa, una paleta de tonos terrosos y una ilustración femenina que representa el lado humano y cuidadoso detrás de cada producto. El resultado es una identidad que busca hacer cada detalle de la experiencia más especial, auténtico y memorable.',
    'Sojou nasce da vontade de dar uma nova cara ao tofu. Uma marca que combina sabor, criatividade e atitude para transformar um alimento versátil em uma experiência divertida e cheia de personalidade. Seus mascotes dão vida à marca, traduzindo de forma descontraída e expressiva a diversidade de sabores e o espírito único da Sojou.':
      'Sojou nace del deseo de darle una nueva cara al tofu. Una marca que combina sabor, creatividad y actitud para convertir un alimento versátil en una experiencia divertida y llena de personalidad. Sus mascotas dan vida a la marca, traduciendo de forma desenfadada y expresiva la diversidad de sabores y el espíritu único de Sojou.',
    'Projeto de identidade visual e manual de marca para a Bloom Coffee, uma cafeteria de cafés especiais que une a nostalgia do estilo vintage à leveza do design contemporâneo. O conceito traduz uma paleta de tons quentes, tipografia expressiva, um mascote cheio de personalidade e aplicações em embalagens e papelaria.':
      'Proyecto de identidad visual y manual de marca para Bloom Coffee, una cafetería de cafés de especialidad que une la nostalgia del estilo vintage con la ligereza del diseño contemporáneo. El concepto traduce una paleta de tonos cálidos, tipografía expresiva, una mascota llena de personalidad y aplicaciones en empaques y papelería.',
    'Projeto de personal branding desenvolvido para explorar a minha identidade visual como Designer Multimídia. O projeto combina ilustração, tipografia, cores e motion para criar um sistema visual que reflete a minha personalidade, processo criativo e forma de trabalhar.':
      'Proyecto de personal branding desarrollado para explorar mi identidad visual como Diseñador Multimedia. El proyecto combina ilustración, tipografía, colores y motion para crear un sistema visual que refleja mi personalidad, mi proceso creativo y mi forma de trabajar.',
    'Projeto editorial conceitual e ilustrações autorais para o livro LUMINA. Através de formas orgânicas, paleta de tons terrosos e tipografia clássica, o projeto visual mapeia a essência do processo criativo. Da mentalização da ideia e croquis soltos até o design finalizado.':
      'Proyecto editorial conceptual e ilustraciones de autoría propia para el libro LUMINA. A través de formas orgánicas, una paleta de tonos terrosos y tipografía clásica, el proyecto visual mapea la esencia del proceso creativo. Desde la mentalización de la idea y los bocetos sueltos hasta el diseño finalizado.',
    "Série de cartazes do filme Vivarium. O projeto explora o conceito 'A ilusão do caminho como um percurso vital em direção a um destino inalcançável' através de três linguagens visuais (tipográfica, ilustrada e fotográfica). O caminho, a sensação de confinamento e o espaço funcionam como elementos centrais para representar diferentes formas de um percurso cujo destino nunca chega a se concretizar.":
      "Serie de afiches de la película Vivarium. El proyecto explora el concepto 'La ilusión del camino como un recorrido vital hacia un destino inalcanzable' a través de tres lenguajes visuales (tipográfico, ilustrado y fotográfico). El camino, la sensación de encierro y el espacio funcionan como elementos centrales para representar distintas formas de un recorrido cuyo destino nunca llega a concretarse."
  };

  // frases com partes que mudam (números, nomes de projeto...)
  const REGRAS = [
    [/DESIGNER MULTIMÍDIA/g, 'DISEÑADOR MULTIMEDIA', /DISEÑADOR MULTIMEDIA/g, 'DESIGNER MULTIMÍDIA'],
    [/^(.*) — imagem de capa$/, '$1 — imagen de portada', /^(.*) — imagen de portada$/, '$1 — imagem de capa'],
    [/^(.*) — imagem (\d+)$/, '$1 — imagen $2', /^(.*) — imagen (\d+)$/, '$1 — imagem $2'],
    [/^Ver imagem (\d+)$/, 'Ver imagen $1', /^Ver imagen (\d+)$/, 'Ver imagem $1'],
    [/^Galeria: (.*)$/, 'Galería: $1', /^Galería: (.*)$/, 'Galeria: $1']
  ];

  const ES = {};
  const PT = {};
  Object.keys(DICIONARIO).forEach(function (k) {
    const v = DICIONARIO[k];
    if (k === v) return;
    ES[k] = v;
    if (!(v in PT)) PT[v] = k;
  });

  let lingua = 'pt';
  try { if (localStorage.getItem('idioma') === 'es') lingua = 'es'; } catch (e) {}

  function traduzir(texto, para) {
    if (!texto) return texto;
    const meio = texto.replace(/\s+/g, ' ').trim();
    if (!meio) return texto;
    const mapa = para === 'es' ? ES : PT;
    let novo = mapa[meio];
    if (novo === undefined) {
      novo = meio;
      REGRAS.forEach(function (r) {
        const de = para === 'es' ? r[0] : r[2];
        const pa = para === 'es' ? r[1] : r[3];
        novo = novo.replace(de, pa);
      });
      if (novo === meio) return texto;
    }
    const ini = texto.match(/^\s*/)[0];
    const fim = texto.match(/\s*$/)[0];
    return ini + novo + fim;
  }
  window.T = function (texto) { return traduzir(texto, lingua); };

  const ATRIBUTOS = ['aria-label', 'alt', 'title'];
  const IGNORAR = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
  let aplicando = false;

  function traduzirNo(no, para) {
    if (no.nodeType === 3) {
      const pai = no.parentNode;
      if (pai && IGNORAR[pai.nodeName]) return;
      const novo = traduzir(no.data, para);
      if (novo !== no.data) no.data = novo;
      return;
    }
    if (no.nodeType !== 1 || IGNORAR[no.nodeName]) return;
    ATRIBUTOS.forEach(function (a) {
      if (!no.hasAttribute(a)) return;
      const v = no.getAttribute(a);
      const n = traduzir(v, para);
      if (n !== v) no.setAttribute(a, n);
    });
    if (no.nodeName === 'META' && no.getAttribute('name') === 'description') {
      const v = no.getAttribute('content');
      const n = traduzir(v, para);
      if (n !== v) no.setAttribute('content', n);
    }
    for (let c = no.firstChild; c; c = c.nextSibling) traduzirNo(c, para);
  }

  // as letras do cargo da Home são peças soltas: refaz-se o conjunto na nova língua
  function refazerCargo(para) {
    const el = document.getElementById('homeCargo');
    if (!el || !el.querySelector('.ch')) return;
    const atual = el.textContent;
    const novo = traduzir(atual, para);
    if (novo === atual) return;
    const ligadas = el.querySelector('.ch.on') !== null;
    el.innerHTML = novo.split('').map(function (c) {
      if (c === ' ') return ' ';
      return '<span class="ch' + (ligadas ? ' on' : '') + '">' + c + '</span>';
    }).join('');
    el.setAttribute('aria-label', novo);
    window.dispatchEvent(new Event('resize'));
  }

  function aplicar(para) {
    aplicando = true;
    traduzirNo(document.documentElement, para);
    refazerCargo(para);
    document.documentElement.lang = para;
    aplicando = false;
  }

  // textos criados mais tarde pelo JavaScript também são traduzidos
  const olho = new MutationObserver(function (lista) {
    if (aplicando || lingua !== 'es') return;
    aplicando = true;
    lista.forEach(function (m) {
      if (m.type === 'characterData') traduzirNo(m.target, 'es');
      else if (m.type === 'attributes') traduzirNo(m.target, 'es');
      else m.addedNodes.forEach(function (n) { traduzirNo(n, 'es'); });
    });
    aplicando = false;
  });
  function vigiar() {
    olho.disconnect();
    if (lingua !== 'es') return;
    olho.observe(document.documentElement, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ATRIBUTOS
    });
  }

  // o botão
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'idioma';
  botao.innerHTML =
    '<span class="idioma-fundo" aria-hidden="true"></span>' +
    '<span class="idioma-op" data-l="pt">PT</span>' +
    '<span class="idioma-op" data-l="es">ES</span>';

  function marcarBotao() {
    botao.setAttribute('data-lingua', lingua);
    botao.setAttribute('aria-label', lingua === 'es' ? 'Cambiar a portugués' : 'Mudar para espanhol');
    botao.setAttribute('title', lingua === 'es' ? 'Português' : 'Español');
  }

  botao.addEventListener('click', function () {
    lingua = lingua === 'es' ? 'pt' : 'es';
    try { localStorage.setItem('idioma', lingua); } catch (e) {}
    aplicar(lingua);
    vigiar();
    marcarBotao();
  });

  document.body.appendChild(botao);
  marcarBotao();
  if (lingua === 'es') {
    aplicar('es');
    vigiar();
  }
})();

// ----- Menu do telemóvel -----
const menu = document.querySelector('.menu');
const botao = document.getElementById('botao-menu');
const links = document.querySelectorAll('#links a');

botao.addEventListener('click', function () {
  menu.classList.toggle('aberto');
});

// Fecha o menu quando se clica num link
links.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('aberto');
  });
});

// ----- Menu do telemóvel: mostra os nomes na barra; se não couberem, usa o botão ☰ -----
function ajustarMenu() {
  menu.classList.remove('hamb');
  if (window.innerWidth > 700) return;
  const nav = document.getElementById('links');
  if (nav.scrollWidth > nav.clientWidth + 1) menu.classList.add('hamb');
}
ajustarMenu();
window.addEventListener('resize', ajustarMenu);
window.addEventListener('load', ajustarMenu);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustarMenu);

// ----- Menu fica mais sólido quando se desce a página -----
window.addEventListener('scroll', function () {
  menu.classList.toggle('rolou', window.scrollY > 20);
});

// ----- Marca no menu a secção onde estás -----
const secoes = document.querySelectorAll('section');

const observadorMenu = new IntersectionObserver(function (entradas) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      const linkAtual = document.querySelector(
        '#links a[href="#' + entrada.target.id + '"]'
      );

      // só muda o destaque se existir um link para esta secção
      if (linkAtual) {
        links.forEach(function (link) {
          link.classList.remove('ativo');
        });
        linkAtual.classList.add('ativo');
      }
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

secoes.forEach(function (secao) {
  observadorMenu.observe(secao);
});

// ----- Elementos com a classe "aparecer" surgem suavemente ao chegar -----
const elementos = document.querySelectorAll('.aparecer');

const observadorAparecer = new IntersectionObserver(function (entradas, observador) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visivel');
      observador.unobserve(entrada.target);
    }
  });
}, { threshold: 0.15 });

elementos.forEach(function (elemento) {
  elemento.classList.add('escondido');
  observadorAparecer.observe(elemento);
});

// ----- Ano automático no rodapé -----
document.getElementById('ano').textContent = new Date().getFullYear();

// ----- Parallax do granulado -----
const velocidadeGrao = 0.4;

// (no telemóvel não se faz: mexer numa camada fixa inteira a cada scroll pesa na bateria)
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  window.addEventListener('scroll', function () {
    const grao = (window.scrollY * velocidadeGrao) % 240;
    document.body.style.setProperty('--grao', grao + 'px');
  }, { passive: true });
}

// ----- Sobre: entrada pelos lados, repete sempre que a secção aparece -----
const entradasSobre = document.querySelectorAll(
  '.entrada-esquerda, .entrada-direita, .entrada-baixo'
);

// Dentro do Sobre, o conteúdo só entra quando a folha já "chegou" (depois do puxão), e repete sempre
const secaoSobre = document.getElementById('sobre');
const dentroSobre = new Map();

function chegouSobre() {
  return !!secaoSobre && secaoSobre.getBoundingClientRect().top <= window.innerHeight * 0.22;
}

function atualizarSobre() {
  const chegou = chegouSobre();
  const foto = document.querySelector('.sobre-foto.escondido');
  const texto = document.querySelector('.sobre-texto.escondido');
  const juntos = window.innerWidth <= 900 && foto && texto &&
    (dentroSobre.get(foto) || dentroSobre.get(texto));
  dentroSobre.forEach(function (dentro, el) {
    let ver = chegou && dentro;
    if (juntos && (el === foto || el === texto)) ver = chegou;
    el.classList.toggle('visivel', ver);
  });
}

const observadorSobre = new IntersectionObserver(function (lista) {
  lista.forEach(function (item) {
    if (secaoSobre && secaoSobre.contains(item.target)) {
      dentroSobre.set(item.target, item.isIntersecting);
    } else {
      item.target.classList.toggle('visivel', item.isIntersecting);
    }
  });
  atualizarSobre();
}, { threshold: 0.25 });

window.addEventListener('scroll', atualizarSobre, { passive: true });
window.addEventListener('resize', atualizarSobre);

entradasSobre.forEach(function (elemento) {
  elemento.classList.add('escondido');
  observadorSobre.observe(elemento);
});

/* ----- ABERTURA DA GALERIA APÓS A DESCRIÇÃO ----- */

(function () {
  const overlay = document.getElementById('galeriaOverlay');
  const pontoEntrada = document.querySelectorAll(".preview-imagens img")[1];
  const botaoFechar = document.getElementById('fecharGaleria');

  if (!overlay || !pontoEntrada || !botaoFechar) return;

  let galeriaAberta = false;
  let galeriaFechadaManualmente = false;
  let scrollAnterior = 0;
  let jaDesceu = false;

  function abrirGaleria() {
    if (galeriaAberta || galeriaFechadaManualmente || !jaDesceu) return;

    galeriaAberta = true;
    scrollAnterior = window.scrollY;

    overlay.scrollTop = 0;
    overlay.classList.add('ativa');
    document.body.classList.add('galeria-aberta');

    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('role', 'dialog');
  }

  function verificarEntrada() {
  if (galeriaAberta || galeriaFechadaManualmente) return;

  const posicao = pontoEntrada.getBoundingClientRect();

  if (
    jaDesceu &&
    posicao.top < window.innerHeight &&
    posicao.bottom > 0
  ) {
    abrirGaleria();
  }
}

  function aoFazerScroll() {
    if (window.scrollY > 100) {
      jaDesceu = true;
    }

    verificarEntrada();
  }

  function fecharGaleria() {
    if (!galeriaAberta) return;

    // Impede a galeria de voltar a abrir nesta visita à página.
    galeriaFechadaManualmente = true;

    galeriaAberta = false;
    overlay.classList.remove('ativa');
    document.body.classList.remove('galeria-aberta');

    overlay.removeAttribute('aria-modal');
    overlay.removeAttribute('role');

    window.scrollTo({
      top: scrollAnterior,
      behavior: 'auto'
    });
  }

  window.addEventListener('scroll', aoFazerScroll, { passive: true });
  window.addEventListener('resize', verificarEntrada);

  botaoFechar.addEventListener('click', fecharGaleria);

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && galeriaAberta) {
      fecharGaleria();
    }
  });
})();

// ----- Cursor personalizado (só em computadores com rato) -----
(function () {
  const cursor = document.getElementById('cursor');
  const temRato = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (!cursor || !temRato) return;

  document.documentElement.classList.add('cursor-ativo');

  let alvoX = window.innerWidth / 2;
  let alvoY = window.innerHeight / 2;
  let atualX = alvoX;
  let atualY = alvoY;

  window.addEventListener('mousemove', function (e) {
    alvoX = e.clientX;
    alvoY = e.clientY;
    cursor.classList.add('visivel');
  });

  document.addEventListener('mouseleave', function () {
    cursor.classList.remove('visivel');
  });

  // A bolinha persegue o rato com um pequeno atraso (dá suavidade)
  function seguirRato() {
    atualX += (alvoX - atualX) * 0.18;
    atualY += (alvoY - atualY) * 0.18;
    cursor.style.transform = 'translate(' + atualX + 'px, ' + atualY + 'px)';
    requestAnimationFrame(seguirRato);
  }
  seguirRato();

  // Muda de aspeto conforme o que está debaixo do rato
  document.addEventListener('mouseover', function (e) {
    const emCartao = e.target.closest('.projeto:not(.em-breve), .projeto-imagens img, .proximo-cartao');
    const emLink = e.target.closest('a, button');
    cursor.classList.toggle('sobre-cartao', !!emCartao);
    cursor.classList.toggle('sobre-link', !!emLink && !emCartao);
  });
})();

// ----- Transição suave entre páginas -----
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    // Ignora o que não deve ter transição
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    if (link.target === '_blank' || link.hasAttribute('download')) return;
    if (link.protocol !== 'http:' && link.protocol !== 'https:' && link.protocol !== 'file:') return;

    // Link para a mesma página (ex: #sobre): deixa funcionar normal
    const destino = new URL(link.href);
    if (destino.pathname === window.location.pathname) return;

    e.preventDefault();
    document.body.classList.add('saindo');
    setTimeout(function () {
      window.location.href = link.href;
    }, 350);
  });

  // Se voltares atrás no browser, a página não fica apagada
  window.addEventListener('pageshow', function () {
    document.body.classList.remove('saindo');
  });
})();

// ----- Ondas 3D do fundo (continuam ao fazer scroll e reagem ao rato) -----
(function () {
  const canvas = document.getElementById('ondas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // As ondas movem-se mais devagar que a página (1 = igual, 0 = paradas)
  const velocidadeScroll = 0.5;

  let largura, altura;
  const rato = { x: 0.5, y: 0.5 };   // onde está o rato (0 a 1)
  const suave = { x: 0.5, y: 0.5 };  // posição suavizada que as ondas seguem
  let animando = false;
  let desenhoPedido = false;

  // Cada faixa desce pela página a serpentear. Para mudar o aspeto:
  // x = posição lateral (0 a 1) | amp = quanto serpenteia | periodo = comprimento da curva
  // fase = onde a curva começa | grossura | luz = cor da borda | forca = reação ao rato
  const faixas = [
    { x: 0.12, amp: 0.16, periodo: 1.6, fase: 0.0, grossura: 0.17, luz: 'rgba(242,120,75,0.95)',  forca: 1.0 },
    { x: 0.55, amp: 0.20, periodo: 2.1, fase: 2.2, grossura: 0.12, luz: 'rgba(205,216,255,0.85)', forca: 1.6 },
    { x: 0.92, amp: 0.14, periodo: 1.4, fase: 4.1, grossura: 0.19, luz: 'rgba(170,190,255,0.85)', forca: 0.7 }
  ];

  function ajustar() {
    // no telemóvel as ondas são suaves: não precisam de resolução dupla (poupa bateria)
    const pequeno = window.matchMedia('(max-width: 700px)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, pequeno ? 1 : 2);
    largura = window.innerWidth;
    altura = window.innerHeight;
    canvas.width = largura * dpr;
    canvas.height = altura * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function desenharFaixa(f, deslocX, deslocY, deslocScroll) {
    const g = f.grossura * Math.max(largura, altura);
    const volta = Math.PI * 2;

    // Percorre a faixa de cima a baixo do ecrã, ponto a ponto
    const curva = new Path2D();
    for (let y = -g; y <= altura + g; y += 24) {
      // posição na "página infinita": é isto que faz as ondas continuarem ao descer
      const yPagina = y + deslocScroll + deslocY * f.forca;

      const serpentear =
        Math.sin(volta * yPagina / (f.periodo * altura) + f.fase) * f.amp +
        Math.sin(volta * yPagina / (0.7 * altura) + f.fase * 2) * 0.03;

      const px = largura * (f.x + serpentear) + deslocX * f.forca;

      if (y === -g) {
        curva.moveTo(px, y);
      } else {
        curva.lineTo(px, y);
      }
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = g;

    // 1) A luz da borda (com brilho)
    ctx.save();
    ctx.shadowColor = f.luz;
    ctx.shadowBlur = 40;
    ctx.strokeStyle = f.luz;
    ctx.stroke(curva);
    ctx.restore();

    // 2) O corpo da faixa, deslocado um pouco: só sobra luz do lado de baixo/direita
    ctx.save();
    ctx.translate(-7, -9);
    const corpo = ctx.createLinearGradient(0, 0, largura, altura);
    corpo.addColorStop(0, 'rgba(37,71,160,0.95)');
    corpo.addColorStop(1, 'rgba(16,30,92,0.95)');
    ctx.strokeStyle = corpo;
    ctx.stroke(curva);
    ctx.restore();
  }

  function desenhar() {
    ctx.clearRect(0, 0, largura, altura);

    const dx = (suave.x - 0.5) * largura * 0.18;
    const dy = (suave.y - 0.5) * altura * 0.18;
    const deslocScroll = window.scrollY * velocidadeScroll;

    faixas.forEach(function (f) {
      desenharFaixa(f, dx, dy, deslocScroll);
    });
  }

  // Anima enquanto as ondas ainda estão a alcançar o rato; depois pára (poupa bateria)
  function animar() {
    suave.x += (rato.x - suave.x) * 0.06;
    suave.y += (rato.y - suave.y) * 0.06;
    desenhar();

    const falta = Math.abs(rato.x - suave.x) + Math.abs(rato.y - suave.y);
    if (falta > 0.001) {
      requestAnimationFrame(animar);
    } else {
      animando = false;
    }
  }

  function acordar() {
    if (animando) return;
    animando = true;
    requestAnimationFrame(animar);
  }

  ajustar();
  desenhar();

  // No scroll, redesenha no máximo uma vez por imagem
  window.addEventListener('scroll', function () {
    if (desenhoPedido) return;
    desenhoPedido = true;
    requestAnimationFrame(function () {
      desenhoPedido = false;
      desenhar();
    });
  }, { passive: true });

  window.addEventListener('resize', function () {
    ajustar();
    desenhar();
  });

  if (reduzir) return; // quem prefere menos movimento: sem reação ao rato

  window.addEventListener('mousemove', function (e) {
    rato.x = e.clientX / largura;
    rato.y = e.clientY / altura;
    acordar();
  });
})();

// Efeito Arrastar / Squish da etiqueta "DESIGNER MULTIMÉDIA"
const etiqueta = document.querySelector('.etiqueta');

if (etiqueta) {
  let arrastando = false;
  let inicioX = 0, inicioY = 0;

  etiqueta.addEventListener('pointerdown', (e) => {
    arrastando = true;
    inicioX = e.clientX;
    inicioY = e.clientY;
    etiqueta.style.cursor = 'grabbing';
    etiqueta.style.transition = 'none'; // Desativa transição enquanto puxa para ser imediato
    etiqueta.setPointerCapture(e.pointerId);
  });

  etiqueta.addEventListener('pointermove', (e) => {
    if (!arrastando) return;

    // Distância percorrida pelo mouse
    const deltaX = e.clientX - inicioX;
    const deltaY = e.clientY - inicioY;

    // Calcula a deformação (squish): estica no sentido do movimento
    const esticarX = 1 + Math.abs(deltaX) * 0.002;
    const esticarY = 1 - Math.abs(deltaX) * 0.001;

    // Move e deforma a bolha
    etiqueta.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${esticarX}, ${esticarY})`;
  });

  const soltar = (e) => {
    if (!arrastando) return;
    arrastando = false;
    etiqueta.style.cursor = 'grab';
    
    // Reativa a transição para voltar ao centro com efeito elástico
    etiqueta.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    etiqueta.style.transform = 'translate(0px, 0px) scale(1, 1)';
  };

  etiqueta.addEventListener('pointerup', soltar);
  etiqueta.addEventListener('pointercancel', soltar);
}


// ----- Crachá interativo: corda + física (gravidade), rato, arrastar e virar -----
(function () {
  const home = document.getElementById('home');
  const cracha = document.getElementById('cracha');
  const giro = document.getElementById('crachaGiro');
  const corda = document.getElementById('corda');
  const fitas = Array.prototype.slice.call(document.querySelectorAll('#corda [data-fita]'));
  const ancora = document.getElementById('cordaAncora');
  const ancora2 = document.getElementById('cordaAncora2');
  const nomeEl = document.getElementById('homeNome');
  const cargoEl = document.getElementById('homeCargo');
  const menuEl = document.querySelector('.menu');
  if (!home || !cracha || !giro || !corda || !nomeEl || !cargoEl) return;

  // Parte o nome em letras, para a abertura as poder "escrever" uma a uma
  Array.prototype.forEach.call(nomeEl.querySelectorAll('.pal'), function (pal) {
    pal.innerHTML = pal.textContent.split('').map(function (c) {
      return '<span class="ch" aria-hidden="true">' + c + '</span>';
    }).join('');
  });
  cargoEl.setAttribute('aria-label', cargoEl.textContent);
  cargoEl.innerHTML = cargoEl.textContent.split('').map(function (c) {
    return c === ' ' ? ' ' : '<span class="ch" aria-hidden="true">' + c + '</span>';
  }).join('');

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  const SEGMENTOS = 6;       // quantos pedaços tem a corda
  const GRAVIDADE = 0.7;     // puxa para baixo (maior = mais pesado)
  const ATRITO = 0.992;      // resistência do ar (mais perto de 1 = balança mais tempo)
  const FORCA_RATO = 0.07;   // quanto o rato empurra o crachá ao passar por cima
  const TOPO_CORDA = -60;    // a fita entra pelo topo do ecrã (fica presa fora da vista)

  let largura = 0;
  let compCorda = 0;
  let compBarra = 0;
  let P = [];            // partículas: 0 = âncora, 1..SEGMENTOS = corda, SEGMENTOS+1 = fundo do crachá
  let ligacoes = [];
  let arrastando = null; // { i, offX, offY, x, y }
  let toque = null;

  // Virar (mola)
  let flip = 0;
  let flipVel = 0;
  let flipAlvo = 0;
  let tilt = 0;

  let visivel = true;
  let rodando = false;
  let ultimo = 0;
  let acum = 0;
  let quieto = 0;
  let ponteiroAnterior = null;
  let emPx = 15;

  function limitar(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function nova(x, y, im) {
    return { x: x, y: y, px: x, py: y, im: im };
  }

  // Faz o texto ocupar a largura pedida (sem passar de um limite de altura)
  function ajustarTexto(el, larguraAlvo, maxPx) {
    el.style.fontSize = '100px';
    const w = el.getBoundingClientRect().width || 1;
    el.style.fontSize = Math.max(14, Math.min(100 * larguraAlvo / w, maxPx)) + 'px';
  }

  // Organiza a Home: nome em cima, cargo em baixo e o crachá no espaço do meio
  function medir() {
    largura = home.clientWidth;
    const vh = window.innerHeight;
    const estreito = largura <= 700;
    const menuFim = menuEl ? (parseFloat(getComputedStyle(menuEl).top) || 0) + menuEl.offsetHeight : 100;
    const topo = menuFim + (estreito ? 10 : 14);

    ajustarTexto(nomeEl, largura * 0.94, vh * (estreito ? 0.2 : 0.22));
    const nomeFonte = parseFloat(nomeEl.style.fontSize);
    ajustarTexto(cargoEl, largura * 0.94, nomeFonte * (estreito ? 0.5 : 0.62));

    const nomeH = nomeEl.offsetHeight;
    const cargoH = cargoEl.offsetHeight;
    const margemBaixo = Math.max(22, vh * 0.045);
    const minimo = 150 * 1.5;

    const altura = Math.max(vh, topo + nomeH + minimo + cargoH + margemBaixo + 30);
    home.style.minHeight = altura + 'px';
    // se a Home for mais alta que o ecrã, fica presa pelo fundo para se ver tudo
    home.style.top = Math.min(0, vh - altura) + 'px';

    const cargoY = altura - margemBaixo - cargoH;
    nomeEl.style.top = topo + 'px';
    cargoEl.style.top = cargoY + 'px';

    const livreTopo = topo + nomeH + 6;
    const livre = cargoY - 6 - livreTopo;
    let larg = Math.min(340, largura * 0.7, livre / 1.5);
    larg = Math.max(larg, 150);

    const altCracha = larg * 1.5;
    const cracTopo = livreTopo + Math.max(0, (livre - altCracha) / 2);
    compCorda = cracTopo - TOPO_CORDA;
    compBarra = altCracha * 0.8;

    cracha.style.setProperty('--cw', larg + 'px');
    corda.style.setProperty('--fita', (larg * 0.105).toFixed(1) + 'px');
    emPx = larg / 20;

    // para a abertura saber onde estão as coisas
    const hr = home.getBoundingClientRect();
    function caixa(el) {
      const r = el.getBoundingClientRect();
      return { x: r.left - hr.left, y: r.top - hr.top, w: r.width, h: r.height };
    }
    home._layout = {
      W: largura,
      H: altura,
      nome: caixa(nomeEl),
      cargo: caixa(cargoEl),
      card: { x: largura / 2 - larg / 2, y: cracTopo, w: larg, h: altCracha }
    };
  }

  function construir(comEntrada) {
    medir();
    P = [];
    ligacoes = [];

    const ax = largura / 2;
    const ay = TOPO_CORDA;
    const seg = compCorda / SEGMENTOS;

    // Na primeira vez o crachá "cai" de lado e balança até assentar
    const ang = comEntrada && !reduzir ? 0.35 : 0;
    const dx = Math.sin(ang);
    const dy = Math.cos(ang);

    P.push(nova(ax, ay, 0));
    for (let i = 1; i <= SEGMENTOS; i++) {
      P.push(nova(ax + dx * seg * i, ay + dy * seg * i, i === SEGMENTOS ? 0.8 : 1));
    }
    const fim = P[SEGMENTOS];
    P.push(nova(fim.x + dx * compBarra, fim.y + dy * compBarra, 0.5));

    for (let i = 0; i < SEGMENTOS; i++) {
      ligacoes.push([i, i + 1, seg]);
    }
    ligacoes.push([SEGMENTOS, SEGMENTOS + 1, compBarra]);

    ancora.setAttribute('cx', ax);
    ancora.setAttribute('cy', ay);
    ancora2.setAttribute('cx', ax);
    ancora2.setAttribute('cy', ay);
  }

  // Um passo da simulação (Verlet)
  function passo() {
    const n = P.length;

    for (let i = 1; i < n; i++) {
      if (arrastando && arrastando.i === i) continue;
      const p = P[i];
      const vx = (p.x - p.px) * ATRITO;
      const vy = (p.y - p.py) * ATRITO;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + GRAVIDADE;
    }

    // Parte presa ao rato: segue o ponteiro com suavidade
    if (arrastando) {
      const p = P[arrastando.i];
      const alvoX = arrastando.x - arrastando.offX;
      const alvoY = arrastando.y - arrastando.offY;
      p.px = p.x;
      p.py = p.y;
      p.x += (alvoX - p.x) * 0.45;
      p.y += (alvoY - p.y) * 0.45;
    }

    // Mantém as distâncias (corda e crachá rígidos)
    for (let it = 0; it < 24; it++) {
      for (let k = 0; k < ligacoes.length; k++) {
        const lig = ligacoes[k];
        const pa = P[lig[0]];
        const pb = P[lig[1]];
        const dx = pb.x - pa.x;
        const dy = pb.y - pa.y;
        const d = Math.hypot(dx, dy) || 0.0001;
        const diff = (d - lig[2]) / d;

        let ia = pa.im;
        let ib = pb.im;
        if (arrastando && arrastando.i === lig[0]) ia = 0;
        if (arrastando && arrastando.i === lig[1]) ib = 0;
        const w = ia + ib;
        if (!w) continue;

        pa.x += dx * diff * ia / w;
        pa.y += dy * diff * ia / w;
        pb.x -= dx * diff * ib / w;
        pb.y -= dy * diff * ib / w;
      }
    }

    // Não deixa sair do palco
    const maxY = home.clientHeight - 6;
    for (let i = 1; i < n; i++) {
      P[i].x = limitar(P[i].x, 6, largura - 6);
      if (P[i].y > maxY) P[i].y = maxY;
    }

    // Mola do "virar" (passa um pouco do ponto e volta, como algo com peso)
    flipVel += (flipAlvo - flip) * 0.09;
    flipVel *= 0.8;
    flip += flipVel;

    // Inclinação 3D conforme o balanço lateral
    const B = P[SEGMENTOS + 1];
    const alvoTilt = limitar(-(B.x - B.px) * 1.6, -22, 22);
    tilt += (alvoTilt - tilt) * 0.1;

    // Se tudo parou, adormece para poupar bateria
    const A = P[SEGMENTOS];
    const energia =
      Math.abs(A.x - A.px) + Math.abs(A.y - A.py) +
      Math.abs(B.x - B.px) + Math.abs(B.y - B.py) +
      Math.abs(flipVel) + Math.abs(flipAlvo - flip) * 0.1;
    if (!arrastando && energia < 0.04) {
      quieto++;
    } else {
      quieto = 0;
    }
  }

  function caminho() {
    let d = 'M' + P[0].x.toFixed(1) + ' ' + P[0].y.toFixed(1);
    for (let i = 1; i < SEGMENTOS; i++) {
      const mx = (P[i].x + P[i + 1].x) / 2;
      const my = (P[i].y + P[i + 1].y) / 2;
      d += ' Q' + P[i].x.toFixed(1) + ' ' + P[i].y.toFixed(1) + ' ' + mx.toFixed(1) + ' ' + my.toFixed(1);
    }
    d += ' L' + P[SEGMENTOS].x.toFixed(1) + ' ' + P[SEGMENTOS].y.toFixed(1);
    return d;
  }

  function desenhar() {
    const A = P[SEGMENTOS];
    const B = P[SEGMENTOS + 1];
    const ang = Math.atan2(-(B.x - A.x), B.y - A.y);

    cracha.style.transform =
      'translate(' + A.x.toFixed(2) + 'px, ' + A.y.toFixed(2) + 'px) rotate(' + ang.toFixed(4) + 'rad)';
    giro.style.transform = 'perspective(1100px) rotateY(' + (flip + tilt).toFixed(2) + 'deg)';
    cracha.style.setProperty('--brilho', (50 + tilt * 2.2 + ang * 70).toFixed(1) + '%');

    const d = caminho();
    for (let k = 0; k < fitas.length; k++) fitas[k].setAttribute('d', d);

    // Sombra na parede: a luz fica sempre no mesmo sítio, por isso contra-roda o desvio
    const luzX = 0.9 * emPx, luzY = 1.4 * emPx;
    const c = Math.cos(-ang), s = Math.sin(-ang);
    const balanco = Math.min(Math.abs(tilt) / 22, 1);
    cracha.style.setProperty('--sx', (luzX * c - luzY * s).toFixed(1) + 'px');
    cracha.style.setProperty('--sy', (luzX * s + luzY * c).toFixed(1) + 'px');
    cracha.style.setProperty('--sb', (0.9 + 0.6 * balanco).toFixed(2) + 'em');
    cracha.style.setProperty('--so', (0.5 - 0.12 * balanco).toFixed(2));
    cracha.style.setProperty('--sc', (0.15 + 0.85 * Math.abs(Math.cos((flip + tilt) * Math.PI / 180))).toFixed(3));
  }

  function loop(t) {
    if (!rodando) return;
    if (!ultimo) ultimo = t;
    acum += Math.min(t - ultimo, 50);
    ultimo = t;

    while (acum >= 16.667) {
      passo();
      acum -= 16.667;
    }
    desenhar();

    if (quieto > 90 || !visivel) {
      rodando = false;
      return;
    }
    requestAnimationFrame(loop);
  }

  function acordar() {
    quieto = 0;
    if (rodando || !visivel || reduzir) return;
    rodando = true;
    ultimo = 0;
    acum = 0;
    requestAnimationFrame(loop);
  }

  let ultimaVirada = Date.now();
  let viradaManual = false;

  function virar() {
    ultimaVirada = Date.now();
    flipAlvo += 180;
    if (reduzir) {
      flip = flipAlvo;
      desenhar();
      return;
    }
    // um empurrãozinho lateral, como quando se vira um crachá na mão
    const B = P[SEGMENTOS + 1];
    B.px += (Math.random() < 0.5 ? -1 : 1) * 1.6;
    acordar();
  }

  // Posição do ponteiro dentro da home
  function mundo(e) {
    const r = home.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  // ---- Rato por cima: empurra o crachá com a velocidade do rato ----
  cracha.addEventListener('pointermove', function (e) {
    const m = mundo(e);

    if (arrastando) {
      arrastando.x = m.x;
      arrastando.y = m.y;
      if (toque && Math.hypot(e.clientX - toque.x, e.clientY - toque.y) > 6) toque.moveu = true;
      return;
    }

    if (e.pointerType !== 'mouse' || reduzir) return;

    const agora = performance.now();
    if (ponteiroAnterior) {
      const dt = Math.max(agora - ponteiroAnterior.t, 8);
      const vx = limitar((e.clientX - ponteiroAnterior.x) / dt * 16, -40, 40);
      const vy = limitar((e.clientY - ponteiroAnterior.y) / dt * 16, -40, 40);

      const A = P[SEGMENTOS];
      const B = P[SEGMENTOS + 1];
      // quanto mais longe do topo, maior a alavanca
      const t = limitar(Math.hypot(m.x - A.x, m.y - A.y) / compBarra, 0.2, 1.2);

      B.px -= vx * FORCA_RATO * t;
      B.py -= vy * FORCA_RATO * t * 0.5;
      A.px -= vx * FORCA_RATO * 0.35 * t;
      acordar();
    }
    ponteiroAnterior = { x: e.clientX, y: e.clientY, t: agora };
  });

  cracha.addEventListener('pointerleave', function () {
    ponteiroAnterior = null;
  });

  // ---- Clicar vira; arrastar puxa o crachá ----
  cracha.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest('a')) return;

    toque = { x: e.clientX, y: e.clientY, moveu: false };

    if (reduzir) return;

    const m = mundo(e);
    const A = P[SEGMENTOS];
    const B = P[SEGMENTOS + 1];
    const i = Math.hypot(m.x - A.x, m.y - A.y) < Math.hypot(m.x - B.x, m.y - B.y) ? SEGMENTOS : SEGMENTOS + 1;

    arrastando = { i: i, offX: m.x - P[i].x, offY: m.y - P[i].y, x: m.x, y: m.y };
    cracha.setPointerCapture(e.pointerId);
    cracha.classList.add('a-arrastar');
    acordar();
  });

  function soltar(e) {
    const clicou = e.type === 'pointerup' && toque && !toque.moveu;

    if (arrastando) {
      // devolve ao crachá a velocidade com que foi largado (com um limite)
      const p = P[arrastando.i];
      const vx = limitar(p.x - p.px, -30, 30);
      const vy = limitar(p.y - p.py, -30, 30);
      p.px = p.x - vx;
      p.py = p.y - vy;
      arrastando = null;
      cracha.classList.remove('a-arrastar');
    }

    toque = null;
    if (clicou) { virar(); viradaManual = true; }
  }

  cracha.addEventListener('pointerup', soltar);
  cracha.addEventListener('pointercancel', soltar);

  // Teclado: Enter ou espaço viram o crachá
  giro.addEventListener('keydown', function (e) {
    if (e.target !== giro) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      virar();
      viradaManual = true;
    }
  });

  // Vira sozinho de tempos a tempos (mais devagar depois de a pessoa o ter virado)
  const ESPERA_AUTO = 5000;
  const ESPERA_APOS_TOQUE = 9000;
  setInterval(function () {
    if (reduzir || !visivel || document.hidden || arrastando) return;
    if (home.classList.contains('intro-ativa')) return;
    if (giro.matches(':focus-within') || cracha.querySelector('a:hover')) { ultimaVirada = Date.now(); return; }
    if (Math.abs(flipAlvo - flip) > 20) return;
    const espera = viradaManual ? ESPERA_APOS_TOQUE : ESPERA_AUTO;
    if (Date.now() - ultimaVirada < espera) return;
    viradaManual = false;
    virar();
  }, 500);

  // Só simula enquanto a home está visível
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      visivel = entradas[0].isIntersecting;
      home.classList.toggle('fora', !visivel); // pára o degradé animado quando não se vê
      if (visivel) acordar();
    }).observe(home);
  }

  let temporizador = null;
  window.addEventListener('resize', function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      construir(false);
      desenhar();
      acordar();
    }, 120);
  });

  // ---- Quanto o Sobre já cobriu a Home (escurece-a aos poucos) ----
  let pedidoCobrir = false;
  function cobrir() {
    pedidoCobrir = false;
    const vh = window.innerHeight;
    const p = Math.max(0, Math.min(1, window.scrollY / Math.max(vh * 0.9, 1)));
    home.style.setProperty('--cobrir', p.toFixed(3));
  }
  window.addEventListener('scroll', function () {
    if (pedidoCobrir) return;
    pedidoCobrir = true;
    requestAnimationFrame(cobrir);
  }, { passive: true });
  cobrir();

  // ---- Botão da paleta: troca as cores da Home ----
  const botaoPaleta = document.getElementById('paleta');
  const TEMAS = 4;
  let tema = 0;
  try { tema = parseInt(localStorage.getItem('homeTema'), 10) || 0; } catch (e) {}
  if (tema < 0 || tema >= TEMAS) tema = 0;
  home.dataset.tema = tema;
  if (botaoPaleta) {
    botaoPaleta.addEventListener('click', function () {
      tema = (tema + 1) % TEMAS;
      home.dataset.tema = tema;
      try { localStorage.setItem('homeTema', tema); } catch (e) {}
    });
  }

  // ---- Arranque: decide se toca a abertura ou se mostra logo tudo ----
  let jaVista = false;
  try { jaVista = sessionStorage.getItem('introHome') === '1'; } catch (e) {}
  const tocarIntro = !reduzir && !jaVista && window.scrollY < 40 && (!location.hash || location.hash === '#home');

  // chamado no fim da abertura (ou logo, se não houver abertura)
  home._iniciar = function () {
    if (home._iniciada) return;
    home._iniciada = true;
    home.classList.remove('intro-ativa');
    construir(true);
    desenhar();
    acordar();
  };

  if (tocarIntro) home.classList.add('intro-ativa');
  medir();
  construir(false);
  desenhar();
  if (!tocarIntro) {
    home._iniciada = false;
    home._iniciar();
  }

  // quando a fonte carrega, as medidas mudam: refaz
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (home._iniciada) {
        construir(false);
        desenhar();
        acordar();
      } else {
        medir();
        construir(false);
        desenhar();
      }
    });
  }

  // segurança: se a abertura falhar, mostra o crachá na mesma
  if (tocarIntro) setTimeout(function () { home._iniciar(); }, 14000);
})();

// ----- Abertura da Home: um cursor "desenha" o quadro, escreve o nome e marca a área do crachá -----
(function () {
  const home = document.getElementById('home');
  if (!home || !home.classList.contains('intro-ativa')) return;

  const camada = document.getElementById('intro');
  const quadro = document.getElementById('introFrame');
  const caixaNome = document.getElementById('introNome');
  const caixaCargo = document.getElementById('introCargo');
  const cartao = document.getElementById('introCard');
  const caret = document.getElementById('introCaret');
  const cursor = document.getElementById('introCursor');
  const letrasNome = Array.prototype.slice.call(document.querySelectorAll('#homeNome .ch'));
  const letrasCargo = Array.prototype.slice.call(document.querySelectorAll('#homeCargo .ch'));
  if (!camada || !quadro || !caixaNome || !caixaCargo || !cartao || !caret || !cursor) {
    home._iniciar();
    return;
  }

  let acabou = false;
  const dormir = function (ms) {
    return new Promise(function (ok) { setTimeout(ok, ms); });
  };

  function terminar() {
    if (acabou) return;
    acabou = true;
    try { sessionStorage.setItem('introHome', '1'); } catch (e) {}
    camada.classList.add('fim');
    cursor.style.opacity = '0';
    caret.style.opacity = '0';
    home._iniciar();
    setTimeout(function () { camada.style.display = 'none'; }, 700);
    home.removeEventListener('pointerdown', terminar);
    window.removeEventListener('keydown', terminar);
  }

  // clicar ou carregar numa tecla salta a abertura
  home.addEventListener('pointerdown', terminar);
  window.addEventListener('keydown', terminar);

  function mover(x, y, ms) {
    cursor.style.transitionDuration = ms + 'ms, 300ms';
    cursor.style.transform = 'translate(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px)';
    return dormir(ms);
  }

  // desenha uma caixa do canto de cima à esquerda até ao de baixo à direita, com o cursor a arrastar
  function desenhar(caixa, r, ms) {
    caixa.style.left = r.x + 'px';
    caixa.style.top = r.y + 'px';
    caixa.style.transitionDuration = ms + 'ms';
    return mover(r.x, r.y, 380).then(function () {
      if (acabou) return;
      caixa.style.width = r.w + 'px';
      caixa.style.height = r.h + 'px';
      return mover(r.x + r.w, r.y + r.h, ms);
    });
  }

  function escrever(letras, passo) {
    const hr = home.getBoundingClientRect();
    let i = 0;
    return new Promise(function (ok) {
      (function seguinte() {
        if (acabou || i >= letras.length) { ok(); return; }
        const l = letras[i++];
        l.classList.add('on');
        const r = l.getBoundingClientRect();
        caret.style.opacity = '1';
        caret.style.left = (r.right - hr.left + 3) + 'px';
        caret.style.top = (r.top - hr.top + r.height * 0.1) + 'px';
        caret.style.height = r.height * 0.8 + 'px';
        setTimeout(seguinte, passo);
      })();
    });
  }

  async function correr() {
    // espera a fonte para as medidas serem as certas
    if (document.fonts && document.fonts.ready) {
      await Promise.race([document.fonts.ready, dormir(1500)]);
    }
    if (acabou) return;
    window.dispatchEvent(new Event('resize'));
    await dormir(200);
    if (acabou) return;

    const L = home._layout;
    if (!L) { terminar(); return; }
    const pad = L.W <= 700 ? 8 : 24;

    // 1) o quadro "Hero"
    const q = { x: Math.max(8, L.nome.x - pad), y: L.nome.y - 12, w: 0, h: 0 };
    q.w = Math.min(L.W - 16, L.nome.w + pad * 2);
    q.h = L.cargo.y + L.cargo.h + 14 - q.y;
    q.x = (L.W - q.w) / 2;

    cursor.style.transitionDuration = '0ms, 0ms';
    cursor.style.transform = 'translate(' + (L.W * 0.12) + 'px, ' + (L.H * 0.3) + 'px)';
    await dormir(60);
    cursor.style.opacity = '1';
    await dormir(350);
    if (acabou) return;
    await desenhar(quadro, q, 900);
    quadro.classList.add('pronto');
    await dormir(250);
    if (acabou) return;

    // 2) a caixa do nome e a escrita das letras
    await desenhar(caixaNome, L.nome, 450);
    if (acabou) return;
    mover(L.nome.x + L.nome.w * 0.55, L.nome.y + L.nome.h + 24, 500);
    await escrever(letrasNome, 70);
    caret.style.opacity = '0';
    await dormir(200);
    if (acabou) return;

    // 3) a área do crachá
    await desenhar(cartao, L.card, 650);
    await dormir(300);
    if (acabou) return;

    // 4) a caixa do cargo e a escrita
    await desenhar(caixaCargo, L.cargo, 450);
    if (acabou) return;
    mover(L.cargo.x + L.cargo.w + 10, L.cargo.y + L.cargo.h + 14, 450);
    await escrever(letrasCargo, 42);
    caret.style.opacity = '0';
    await dormir(350);
    if (acabou) return;

    // 5) clica fora e o crachá aparece
    await mover(L.W * 0.9, L.H * 0.12, 500);
    terminar();
  }

  correr().catch(terminar);
})();

// ----- Processo: portal que revela o "universo" quando vens de Habilidades -----
(function () {
  const secao = document.getElementById('processo');
  const universo = document.getElementById('universo');
  const anel = document.getElementById('anel');
  if (!secao || !universo || !anel) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function suavizar(t) {
    return t * t * (3 - 2 * t);
  }

  // ---- Ajustes que podes mexer ----
  const ATRASO = 400;    // espera (ms) antes de a onda de luz começar a abrir
  const ABRIR = 1800;    // quanto tempo (ms) a onda leva a abrir por completo
  const FECHAR = 700;    // e a fechar quando voltas atrás

  let mostrado = 0;      // quanto do portal já está aberto (0 a 1)
  let liberadoEm = 0;
  let rodando = false;
  let ultimo = 0;

  // quanto o scroll "pede" (0 quando o topo da secção entra no ecrã, 1 quando já está no topo)
  function pedido() {
    if (reduzir) return 1;
    const vh = window.innerHeight;
    const r = secao.getBoundingClientRect();
    return Math.max(0, Math.min(1, (vh - r.top) / (vh * 0.9)));
  }

  function desenhar(p) {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const r = secao.getBoundingClientRect();

    if (p >= 1) {
      universo.style.clipPath = 'none';
      anel.style.opacity = '0';
      return;
    }

    const e = suavizar(p);
    const raioMax = Math.hypot(vw, vh) * 0.62;
    const raio = e * raioMax;
    const cy = vh * 0.5 - r.top; // o portal abre no meio do ecrã

    universo.style.clipPath = 'circle(' + raio.toFixed(1) + 'px at 50% ' + cy.toFixed(1) + 'px)';
    anel.style.setProperty('--cy', cy.toFixed(1) + 'px');
    anel.style.setProperty('--d', (raio * 2).toFixed(1) + 'px');
    anel.style.opacity = p > 0.02 ? String(Math.min(1, (1 - p) * 2.2)) : '0';
  }

  function passo(t) {
    const dt = Math.min(64, t - (ultimo || t));
    ultimo = t;
    const alvoP = pedido();

    if (reduzir) {
      mostrado = alvoP;
    } else if (alvoP > mostrado) {
      // começa depois de uma pequena espera e abre devagar, mesmo que o scroll já tenha passado
      if (mostrado < 0.001 && !liberadoEm) liberadoEm = t + ATRASO;
      if (t >= liberadoEm) mostrado = Math.min(alvoP, mostrado + dt / ABRIR);
    } else {
      liberadoEm = 0;
      mostrado = Math.max(alvoP, mostrado - dt / FECHAR);
    }

    desenhar(mostrado);

    if (Math.abs(mostrado - alvoP) > 0.0005 || (alvoP > mostrado)) {
      requestAnimationFrame(passo);
    } else {
      rodando = false;
      ultimo = 0;
      if (mostrado < 0.001) liberadoEm = 0;
    }
  }

  function pedir() {
    if (rodando) return;
    rodando = true;
    ultimo = 0;
    requestAnimationFrame(passo);
  }

  window.addEventListener('scroll', pedir, { passive: true });
  window.addEventListener('resize', pedir);

  // arranque: se já estiver dentro da secção (recarregar a página), mostra tudo logo
  mostrado = pedido() >= 1 ? 1 : 0;
  desenhar(mostrado);
  pedir();
})();

// ----- Scroll suave: a página desliza com um pequeno atraso, como se fosse empurrada -----
(function () {
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const rato = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const toque = !rato && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (reduzir || (!rato && !toque)) return; // (sem rato nem toque: scroll nativo)

  // ---- Ajustes que podes mexer ----
  const SUAVE = 0.1;   // 0.05 = muito lento e "pesado"; 0.2 = quase sem atraso
  const FORCA = 1;     // multiplica a distância de cada rodada da roda do rato

  const raiz = document.documentElement;
  let alvo = window.scrollY;
  let atual = window.scrollY;
  let correndo = false;
  let meu = false; // true enquanto é este código a mexer no scroll
  let direto = false; // no toque o scroll acompanha o dedo sem atraso

  raiz.style.scrollBehavior = 'auto'; // o deslizar passa a ser feito aqui

  function maximo() {
    return Math.max(0, raiz.scrollHeight - window.innerHeight);
  }

  function limitar(v) {
    return Math.max(0, Math.min(maximo(), v));
  }

  function mover() {
    if (saltando || direto) { correndo = false; return; } // durante o pulo entre páginas quem manda é o pulo
    atual += (alvo - atual) * SUAVE;
    if (Math.abs(alvo - atual) < 0.5) atual = alvo;
    meu = true;
    window.scrollTo(0, atual);
    meu = false;
    if (atual !== alvo) {
      requestAnimationFrame(mover);
    } else {
      correndo = false;
    }
  }

  function iniciar() {
    if (correndo) return;
    correndo = true;
    requestAnimationFrame(mover);
  }

  // Deixa em paz as caixas que têm o seu próprio scroll (galerias, textos longos...)
  function temScrollProprio(el) {
    while (el && el !== document.body && el !== raiz) {
      const s = getComputedStyle(el);
      if ((s.overflowY === 'auto' || s.overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 1) return true;
      el = el.parentElement;
    }
    return false;
  }

  // ---- Páginas: entre uma secção e outra o scroll "pesa" e depois dá um pulo suave ----
  const RESISTENCIA = 100; // quanto é preciso empurrar (em px de scroll) para passar de página; 0 = sem resistência
  const RESISTENCIA_VOLTAR = 60; // o mesmo, mas para voltar à página anterior (mais leve)
  const CEDER = 0.08;      // quanto a página cede enquanto empurras (0.1 = 10% do empurrão)
  const CEDER_MAX = 9;     // o máximo que ela cede, em px (é o "elástico")
  const DURACAO = 600;     // duração do pulo para a página seguinte, em milissegundos
  const DESCANSO = 300;    // pausa depois do pulo (evita passar duas páginas de uma vez)

  let gate = null;         // empurrão em curso contra o fim/início de uma página
  let timerGate = 0;
  let saltando = false;
  let livreEm = 0;
  let ultimaRoda = 0;

  // Cada página: S = onde começa, E = onde acaba (posição do scroll quando o fim dela encosta no fundo do ecrã)
  function paginas() {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const lista = [];

    // Página Projetos: cada cartão da pilha é uma "página"
    const lp = document.getElementById('listaProjetos');
    if (lp) {
      const cartoes = Array.prototype.slice.call(lp.querySelectorAll('.projeto:not(.fora)'));
      if (!cartoes.length || getComputedStyle(cartoes[0]).position !== 'sticky') return lista;
      const topoLista = lp.getBoundingClientRect().top + y;
      let soma = 0;
      const paradas = cartoes.map(function (c) {
        const p = Math.max(0, topoLista + soma - parseFloat(getComputedStyle(c).top));
        soma += c.offsetHeight + parseFloat(getComputedStyle(c).marginBottom);
        return p;
      });
      lista.push({ S: 0, E: paradas[0] });
      for (let k = 1; k < paradas.length; k++) lista.push({ S: paradas[k], E: paradas[k] });
      const ult = lista[lista.length - 1];
      if (lista.length === 1) { ult.E = Math.max(ult.S, maximo()); } else { lista[lista.length - 1] = { S: ult.S, E: Math.max(ult.S, maximo()) }; }
      return lista;
    }

    const defs = [
      ['home', null],
      ['sobre', null],
      ['habilidades', null],
      ['processo', null],
      ['conversa', null]
    ];
    defs.forEach(function (d, n) {
      const el = document.getElementById(d[0]);
      if (!el) return;
      const fim = d[1] ? document.querySelector(d[1]) : el;
      let S = d[0] === 'home' ? 0 : el.getBoundingClientRect().top + y; // a Home é "sticky": começa sempre em 0
      let E = d[0] === 'home' ? 0 : (fim || el).getBoundingClientRect().bottom + y - vh;
      if (n === defs.length - 1) E = maximo();
      S = Math.min(S, maximo());
      E = Math.max(S, E);

      // No Processo cada um dos 4 pontos também é uma pequena "página": o personagem pára, pesa, e salta para o próximo
      if (d[0] === 'processo' && window.paradasProcesso) {
        const paradas = window.paradasProcesso().filter(function (p) { return p > S + 40 && p < E - 40; });
        if (!paradas.length) { lista.push({ S: S, E: E }); return; }
        lista.push({ S: S, E: paradas[0] });
        for (let k = 1; k < paradas.length; k++) lista.push({ S: paradas[k], E: paradas[k] });
        if (E > paradas[paradas.length - 1] + 40) lista.push({ S: E, E: E });
        return;
      }
      lista.push({ S: S, E: E });
    });
    return lista;
  }

  function deslizar(destino) {
    clearTimeout(timerGate);
    gate = null;
    saltando = true;
    const ini = window.scrollY;
    const d = destino - ini;
    const dur = Math.max(550, Math.min(DURACAO, 450 + Math.abs(d) * 0.45));
    const t0 = performance.now();
    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function passo(agora) {
      const t = Math.min(1, (agora - t0) / dur);
      meu = true;
      window.scrollTo(0, ini + d * ease(t));
      meu = false;
      if (t < 1) {
        requestAnimationFrame(passo);
      } else {
        saltando = false;
        alvo = atual = window.scrollY;
        livreEm = performance.now() + DESCANSO;
      }
    }
    requestAnimationFrame(passo);
  }

  // Largou-se a roda sem chegar ao fim do empurrão: a página volta para o sítio
  function soltar() {
    if (!gate) return;
    const a = gate.ancora;
    gate = null;
    ir(a);
  }

  // Move a página: com rato desliza suave, com o dedo acompanha-o logo
  function ir(v) {
    if (direto) {
      alvo = atual = v;
      meu = true;
      window.scrollTo(0, v);
      meu = false;
    } else {
      alvo = v;
      iniciar();
    }
  }

  function puxar() {
    ir(gate.ancora + gate.dir * Math.min(gate.forca * CEDER, CEDER_MAX));
    clearTimeout(timerGate);
    timerGate = setTimeout(soltar, 650);
  }

  // Recebe um empurrão (dy > 0 = descer) vindo da roda do rato ou do dedo
  function empurrar(dy, fluxo) {
    const agora = performance.now();
    if (saltando) return;
    if (agora < livreEm) { livreEm = Math.max(livreEm, agora + (fluxo ? 120 : 0)); return; }
    if (!dy) return;
    const dir = dy > 0 ? 1 : -1;
    if (!correndo && !gate && !direto) { alvo = atual = window.scrollY; }
    if (direto && !gate) { alvo = atual = window.scrollY; }
    const lista = paginas();
    const pos = gate ? gate.ancora : alvo;
    const T = 3;

    // 1) já está a empurrar contra uma "porta"
    if (gate) {
      if (dir === gate.dir) {
        if (gate.chegou && agora - gate.chegou < 130) { clearTimeout(timerGate); timerGate = setTimeout(soltar, 650); return; }
        gate.forca += Math.min(Math.abs(dy), 80);
        if (gate.forca >= (dir > 0 ? RESISTENCIA : RESISTENCIA_VOLTAR)) {
          const i = gate.i;
          const destino = dir > 0 ? lista[i + 1].S : lista[i - 1].E;
          deslizar(destino);
        } else {
          puxar();
        }
      } else {
        gate.forca -= Math.abs(dy) * 1.5;
        if (gate.forca <= 0) {
          const base = gate.ancora;
          clearTimeout(timerGate);
          gate = null;
          ir(limitar(base + dy));
        } else {
          puxar();
        }
      }
      return;
    }

    // 2) onde estamos? (dentro de uma página, ou no espaço entre duas)
    let i = -1;
    for (let n = 0; n < lista.length; n++) {
      if (pos >= lista[n].S - T && pos <= lista[n].E + T) { i = n; break; }
    }
    if (i === -1) {
      // fora de qualquer página: vai para a mais próxima na direção do scroll
      let destino = null;
      if (dir > 0) { for (let n = 0; n < lista.length; n++) if (lista[n].S > pos) { destino = lista[n].S; break; } }
      else { for (let n = lista.length - 1; n >= 0; n--) if (lista[n].E < pos) { destino = lista[n].E; break; } }
      if (destino === null) { ir(limitar(pos + dy)); return; }
      deslizar(destino);
      return;
    }

    const pg = lista[i];
    const novo = pos + dy;
    const temPorta = dir > 0 ? i < lista.length - 1 : i > 0;

    if (!temPorta || RESISTENCIA <= 0) {
      if (RESISTENCIA <= 0 && temPorta && (dir > 0 ? novo > pg.E : novo < pg.S)) { deslizar(dir > 0 ? lista[i + 1].S : lista[i - 1].E); return; }
      ir(limitar(novo));
      return;
    }

    if (dir > 0 ? novo <= pg.E : novo >= pg.S) {
      // ainda dentro da página: scroll normal
      ir(limitar(novo));
      return;
    }

    // chegou ao fim (ou ao início) da página: pára aqui e começa a "pesar"
    gate = { i: i, dir: dir, forca: 0, ancora: dir > 0 ? pg.E : pg.S, chegou: fluxo ? agora : 0 };
    if (!fluxo) gate.forca = Math.min(Math.abs(dy), 80); // um empurrão novo já conta
    if (gate.forca >= (dir > 0 ? RESISTENCIA : RESISTENCIA_VOLTAR)) {
      deslizar(dir > 0 ? lista[i + 1].S : lista[i - 1].E);
      return;
    }
    puxar();
  }

  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.defaultPrevented) return;
    if (document.body.className.match(/aberta|aberto/)) return; // galeria, carta ou lightbox abertos
    if (temScrollProprio(e.target)) return;
    e.preventDefault();
    const agora = performance.now();
    const fluxo = agora - ultimaRoda < 100; // a roda/dedo ainda vem a correr (inércia do trackpad)
    ultimaRoda = agora;
    const k = e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? window.innerHeight : 1;
    empurrar(e.deltaY * k * FORCA, fluxo);
  }, { passive: false });

  // ---- Toque (telemóvel e tablet): o mesmo efeito de páginas, com o dedo ----
  if (toque) {
    document.documentElement.classList.add('paginas-toque');
    let dono = false, yAnt = 0, tAnt = 0, vel = 0, inercia = 0;

    function deixaNativo(el) {
      // coisas que usam o toque para outra coisa (manivela, paleta, cartas, galeria...)
      if (document.body.className.match(/aberta|aberto/)) return true;
      if (el.closest && el.closest('#manivelaAlvo, .carta-overlay, .galeria-overlay, .paleta, .idioma')) return true;
      return temScrollProprio(el);
    }

    function parar() { cancelAnimationFrame(inercia); }

    window.addEventListener('touchstart', function (e) {
      parar();
      dono = e.touches.length === 1 && !deixaNativo(e.target);
      if (!dono) return;
      direto = true;
      yAnt = e.touches[0].clientY;
      tAnt = performance.now();
      vel = 0;
      if (!gate) alvo = atual = window.scrollY;
    }, { passive: true });

    window.addEventListener('touchmove', function (e) {
      if (!dono) return;
      if (e.cancelable) e.preventDefault();
      const y = e.touches[0].clientY;
      const agora = performance.now();
      const dy = yAnt - y; // dedo para cima = descer
      const dt = Math.max(1, agora - tAnt);
      vel = vel * 0.6 + (dy / dt) * 0.4;
      yAnt = y;
      tAnt = agora;
      ultimaRoda = agora;
      empurrar(dy, false);
    }, { passive: false });

    function fim() {
      if (!dono) return;
      dono = false;
      let v = vel * 16; // px por fotograma
      if (Math.abs(v) < 1 || performance.now() - tAnt > 120) v = 0;
      function passo() {
        if (Math.abs(v) < 0.4) {
          direto = false;
          if (gate) soltar();
          return;
        }
        empurrar(v, true);
        v *= 0.94;
        inercia = requestAnimationFrame(passo);
      }
      passo();
    }
    window.addEventListener('touchend', fim, { passive: true });
    window.addEventListener('touchcancel', fim, { passive: true });
  }

  // Se o scroll mudar por outro motivo (teclado, barra de scroll), acompanha
  window.addEventListener('scroll', function () {
    if (meu) return;
    if (!correndo) { alvo = atual = window.scrollY; }
  }, { passive: true });

  // Links para âncoras da mesma página: deslizam até lá
  document.addEventListener('click', function (e) {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented) return;
    const id = a.getAttribute('href').slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!id) { e.preventDefault(); alvo = 0; if (!correndo) atual = window.scrollY; iniciar(); return; }
    if (!el) return;
    e.preventDefault();
    gate = null;
    if (!correndo) atual = window.scrollY;
    alvo = limitar(el.getBoundingClientRect().top + window.scrollY);
    iniciar();
  });
})();

// ----- Impressora (Sobre mim): o scroll puxa a folha e imprime o gif -----
(function () {
  const cena = document.getElementById('impCena');
  const folha = document.getElementById('impFolha');
  const corpo = document.getElementById('impCorpo');
  const papel = document.getElementById('impPapel');
  const lcd = document.getElementById('impLcd');
  if (!cena || !folha || !corpo || !papel || !lcd) return;
  const alvo = cena.parentElement;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  const CURSO = 7;            // quanto a folha em branco desce para dentro (em "em")
  const ATRASO = 0.2;         // quanto scroll (fração da altura do ecrã) passa antes de a impressora começar; 0 = como antes
  const FIM_ENTRADA = 0.14;   // até onde (0 a 1) a folha em branco está a entrar
  const FIM_IMPRESSAO = 0.92; // onde acaba a impressão (o resto é uma pausa antes de soltar)

  let pedido = false;
  let vibraAte = 0;
  let vibrando = false;
  let anterior = -1;

  function limitar(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function suavizar(t) {
    return t * t * (3 - 2 * t);
  }

  // 0 quando a impressora entra no ecrã, 1 quando já está toda à vista
  function progresso() {
    const r = alvo.getBoundingClientRect();
    const vh = window.innerHeight;
    const atraso = vh * (window.matchMedia('(hover: hover) and (pointer: fine)').matches ? ATRASO : 0.12); // com toque o atraso é menor
    const fim = Math.max(vh - r.height - 40, 90) - atraso;
    const ini = Math.max(vh * 0.85, fim + atraso + 180) - atraso;
    return limitar((ini - r.top) / (ini - fim), 0, 1);
  }

  // A máquina treme e o LED pisca enquanto o scroll está a mexer o papel
  function vibrar(t) {
    if (t < vibraAte) {
      corpo.style.transform =
        'translate(' + (Math.sin(t / 17) * 0.8).toFixed(2) + 'px, ' + (Math.sin(t / 29) * 0.5).toFixed(2) + 'px)';
      requestAnimationFrame(vibrar);
    } else {
      corpo.style.transform = '';
      cena.classList.remove('a-imprimir');
      vibrando = false;
    }
  }

  function atualizar() {
    pedido = false;
    const p = progresso();

    const entrada = limitar(p / FIM_ENTRADA, 0, 1);
    const imp = limitar((p - FIM_ENTRADA) / (FIM_IMPRESSAO - FIM_ENTRADA), 0, 1);

    folha.style.transform = 'translateY(' + (CURSO * suavizar(entrada)).toFixed(3) + 'em)';
    papel.style.transform = 'translateY(' + (-(1 - imp) * 100).toFixed(2) + '%)';

    let texto = 'PRONTO';
    if (imp >= 1) texto = 'CONCLUÍDO';
    else if (imp > 0) texto = 'IMPRIMINDO';
    else if (entrada > 0) texto = 'PUXANDO...';
    if (window.T) texto = window.T(texto);
    if (lcd.textContent !== texto) lcd.textContent = texto;

    const mexeu = Math.abs(p - anterior) > 0.0003;
    anterior = p;
    if (mexeu && !reduzir && imp > 0 && imp < 1) {
      vibraAte = performance.now() + 160;
      cena.classList.add('a-imprimir');
      if (!vibrando) {
        vibrando = true;
        requestAnimationFrame(vibrar);
      }
    }
  }

  function pedirAtualizacao() {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(atualizar);
  }

  window.addEventListener('scroll', pedirAtualizacao, { passive: true });
  window.addEventListener('resize', pedirAtualizacao);
  window.addEventListener('load', pedirAtualizacao);
  atualizar();
})();

// ----- Habilidades: peças de Tetris que se encaixam sozinhas -----
(function () {
  const caixa = document.getElementById('caixaTags');
  const lista = document.getElementById('tagsLista');
  const dica = document.getElementById('tagsDica');
  if (!caixa || !lista) return;

  const itensLista = Array.prototype.slice.call(lista.querySelectorAll('.tag'));
  const nomes = itensLista.map(function (li) { return li.textContent.trim(); });
  if (!nomes.length) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  // O formato de cada peça vem do data-forma de cada <li> no HTML (I, O, T, L, J, S ou Z).
  // Se faltar, usa esta sequência pela ordem da lista:
  const FORMAS = ['L', 'T', 'J', 'S', 'Z', 'I', 'O'];
  const VEL_LATERAL = 65;  // ms que a peça demora a andar uma coluna
  const VEL_QUEDA = 9;     // linhas por segundo enquanto se posiciona
  const VEL_ENCAIXE = 40;  // linhas por segundo na queda final (encaixe)
  const PAUSA = 260;       // pausa entre uma peça e a seguinte (ms)

  const medidor = document.createElement('canvas').getContext('2d');

  let cfg = null;
  let grelha = [];
  let defs = [];
  let fila = [];
  let idx = 0;
  let plano = null;
  let falhas = 0;
  let colocadas = 0;
  let atual = null;
  let acabou = false;
  let gen = 0;
  let largura = 0;

  let comecou = false;
  let visivel = false;
  let rodando = false;
  let ultimo = 0;

  let cena = null;
  let tabuleiro = null;
  let miniEl = null;
  let miniNome = null;
  let contador = null;
  let botao = null;

  // ---------- configuração e peças ----------
  function configurar() {
    const W = caixa.clientWidth;
    const movel = W < 600;
    const C = movel ? 9 : 14;
    const R = movel ? 12 : 9;
    const pad = 14;
    let cel;

    if (movel) {
      cel = Math.floor((W - 2 * pad) / C);
      caixa.style.height = (R * cel + 2 * pad + 2) + 'px';
    } else {
      caixa.style.height = '';
      const H = caixa.clientHeight;
      cel = Math.floor(Math.min((H - 2 * pad) / R, (W - 2 * pad) / C));
    }

    const paineis = !movel && W >= C * cel + 2 + 2 * 160 + 40;
    return { W: W, C: C, R: R, cel: cel, movel: movel, paineis: paineis };
  }

  function criarDef(nome, forma, i, cel) {
    const fs = Math.max(11, Math.round(cel * 0.4));
    medidor.font = '700 ' + fs + 'px "DM Sans", sans-serif';
    const n = Math.max(3, Math.ceil((medidor.measureText(nome).width + cel * 0.5) / cel));

    const cells = [];
    let w = n;
    let h = 2;
    let barR = 1;
    let barC = 0;
    let barH = 1;

    function linha(r, c0, c1) {
      for (let c = c0; c <= c1; c++) cells.push([r, c]);
    }

    // O nome fica sempre numa barra horizontal; o resto da peça é o "dente" do Tetris
    switch (forma) {
      case 'I':
        h = 1; barR = 0;
        linha(0, 0, n - 1);
        break;
      case 'O':
        barR = 0; barH = 2;
        linha(0, 0, n - 1); linha(1, 0, n - 1);
        break;
      case 'L':
        linha(0, n - 1, n - 1); linha(1, 0, n - 1);
        break;
      case 'J':
        linha(0, 0, 0); linha(1, 0, n - 1);
        break;
      case 'S':
        w = n + 1;
        linha(0, n - 1, n); linha(1, 0, n - 1);
        break;
      case 'Z':
        w = n + 1; barC = 1;
        linha(0, 0, 1); linha(1, 1, n);
        break;
      default: { // T
        const m = Math.floor((n - 1) / 2);
        linha(0, m, m); linha(1, 0, n - 1);
      }
    }

    return { nome: nome, n: n, w: w, h: h, cells: cells, barR: barR, barC: barC, barH: barH, cor: i % 4, fs: fs };
  }

  function criarPeca(def, cel, mini) {
    const el = document.createElement('div');
    el.className = 'peca c' + def.cor + (mini ? ' mini' : '');
    el.style.setProperty('--cel', cel + 'px');
    el.style.width = def.w * cel + 'px';
    el.style.height = def.h * cel + 'px';

    const tem = {};
    def.cells.forEach(function (rc) { tem[rc[0] + ',' + rc[1]] = true; });
    const folga = mini ? 1 : 1.5;
    const raio = mini ? 3 : Math.round(cel * 0.16);

    def.cells.forEach(function (rc) {
      const r = rc[0];
      const c = rc[1];
      const cima = !!tem[(r - 1) + ',' + c];
      const baixo = !!tem[(r + 1) + ',' + c];
      const esq = !!tem[r + ',' + (c - 1)];
      const dir = !!tem[r + ',' + (c + 1)];

      const d = document.createElement('i');
      d.className = 'cel';
      d.style.cssText =
        'left:' + c * cel + 'px;top:' + r * cel + 'px;width:' + cel + 'px;height:' + cel + 'px;' +
        '--t:' + (cima ? 0 : folga) + 'px;--b:' + (baixo ? 0 : folga) + 'px;' +
        '--l:' + (esq ? 0 : folga) + 'px;--r:' + (dir ? 0 : folga) + 'px;' +
        '--rtl:' + (cima || esq ? 0 : raio) + 'px;--rtr:' + (cima || dir ? 0 : raio) + 'px;' +
        '--rbr:' + (baixo || dir ? 0 : raio) + 'px;--rbl:' + (baixo || esq ? 0 : raio) + 'px;' +
        '--hl:' + (cima ? 0 : (mini ? 2 : 3)) + 'px;--sh:' + (baixo ? 0 : (mini ? 2 : 3)) + 'px';
      el.appendChild(d);
    });

    if (!mini) {
      const t = document.createElement('span');
      t.className = 'peca-nome';
      t.textContent = def.nome;
      t.style.cssText =
        'left:' + def.barC * cel + 'px;top:' + def.barR * cel + 'px;width:' + def.n * cel + 'px;height:' +
        def.barH * cel + 'px;font-size:' + def.fs + 'px';
      el.appendChild(t);
    }
    return el;
  }

  // ---------- regras do tabuleiro ----------
  function vazio() {
    const g = [];
    for (let r = 0; r < cfg.R; r++) {
      const l = [];
      for (let c = 0; c < cfg.C; c++) l.push(false);
      g.push(l);
    }
    return g;
  }

  function cabe(def, r, c, g) {
    g = g || grelha;
    for (let k = 0; k < def.cells.length; k++) {
      const rr = r + def.cells[k][0];
      const cc = c + def.cells[k][1];
      if (cc < 0 || cc >= cfg.C || rr >= cfg.R) return false;
      if (rr >= 0 && g[rr][cc]) return false;
    }
    return true;
  }

  function aterrar(def, c, g) {
    let r = -def.h;
    if (!cabe(def, r, c, g)) return null;
    while (cabe(def, r + 1, c, g)) r++;
    return r < 0 ? null : r;
  }

  function colocar(g, def, r, c) {
    def.cells.forEach(function (rc) { g[r + rc[0]][c + rc[1]] = true; });
  }

  // Mede um tabuleiro: buracos, altura da pilha e quão lisa está a superfície
  function estatisticas(g) {
    const R = cfg.R;
    const C = cfg.C;
    const alturas = [];
    let agregada = 0;
    let buracos = 0;
    let maxima = 0;
    for (let x = 0; x < C; x++) {
      let h = 0;
      let achou = false;
      for (let y = 0; y < R; y++) {
        if (g[y][x]) {
          if (!achou) { achou = true; h = R - y; }
        } else if (achou) {
          buracos++;
        }
      }
      alturas.push(h);
      agregada += h;
      if (h > maxima) maxima = h;
    }
    let rugosidade = 0;
    for (let x = 0; x < C - 1; x++) rugosidade += Math.abs(alturas[x] - alturas[x + 1]);
    return { buracos: buracos, agregada: agregada, maxima: maxima, rugosidade: rugosidade };
  }

  function avaliar(def, r, c, g) {
    const t = g.map(function (l) { return l.slice(); });
    colocar(t, def, r, c);
    const s = estatisticas(t);
    return s.buracos * 7 + s.rugosidade + s.agregada * 0.4 + s.maxima * 1.5;
  }

  // Planeia a partida inteira: em cada passo escolhe a melhor peça e a melhor posição.
  // Repete com sorte diferente e guarda a partida que fica mais compacta e sem buracos.
  function planejar() {
    let melhor = null;
    const inicio = performance.now();
    for (let tentativa = 0; tentativa < 40; tentativa++) {
      const gasto = performance.now() - inicio;
      if (melhor && gasto > 250) break; // já há uma boa partida: não demora mais
      if (gasto > 450) break;           // limite máximo para não travar a página
      const g = vazio();
      const restantes = defs.map(function (_, i) { return i; });
      const seq = [];
      let ok = true;

      while (restantes.length) {
        let escolha = null;
        for (let k = 0; k < restantes.length; k++) {
          const i = restantes[k];
          const d = defs[i];
          for (let c = 0; c <= cfg.C - d.w; c++) {
            const r = aterrar(d, c, g);
            if (r === null) continue;
            const s = avaliar(d, r, c, g) + Math.random() * 2.5;
            if (!escolha || s < escolha.s) escolha = { i: i, c: c, r: r, s: s };
          }
        }
        if (!escolha) { ok = false; break; }
        colocar(g, defs[escolha.i], escolha.r, escolha.c);
        seq.push(escolha);
        restantes.splice(restantes.indexOf(escolha.i), 1);
      }

      if (!ok) continue;
      const e = estatisticas(g);
      const nota = e.buracos * 10 + e.maxima * 3 + e.rugosidade * 0.5;
      if (!melhor || nota < melhor.nota) melhor = { seq: seq, nota: nota };
    }
    return melhor ? melhor.seq : null;
  }

  // Pinta cada peça de uma cor diferente das vizinhas (para se ver onde cada uma acaba)
  function colorir(seq) {
    const dono = vazio().map(function (l) { return l.map(function () { return -1; }); });
    seq.forEach(function (e) {
      defs[e.i].cells.forEach(function (rc) { dono[e.r + rc[0]][e.c + rc[1]] = e.i; });
    });

    const viz = {};
    seq.forEach(function (e) { viz[e.i] = {}; });
    for (let r = 0; r < cfg.R; r++) {
      for (let c = 0; c < cfg.C; c++) {
        const o = dono[r][c];
        if (o < 0) continue;
        [[0, 1], [1, 0]].forEach(function (d) {
          const rr = r + d[0];
          const cc = c + d[1];
          if (rr >= cfg.R || cc >= cfg.C) return;
          const p = dono[rr][cc];
          if (p >= 0 && p !== o) { viz[o][p] = true; viz[p][o] = true; }
        });
      }
    }

    const NCORES = 5;
    const inicio = Math.floor(Math.random() * NCORES);
    const cores = {};
    seq.forEach(function (e) {
      const usadas = {};
      Object.keys(viz[e.i]).forEach(function (v) {
        if (cores[v] !== undefined) usadas[cores[v]] = true;
      });
      let k = (inicio + e.i) % NCORES;
      for (let tent = 0; tent < NCORES; tent++) {
        const cand = (inicio + e.i + tent) % NCORES;
        if (!usadas[cand]) { k = cand; break; }
      }
      cores[e.i] = k;
      defs[e.i].cor = k;
    });
  }

  // ---------- interface ----------
  function montar() {
    if (cena) cena.remove();
    caixa.classList.remove('sem-jogo');
    cfg = configurar();
    largura = cfg.W;

    defs = nomes.map(function (nome, i) {
      const pedida = (itensLista[i].getAttribute('data-forma') || '').toUpperCase();
      const forma = 'IOTLJSZ'.indexOf(pedida) >= 0 && pedida ? pedida : FORMAS[i % FORMAS.length];
      return criarDef(nome, forma, i, cfg.cel);
    });

    cena = document.createElement('div');
    cena.className = 'tet-cena';
    cena.setAttribute('aria-hidden', 'true');

    tabuleiro = document.createElement('div');
    tabuleiro.className = 'tet-board';
    tabuleiro.style.setProperty('--cel', cfg.cel + 'px');
    tabuleiro.style.width = cfg.C * cfg.cel + 2 + 'px';
    tabuleiro.style.height = cfg.R * cfg.cel + 2 + 'px';

    miniEl = null;
    miniNome = null;
    contador = null;
    botao = null;

    if (cfg.paineis) {
      const esq = document.createElement('div');
      esq.className = 'tet-lado tet-esq';
      esq.innerHTML = '<p class="tet-rot">Próxima</p><div class="tet-mini"></div><p class="tet-nome-prox"></p>';
      miniEl = esq.querySelector('.tet-mini');
      miniNome = esq.querySelector('.tet-nome-prox');

      const dir = document.createElement('div');
      dir.className = 'tet-lado tet-dir';
      dir.innerHTML = '<p class="tet-rot">Peças</p><p class="tet-contador"></p>' +
        '<button type="button" class="tet-reiniciar" hidden>&#8635; Jogar de novo</button>';
      contador = dir.querySelector('.tet-contador');
      botao = dir.querySelector('.tet-reiniciar');
      botao.addEventListener('click', reiniciar);

      cena.appendChild(esq);
      cena.appendChild(tabuleiro);
      cena.appendChild(dir);
    } else {
      cena.appendChild(tabuleiro);
    }

    caixa.appendChild(cena);
    caixa.classList.add('tetris-on');
    atualizarPaineis();
  }

  function atualizarPaineis() {
    if (contador) {
      const total = defs.length;
      contador.innerHTML = String(colocadas).padStart(2, '0') + '<small>/' + String(total).padStart(2, '0') + '</small>';
    }
    if (miniEl) {
      miniEl.innerHTML = '';
      miniNome.textContent = '';
      if (idx < fila.length) {
        const d = defs[fila[idx]];
        const mini = criarPeca(d, 16, true);
        miniEl.style.width = d.w * 16 + 'px';
        miniEl.style.height = d.h * 16 + 'px';
        miniEl.appendChild(mini);
        miniNome.textContent = d.nome;
      }
    }
  }

  function dizer(texto) {
    if (dica) dica.textContent = texto;
  }

  // ---------- jogo ----------
  function posicionar(el, col, row) {
    el.style.transform = 'translate(' + col * cfg.cel + 'px, ' + (row * cfg.cel).toFixed(1) + 'px)';
  }

  function iniciarJogo() {
    gen++;
    grelha = vazio();
    plano = planejar();
    if (!plano) {
      desistir(); // peças a mais para a caixa
      return;
    }
    colorir(plano);
    fila = plano.map(function (e) { return e.i; });
    idx = 0;
    colocadas = 0;
    atual = null;
    acabou = false;
    tabuleiro.innerHTML = '';
    if (botao) botao.hidden = true;
    dizer('Encaixando as habilidades...');

    if (reduzir) {
      // sem animação: já aparece tudo encaixado
      for (let k = 0; k < fila.length; k++) {
        const d = defs[fila[k]];
        const p = plano[k];
        if (!p) { reiniciarSuave(); return; }
        d.cells.forEach(function (rc) { grelha[p.r + rc[0]][p.c + rc[1]] = true; });
        const el = criarPeca(d, cfg.cel, false);
        posicionar(el, p.c, p.r);
        tabuleiro.appendChild(el);
      }
      idx = fila.length;
      colocadas = fila.length;
      terminar();
      return;
    }

    atualizarPaineis();
    proxima();
  }

  // Demasiadas peças para a caixa: mostra as etiquetas lado a lado em vez de repetir para sempre
  function desistir() {
    gen++;
    atual = null;
    if (cena) {
      cena.remove();
      cena = null;
    }
    caixa.classList.remove('tetris-on');
    caixa.classList.add('sem-jogo'); // a caixa cresce para mostrar todas as etiquetas
    caixa.style.height = '';
    dizer('');
  }

  function reiniciarSuave() {
    falhas++;
    if (falhas >= 3) {
      desistir();
      return;
    }
    const g = gen;
    setTimeout(function () {
      if (g === gen) iniciarJogo();
    }, 700);
  }

  function reiniciar() {
    iniciarJogo();
  }

  function proxima() {
    if (idx >= fila.length) return;
    const d = defs[fila[idx]];
    const p = plano[idx];
    if (!p) {
      reiniciarSuave(); // sem espaço (raro): recomeça
      return;
    }

    const el = criarPeca(d, cfg.cel, false);
    const col = Math.max(0, Math.min(cfg.C - d.w, Math.round((cfg.C - d.w) / 2)));
    atual = { def: d, el: el, col: col, row: -d.h, alvoC: p.c, alvoR: p.r, t: 0, bloq: 0 };
    posicionar(el, col, atual.row);
    tabuleiro.appendChild(el);
    idx++;
    atualizarPaineis();
    acordar();
  }

  function mover(dt) {
    const a = atual;
    const d = a.def;
    a.t += dt;
    let bloqueada = false;

    // anda de lado, uma coluna de cada vez (como as teclas do Tetris)
    if (a.col !== a.alvoC) {
      while (a.t >= VEL_LATERAL && a.col !== a.alvoC) {
        a.t -= VEL_LATERAL;
        const nc = a.col + (a.alvoC > a.col ? 1 : -1);
        if (cabe(d, Math.floor(a.row), nc) && cabe(d, Math.ceil(a.row), nc)) {
          a.col = nc;
          a.bloq = 0;
        } else {
          bloqueada = true;
          break;
        }
      }
    } else {
      a.t = 0;
    }

    const v = a.col === a.alvoC ? VEL_ENCAIXE : VEL_QUEDA;
    let nr = a.row + v * dt / 1000;

    if (a.col !== a.alvoC && (bloqueada || !cabe(d, Math.ceil(nr), a.col))) {
      nr = a.row; // espera para não atravessar outras peças
      a.bloq += dt;
      if (a.bloq > 350) {
        a.col = a.alvoC; // a coluna do encaixe está sempre livre desde o topo
        a.bloq = 0;
      }
    }

    a.row = Math.min(nr, a.alvoR);
    posicionar(a.el, a.col, a.row);

    if (a.row >= a.alvoR && a.col === a.alvoC) pousar();
  }

  function pousar() {
    const a = atual;
    atual = null;
    a.def.cells.forEach(function (rc) { grelha[a.alvoR + rc[0]][a.alvoC + rc[1]] = true; });
    posicionar(a.el, a.alvoC, a.alvoR);
    a.el.classList.add('pousou');
    setTimeout(function () { a.el.classList.remove('pousou'); }, 320);
    colocadas++;
    atualizarPaineis();

    if (idx >= fila.length) {
      terminar();
    } else {
      const g = gen;
      setTimeout(function () {
        if (g === gen) proxima();
      }, PAUSA);
    }
  }

  function terminar() {
    acabou = true;
    falhas = 0;
    atualizarPaineis();
    if (botao) botao.hidden = false;
    dizer('Habilidades encaixadas ✓');
  }

  function quadro(t) {
    if (!rodando) return;
    if (!visivel) {
      rodando = false;
      return;
    }
    if (!ultimo) ultimo = t;
    const dt = Math.min(t - ultimo, 50);
    ultimo = t;

    if (atual) {
      mover(dt);
      requestAnimationFrame(quadro);
    } else {
      rodando = false; // entre peças: a seguinte volta a acordar o ciclo
    }
  }

  function acordar() {
    if (rodando || !visivel || !comecou || !atual) return;
    rodando = true;
    ultimo = 0;
    requestAnimationFrame(quadro);
  }

  // ---------- arranque ----------
  function arrancar() {
    montar();
    if (comecou) iniciarJogo();
  }

  function aoVer(entradas) {
    const e = entradas[0];
    visivel = e.isIntersecting;
    if (e.intersectionRatio >= 0.35 && !comecou) {
      comecou = true;
      iniciarJogo();
    }
    if (visivel) acordar();
  }

  let temporizador = null;
  window.addEventListener('resize', function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      // só refaz se a largura mudou (a barra do telemóvel muda a altura ao rolar)
      if (Math.abs(caixa.clientWidth - largura) < 2) return;
      gen++;
      arrancar();
    }, 250);
  });

  const preparar = function () {
    montar();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(aoVer, { threshold: [0, 0.35] }).observe(caixa);
    } else {
      visivel = true;
      comecou = true;
      iniciarJogo();
    }
  };

  // Espera pelas fontes para medir bem a largura dos nomes
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(preparar);
  } else {
    preparar();
  }
})();

// ----- Processo: o personagem caminha pela trilha enquanto fazes scroll -----
(function () {
  const trilha = document.getElementById('trilha');
  const svg = document.getElementById('trilhaSvg');
  const base = document.getElementById('trilhaBase');
  const feito = document.getElementById('trilhaFeito');
  const boneco = document.getElementById('caminhante');
  if (!trilha || !svg || !base || !feito || !boneco) return;

  const passos = Array.prototype.slice.call(trilha.querySelectorAll('.trilha-passo'));
  const pontos = passos.map(function (p) { return p.querySelector('.trilha-ponto'); });
  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  const LINHA = 0.6;   // altura do ecrã (0 a 1) onde o personagem "fica" enquanto a página corre
  const SUAVE = 0.14;  // quanto demora a alcançar (maior = mais colado ao scroll)

  let total = 0;       // comprimento da trilha
  let amostras = [];   // [comprimento, y] para achar o ponto pela altura
  let ys = [];         // altura de cada passo
  let atual = 0;       // comprimento onde o personagem está agora
  let alvo = 0;
  let correndo = false;

  function limitar(v, a, b) { return Math.max(a, Math.min(b, v)); }

  // Desenha a trilha: começa no topo, passa por cada ponto e acaba em baixo
  function desenharTrilha() {
    const tr = trilha.getBoundingClientRect();
    const W = tr.width, H = tr.height;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);

    const pts = [{ x: pontos.length && window.innerWidth > 700 ? W / 2 : 24, y: 0 }];
    ys = [];
    pontos.forEach(function (el) {
      const r = el.getBoundingClientRect();
      const p = { x: r.left - tr.left + r.width / 2, y: r.top - tr.top + r.height / 2 };
      pts.push(p);
      ys.push(p.y);
    });
    // a trilha acaba mesmo por cima do texto de fecho
    const estreito = window.innerWidth <= 700;
    const fim = document.getElementById('trilhaFim');
    const textoFim = fim && fim.querySelector('.trilha-fim-texto');
    pts.push({ x: estreito ? 24 : W / 2, y: textoFim ? textoFim.getBoundingClientRect().top - tr.top - 14 : H });

    let d = 'M' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const dy = (b.y - a.y) * 0.5;
      d += ' C' + a.x.toFixed(1) + ' ' + (a.y + dy).toFixed(1) + ' ' + b.x.toFixed(1) + ' ' + (b.y - dy).toFixed(1) + ' ' + b.x.toFixed(1) + ' ' + b.y.toFixed(1);
    }
    base.setAttribute('d', d);
    feito.setAttribute('d', d);

    total = base.getTotalLength();
    amostras = [];
    const n = 240;
    for (let i = 0; i <= n; i++) {
      const L = total * i / n;
      amostras.push([L, base.getPointAtLength(L).y]);
    }
    feito.style.strokeDasharray = total;
  }

  // Comprimento da trilha na altura y (a trilha só desce, por isso dá para pesquisar)
  function comprimentoEm(y) {
    if (y <= amostras[0][1]) return 0;
    if (y >= amostras[amostras.length - 1][1]) return total;
    let lo = 0, hi = amostras.length - 1;
    while (hi - lo > 1) {
      const m = (lo + hi) >> 1;
      if (amostras[m][1] < y) lo = m; else hi = m;
    }
    const a = amostras[lo], b = amostras[hi];
    const t = (y - a[1]) / ((b[1] - a[1]) || 1);
    return a[0] + (b[0] - a[0]) * t;
  }

  function atualizarAlvo() {
    const tr = trilha.getBoundingClientRect();
    alvo = comprimentoEm(window.innerHeight * LINHA - tr.top);
  }

  function pintar() {
    const p = base.getPointAtLength(atual);
    const q = base.getPointAtLength(Math.min(total, atual + 3));
    const inclina = limitar(Math.atan2(q.x - p.x, q.y - p.y) * -18, -8, 8);
    const w = boneco.offsetWidth;
    const h = boneco.offsetHeight;
    boneco.style.transform =
      'translate(' + (p.x - w / 2).toFixed(1) + 'px, ' + (p.y - h * 0.88).toFixed(1) + 'px) rotate(' + inclina.toFixed(1) + 'deg)';
    feito.style.strokeDashoffset = (total - atual).toFixed(1);

    const yAtual = p.y;
    passos.forEach(function (li, i) {
      li.classList.toggle('ativo', yAtual >= ys[i] - 6);
    });
  }

  function loop() {
    atual += (alvo - atual) * (reduzir ? 1 : SUAVE);
    if (Math.abs(alvo - atual) < 0.4) atual = alvo;
    pintar();
    if (atual !== alvo) {
      requestAnimationFrame(loop);
    } else {
      correndo = false;
    }
  }

  function acordar() {
    atualizarAlvo();
    if (correndo) return;
    correndo = true;
    requestAnimationFrame(loop);
  }

  function tudo() {
    desenharTrilha();
    atualizarAlvo();
    atual = alvo;
    pintar();
  }

  // Posições de scroll em que o personagem está em cada um dos 4 pontos (usadas pelas "paradas" de página)
  window.paradasProcesso = function () {
    const tr = trilha.getBoundingClientRect();
    return ys.map(function (v) { return tr.top + window.scrollY + v - window.innerHeight * LINHA; });
  };

  window.addEventListener('scroll', acordar, { passive: true });
  window.addEventListener('resize', function () { tudo(); });
  window.addEventListener('load', tudo);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(tudo);
  if (boneco.complete === false) boneco.addEventListener('load', tudo);
  tudo();
})();

// ----- Correio: gira a manivela, sai uma carta, voa e abre no centro do ecrã -----
(function () {
  const cena = document.getElementById('correioCena');
  const alvo = document.getElementById('manivelaAlvo');
  const overlay = document.getElementById('cartaOverlay');
  const carta = document.getElementById('carta');
  const fechar = document.getElementById('cartaFechar');
  if (!cena || !alvo || !overlay || !carta || !fechar) return;

  const svg = document.getElementById('correioSvg');
  const gira = document.getElementById('manivelaGira');
  const cartaSVG = document.getElementById('cartaSVG');
  const bandeira = document.getElementById('bandeira');
  const tremer = document.getElementById('correioTremer');
  const dica = document.getElementById('correioDica');
  const conteudos = Array.prototype.slice.call(carta.querySelectorAll('.carta-conteudo'));

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const temRato = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (dica && !temRato) dica.innerHTML = 'Toque na manivela (ou gire com o dedo) &#8635;';

  // ---- Ajustes que podes mexer ----
  const TEMPO_VOLTA = 1100;   // duração de uma volta completa ao clicar/tocar (ms)
  const TEMPO_VOO = 950;      // duração do voo da carta até ao centro (ms)
  const SAIDA = 130;          // quanto a carta sobe ao sair da fenda (unidades do desenho)

  let angulo = 0;        // 0 a 360: uma volta completa tira uma carta
  let estado = 'espera'; // espera | voando | aberta
  let indice = 0;        // carta que sai a seguir
  let arrasto = null;
  let animando = false;
  let tremorAte = 0;
  let tremendo = false;

  function limitar(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function suave(p) {
    return 1 - Math.pow(1 - p, 2.2);
  }

  function aplicar() {
    const p = angulo / 360;
    const e = suave(p);
    gira.setAttribute('transform', 'rotate(' + angulo.toFixed(1) + ' 310 205)');
    cartaSVG.setAttribute('transform', 'translate(0 ' + (-SAIDA * e).toFixed(1) + ')');
    bandeira.setAttribute('transform', 'rotate(' + (180 * e).toFixed(1) + ' 40 205)');
    if (angulo > 4) cena.classList.add('usada');
  }

  // A caixa estremece enquanto a manivela anda
  function loopTremor(t) {
    if (t < tremorAte) {
      tremer.setAttribute(
        'transform',
        'translate(' + (Math.sin(t / 13) * 1.4).toFixed(2) + ' ' + (Math.cos(t / 17) * 0.9).toFixed(2) + ')'
      );
      requestAnimationFrame(loopTremor);
    } else {
      tremer.removeAttribute('transform');
      tremendo = false;
    }
  }

  function estremecer() {
    if (reduzir) return;
    tremorAte = performance.now() + 130;
    if (!tremendo) {
      tremendo = true;
      requestAnimationFrame(loopTremor);
    }
  }

  // ---------- animar o ângulo (volta automática e regresso) ----------
  function animarAngulo(destino, duracao, aoFim) {
    animando = true;
    const inicio = angulo;
    const t0 = performance.now();
    function passo(t) {
      const u = limitar((t - t0) / duracao, 0, 1);
      const e = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
      angulo = inicio + (destino - inicio) * e;
      aplicar();
      if (destino > inicio) estremecer();
      if (u < 1) {
        requestAnimationFrame(passo);
      } else {
        animando = false;
        if (aoFim) aoFim();
      }
    }
    requestAnimationFrame(passo);
  }

  function autoGirar() {
    if (estado !== 'espera' || animando) return;
    if (reduzir) {
      angulo = 360;
      aplicar();
      chegou();
      return;
    }
    const falta = (360 - angulo) / 360;
    animarAngulo(360, Math.max(350, TEMPO_VOLTA * falta), chegou);
  }

  // ---------- rato / dedo: girar em círculo à volta da manivela ----------
  function centro() {
    const r = alvo.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  function anguloDoPonteiro(e, c) {
    return Math.atan2(e.clientY - c.y, e.clientX - c.x) * 180 / Math.PI;
  }

  alvo.addEventListener('pointerdown', function (e) {
    if (estado !== 'espera' || animando) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const c = centro();
    arrasto = { c: c, ultimo: anguloDoPonteiro(e, c), total: 0, t0: performance.now() };
    alvo.setPointerCapture(e.pointerId);
    alvo.classList.add('a-girar');
  });

  alvo.addEventListener('pointermove', function (e) {
    if (!arrasto || estado !== 'espera') return;
    const a = anguloDoPonteiro(e, arrasto.c);
    const delta = ((a - arrasto.ultimo + 540) % 360) - 180;
    arrasto.ultimo = a;
    arrasto.total += Math.abs(delta);
    angulo = limitar(angulo + delta, 0, 360);
    aplicar();
    if (delta) estremecer();
    if (angulo >= 360) {
      arrasto = null;
      alvo.classList.remove('a-girar');
      chegou();
    }
  });

  function soltar() {
    if (!arrasto) return;
    const foiToque = arrasto.total < 12 && performance.now() - arrasto.t0 < 450;
    arrasto = null;
    alvo.classList.remove('a-girar');
    if (foiToque) autoGirar(); // um clique ou toque dá uma volta inteira
  }

  alvo.addEventListener('pointerup', soltar);
  alvo.addEventListener('pointercancel', function () {
    arrasto = null;
    alvo.classList.remove('a-girar');
  });

  // Teclado: Enter ou espaço dão uma volta
  alvo.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      autoGirar();
    }
  });

  // ---------- a carta voa e abre ----------
  function mostrarConteudo() {
    conteudos.forEach(function (c, i) { c.hidden = i !== indice; });
  }

  function chegou() {
    if (estado !== 'espera') return;
    estado = 'voando';
    angulo = 360;
    aplicar();
    alvo.classList.add('bloqueada');
    setTimeout(voar, reduzir ? 0 : 140);
  }

  function voar() {
    mostrarConteudo();
    const origem = cartaSVG.querySelector('rect').getBoundingClientRect();

    overlay.classList.add('ativa');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('carta-aberta-body');
    carta.classList.remove('aberta');
    overlay.scrollTop = 0;

    if (reduzir || !carta.animate) {
      cartaSVG.style.visibility = 'hidden';
      carta.classList.add('aberta');
      abriu();
      return;
    }

    const destino = carta.getBoundingClientRect();
    const dx = origem.left + origem.width / 2 - (destino.left + destino.width / 2);
    const dy = origem.top + origem.height / 2 - (destino.top + destino.height / 2);
    const s = origem.width / destino.width;

    cartaSVG.style.visibility = 'hidden';
    const voo = carta.animate([
      { transform: 'translate(' + dx + 'px, ' + dy + 'px) scale(' + s + ') rotate(-10deg)' },
      { transform: 'translate(' + dx * 0.35 + 'px, ' + (dy * 0.35 - 110) + 'px) scale(' + (s + (1 - s) * 0.5) + ') rotate(7deg)', offset: 0.55 },
      { transform: 'translate(0, 0) scale(1) rotate(0deg)' }
    ], { duration: TEMPO_VOO, easing: 'cubic-bezier(0.22, 0.7, 0.2, 1)', fill: 'backwards' });

    voo.onfinish = function () {
      setTimeout(function () {
        carta.classList.add('aberta'); // o selo desaparece e a carta abre
        abriu();
      }, 120);
    };
  }

  function abriu() {
    estado = 'aberta';
    setTimeout(function () { fechar.focus(); }, reduzir ? 0 : 350);
  }

  function fecharCarta() {
    if (estado !== 'aberta') return;
    estado = 'voando'; // enquanto recolhe, ignora novos cliques
    overlay.classList.remove('ativa');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('carta-aberta-body');

    setTimeout(function () {
      carta.classList.remove('aberta');
      cartaSVG.style.visibility = '';
      indice = (indice + 1) % conteudos.length; // a próxima carta é outra
      // a manivela volta atrás e a carta entra de novo na caixa
      if (reduzir) {
        angulo = 0;
        aplicar();
        fimRegresso();
      } else {
        animarAngulo(0, 700, fimRegresso);
      }
    }, reduzir ? 0 : 320);
  }

  function fimRegresso() {
    estado = 'espera';
    alvo.classList.remove('bloqueada');
    alvo.focus({ preventScroll: true });
  }

  fechar.addEventListener('click', fecharCarta);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) fecharCarta();
  });

  document.addEventListener('keydown', function (e) {
    if (estado !== 'aberta') return;
    if (e.key === 'Escape') {
      fecharCarta();
      return;
    }
    // mantém o foco dentro da carta
    if (e.key === 'Tab') {
      const itens = Array.prototype.slice.call(
        carta.querySelectorAll('.carta-conteudo:not([hidden]) a, .carta-conteudo:not([hidden]) button, .carta-fechar')
      );
      if (!itens.length) return;
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    }
  });

  // Copiar o email
  carta.addEventListener('click', function (e) {
    const b = e.target.closest('.carta-copiar');
    if (!b) return;
    const texto = b.getAttribute('data-copiar');
    const feito = function () {
      b.textContent = 'Copiado!';
      setTimeout(function () { b.textContent = 'Copiar'; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(feito, feito);
    } else {
      const t = document.createElement('textarea');
      t.value = texto;
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); } catch (err) { /* sem cópia */ }
      document.body.removeChild(t);
      feito();
    }
  });

  mostrarConteudo();
  aplicar();
})();

/* =========================================================
   PÁGINA DE PROJETOS: filtros por categoria
   ========================================================= */
(function () {
  const lista = document.getElementById('listaProjetos');
  const barra = document.getElementById('filtros');
  const vazio = document.getElementById('filtrosVazio');
  if (!lista) return; // (o filtro por categoria só funciona se existir a barra #filtros no HTML)

  const pastas = Array.prototype.slice.call(lista.querySelectorAll('.projeto'));

  // Cada pasta visível recebe a sua posição (--n), a cor e a aba com número e nome
  function numerar() {
    let n = 0;
    const visiveis = pastas.filter(function (p) { return !p.classList.contains('fora'); });
    lista.style.setProperty('--cnt', Math.max(1, visiveis.length));
    visiveis.forEach(function (p) {
      p.style.setProperty('--n', n);
      p.dataset.n = n;
      p.dataset.cor = n % 5;
      let tab = p.querySelector('.pasta-tab');
      if (!tab) {
        tab = document.createElement('span');
        tab.className = 'pasta-tab';
        tab.setAttribute('aria-hidden', 'true');
        p.insertBefore(tab, p.firstChild);
      }
      const nome = (p.querySelector('h3') || {}).textContent || '';
      tab.innerHTML = '<b>' + String(n + 1).padStart(2, '0') + '</b><span class="pasta-tab-nome"></span>';
      tab.lastChild.textContent = ' ' + nome.trim();
      n++;
    });
  }
  numerar();
  if (!barra) return;

  const categoriaDe = function (p) {
    const aba = p.querySelector('.pasta-aba');
    return aba ? aba.textContent.trim() : '';
  };

  // Categorias na ordem em que aparecem (só projetos que já estão prontos)
  const categorias = [];
  pastas.forEach(function (p) {
    const c = categoriaDe(p);
    if (c && categorias.indexOf(c) === -1) categorias.push(c);
  });
  if (categorias.length < 2) return; // com uma só categoria, filtrar não serve para nada

  function criarBotao(texto, valor) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'filtro';
    b.dataset.valor = valor;
    const n = valor === '*' ? pastas.length : pastas.filter(function (p) { return categoriaDe(p) === valor; }).length;
    b.innerHTML = texto + '<small>' + n + '</small>';
    b.setAttribute('aria-pressed', valor === '*' ? 'true' : 'false');
    barra.appendChild(b);
    return b;
  }

  criarBotao('Todos', '*');
  categorias.forEach(function (c) { criarBotao(c, c); });

  barra.addEventListener('click', function (e) {
    const botao = e.target.closest('.filtro');
    if (!botao) return;
    const valor = botao.dataset.valor;

    Array.prototype.forEach.call(barra.children, function (b) {
      b.setAttribute('aria-pressed', b === botao ? 'true' : 'false');
    });

    let visiveis = 0;
    pastas.forEach(function (p) {
      const mostrar = valor === '*' || categoriaDe(p) === valor;
      const estavaFora = p.classList.contains('fora');
      p.classList.toggle('fora', !mostrar);
      if (mostrar) {
        visiveis++;
        p.classList.add('visivel');
        if (estavaFora) {
          p.classList.remove('volta');
          void p.offsetWidth; // reinicia a animação
          p.classList.add('volta');
        }
      }
    });
    numerar();
    if (vazio) vazio.hidden = visiveis > 0;
  });
})();

/* =========================================================
   PÁGINA DE PROJETO: galeria em tela cheia, próximo projeto, progresso
   ========================================================= */

// LISTA DE PROJETOS (ordem do "próximo projeto"). Para adicionar um projeto novo,
// acrescenta uma linha aqui, com o nome do ficheiro da página e a imagem de capa.
const PROJETOS = [
  { arquivo: 'projeto2.dama.html',     titulo: 'Dama Centeio',  rotulo: 'Branding', capa: 'Assets/imgs/dama1.jpg' },
  { arquivo: 'projeto3.sojou.html',    titulo: 'Sojou',         rotulo: 'Branding', capa: 'Assets/imgs/sojou1.jpg' },
  { arquivo: 'projeto4.bloom.html',    titulo: 'Bloom Coffee',  rotulo: 'Branding', capa: 'Assets/imgs/Bloom1.png' },
  { arquivo: 'projeto5.pessoal.html',  titulo: 'Marca Pessoal', rotulo: 'Branding', capa: 'Assets/imgs/marca1.png' },
  { arquivo: 'projeto6.lumina.html',   titulo: 'LUMINA',        rotulo: 'Editorial', capa: 'Assets/imgs/Lumina.1.jpg' },
  { arquivo: 'projeto7.vivarium.html', titulo: 'Vivarium',      rotulo: 'Cartazes',  capa: 'Assets/imgs/vivarium1.png' },
  { arquivo: 'projeto8.pluma.html',    titulo: 'Pluma Smoothies', rotulo: 'Branding', capa: 'Assets/imgs/pluma1.jpg' },
  { arquivo: 'projeto9.boavibe.html',  titulo: 'Festival Boa Vibe', rotulo: 'Cartazes', capa: 'Assets/imgs/boavibe1.jpg' }
];

(function () {
  if (!document.body.classList.contains('pagina-projeto')) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const imagens = Array.prototype.slice.call(document.querySelectorAll('#projetoImagens img'));
  const tituloProjeto = (document.querySelector('.projeto-hero h1') || {}).textContent || 'Projeto';

  // ----- Barra de progresso de leitura -----
  const barra = document.getElementById('progressoLeitura');
  if (barra) {
    const atualizar = function () {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      barra.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    };
    window.addEventListener('scroll', atualizar, { passive: true });
    window.addEventListener('resize', atualizar);
    atualizar();
  }

  // ----- Próximo projeto (calculado a partir da lista PROJETOS) -----
  const caixa = document.getElementById('proximoProjeto');
  if (caixa) {
    const atual = decodeURIComponent(window.location.pathname.split('/').pop() || '');
    const i = PROJETOS.findIndex(function (p) { return p.arquivo === atual; });
    const prox = PROJETOS[(i + 1) % PROJETOS.length];
    if (prox && PROJETOS.length) {
      caixa.innerHTML =
        '<a class="proximo-cartao vidro" href="' + prox.arquivo + '">' +
          '<div class="proximo-texto">' +
            '<p class="rotulo">Próximo projeto</p>' +
            '<span class="proximo-titulo"></span>' +
            '<span class="proximo-seta">Abrir ↗</span>' +
          '</div>' +
          '<div class="proximo-capa"><img alt=""></div>' +
        '</a>' +
        '<a class="botao botao-vidro proximo-todos" href="projetos.html">Ver todos os projetos</a>';
      caixa.querySelector('.proximo-titulo').textContent = prox.titulo;
      caixa.querySelector('.proximo-capa img').src = prox.capa;
    }
  }

  // ----- Galeria em tela cheia -----
  if (!imagens.length) return;

  const lb = document.createElement('div');
  lb.className = 'lb';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Galeria: ' + tituloProjeto);
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML =
    '<div class="lb-topo">' +
      '<span class="lb-titulo"></span>' +
      '<span class="lb-conta" aria-live="polite"></span>' +
      '<button type="button" class="lb-fechar">Sair ×</button>' +
    '</div>' +
    '<div class="lb-palco">' +
      '<button type="button" class="lb-seta lb-ant" aria-label="Imagem anterior">‹</button>' +
      '<img class="lb-img" alt="" draggable="false">' +
      '<button type="button" class="lb-seta lb-seg" aria-label="Próxima imagem">›</button>' +
    '</div>' +
    '<div class="lb-tiras"></div>';
  document.body.appendChild(lb);

  const imgGrande = lb.querySelector('.lb-img');
  const palco = lb.querySelector('.lb-palco');
  const conta = lb.querySelector('.lb-conta');
  const tiras = lb.querySelector('.lb-tiras');
  const bFechar = lb.querySelector('.lb-fechar');
  lb.querySelector('.lb-titulo').textContent = tituloProjeto;

  const minis = imagens.map(function (img, n) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lb-mini';
    b.setAttribute('aria-label', 'Ver imagem ' + (n + 1));
    const m = document.createElement('img');
    m.src = img.currentSrc || img.src;
    m.alt = '';
    b.appendChild(m);
    b.addEventListener('click', function () { ir(n); });
    tiras.appendChild(b);
    return b;
  });
  if (imagens.length < 2) {
    tiras.style.display = 'none';
    lb.querySelector('.lb-ant').style.display = 'none';
    lb.querySelector('.lb-seg').style.display = 'none';
  }

  let atual = 0;
  let aberta = false;
  let abridor = null;
  let ocupado = false;

  function pre(n) {
    const o = imagens[(n + imagens.length) % imagens.length];
    if (o) { const p = new Image(); p.src = o.currentSrc || o.src; }
  }

  function pintar(n) {
    const o = imagens[n];
    imgGrande.src = o.currentSrc || o.src;
    imgGrande.alt = o.alt || '';
    conta.textContent = (n + 1) + ' / ' + imagens.length;
    minis.forEach(function (m, k) {
      if (k === n) {
        m.setAttribute('aria-current', 'true');
        m.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduzir ? 'auto' : 'smooth' });
      } else {
        m.removeAttribute('aria-current');
      }
    });
    pre(n + 1);
    pre(n - 1);
  }

  function ir(n) {
    n = (n + imagens.length) % imagens.length;
    if (n === atual && imgGrande.src) return;
    const dir = n > atual ? 1 : -1;
    atual = n;
    if (reduzir || !imgGrande.animate || !aberta) {
      pintar(n);
      return;
    }
    if (ocupado) { pintar(n); return; }
    ocupado = true;
    const sai = imgGrande.animate(
      [{ opacity: 1, transform: 'translateX(0)' }, { opacity: 0, transform: 'translateX(' + (-36 * dir) + 'px)' }],
      { duration: 160, easing: 'ease-in', fill: 'forwards' }
    );
    sai.onfinish = function () {
      pintar(atual);
      const entra = imgGrande.animate(
        [{ opacity: 0, transform: 'translateX(' + (36 * dir) + 'px)' }, { opacity: 1, transform: 'translateX(0)' }],
        { duration: 220, easing: 'ease-out' }
      );
      sai.cancel();
      entra.onfinish = function () { ocupado = false; };
    };
  }

  function abrir(n) {
    if (aberta) return;
    aberta = true;
    abridor = document.activeElement;
    atual = n;
    pintar(n);
    lb.classList.add('ativa');
    lb.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lb-aberto');
    setTimeout(function () { bFechar.focus({ preventScroll: true }); }, 50);
  }

  function fechar() {
    if (!aberta) return;
    aberta = false;
    lb.classList.remove('ativa');
    lb.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lb-aberto');
    // deixa a página na imagem que estavas a ver
    const alvo = imagens[atual];
    if (alvo) alvo.scrollIntoView({ block: 'center', behavior: 'auto' });
    if (abridor && abridor.focus) abridor.focus({ preventScroll: true });
  }

  imagens.forEach(function (img, n) {
    img.addEventListener('click', function () { abrir(n); });
  });

  const bAbrir = document.getElementById('abrirGaleria');
  if (bAbrir) bAbrir.addEventListener('click', function () { abrir(0); });

  bFechar.addEventListener('click', fechar);
  lb.querySelector('.lb-ant').addEventListener('click', function () { ir(atual - 1); });
  lb.querySelector('.lb-seg').addEventListener('click', function () { ir(atual + 1); });

  // Clicar no fundo (fora da imagem e dos botões) fecha
  palco.addEventListener('click', function (e) {
    if (e.target === palco) fechar();
  });

  // Deslizar o dedo para trocar de imagem
  let toque = null;
  palco.addEventListener('pointerdown', function (e) {
    if (e.pointerType === 'mouse') return;
    toque = { x: e.clientX, y: e.clientY };
  });
  palco.addEventListener('pointerup', function (e) {
    if (!toque) return;
    const dx = e.clientX - toque.x;
    const dy = e.clientY - toque.y;
    toque = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) ir(atual + (dx < 0 ? 1 : -1));
  });
  palco.addEventListener('pointercancel', function () { toque = null; });

  document.addEventListener('keydown', function (e) {
    if (!aberta) return;
    if (e.key === 'Escape') { fechar(); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); ir(atual + 1); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); ir(atual - 1); return; }
    if (e.key === 'Home') { e.preventDefault(); ir(0); return; }
    if (e.key === 'End') { e.preventDefault(); ir(imagens.length - 1); return; }
    if (e.key === 'Tab') {
      const itens = Array.prototype.slice.call(lb.querySelectorAll('button')).filter(function (b) {
        return b.offsetParent !== null;
      });
      if (!itens.length) return;
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
    }
  });
})();
// ----- Projetos: universo com onda de luz e uma onda leve quando cada pasta assenta -----
(function () {
  if (!document.body.classList.contains('pagina-projetos')) return;
  const lista = document.getElementById('listaProjetos');
  if (!lista) return;

  // o fundo escuro com pontinhos e estrelas é o mesmo do Processo
  const universo = document.createElement('div');
  universo.className = 'processo-universo proj-universo';
  universo.setAttribute('aria-hidden', 'true');
  const anel = document.createElement('div');
  anel.className = 'proj-anel';
  anel.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(anel, document.body.firstChild);
  document.body.insertBefore(universo, document.body.firstChild);

  // quando uma pasta nova chega ao topo, sai uma onda
  let assentadas = 0;
  let pedido = false;

  function verificar() {
    pedido = false;
    const cartoes = Array.prototype.slice.call(lista.querySelectorAll('.projeto:not(.fora)'));
    if (!cartoes.length || getComputedStyle(cartoes[0]).position !== 'sticky') { assentadas = 0; return; }
    const topo = parseFloat(getComputedStyle(cartoes[0]).top) || 0;
    let n = 0;
    cartoes.forEach(function (c) {
      if (c.getBoundingClientRect().top <= topo + 3) n++;
    });
    if (n > assentadas && assentadas > 0) {
      const r = cartoes[n - 1].getBoundingClientRect();
      const pulso = document.createElement('div');
      pulso.className = 'proj-pulso';
      pulso.style.top = (r.top + r.height / 2).toFixed(0) + 'px';
      document.body.appendChild(pulso);
      setTimeout(function () { pulso.remove(); }, 1800);
    }
    assentadas = n;
  }

  window.addEventListener('scroll', function () {
    if (pedido) return;
    pedido = true;
    requestAnimationFrame(verificar);
  }, { passive: true });
  verificar();
})();

// ----- Dica da manivela: passa para junto da manivela, como um pequeno detalhe -----
(function () {
  const dica = document.getElementById('correioDica');
  const cena = document.getElementById('correioCena');
  if (dica && cena) cena.appendChild(dica);
})();