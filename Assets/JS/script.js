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


// ----- Crachá interativo: corda + física (gravidade), rato, arrastar e virar -----
(function () {
  const home = document.getElementById('home');
  const cracha = document.getElementById('cracha');
  const giro = document.getElementById('crachaGiro');
  const corda = document.getElementById('corda');
  const fitas = Array.prototype.slice.call(document.querySelectorAll('#corda [data-fita]'));
  const ancora = document.getElementById('cordaAncora');
  const ancora2 = document.getElementById('cordaAncora2');
  if (!home || !cracha || !giro || !corda) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  const SEGMENTOS = 6;       // quantos pedaços tem a corda
  const GRAVIDADE = 0.7;     // puxa para baixo (maior = mais pesado)
  const ATRITO = 0.992;      // resistência do ar (mais perto de 1 = balança mais tempo)
  const FORCA_RATO = 0.07;   // quanto o rato empurra o crachá ao passar por cima
  const ALTURA_NAVBAR = 100; // onde a corda fica presa (logo abaixo da navbar)

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

  // Tamanho do crachá e da corda conforme o ecrã
  function medir() {
    largura = home.clientWidth;
    const vh = window.innerHeight;
    const livre = vh - ALTURA_NAVBAR - 80;

    let larg = Math.min(340, largura * 0.72, (livre - 100 - 20) / 1.5);
    larg = Math.max(larg, 190);

    const altCracha = larg * 1.5;
    compCorda = Math.max(80, livre - altCracha - 20);
    compBarra = altCracha * 0.8;

    cracha.style.setProperty('--cw', larg + 'px');
    corda.style.setProperty('--fita', (larg * 0.105).toFixed(1) + 'px');
    emPx = larg / 20;
    home.style.minHeight = Math.max(vh, ALTURA_NAVBAR + compCorda + altCracha + 100) + 'px';
  }

  function construir(comEntrada) {
    medir();
    P = [];
    ligacoes = [];

    const ax = largura / 2;
    const ay = ALTURA_NAVBAR;
    const seg = compCorda / SEGMENTOS;

    // Na primeira vez o crachá "cai" de lado e balança até assentar
    const ang = comEntrada && !reduzir ? 0.6 : 0;
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

  function virar() {
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
    if (clicou) virar();
  }

  cracha.addEventListener('pointerup', soltar);
  cracha.addEventListener('pointercancel', soltar);

  // Teclado: Enter ou espaço viram o crachá
  giro.addEventListener('keydown', function (e) {
    if (e.target !== giro) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      virar();
    }
  });

  // Só simula enquanto a home está visível
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      visivel = entradas[0].isIntersecting;
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

  construir(true);
  desenhar();
  acordar();
})();

