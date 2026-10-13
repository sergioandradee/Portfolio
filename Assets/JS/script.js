
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

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', function () {
    const grao = (window.scrollY * velocidadeGrao) % 240;
    document.body.style.setProperty('--grao', grao + 'px');
  });
}

// ----- Sobre: entrada pelos lados, repete sempre que a secção aparece -----
const entradasSobre = document.querySelectorAll(
  '.entrada-esquerda, .entrada-direita, .entrada-baixo'
);

const observadorSobre = new IntersectionObserver(function (lista) {
  lista.forEach(function (item) {
    item.target.classList.toggle('visivel', item.isIntersecting);
  });
}, { threshold: 0.25 });

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
    const emCartao = e.target.closest('.projeto');
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
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