// ----- Impressora (Sobre): o scroll puxa a folha e imprime o texto -----
(function () {
  const secao = document.getElementById('sobre');
  const palco = secao && secao.querySelector('.sobre-palco');
  const cena = document.getElementById('impCena');
  const folha = document.getElementById('impFolha');
  const corpo = document.getElementById('impCorpo');
  const papel = document.getElementById('impPapel');
  const lcd = document.getElementById('impLcd');
  if (!secao || !palco || !cena || !folha || !corpo || !papel || !lcd) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Ajustes que podes mexer ----
  // (a distância total de scroll está no CSS: "height: calc(100vh + 150vh)" em #sobre)
  const CURSO = 7;            // quanto a folha em branco desce para dentro (em "em")
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

  // 0 quando a secção chega ao topo, 1 quando está prestes a soltar-se
  function progresso() {
    const total = secao.offsetHeight - palco.offsetHeight;
    if (total <= 0) return 0;
    return limitar(-secao.getBoundingClientRect().top / total, 0, 1);
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

// ----- Processo: mural de cortiça (papéis presos com alfinetes) -----
(function () {
  const mural = document.querySelector('.processo-lista');
  if (!mural) return;
  const lis = Array.prototype.slice.call(mural.querySelectorAll('.passo'));
  if (!lis.length) return;

  const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const temRato = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ---- Ajustes que podes mexer ----
  const MOLA = 0.012;       // força que traz o papel de volta à posição (maior = mais seco)
  const ATRITO = 0.025;     // quanto demora a parar de balançar (maior = para mais depressa)
  const EMPURRAO = 0.022;   // quanto o rato empurra ao passar por cima
  const INCLINACAO = 1.2;   // quanto o papel inclina ao ser arrastado
  const ANGULOS = [-3.5, 2.5, -2, 3.5]; // inclinação de cada papel em repouso (graus)
  const DESV_Y = [0, 18, 6, 22];        // pequenas diferenças de altura
  const DESV_X = [0, -4, 6, -2];        // pequenas diferenças laterais

  // Desenhos à mão (um por papel). No HTML: data-icone="ouvir|explorar|criar|refinar"
  const ORDEM = ['ouvir', 'explorar', 'criar', 'refinar'];
  const ICONES = {
    ouvir: '<path d="M8 12h30a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H23l-8 7v-7H8a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z"/><path d="M47 24h9a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-3v6l-7-6h-8"/><path d="M12 20h22M12 26h14"/>',
    explorar: '<circle cx="26" cy="26" r="15"/><path d="M37 37l17 17"/><path d="M18 24c3-6 10-7 13-3"/><path d="M50 12l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/>',
    criar: '<path d="M10 54l4-14L42 12a5 5 0 0 1 7 0l3 3a5 5 0 0 1 0 7L24 50l-14 4z"/><path d="M36 18l10 10"/><path d="M14 40l10 10"/>',
    refinar: '<path d="M8 18h48M8 32h48M8 46h48"/><circle cx="22" cy="18" r="5" fill="currentColor" fill-opacity=".15"/><circle cx="42" cy="32" r="5" fill="currentColor" fill-opacity=".15"/><circle cx="28" cy="46" r="5" fill="currentColor" fill-opacity=".15"/>'
  };

  mural.classList.add('mural-on');
  if (temRato) mural.classList.add('com-rato');

  const notas = lis.map(function (el, i) {
    // deixa de ser um cartão de vidro e passa a ser um papel
    el.classList.remove('vidro', 'entrada-baixo', 'escondido', 'visivel');
    el.classList.add('nota', 'n' + (i % 4));

    const nomeIcone = el.getAttribute('data-icone') || ORDEM[i % ORDEM.length];
    if (ICONES[nomeIcone]) {
      el.insertAdjacentHTML(
        'afterbegin',
        '<svg class="nota-desenho" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.6" ' +
          'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONES[nomeIcone] + '</svg>'
      );
    }
    el.insertAdjacentHTML('afterbegin', '<span class="alfinete" aria-hidden="true"></span>');

    return {
      el: el,
      pino: el.querySelector('.alfinete'),
      i: i,
      x: 0, y: 0,        // posição (canto do papel)
      yo: 0, vy: 0,      // desvio vertical (queda ao entrar / pousar)
      ang: 0, w: 0,      // ângulo e velocidade angular
      ang0: ANGULOS[i % ANGULOS.length],
      alvo: 0, dxs: 0,
      arrastando: false,
      z: i + 1
    };
  });

  let L = 0;
  let A = 0;
  let largNota = 0;
  let altNota = 0;
  let zTopo = notas.length + 1;
  let arrasto = null;
  let ultimoPonteiro = null;
  let visivel = false;
  let entrou = false;
  let rodando = false;
  let ultimo = 0;

  function limitar(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  // ---------- disposição ----------
  function disposicao() {
    L = mural.clientWidth;
    const pad = 18;
    const gap = 22;
    const colunas = L >= 980 ? 4 : (L >= 520 ? 2 : 1);

    if (colunas === 4) largNota = Math.min(252, (L - 2 * pad - 3 * gap) / 4);
    else if (colunas === 2) largNota = Math.min(260, (L - 2 * pad - gap) / 2);
    else largNota = Math.min(L - 2 * pad - 28, 320);

    notas.forEach(function (n) { n.el.style.width = largNota + 'px'; });
    altNota = 0;
    notas.forEach(function (n) { altNota = Math.max(altNota, n.el.offsetHeight); });

    const linhas = Math.ceil(notas.length / colunas);
    const alturaLinha = altNota + gap + 18;
    A = 2 * pad + linhas * alturaLinha;
    mural.style.height = A + 28 + 'px'; // + moldura de 14px de cada lado

    notas.forEach(function (n, k) {
      const col = k % colunas;
      const lin = Math.floor(k / colunas);
      let x;
      if (colunas === 1) {
        x = pad + (k % 2 ? (L - 2 * pad - largNota) : 0) * 0.7;
      } else {
        x = pad + col * ((L - 2 * pad - largNota) / (colunas - 1));
      }
      n.x = limitar(x + DESV_X[k % DESV_X.length], 6, L - largNota - 6);
      n.y = pad + lin * alturaLinha + DESV_Y[k % DESV_Y.length];
      n.el.style.zIndex = n.z;
      desenhar(n);
    });
  }

  function desenhar(n) {
    n.el.style.transform =
      'translate(' + n.x.toFixed(1) + 'px, ' + (n.y + n.yo).toFixed(1) + 'px) rotate(' + n.ang.toFixed(2) + 'deg)';
  }

  // ---------- física: cada papel é um pêndulo preso pelo alfinete ----------
  function ativo(n) {
    return n.arrastando || Math.abs(n.w) > 0.01 || Math.abs(n.ang - n.ang0) > 0.05 ||
      Math.abs(n.yo) > 0.1 || Math.abs(n.vy) > 0.05;
  }

  function quadro(t) {
    if (!rodando) return;
    if (!visivel) {
      rodando = false;
      return;
    }
    if (!ultimo) ultimo = t;
    const s = Math.min((t - ultimo) / 16.667, 3);
    ultimo = t;

    let algum = false;
    notas.forEach(function (n) {
      if (n.arrastando) {
        n.dxs *= Math.pow(0.9, s);
        n.alvo = reduzir ? n.ang0 : n.ang0 + limitar(n.dxs * INCLINACAO, -28, 28);
      } else {
        n.alvo = n.ang0;
      }

      n.w += (-MOLA * (n.ang - n.alvo) - ATRITO * n.w) * s;
      n.w = limitar(n.w, -8, 8);
      n.ang += n.w * s;

      n.vy += (-0.02 * n.yo - 0.11 * n.vy) * s;
      n.yo += n.vy * s;

      desenhar(n);
      if (ativo(n)) algum = true;
    });

    if (algum) {
      requestAnimationFrame(quadro);
    } else {
      rodando = false;
    }
  }

  function acordar() {
    if (rodando || !visivel) return;
    rodando = true;
    ultimo = 0;
    requestAnimationFrame(quadro);
  }

  // ---------- entrada: os papéis caem e são presos ----------
  function entrar() {
    if (entrou) return;
    entrou = true;
    notas.forEach(function (n, k) {
      n.ang = n.ang0;
      n.yo = 0;
      if (reduzir) {
        n.el.classList.add('entrou');
        desenhar(n);
        return;
      }
      setTimeout(function () {
        n.ang = n.ang0 + (Math.random() < 0.5 ? -1 : 1) * (14 + Math.random() * 12);
        n.yo = -(110 + Math.random() * 50);
        n.vy = 0;
        n.w = 0;
        n.el.classList.add('entrou');
        n.pino.classList.add('plop');
        acordar();
      }, k * 150);
    });
  }

  // ---------- rato: passar por cima balança; arrastar muda o papel de sítio ----------
  function posicao(e) {
    const r = mural.getBoundingClientRect();
    return { x: e.clientX - r.left - mural.clientLeft, y: e.clientY - r.top - mural.clientTop };
  }

  mural.addEventListener('pointerdown', function (e) {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = e.target.closest('.nota');
    if (!el) return;
    const n = notas.filter(function (q) { return q.el === el; })[0];
    if (!n) return;

    const p = posicao(e);
    n.arrastando = true;
    n.z = ++zTopo;
    el.style.zIndex = n.z;
    el.classList.add('levantada');
    n.dxs = 0;
    arrasto = { n: n, offX: p.x - n.x, offY: p.y - n.y, ultX: p.x };
    el.setPointerCapture(e.pointerId);
    acordar();
  });

  mural.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse') return;
    const p = posicao(e);

    if (arrasto) {
      const n = arrasto.n;
      n.x = limitar(p.x - arrasto.offX, 4, L - largNota - 4);
      n.y = limitar(p.y - arrasto.offY, 4, A - altNota - 4);
      n.dxs = n.dxs * 0.6 + (p.x - arrasto.ultX) * 0.4;
      arrasto.ultX = p.x;
      acordar();
      return;
    }

    // passar por cima: empurra o papel com a velocidade do rato
    const agora = performance.now();
    const el = e.target.closest('.nota');
    if (el && ultimoPonteiro && !reduzir) {
      const n = notas.filter(function (q) { return q.el === el; })[0];
      const dt = Math.max(agora - ultimoPonteiro.t, 8);
      const vx = limitar((p.x - ultimoPonteiro.x) / dt * 16, -40, 40);
      const alavanca = limitar((p.y - (n.y + 15)) / altNota, 0.15, 1);
      n.w = limitar(n.w - vx * EMPURRAO * alavanca, -6, 6);
      acordar();
    }
    ultimoPonteiro = { x: p.x, y: p.y, t: agora };
  });

  function soltar() {
    if (!arrasto) return;
    const n = arrasto.n;
    n.arrastando = false;
    n.el.classList.remove('levantada');
    n.pino.classList.remove('plop');
    void n.pino.offsetWidth;
    n.pino.classList.add('plop');
    if (!reduzir) {
      n.yo = -8; // pousa com um pequeno peso
      n.vy = 0;
    }
    arrasto = null;
    acordar();
  }

  mural.addEventListener('pointerup', soltar);
  mural.addEventListener('pointercancel', soltar);
  mural.addEventListener('pointerleave', function () { ultimoPonteiro = null; });

  // Toque: tocar num papel faz-o balançar (o scroll da página continua livre)
  mural.addEventListener('click', function (e) {
    if (e.pointerType === 'mouse' || reduzir) return;
    const el = e.target.closest('.nota');
    if (!el) return;
    const n = notas.filter(function (q) { return q.el === el; })[0];
    n.w += (Math.random() < 0.5 ? -1 : 1) * 4.5;
    acordar();
  });

  // ---------- arranque ----------
  mural.insertAdjacentHTML(
    'afterend',
    '<p class="mural-dica">' + (temRato ? 'Arraste os papéis do mural' : 'Toca nos papéis') + '</p>'
  );

  let larguraAnterior = 0;
  function preparar() {
    disposicao();
    larguraAnterior = mural.clientWidth;
  }

  let temporizador = null;
  window.addEventListener('resize', function () {
    clearTimeout(temporizador);
    temporizador = setTimeout(function () {
      if (Math.abs(mural.clientWidth - larguraAnterior) < 2) return;
      preparar();
      acordar();
    }, 200);
  });

  const iniciar = function () {
    preparar();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entradas) {
        const e = entradas[0];
        visivel = e.isIntersecting;
        if (e.intersectionRatio >= 0.25) entrar();
        if (visivel) acordar();
      }, { threshold: [0, 0.25] }).observe(mural);
    } else {
      visivel = true;
      entrar();
    }
  };

  // as fontes mudam a altura dos papéis: espera por elas antes de medir
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(iniciar);
  } else {
    iniciar();
  }
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
  if (dica && !temRato) dica.innerHTML = 'Ou gira a manivela com o dedo &#8635;';

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
  if (!lista || !barra) return;

  const pastas = Array.prototype.slice.call(lista.querySelectorAll('.projeto'));
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
  { arquivo: 'projeto6.lumina.html',   titulo: 'LUMINA',        rotulo: 'Branding', capa: 'Assets/imgs/Lumina.1.jpg' },
  { arquivo: 'projeto7.vivarium.html', titulo: 'Vivarium',      rotulo: 'Afiches',  capa: 'Assets/imgs/vivarium1.png' }
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
      '<button type="button" class="lb-seta lb-seg" aria-label="Imagem seguinte">›</button>' +
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