/**
 * Artes animadas do README do perfil — estética gótica / vampírica.
 *
 *  - dist/banner.svg    cena do tema escolhido + o nome e frases digitando
 *  - dist/grimorio.svg  linguagens viram velas, números viram relíquias e maldições
 *  - dist/noites.svg    um morcego atravessa o gráfico de contribuições e cada
 *                       noite de código vira uma lápide acesa
 *
 * Temas: "cripta", "catedral", "rosa-negra", "eclipse" (veja modelos/README.md).
 * Sem dependências: funciona no Node (scripts/gerar-svgs.mjs) e no navegador.
 */

// ✏️ EDITE AQUI ----------------------------------------------------------------
export const CONFIG = {
  tema: "rosa-negra",
  usuario: "beatrizfmac",
  nome: "Beatriz Flausino",
  // Frases digitadas embaixo do nome. Com uma só, ela é digitada uma vez e fica.
  frases: ["Ciência da Computação · UNIFAL-MG"],
  saudacao: "", // texto pequeno acima do nome ("" esconde; apague a linha para usar o do tema)
  rodape: "", // linha pequena com cursor no fim do banner ("" esconde)

  // Cabeçalhos de seção (viram dist/secao-<chave>.svg)
  secoes: { sobre: "Sobre mim" },

  // Estante (dist/estante.svg)
  estante: {
    jogos: ["Alice: Madness Returns", "Spiritfarer", "Gris", "The Last of Us"],
    filmes: ["Climax", "Possessor", "Nope", "Bugonia", "Enter the Void", "House", "The Witch"],
  },

  // Diário da noite (dist/diario.svg). Deixe "" para esconder um item.
  diario: {
    cultivando: "Web com .NET e React",
    lendo: "O Estrangeiro, de Albert Camus",
    ouvindo: "Brat and It's Completely Different but Also Still Brat",
    jogando: "Cult of the Lamb",
  },

  // Cartas de projeto (dist/projeto-1.svg, projeto-2.svg, ...). Vazio = sem cartas.
  // Exemplo: { nome: "Meu projeto", descricao: "O que ele faz.", tags: ["HTML", "CSS"] }
  // Para mostrar, adicione também a seção "projetos" em secoes e as imagens no README.
  projetos: [],

  // Estufa de tecnologias (dist/estufa.svg). Vazio = não gera.
  // Exemplo: ["C#", ".NET", "Java", "JavaScript", "React", "HTML", "CSS", "MySQL", "Git"]
  tecnologias: [],

  // Rodapé (dist/rodape.svg)
  despedida: "ATÉ A PRÓXIMA NOITE",
  despedidaSub: "o jardim fica aberto depois do pôr do sol",
};
// -----------------------------------------------------------------------------

export const TEMAS = {
  cripta: {
    nome: "Cripta",
    descricao: "castelo sob a lua de sangue, morcegos e o nome sangrando",
    saudacao: "BOAS-VINDAS À MINHA CRIPTA",
    tituloGrimorio: "GRIMÓRIO DE SANGUE",
    tituloNoites: "NOITES DE CAÇA",
    gotas: true,
    cores: {
      FUNDO_1: "#17070e", FUNDO_2: "#060205", BORDA: "#3d1322", PAINEL: "#0f050a",
      OSSO: "#efe4dc", NEVOA: "#a3878f",
      SANGUE: "#c1121f", SANGUE_VIVO: "#ff2e43", SANGUE_ESCURO: "#5c0614",
      OURO: "#c9a45c", AMBAR: "#ffb347",
    },
    chama: ["#ffd36b", "#ff7b22", "#c1121f"],
    niveis: ["#2a1019", "#5e0a20", "#93102a", "#cf1730", "#ff3048"],
    apagado: "#160a0f",
    morcego: { b: "#1c0a12", w: "#41172a", r: "#ff2e43", f: "#f6eee6", contorno: "#8c2a3f" },
  },
  catedral: {
    nome: "Catedral",
    descricao: "rosácea de vitral acendendo em sequência e raios de luz com poeira",
    saudacao: "BOAS-VINDAS À MINHA CATEDRAL",
    tituloGrimorio: "LIVRO DAS HORAS",
    tituloNoites: "VIGÍLIAS",
    gotas: false,
    cores: {
      FUNDO_1: "#120a1f", FUNDO_2: "#05030a", BORDA: "#2f1d4a", PAINEL: "#0c0716",
      OSSO: "#f1eaf7", NEVOA: "#9c8fb3",
      SANGUE: "#8b2fc9", SANGUE_VIVO: "#c77dff", SANGUE_ESCURO: "#3c1361",
      OURO: "#d4af37", AMBAR: "#ffcf70",
    },
    chama: ["#ffe08a", "#ff9f43", "#8b2fc9"],
    niveis: ["#1e1430", "#3c1361", "#6a1fa0", "#9d4edd", "#d9a7ff"],
    apagado: "#110a1c",
    morcego: { b: "#150d22", w: "#2f1b4a", r: "#ffcf70", f: "#f4eefa", contorno: "#7b52b8" },
  },
  "rosa-negra": {
    nome: "Rosa Negra",
    descricao: "rosas negras com espinhos, pétalas caindo e trepadeiras",
    saudacao: "TODA ROSA TEM ESPINHOS",
    tituloGrimorio: "HERBÁRIO DE ESPINHOS",
    tituloNoites: "JARDIM DAS NOITES",
    gotas: true,
    cores: {
      FUNDO_1: "#100c0e", FUNDO_2: "#030203", BORDA: "#2e2226", PAINEL: "#0b0809",
      OSSO: "#eee8ea", NEVOA: "#9d9196",
      SANGUE: "#8c1236", SANGUE_VIVO: "#e0446c", SANGUE_ESCURO: "#3a0717",
      OURO: "#bdbdca", AMBAR: "#f2d6a2",
    },
    chama: ["#ffd9a0", "#ff7b5c", "#a3173f"],
    niveis: ["#1e1519", "#3a0717", "#6b0d2b", "#a3173f", "#e0446c"],
    apagado: "#120d0f",
    morcego: { b: "#140f11", w: "#2e1f25", r: "#e0446c", f: "#f3eef0", contorno: "#7d6a72" },
  },
  eclipse: {
    nome: "Eclipse",
    descricao: "lua prateada sendo eclipsada, coroa de sangue e floresta morta",
    saudacao: "SOB O ECLIPSE",
    tituloGrimorio: "ARQUIVO DE PRATA",
    tituloNoites: "FASES DA LUA",
    gotas: false,
    cores: {
      FUNDO_1: "#0b111b", FUNDO_2: "#020408", BORDA: "#1f2b3c", PAINEL: "#070b12",
      OSSO: "#e8eef5", NEVOA: "#8b98aa",
      SANGUE: "#b3122b", SANGUE_VIVO: "#9fc3ea", SANGUE_ESCURO: "#1b2a40",
      OURO: "#c0c9d6", AMBAR: "#dfe9f5",
    },
    chama: ["#e6f3ff", "#9cc8ff", "#3d5a80"],
    niveis: ["#121b28", "#1b2a40", "#3d5a80", "#7aa0c8", "#d6e6f7"],
    apagado: "#0b111a",
    morcego: { b: "#0c121c", w: "#1e2b3d", r: "#ff3b50", f: "#eef3f8", contorno: "#5d7391" },
  },
};

// Paleta ativa (trocada por aplicarTema)
let TEMA, FUNDO_1, FUNDO_2, BORDA, PAINEL, OSSO, NEVOA, SANGUE, SANGUE_VIVO, SANGUE_ESCURO, OURO, AMBAR;

export function aplicarTema(nome) {
  TEMA = TEMAS[nome] || TEMAS.cripta;
  ({ FUNDO_1, FUNDO_2, BORDA, PAINEL, OSSO, NEVOA, SANGUE, SANGUE_VIVO, SANGUE_ESCURO, OURO, AMBAR } = TEMA.cores);
  return TEMA;
}
aplicarTema(CONFIG.tema);

const SERIF = "'Cinzel Decorative', Cinzel, 'Trajan Pro', 'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif";
const MONO = "Consolas, 'SFMono-Regular', 'DejaVu Sans Mono', monospace";

// ---------------------------------------------------------------- utilidades
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;
const f1 = (n) => (Math.round(n * 10) / 10).toString();
const hojeBR = () => new Date().toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

function rng(semente) {
  let a = semente | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function maiorSequencia(dias) {
  let melhor = 0, atual = 0;
  for (const d of dias) {
    atual = d.contributionCount > 0 ? atual + 1 : 0;
    melhor = Math.max(melhor, atual);
  }
  return melhor;
}

function moldura(w, h, conteudo, estilo = "", { comCantos = true, comFundo = true } = {}) {
  const cantos = !comCantos ? "" : [[0, 0, 1, 1], [w, 0, -1, 1], [0, h, 1, -1], [w, h, -1, -1]]
    .map(([x, y, sx, sy]) => `<g transform="translate(${x},${y}) scale(${sx},${sy})">
  <path d="M14 42 V21 Q14 14 21 14 H42" fill="none" stroke="${OURO}" stroke-opacity=".75" stroke-width="1.4"/>
  <path d="M19 31 V24 Q19 19 24 19 H31" fill="none" stroke="${OURO}" stroke-opacity=".45" stroke-width="1"/>
  <path d="M14 46 l2.2 3.2 l-2.2 3.2 l-2.2 -3.2 Z M46 14 l3.2 -2.2 l3.2 2.2 l-3.2 2.2 Z" fill="${OURO}" fill-opacity=".8"/>
</g>`).join("\n");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img">
<defs>
  <linearGradient id="fundo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${FUNDO_1}"/><stop offset="1" stop-color="${FUNDO_2}"/></linearGradient>
  <radialGradient id="vinheta" cx=".5" cy=".45" r=".8"><stop offset=".5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></radialGradient>
  <linearGradient id="sangue" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${SANGUE_ESCURO}"/><stop offset=".45" stop-color="${SANGUE_VIVO}"/><stop offset="1" stop-color="${SANGUE_ESCURO}" stop-opacity=".2"/></linearGradient>
  <linearGradient id="sanguev" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${SANGUE}"/><stop offset="1" stop-color="${SANGUE_VIVO}"/></linearGradient>
  <clipPath id="quadro"><rect x="2" y="2" width="${w - 4}" height="${h - 4}" rx="13"/></clipPath>
</defs>
<style>
  text { font-family: ${SERIF}; }
  .mono { font-family: ${MONO}; }
  @keyframes cintila { 0%,100% { opacity: .1 } 50% { opacity: .85 } }
  ${estilo}
</style>
${comFundo ? `<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="14" fill="url(#fundo)"/>
<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="14" fill="url(#vinheta)"/>` : ""}
<g clip-path="url(#quadro)">
${conteudo}
</g>
${comFundo ? `<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="14" fill="none" stroke="${BORDA}" stroke-width="2"/>
<rect x="8" y="8" width="${w - 16}" height="${h - 16}" rx="9" fill="none" stroke="${OURO}" stroke-opacity=".2"/>` : ""}
${cantos}
</svg>
`;
}

function estrelas(w, h, n, semente, x0 = 24) {
  const r = rng(semente);
  const out = [];
  for (let i = 0; i < n; i++) {
    const x = x0 + r() * (w - x0 - 24), y = 16 + r() * (h - 24);
    const dur = 2.4 + (i % 5) * 0.7;
    out.push(`<circle cx="${f1(x)}" cy="${f1(y)}" r="${0.6 + (i % 3) * 0.4}" fill="${OSSO}" style="opacity:.1; animation: cintila ${f1(dur)}s ease-in-out ${f1(i * 0.41)}s infinite"/>`);
  }
  return out.join("\n");
}

// Morcego vetorial (centrado em 0,0; ~46px de envergadura)
const MORCEGO = "M0 -5 L-2 -9.5 L-3.2 -4.2 C-6 -5 -10 -9 -15 -10 C-18.5 -10 -21 -8 -23 -5 C-20 -5 -18 -3 -17 0 C-15 -2 -12 -2 -10 1 C-8 -1 -5 -1 -3 3 L0 6 L3 3 C5 -1 8 -1 10 1 C12 -2 15 -2 17 0 C18 -3 20 -5 23 -5 C21 -8 18.5 -10 15 -10 C10 -9 6 -5 3.2 -4.2 L2 -9.5 Z";

function morcegosVoando(est, w, bando, corpo, contorno, olho) {
  return bando.map((b, i) => {
    const xs = [w + 40, w * 0.72, w * 0.48, w * 0.24, -40];
    const ys = [b.y, b.y - 12, b.y + 9, b.y - 7, b.y];
    const quadros = xs.map((x, k) => `${k * 25}% { transform: translate(${f1(x)}px, ${ys[k]}px) }`).join(" ");
    est.push(`@keyframes voo${i} { ${quadros} }`, `.voo${i} { animation: voo${i} ${b.dur}s linear ${b.atraso}s infinite; }`);
    return `<g class="voo${i}"><g transform="scale(${b.s})"><g class="bate" style="animation-duration:${f1(0.28 + i * 0.05)}s"><path d="${MORCEGO}" fill="${corpo}" stroke="${contorno}" stroke-width="1.3" stroke-linejoin="round"/><circle cx="-1.6" cy="-3" r=".9" fill="${olho}"/><circle cx="1.6" cy="-3" r=".9" fill="${olho}"/></g></g></g>`;
  }).join("\n");
}

const ESTILO_BATE = [
  "@keyframes bate { 0%,100% { transform: scaleY(1) } 50% { transform: scaleY(.25) } }",
  ".bate { transform-box: fill-box; transform-origin: center; animation: bate .32s ease-in-out infinite; }",
];

// ------------------------------------------------------------------ cenas do banner
function cenaCripta(est, w, h) {
  est.push(
    "@keyframes pulsa { 0%,100% { opacity: .5 } 50% { opacity: 1 } }",
    ".pulsa { animation: pulsa 6s ease-in-out infinite; }",
    "@keyframes sangra { 0%,25%,100% { opacity: 0 } 50%,72% { opacity: .55 } }",
    ".sangra { animation: sangra 14s ease-in-out infinite; }",
    "@keyframes nuvem { from { transform: translateX(-300px) } to { transform: translateX(300px) } }",
    ".nuvem { animation: nuvem 36s linear infinite; }",
    "@keyframes tremeluz { 0%,100% { opacity: 1 } 40% { opacity: .55 } 45% { opacity: .9 } 70% { opacity: .65 } }",
    ".janela { animation: tremeluz 3.2s ease-in-out infinite; }",
    ...ESTILO_BATE,
  );
  const lx = 735, ly = 72, lr = 42;
  const c = [`<defs>
  <radialGradient id="brilhoLua"><stop offset="0" stop-color="${SANGUE}" stop-opacity=".5"/><stop offset=".45" stop-color="${SANGUE_ESCURO}" stop-opacity=".28"/><stop offset="1" stop-color="${SANGUE_ESCURO}" stop-opacity="0"/></radialGradient>
  <radialGradient id="lua" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#fff6ee"/><stop offset=".6" stop-color="#f1d3c4"/><stop offset="1" stop-color="#cf8f80"/></radialGradient>
  <filter id="borraLeve" x="-30%" y="-100%" width="160%" height="300%"><feGaussianBlur stdDeviation="2.5"/></filter>
</defs>`,
  `<circle class="pulsa" cx="${lx}" cy="${ly}" r="${lr * 2.9}" fill="url(#brilhoLua)"/>
<circle cx="${lx}" cy="${ly}" r="${lr}" fill="url(#lua)"/>
<g fill="#7a3b3b" fill-opacity=".14"><circle cx="${lx - 14}" cy="${ly - 10}" r="8"/><circle cx="${lx + 12}" cy="${ly + 8}" r="11"/><circle cx="${lx + 17}" cy="${ly - 18}" r="4.5"/><circle cx="${lx - 9}" cy="${ly + 20}" r="5"/></g>
<circle class="sangra" cx="${lx}" cy="${ly}" r="${lr}" fill="${SANGUE}"/>
<g class="nuvem" filter="url(#borraLeve)" opacity=".9"><ellipse cx="${lx}" cy="${ly + 16}" rx="62" ry="6.5" fill="#24090f"/><ellipse cx="${lx + 34}" cy="${ly + 8}" rx="34" ry="5.5" fill="#24090f"/></g>`];

  // castelo
  const chao = h + 2, cor = "#050106";
  const torres = [
    { x: 562, w: 24, a: 62, t: 24 }, { x: 600, w: 32, a: 106, t: 40 }, { x: 646, w: 22, a: 80, t: 30 },
    { x: 690, w: 40, a: 140, t: 56 }, { x: 746, w: 24, a: 94, t: 34 }, { x: 788, w: 30, a: 72, t: 26 },
  ];
  const p = [`<rect x="548" y="${chao - 46}" width="300" height="46" fill="${cor}"/>`];
  for (let x = 550; x < 840; x += 13) p.push(`<rect x="${x}" y="${chao - 53}" width="7" height="8" fill="${cor}"/>`);
  const janelas = [];
  torres.forEach((t, i) => {
    const topo = chao - t.a, mx = t.x + t.w / 2;
    p.push(`<rect x="${t.x}" y="${topo}" width="${t.w}" height="${t.a}" fill="${cor}"/>`);
    p.push(`<polygon points="${t.x - 4},${topo} ${mx},${topo - t.t} ${t.x + t.w + 4},${topo}" fill="${cor}"/>`);
    p.push(`<rect x="${mx - 0.75}" y="${topo - t.t - 9}" width="1.5" height="10" fill="${cor}"/>`);
    p.push(`<path d="M${mx - 3.5} ${topo - t.t - 6} h7" stroke="${cor}" stroke-width="1.5"/>`);
    const nj = t.a > 100 ? 3 : t.a > 75 ? 2 : 1;
    for (let k = 0; k < nj; k++) {
      const wy = topo + 12 + k * 24, wx = mx - 2.5;
      const acesa = (i + k) % 3 !== 1;
      const tom = (i * 2 + k) % 4 === 0 ? SANGUE_VIVO : AMBAR;
      const attr = acesa ? ` class="janela" style="animation-delay:-${f1(i * 1.3 + k * 0.7)}s"` : "";
      janelas.push(`<path${attr} d="M${wx} ${wy + 8} V${wy + 2.5} A2.5 2.5 0 0 1 ${wx + 5} ${wy + 2.5} V${wy + 8} Z" fill="${acesa ? tom : "#1e0a10"}"/>`);
    }
  });
  janelas.push(`<path d="M664 ${chao} V${chao - 16} A8 8 0 0 1 680 ${chao - 16} V${chao} Z" fill="${SANGUE_ESCURO}" class="janela"/>`);
  c.push(p.join("") + janelas.join(""));
  c.push(morcegosVoando(est, w, [
    { y: 40, s: 1.0, dur: 11, atraso: 0 }, { y: 118, s: 0.62, dur: 15, atraso: -4 }, { y: 26, s: 0.5, dur: 17, atraso: -9 },
    { y: 80, s: 0.78, dur: 13, atraso: -6.5 }, { y: 60, s: 0.44, dur: 19, atraso: -13 },
  ], "#2a0c16", "#9a2a42", SANGUE_VIVO));
  return c.join("\n");
}

function cenaCatedral(est, w, h) {
  const cx = 722, cy = 116, R = 84;
  est.push(
    "@keyframes vitral { 0%,100% { opacity: .35 } 50% { opacity: 1 } }",
    ".vitral { animation: vitral 4.8s ease-in-out infinite; }",
    "@keyframes raio { 0%,100% { opacity: .35 } 50% { opacity: .8 } }",
    ".raio { animation: raio 7s ease-in-out infinite; }",
    "@keyframes poeira { 0% { transform: translate(0,0); opacity: 0 } 20% { opacity: .9 } 100% { transform: translate(-40px,-80px); opacity: 0 } }",
    ".poeira { animation: poeira 9s linear infinite; opacity: 0; }",
    "@keyframes nucleo { 0%,100% { opacity: .7 } 50% { opacity: 1 } }",
    ".nucleo { animation: nucleo 3s ease-in-out infinite; }",
  );
  const pt = (r, a) => `${f1(cx + r * Math.cos((a * Math.PI) / 180))} ${f1(cy + r * Math.sin((a * Math.PI) / 180))}`;
  const setor = (r1, r2, a0, a1) => `M${pt(r1, a0)} L${pt(r2, a0)} A${r2} ${r2} 0 0 1 ${pt(r2, a1)} L${pt(r1, a1)} A${r1} ${r1} 0 0 0 ${pt(r1, a0)} Z`;
  const vidros = [SANGUE_VIVO, "#3a7bd5", AMBAR, "#d0213a", "#2bb3a3", SANGUE];
  const c = [`<defs>
  <linearGradient id="raioG" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${AMBAR}" stop-opacity=".32"/><stop offset=".5" stop-color="${SANGUE_VIVO}" stop-opacity=".1"/><stop offset="1" stop-color="${SANGUE_VIVO}" stop-opacity="0"/></linearGradient>
  <radialGradient id="nucleoG"><stop offset="0" stop-color="#fff7d6"/><stop offset=".55" stop-color="${AMBAR}"/><stop offset="1" stop-color="${OURO}"/></radialGradient>
  <radialGradient id="auraJanela"><stop offset=".55" stop-color="${SANGUE}" stop-opacity=".3"/><stop offset="1" stop-color="${SANGUE}" stop-opacity="0"/></radialGradient>
</defs>`];
  // raios de luz caindo para a esquerda
  [[-40, 30, -300, -200], [-10, 60, -200, -110], [20, 70, -120, -40]].forEach(([a, b, c1, c2], k) => {
    c.push(`<polygon class="raio" style="animation-delay:-${k * 2.3}s" points="${cx + a},${cy + 10} ${cx + b},${cy + 30} ${cx + c2},${h + 4} ${cx + c1},${h + 4}" fill="url(#raioG)"/>`);
  });
  // arco ogival de pedra
  c.push(`<path d="M612 ${h + 4} V122 A118 118 0 0 1 ${cx} 6 A118 118 0 0 1 832 122 V${h + 4} Z" fill="#0a0613" stroke="${OURO}" stroke-opacity=".35" stroke-width="2"/>`);
  c.push(`<path d="M624 ${h + 4} V124 A104 104 0 0 1 ${cx} 20 A104 104 0 0 1 820 124 V${h + 4}" fill="none" stroke="${OURO}" stroke-opacity=".18" stroke-width="1.2"/>`);
  for (let y = 150; y < h; y += 22) c.push(`<path d="M612 ${y} H632 M812 ${y} H832" stroke="${BORDA}" stroke-width="1"/>`);
  c.push(`<circle cx="${cx}" cy="${cy}" r="${R + 26}" fill="url(#auraJanela)" class="raio"/>`);
  // rosácea
  c.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="#06030b"/>`);
  for (let k = 0; k < 12; k++) {
    const a0 = k * 30 - 90 - 12, a1 = a0 + 24;
    c.push(`<path class="vitral" style="animation-delay:${f1(k * 0.4)}s" d="${setor(46, 78, a0, a1)}" fill="${vidros[k % vidros.length]}"/>`);
    const [tx, ty] = pt(80, a0 + 12).split(" ");
    c.push(`<circle class="vitral" style="animation-delay:${f1(k * 0.4 + 0.2)}s" cx="${tx}" cy="${ty}" r="4" fill="${vidros[(k + 3) % vidros.length]}"/>`);
  }
  for (let k = 0; k < 6; k++) {
    const a0 = k * 60 - 90 - 24, a1 = a0 + 48;
    c.push(`<path class="vitral" style="animation-delay:-${f1(k * 0.8)}s" d="${setor(17, 40, a0, a1)}" fill="${vidros[(k * 2 + 1) % vidros.length]}"/>`);
  }
  c.push(`<g fill="none" stroke="#0a0613" stroke-width="3"><circle cx="${cx}" cy="${cy}" r="43"/><circle cx="${cx}" cy="${cy}" r="${R - 2}"/></g>`);
  c.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${OURO}" stroke-opacity=".7" stroke-width="2"/>`);
  c.push(`<circle cx="${cx}" cy="${cy}" r="${R + 6}" fill="none" stroke="${OURO}" stroke-opacity=".3" stroke-width="1" stroke-dasharray="2 5"/>`);
  c.push(`<circle class="nucleo" cx="${cx}" cy="${cy}" r="13" fill="url(#nucleoG)"/>`);
  c.push(`<path d="M${cx} ${cy - 8} V${cy + 8} M${cx - 8} ${cy} H${cx + 8}" stroke="#7a5a1a" stroke-width="2" stroke-linecap="round"/>`);
  // poeira dançando na luz
  const r = rng(5);
  for (let i = 0; i < 14; i++) {
    const x = 470 + r() * 260, y = 150 + r() * 80;
    c.push(`<circle class="poeira" style="animation-delay:-${f1(r() * 9)}s; animation-duration:${f1(7 + r() * 5)}s" cx="${f1(x)}" cy="${f1(y)}" r="${f1(0.7 + r() * 0.9)}" fill="${AMBAR}"/>`);
  }
  return c.join("\n");
}

function curva(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0];
  const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1];
  const dx = 3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]);
  const dy = 3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1]);
  return { x, y, ang: Math.atan2(dy, dx) };
}

function rosa(cx, cy, s, atraso) {
  const petala = (L, W) => `M0 0 C${W} ${-L * 0.25} ${W * 0.85} ${-L * 0.95} 0 ${-L} C${-W * 0.85} ${-L * 0.95} ${-W} ${-L * 0.25} 0 0 Z`;
  const camadas = [
    { n: 5, L: 30, W: 21, rot: 0, fill: "url(#petala1)" },
    { n: 5, L: 22, W: 15, rot: 36, fill: "url(#petala2)" },
    { n: 4, L: 14, W: 10, rot: 12, fill: "url(#petala3)" },
  ];
  const ps = camadas.map((cm) => Array.from({ length: cm.n }, (_, k) =>
    `<path d="${petala(cm.L, cm.W)}" transform="rotate(${f1(cm.rot + (k * 360) / cm.n)})" fill="${cm.fill}" stroke="#000" stroke-opacity=".5" stroke-width=".8"/>`).join("")).join("");
  return `<g transform="translate(${cx},${cy}) scale(${s})"><g class="respira" style="animation-delay:-${atraso}s">${ps}
<path d="M0 0 m-4 0 a4 4 0 1 1 6 3 a6.5 6.5 0 1 1 -9.5 -6.5" fill="none" stroke="#000" stroke-opacity=".7" stroke-width="1.3"/></g></g>`;
}

function cenaRosaNegra(est, w, h) {
  est.push(
    ESTILO_RESPIRA,
    "@keyframes pulsa { 0%,100% { opacity: .45 } 50% { opacity: .9 } }",
    ".pulsa { animation: pulsa 6s ease-in-out infinite; }",
  );
  const c = [`<defs>${defsRosa()}
  <radialGradient id="auraRosa"><stop offset="0" stop-color="${SANGUE}" stop-opacity=".35"/><stop offset="1" stop-color="${SANGUE}" stop-opacity="0"/></radialGradient>
</defs>`];
  // lua fina de prata
  c.push(`<mask id="luaFina"><rect width="${w}" height="${h}" fill="#000"/><circle cx="806" cy="44" r="15" fill="#fff"/><circle cx="812" cy="40" r="13.5" fill="#000"/></mask><rect width="${w}" height="${h}" fill="${OURO}" mask="url(#luaFina)"/>`);
  c.push(`<circle class="pulsa" cx="735" cy="106" r="95" fill="url(#auraRosa)"/>`);

  // trepadeiras com espinhos e folhas
  const ramos = [
    [[600, 236], [612, 186], [680, 178], [733, 112]],
    [[848, 210], [812, 206], [796, 186], [806, 168]],
    [[548, 236], [592, 222], [616, 196], [648, 176]],
    [[520, 232], [640, 210], [740, 238], [848, 222]],
  ];
  ramos.forEach(([p0, p1, p2, p3], i) => c.push(ramo(p0, p1, p2, p3, i === 3 ? 3 : 3.6)));
  c.push(rosa(735, 106, 1.25, 0), rosa(806, 168, 0.68, 2), rosa(650, 174, 0.78, 4));
  c.push(petalas(est, 520, 820, h, 9, 31));
  return c.join("\n");
}

// ------------------------------------------------------------------ peças de jardim (reutilizáveis)
const CAULE = "#3a2c32", FOLHA = "#2b3b30", NERVURA = "#3d5243";

function defsRosa() {
  return `
  <radialGradient id="petala1" cx=".5" cy="1" r="1.1"><stop offset="0" stop-color="#050102"/><stop offset=".55" stop-color="${SANGUE_ESCURO}"/><stop offset="1" stop-color="${SANGUE}"/></radialGradient>
  <radialGradient id="petala2" cx=".5" cy="1" r="1.1"><stop offset="0" stop-color="#030001"/><stop offset=".65" stop-color="#2b0510"/><stop offset="1" stop-color="${SANGUE_VIVO}"/></radialGradient>
  <radialGradient id="petala3" cx=".5" cy="1" r="1"><stop offset="0" stop-color="#000"/><stop offset=".7" stop-color="#1d030a"/><stop offset="1" stop-color="${SANGUE}"/></radialGradient>`;
}

const ESTILO_RESPIRA = "@keyframes respira { 0%,100% { transform: scale(1) rotate(0deg) } 50% { transform: scale(1.05) rotate(4deg) } }\n  .respira { animation: respira 6s ease-in-out infinite; }";

function espinho(x, y, ang, lado, cor = CAULE, tam = 6) {
  const nx = Math.cos(ang + lado * Math.PI / 2), ny = Math.sin(ang + lado * Math.PI / 2);
  const bx = Math.cos(ang) * 2.4, by = Math.sin(ang) * 2.4;
  return `<path d="M${f1(x - bx)} ${f1(y - by)} L${f1(x + nx * tam + bx * 0.8)} ${f1(y + ny * tam + by * 0.8)} L${f1(x + bx)} ${f1(y + by)} Z" fill="${cor}"/>`;
}

function folha(x, y, grau, s = 1) {
  return `<g transform="translate(${f1(x)},${f1(y)}) rotate(${f1(grau)}) scale(${s})"><path d="M0 0 C5 -5 13 -5 18 0 C13 5 5 5 0 0 Z" fill="${FOLHA}"/><path d="M1 0 H16" stroke="${NERVURA}" stroke-width=".8"/></g>`;
}

/** Galho curvo (bezier cúbica) com espinhos e folhas. */
function ramo(p0, p1, p2, p3, grossura = 3.4, nEspinhos = 9) {
  const out = [`<path d="M${p0} C${p1} ${p2} ${p3}" fill="none" stroke="${CAULE}" stroke-width="${grossura}" stroke-linecap="round"/>`];
  for (let k = 1; k < nEspinhos; k++) {
    const { x, y, ang } = curva(p0, p1, p2, p3, k / nEspinhos);
    const lado = k % 2 ? 1 : -1;
    out.push(espinho(x, y, ang, lado));
    if (k % 3 === 0) out.push(folha(x, y, ((ang + lado * 1.1) * 180) / Math.PI));
  }
  return out.join("");
}

/** Trepadeira horizontal ondulada, de x1 a x2. */
function trepadeira(x1, x2, y, amp = 4, fase = 0, grossura = 2.6) {
  const yy = (x) => y + amp * Math.sin((x - x1) / 38 + fase);
  const pts = [];
  for (let x = x1; x <= x2; x += 6) pts.push(`${f1(x)} ${f1(yy(x))}`);
  pts.push(`${f1(x2)} ${f1(yy(x2))}`);
  const out = [`<path d="M${pts.join(" L")}" fill="none" stroke="${CAULE}" stroke-width="${grossura}" stroke-linecap="round" stroke-linejoin="round"/>`];
  let k = 0;
  for (let x = x1 + 14; x < x2 - 8; x += 26, k++) {
    const ang = Math.atan((amp / 38) * Math.cos((x - x1) / 38 + fase));
    const lado = k % 2 ? 1 : -1;
    out.push(espinho(x, yy(x), ang, lado, CAULE, 5));
    if (k % 4 === 2) out.push(folha(x, yy(x), (ang * 180) / Math.PI + lado * 60, 0.8));
  }
  return out.join("");
}

function botao(x, y, s = 1) {
  return `<g transform="translate(${f1(x)},${f1(y)}) scale(${s})"><path d="M0 2 C-5 -2 -4 -9 0 -12 C4 -9 5 -2 0 2 Z" fill="url(#petala1)" stroke="#000" stroke-opacity=".5" stroke-width=".7"/><path d="M0 3 L-5 -3 M0 3 L5 -3 M0 3 L0 -4" stroke="${FOLHA}" stroke-width="1.6" stroke-linecap="round"/></g>`;
}

/** Pétalas caindo entre xMin e xMax. */
function petalas(est, xMin, xMax, h, n, semente, prefixo = "cai") {
  const r = rng(semente), out = [];
  for (let i = 0; i < n; i++) {
    const x = xMin + r() * (xMax - xMin), dur = 9 + r() * 6;
    est.push(`@keyframes ${prefixo}${i} { 0% { transform: translate(${f1(x)}px, -20px) rotate(0deg); opacity: 0 } 10% { opacity: .9 } 50% { transform: translate(${f1(x - 28)}px, ${f1(h * 0.48)}px) rotate(200deg) } 100% { transform: translate(${f1(x - 60)}px, ${h + 20}px) rotate(430deg); opacity: 0 } }`);
    est.push(`.${prefixo}${i} { animation: ${prefixo}${i} ${f1(dur)}s linear -${f1(r() * dur)}s infinite; opacity: 0; }`);
    out.push(`<path class="${prefixo}${i}" d="M0 0 C4 -3 4.5 -9 0 -11 C-4.5 -9 -4 -3 0 0 Z" fill="${i % 3 ? SANGUE : SANGUE_VIVO}"/>`);
  }
  return out.join("\n");
}

/** Quebra um texto em linhas de até `max` caracteres (no máximo `linhas`). */
function quebrar(texto, max, linhas = 4) {
  const out = [];
  let atual = "";
  for (const p of String(texto).split(/\s+/).filter(Boolean)) {
    if ((atual + " " + p).trim().length > max) { out.push(atual); atual = p; } else atual = (atual + " " + p).trim();
  }
  if (atual) out.push(atual);
  if (out.length > linhas) { out.length = linhas; out[linhas - 1] = out[linhas - 1].replace(/\s*\S*$/, "") + "…"; }
  return out;
}

const largTexto = (t, tam, fator = 0.56) => String(t).length * tam * fator;

function arvore(x, y, comp, ang, prof, r, out) {
  if (prof === 0 || comp < 2.5) return;
  const x2 = x + comp * Math.cos(ang), y2 = y + comp * Math.sin(ang);
  out.push(`<line x1="${f1(x)}" y1="${f1(y)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke-width="${f1(Math.max(0.7, prof * 1.05))}"/>`);
  const n = prof > 5 ? 2 : r() < 0.65 ? 2 : 3;
  for (let k = 0; k < n; k++) {
    const da = (k - (n - 1) / 2) * (0.45 + r() * 0.35) + (r() - 0.5) * 0.35;
    arvore(x2, y2, comp * (0.68 + r() * 0.1), ang + da, prof - 1, r, out);
  }
}

function cenaEclipse(est, w, h) {
  const lx = 742, ly = 92, lr = 50;
  est.push(
    `@keyframes eclipse { 0% { transform: translateX(${lr * 2.3}px) } 42%,58% { transform: translateX(0) } 100% { transform: translateX(-${lr * 2.3}px) } }`,
    ".sombra { animation: eclipse 18s ease-in-out infinite; }",
    "@keyframes coroa { 0%,30% { opacity: 0 } 45%,55% { opacity: 1 } 70%,100% { opacity: 0 } }",
    ".coroa { animation: coroa 18s ease-in-out infinite; opacity: 0; }",
    "@keyframes halo { 0%,100% { opacity: .5 } 50% { opacity: .9 } }",
    ".halo { animation: halo 7s ease-in-out infinite; }",
    "@keyframes nevoaE { 0%,100% { transform: translateX(-50px) } 50% { transform: translateX(50px) } }",
    ".nevoaE { animation: nevoaE 18s ease-in-out infinite; }",
    ...ESTILO_BATE,
  );
  const c = [`<defs>
  <radialGradient id="luaPrata" cx=".4" cy=".36" r=".72"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#d8e0ea"/><stop offset="1" stop-color="#93a3b8"/></radialGradient>
  <radialGradient id="halo"><stop offset=".3" stop-color="${SANGUE_VIVO}" stop-opacity=".28"/><stop offset="1" stop-color="${SANGUE_VIVO}" stop-opacity="0"/></radialGradient>
  <radialGradient id="coroaG"><stop offset=".78" stop-color="${SANGUE}" stop-opacity="0"/><stop offset=".86" stop-color="${SANGUE}" stop-opacity=".95"/><stop offset=".93" stop-color="#ff5a6e" stop-opacity=".5"/><stop offset="1" stop-color="${SANGUE}" stop-opacity="0"/></radialGradient>
  <clipPath id="disco"><circle cx="${lx}" cy="${ly}" r="${lr}"/></clipPath>
  <filter id="borraE" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
</defs>`];
  c.push(`<circle class="halo" cx="${lx}" cy="${ly}" r="${lr * 2.6}" fill="url(#halo)"/>`);
  c.push(`<circle class="coroa" cx="${lx}" cy="${ly}" r="${lr * 1.5}" fill="url(#coroaG)"/>`);
  c.push(`<circle cx="${lx}" cy="${ly}" r="${lr}" fill="url(#luaPrata)"/>`);
  c.push(`<g fill="#5d6d84" fill-opacity=".18"><circle cx="${lx - 16}" cy="${ly - 12}" r="9"/><circle cx="${lx + 14}" cy="${ly + 10}" r="13"/><circle cx="${lx + 20}" cy="${ly - 22}" r="5"/><circle cx="${lx - 12}" cy="${ly + 24}" r="6"/></g>`);
  c.push(`<g clip-path="url(#disco)"><circle class="sombra" cx="${lx}" cy="${ly}" r="${lr + 1}" fill="#04060b"/></g>`);

  // colina e floresta morta
  c.push(`<path d="M500 ${h + 4} C560 214 620 200 690 206 C760 212 800 196 848 200 V${h + 4} Z" fill="#03050a"/>`);
  const r = rng(13), galhos = [];
  arvore(612, 214, 30, -Math.PI / 2 - 0.08, 7, r, galhos);
  arvore(700, 208, 40, -Math.PI / 2 + 0.06, 7, r, galhos);
  arvore(790, 204, 34, -Math.PI / 2 - 0.12, 7, r, galhos);
  arvore(552, 226, 18, -Math.PI / 2 + 0.1, 6, r, galhos);
  c.push(`<g stroke="#03050a" stroke-linecap="round">${galhos.join("")}</g>`);
  c.push(morcegosVoando(est, w, [
    { y: 46, s: 0.7, dur: 13, atraso: -2 }, { y: 30, s: 0.45, dur: 17, atraso: -8 }, { y: 70, s: 0.55, dur: 15, atraso: -12 },
  ], "#0b1019", "#6f86a6", SANGUE));
  c.push(`<g class="nevoaE" filter="url(#borraE)" opacity=".45"><ellipse cx="240" cy="238" rx="280" ry="22" fill="#26344a"/><ellipse cx="660" cy="240" rx="300" ry="24" fill="#26344a"/></g>`);
  return c.join("\n");
}

const CENAS = { cripta: cenaCripta, catedral: cenaCatedral, "rosa-negra": cenaRosaNegra, eclipse: cenaEclipse };

// ------------------------------------------------------------------ banner
export function gerarBanner(cfg = CONFIG) {
  const w = 840, h = 230;
  const est = [
    "@keyframes escorre { 0%,100% { transform: scaleY(.35) } 60% { transform: scaleY(1) } }",
    ".escorre { transform-box: fill-box; transform-origin: 50% 0%; animation: escorre 5s ease-in-out infinite; }",
    "@keyframes pinga { 0%,55% { transform: translateY(0); opacity: 0 } 60% { opacity: 1 } 100% { transform: translateY(26px); opacity: 0 } }",
    ".pinga { animation: pinga 5s ease-in infinite; opacity: 0; }",
    "@keyframes brilhoLinha { 0%,100% { opacity: .55 } 50% { opacity: 1 } }",
    ".brilhoLinha { animation: brilhoLinha 4s ease-in-out infinite; }",
    "@keyframes cursor { 0%,100% { opacity: 1 } 50% { opacity: 0 } }",
    ".cursor { animation: cursor .9s steps(1) infinite; }",
    "@keyframes nevoa { 0%,100% { transform: translateX(-40px) } 50% { transform: translateX(40px) } }",
    ".nevoa { animation: nevoa 16s ease-in-out infinite; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .6; }",
  ];
  const c = [`<defs>
  <linearGradient id="osso" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="${OSSO}"/><stop offset="1" stop-color="${NEVOA}"/></linearGradient>
  <filter id="borra" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
</defs>`];
  c.push(estrelas(w, 160, 32, 13));
  c.push((CENAS[cfg.tema] || CENAS[CONFIG.tema] || cenaCripta)(est, w, h));
  if (TEMA === TEMAS.cripta || TEMA === TEMAS["rosa-negra"]) {
    c.push(`<g class="nevoa" filter="url(#borra)" opacity=".5"><ellipse cx="220" cy="238" rx="280" ry="22" fill="${BORDA}"/><ellipse cx="660" cy="240" rx="300" ry="24" fill="${BORDA}"/></g>`);
  }

  // nome
  const nome = esc(cfg.nome);
  const saudacao = cfg.saudacao ?? TEMA.saudacao;
  if (saudacao) c.push(`<text class="lento" x="48" y="52" font-size="11" letter-spacing="4.5" fill="${OURO}">✠  ${esc(saudacao)}  ✠</text>`);
  c.push(`<g transform="translate(0,${!saudacao && !cfg.rodape ? 14 : 0})">`);
  c.push(`<text x="49" y="99" font-size="42" font-weight="700" letter-spacing="2" fill="${SANGUE_ESCURO}">${nome}</text>`);
  c.push(`<text x="46" y="96" font-size="42" font-weight="700" letter-spacing="2" fill="url(#osso)">${nome}</text>`);

  // linha sob o nome (com sangue escorrendo nos temas que pedem)
  c.push(`<rect class="${TEMA.gotas ? "" : "brilhoLinha"}" x="46" y="111" width="360" height="${TEMA.gotas ? 4 : 2.5}" rx="2" fill="url(#sangue)"/>`);
  if (TEMA.gotas) {
    const gotas = [[62, 1.0, 0], [104, 0.7, 1.6], [151, 1.2, 3.1], [208, 0.8, 0.8], [262, 1.05, 2.4], [318, 0.6, 3.8]];
    for (const [x, tam, atraso] of gotas) {
      const comp = 12 * tam;
      c.push(`<path class="escorre" style="animation-delay:-${atraso}s" d="M${x - 2.6} 113 H${x + 2.6} C${x + 2.6} ${113 + comp * 0.5} ${x + 2.1} ${113 + comp * 0.8} ${x + 2.1} ${f1(113 + comp)} A2.1 2.1 0 0 1 ${x - 2.1} ${f1(113 + comp)} C${x - 2.1} ${113 + comp * 0.8} ${x - 2.6} ${113 + comp * 0.5} ${x - 2.6} 113 Z" fill="url(#sanguev)"/>`);
      c.push(`<circle class="pinga" style="animation-delay:-${atraso}s" cx="${x}" cy="${f1(115 + comp)}" r="1.9" fill="${SANGUE_VIVO}"/>`);
    }
  } else {
    c.push(`<path d="M46 112 l5 -4 l5 4 l-5 4 Z" fill="${OURO}"/><circle cx="412" cy="112.2" r="2" fill="${OURO}" fill-opacity=".6"/>`);
  }

  // subtítulo "digitando"
  const frases = cfg.frases.length ? cfg.frases : [" "];
  const fatia = 4.6, ciclo = fatia * frases.length;
  if (frases.length === 1) {
    // uma frase só: digita uma vez e fica
    const frase = frases[0], larg = frase.length * 17 * 0.56 + 6;
    est.push("@keyframes digitaUma { from { transform: scaleX(0) } to { transform: scaleX(1) } }");
    est.push(`.clip0 { transform-box: fill-box; transform-origin: 0 0; transform: scaleX(0); animation: digitaUma ${f1(frase.length * 0.07)}s steps(${Math.max(1, frase.length)}) .6s forwards; }`);
    c.push(`<clipPath id="c0"><rect class="clip0" x="46" y="136" width="${f1(larg)}" height="26"/></clipPath><text clip-path="url(#c0)" x="48" y="155" font-size="17" class="mono" fill="${NEVOA}">${esc(frase)}</text>`);
    c.push(`<text class="mono cursor" x="${f1(48 + frase.length * 17 * 0.56 + 4)}" y="155" font-size="17" fill="${SANGUE_VIVO}">▍</text>`);
  }
  if (frases.length > 1) frases.forEach((frase, i) => {
    const ini = (i * fatia) / ciclo * 100, fim = ((i + 1) * fatia) / ciclo * 100;
    const dig = ini + (fatia * 0.42) / ciclo * 100;
    const larg = frase.length * 17 * 0.56 + 6;
    est.push(`@keyframes digita${i} { 0%,${ini.toFixed(2)}% { transform: scaleX(0) } ${dig.toFixed(2)}%,${(fim - 1.2).toFixed(2)}% { transform: scaleX(1) } ${fim.toFixed(2)}%,100% { transform: scaleX(0) } }`);
    est.push(`.clip${i} { transform-box: fill-box; transform-origin: 0 0; transform: scaleX(0); animation: digita${i} ${ciclo}s steps(${Math.max(1, frase.length)}) infinite; }`);
    c.push(`<clipPath id="c${i}"><rect class="clip${i}" x="46" y="136" width="${f1(larg)}" height="26"/></clipPath><text clip-path="url(#c${i})" x="48" y="155" font-size="17" class="mono" fill="${NEVOA}">${esc(frase)}</text>`);
  });
  c.push("</g>");
  if (cfg.rodape) c.push(`<text class="mono" x="48" y="194" font-size="12" fill="${NEVOA}" fill-opacity=".8"><tspan class="cursor" fill="${SANGUE_VIVO}">▍</tspan> ${esc(cfg.rodape)}</text>`);

  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ grimório
function vela(i, cx, base, hc, gema) {
  const topo = base - hc, lw = 18;
  const escorrido = 9 + (i % 3) * 5;
  return `<circle class="halo" cx="${cx}" cy="${topo - 15}" r="32" fill="url(#halo)" style="animation-delay:-${f1(i * 0.7)}s"/>
<rect x="${cx - lw / 2}" y="${topo}" width="${lw}" height="${hc}" rx="2" fill="url(#cera)"/>
<ellipse cx="${cx}" cy="${topo + 1}" rx="${lw / 2}" ry="2.2" fill="#fffaf0"/>
<path d="M${cx + 2} ${topo + 1} v${escorrido} a2.2 2.2 0 0 0 4.4 0 v-${escorrido} Z" fill="#fffaf0"/>
<ellipse class="lagrima" cx="${cx - 5}" cy="${topo + 4}" rx="1.8" ry="2.6" fill="#fffaf0" style="--d:${hc - 12}px; animation-delay:-${f1(i * 1.9)}s"/>
<line x1="${cx}" y1="${topo}" x2="${cx}" y2="${topo - 6}" stroke="#2a1a12" stroke-width="1.6" stroke-linecap="round"/>
<g transform="translate(${cx},${topo - 4})"><g class="chama" style="animation-delay:-${f1(i * 0.37)}s">
  <path d="M0 -24 C6.5 -14 7.5 -6.5 0 0 C-7.5 -6.5 -6.5 -14 0 -24 Z" fill="url(#chama)"/>
  <path d="M0 -12 C3 -7 3.2 -3 0 0 C-3.2 -3 -3 -7 0 -12 Z" fill="#fffbe8"/>
</g></g>
<ellipse cx="${cx}" cy="${base + 2}" rx="18" ry="4" fill="url(#latao)"/>
<rect x="${cx - 3.5}" y="${base + 2}" width="7" height="7" fill="url(#latao)"/>
<ellipse cx="${cx}" cy="${base + 10}" rx="14" ry="3.6" fill="url(#latao)"/>
<path d="M${cx} ${base + 1.5} l3.2 3.5 l-3.2 3.5 l-3.2 -3.5 Z" fill="${gema}" stroke="#1a0a0f" stroke-width=".8"/>`;
}

const icones = {
  calice: (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-7 -6 H7 C6.5 -1 3.8 1 0 1 C-3.8 1 -6.5 -1 -7 -6 Z" fill="${SANGUE}"/>
  <path d="M-8 -10 H8 C8 -2 4.5 2 0 2 C-4.5 2 -8 -2 -8 -10 Z" fill="none" stroke="${OURO}" stroke-width="1.6" stroke-linejoin="round"/>
  <rect x="-1" y="2" width="2" height="6" fill="${OURO}"/><path d="M-6 10.5 Q0 6.5 6 10.5 Z" fill="${OURO}"/></g>`,
  caixao: (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-4 -11 H4 L8 -5 L5 11 H-5 L-8 -5 Z" fill="#3a1d16" stroke="#9a6b48" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M0 -6 V5 M-3.5 -2.5 H3.5" stroke="${OURO}" stroke-width="1.6" stroke-linecap="round"/></g>`,
  pacto: (x, y) => `<g transform="translate(${x},${y})">
  <rect x="-9" y="-10" width="15" height="19" rx="1.5" fill="#e9dcc0"/>
  <path d="M-6 -6 h9 M-6 -2.5 h9 M-6 1 h6" stroke="#8c7350" stroke-width="1.2" stroke-linecap="round"/>
  <circle cx="5" cy="6" r="5" fill="${SANGUE}"/><circle cx="5" cy="6" r="2.4" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width=".9"/></g>`,
  alma: (x, y) => `<g transform="translate(${x},${y})"><g class="flutua">
  <path d="M-7 10 V-2 A7 7 0 0 1 7 -2 V10 L4.7 7.6 L2.3 10 L0 7.6 L-2.3 10 L-4.7 7.6 Z" fill="${OSSO}" fill-opacity=".92"/>
  <circle cx="-2.6" cy="-1.5" r="1.4" fill="${FUNDO_1}"/><circle cx="2.6" cy="-1.5" r="1.4" fill="${FUNDO_1}"/></g></g>`,
};

function selo(cx, cy, r) {
  const bolhas = [0, 55, 115, 170, 230, 290].map((a, k) => {
    const rad = (a * Math.PI) / 180, rr = r - 1 + (k % 2) * 1.5;
    return `<circle cx="${f1(cx + rr * Math.cos(rad))}" cy="${f1(cy + rr * Math.sin(rad))}" r="${3 + (k % 3) * 0.6}" fill="url(#lacre)"/>`;
  }).join("");
  return `${bolhas}<circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#lacre)"/>
<circle cx="${cx}" cy="${cy}" r="${r - 3.5}" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="1"/>
<g transform="translate(${cx},${cy + 0.5}) scale(.33)"><path d="${MORCEGO}" fill="#000" fill-opacity=".55"/></g>`;
}

export function gerarGrimorio(d) {
  const w = 840, h = 412;
  const total = d.total;
  const seq = maiorSequencia(d.dias);
  const almas = d.seguidores + d.estrelas;
  const [ch1, ch2, ch3] = TEMA.chama;
  const est = [
    "@keyframes tremula { 0%,100% { transform: scale(1,1) skewX(0deg) } 25% { transform: scale(.9,1.08) skewX(4deg) } 50% { transform: scale(1.05,.93) skewX(-3deg) } 75% { transform: scale(.95,1.05) skewX(2deg) } }",
    ".chama { transform-box: fill-box; transform-origin: 50% 100%; animation: tremula 1.3s ease-in-out infinite; }",
    "@keyframes halo { 0%,100% { opacity: .55 } 35% { opacity: .9 } 60% { opacity: .7 } }",
    ".halo { animation: halo 2.6s ease-in-out infinite; }",
    "@keyframes lagrima { 0%,20% { transform: translateY(0); opacity: 0 } 30% { opacity: 1 } 90% { opacity: 1 } 100% { transform: translateY(var(--d)); opacity: 0 } }",
    ".lagrima { opacity: 0; animation: lagrima 7s ease-in infinite; }",
    "@keyframes flutua { 0%,100% { transform: translateY(1.5px) } 50% { transform: translateY(-2.5px) } }",
    ".flutua { animation: flutua 2.8s ease-in-out infinite; }",
    "@keyframes surge { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }",
    ".surge { opacity: 0; animation: surge .7s ease-out forwards; }",
    "@keyframes reflexo { 0%,60% { transform: translateX(-80px) } 100% { transform: translateX(200px) } }",
    ".reflexo { animation: reflexo 5s ease-in-out infinite; }",
    "@keyframes enche { from { transform: scaleX(0) } to { transform: scaleX(1) } }",
    ".progresso { transform-box: fill-box; transform-origin: left; transform: scaleX(0); animation: enche 1.4s cubic-bezier(.2,.8,.2,1) .9s forwards; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
  ];
  const c = [`<defs>
  <radialGradient id="chama" cx=".5" cy=".78" r=".7"><stop offset="0" stop-color="#fffbe6"/><stop offset=".3" stop-color="${ch1}"/><stop offset=".68" stop-color="${ch2}"/><stop offset="1" stop-color="${ch3}"/></radialGradient>
  <radialGradient id="halo"><stop offset="0" stop-color="${ch1}" stop-opacity=".34"/><stop offset=".5" stop-color="${ch3}" stop-opacity=".12"/><stop offset="1" stop-color="${ch3}" stop-opacity="0"/></radialGradient>
  <linearGradient id="cera" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff5e4"/><stop offset=".55" stop-color="#e6d8be"/><stop offset="1" stop-color="#ad9b7b"/></linearGradient>
  <linearGradient id="latao" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".9"/><stop offset=".25" stop-color="${OURO}"/><stop offset="1" stop-color="${PAINEL}"/></linearGradient>
  <radialGradient id="lacre" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="${SANGUE_VIVO}"/><stop offset=".6" stop-color="${SANGUE}"/><stop offset="1" stop-color="${SANGUE_ESCURO}"/></radialGradient>
</defs>`];
  c.push(estrelas(w, 70, 12, 41));
  c.push(`<text class="lento" x="30" y="42" font-size="13" font-weight="700" letter-spacing="5" fill="${OURO}">✠ ${esc(TEMA.tituloGrimorio)}</text>`);
  c.push(`<text x="30" y="67" font-size="14.5" fill="${NEVOA}">Tudo o que reuni em <tspan fill="${OSSO}" font-weight="700">${plural(total, "contribuição", "contribuições")}</tspan> nas últimas 365 noites</text>`);

  // velas = linguagens mais usadas
  const soma = d.linguagens.reduce((s, [, v]) => s + v, 0) || 1;
  const top = d.linguagens.slice(0, 5);
  const maior = top.length ? top[0][1] / soma : 1;
  c.push(`<rect x="28" y="84" width="440" height="176" rx="10" fill="${PAINEL}" stroke="${BORDA}" stroke-width="2"/>`);
  const base = 208, passo = 440 / Math.max(top.length, 1);
  top.forEach(([nome, bytes], i) => {
    const cx = Math.round(28 + passo * (i + 0.5));
    const pct = bytes / soma;
    const hc = Math.round(24 + 58 * (pct / maior));
    c.push(`<g class="surge" style="animation-delay:${f1(0.1 + i * 0.12)}s">${vela(i, cx, base, hc, d.cores[nome] || SANGUE)}
<text x="${cx}" y="${base + 30}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${OSSO}">${esc(nome)}</text>
<text x="${cx}" y="${base + 44}" text-anchor="middle" font-size="10.5" class="mono" fill="${NEVOA}">${(pct * 100).toFixed(0)}%</text></g>`);
  });
  if (!top.length) c.push(`<text x="248" y="176" text-anchor="middle" font-size="13" fill="${NEVOA}">Nenhuma vela acesa ainda.</text>`);

  // relíquias
  const reliquias = [
    [icones.calice, "Gotas de sangue (commits)", d.commits],
    [icones.caixao, "Caixões (repositórios)", d.repos],
    [icones.pacto, "Pactos selados (PRs e issues)", d.prsIssues],
    [icones.alma, "Almas (estrelas e seguidores)", almas],
  ];
  c.push(`<g class="surge" style="animation-delay:.6s"><rect x="488" y="84" width="324" height="176" rx="10" fill="${PAINEL}" stroke="${BORDA}" stroke-width="2"/>`);
  reliquias.forEach(([icone, rotulo, valor], k) => {
    const y = 108 + k * 42;
    c.push(icone(514, y));
    c.push(`<text x="538" y="${y + 5}" font-size="13.5" fill="${NEVOA}">${esc(rotulo)}</text><text x="794" y="${y + 6}" text-anchor="end" font-size="18" font-weight="700" fill="${OSSO}">${valor}</text>`);
    if (k < reliquias.length - 1) c.push(`<rect x="504" y="${y + 20}" width="292" height="1" fill="${BORDA}"/>`);
  });
  c.push("</g>");

  // maldições (conquistas que despertam com os números reais)
  const maldicoes = [
    ["1ª mordida", "1 repositório", d.repos, 1],
    ["Poliglota", "5 linguagens", d.linguagens.length, 5],
    ["Cripta cheia", "10 repositórios", d.repos, 10],
    ["Sete noites", "7 dias seguidos", seq, 7],
    ["Conclave", "10 PRs ou issues", d.prsIssues, 10],
    ["Um século", "100 contribuições", total, 100],
  ];
  const feitas = maldicoes.filter(([, , v, meta]) => v >= meta).length;
  c.push(`<text x="30" y="292" font-size="12" font-weight="700" letter-spacing="3.5" fill="${OURO}">MALDIÇÕES DESPERTADAS<tspan dx="10" letter-spacing="0" font-weight="400" fill="${NEVOA}">· ${feitas} de ${maldicoes.length}</tspan></text>`);
  maldicoes.forEach(([titulo, requisito, valor, meta], i) => {
    const x = 28 + i * 132, y = 304, cw = 124, ch = 66;
    const ok = valor >= meta;
    let medalha, rodape, extra = "";
    if (ok) {
      medalha = selo(x + 21, y + 31, 12.5);
      rodape = `<text x="${x + 40}" y="${y + 55}" font-size="10" font-weight="700" fill="${SANGUE_VIVO}">✓ despertada</text>`;
      extra = `<defs><clipPath id="m${i}"><rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="9"/></clipPath></defs><g clip-path="url(#m${i})"><g class="reflexo" style="animation-delay:${f1(i * 0.8)}s"><rect x="${x}" y="${y - 10}" width="24" height="90" fill="#fff" fill-opacity=".06" transform="skewX(-20)"/></g></g>`;
    } else {
      medalha = `<circle cx="${x + 21}" cy="${y + 31}" r="13" fill="${FUNDO_1}" stroke="${BORDA}" stroke-width="1.5"/>
<rect x="${x + 15.5}" y="${y + 30}" width="11" height="8.5" rx="1.8" fill="${NEVOA}" fill-opacity=".7"/>
<path d="M${x + 17.8} ${y + 30} v-2.6 a3.2 3.2 0 0 1 6.4 0 v2.6" fill="none" stroke="${NEVOA}" stroke-opacity=".7" stroke-width="1.8"/>`;
      const frac = Math.min(1, valor / meta);
      rodape = `<rect x="${x + 40}" y="${y + 49}" width="42" height="5" rx="2.5" fill="${BORDA}"/>
<rect class="progresso" x="${x + 40}" y="${y + 49}" width="${f1(Math.max(3, 42 * frac))}" height="5" rx="2.5" fill="url(#sangue)"/>
<text x="${x + cw - 8}" y="${y + 55}" text-anchor="end" font-size="9.5" class="mono" fill="${NEVOA}">${valor}/${meta}</text>`;
    }
    c.push(`<g class="surge" style="animation-delay:${f1(0.9 + i * 0.1)}s"><rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="9" fill="${PAINEL}" stroke="${ok ? SANGUE : BORDA}" stroke-opacity="${ok ? 0.8 : 1}" stroke-width="${ok ? 1.5 : 2}"/>${extra}${medalha}
<text x="${x + 40}" y="${y + 25}" font-size="11.5" font-weight="700" fill="${ok ? OSSO : NEVOA}">${esc(titulo)}</text>
<text x="${x + 40}" y="${y + 39}" font-size="9" fill="${NEVOA}">${esc(requisito)}</text>${rodape}</g>`);
  });

  c.push(`<text x="${w - 62}" y="${h - 22}" text-anchor="end" font-size="10.5" fill="${NEVOA}" fill-opacity=".8">relíquias e maldições calculadas a partir dos dados públicos do GitHub · atualizado em ${hojeBR()}</text>`);
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ noites
// Morcego em pixel art. Cada letra é um pixel; "." é transparente. O contorno é automático.
const MORCEGO_ASAS_CIMA = [
  "w.....................w",
  "ww...................ww",
  "www.......b.b.......www",
  "wwww......bbb......wwww",
  ".wwwww...bbbbb...wwwww.",
  ".wwwwwwwbbrbrbbwwwwwww.",
  "..wwwwwwbbbbbbbwwwwww..",
  "...ww.wwbbfbfbbww.ww...",
  "........bbbbbbb........",
  ".........bbbbb.........",
  "..........b.b..........",
];
const MORCEGO_ASAS_BAIXO = [
  ".......................",
  ".......................",
  "..........b.b..........",
  "..........bbb..........",
  ".........bbbbb.........",
  "....wwwwbbrbrbbwwww....",
  "..wwwwwwbbbbbbbwwwwww..",
  ".wwwwwwwbbfbfbbwwwwwww.",
  "wwwwwww.bbbbbbb.wwwwwww",
  "www.ww...bbbbb...ww.www",
  "w.........b.b.........w",
];

function sprite(grade, cores, px) {
  const larg = grade[0].length;
  for (const linha of grade) if (linha.length !== larg) throw new Error(`linha do sprite com tamanho errado: "${linha}"`);
  const chave = (x, y) => `${x},${y}`;
  const cheio = new Set();
  grade.forEach((linha, y) => [...linha].forEach((ch, x) => { if (ch in cores && ch.length === 1) cheio.add(chave(x, y)); }));
  const mapa = new Map();
  for (const k of cheio) {
    const [x, y] = k.split(",").map(Number);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      if (!cheio.has(chave(x + dx, y + dy))) mapa.set(chave(x + dx + 1, y + dy + 1), cores.contorno);
    }
  }
  grade.forEach((linha, y) => [...linha].forEach((ch, x) => { if (cheio.has(chave(x, y))) mapa.set(chave(x + 1, y + 1), cores[ch]); }));
  const L = larg + 2, A = grade.length + 2, rects = [];
  for (let y = 0; y < A; y++) {
    let x = 0;
    while (x < L) {
      const cor = mapa.get(chave(x, y));
      if (!cor) { x++; continue; }
      const ini = x;
      while (mapa.get(chave(x, y)) === cor) x++;
      rects.push(`<rect x="${ini * px}" y="${y * px}" width="${(x - ini) * px + 0.25}" height="${px + 0.25}" fill="${cor}"/>`);
    }
  }
  return { svg: rects.join(""), w: L * px, h: A * px };
}

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const NIVEIS = ["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"];

export function gerarNoites(d) {
  const semanas = d.semanas, n = semanas.length;
  const cel = 11, gap = 3, passo = cel + gap;
  const x0 = 58, y0 = 142, w = 840;
  const fundoGrade = y0 + 7 * passo;
  const h = fundoGrade + 62;
  const T = 20, viagem = 0.9, px = 3;
  const seq = maiorSequencia(d.dias);

  const cores = Object.fromEntries(NIVEIS.map((nv, k) => [nv, TEMA.niveis[k]]));
  const apagado = TEMA.apagado;
  const est = [];
  for (const [nivel, cor] of Object.entries(cores)) {
    est.push(`@keyframes acende_${nivel} { 0% { fill: ${apagado}; transform: scale(1) } 1% { fill: ${cor}; transform: scale(1.5) } 4% { fill: ${cor}; transform: scale(1) } 89% { fill: ${cor} } 95%,100% { fill: ${apagado} } }`);
    est.push(`.n_${nivel} { fill: ${apagado}; transform-box: fill-box; transform-origin: 50% 100%; animation: acende_${nivel} ${T}s linear infinite backwards; }`);
  }

  const cima = sprite(MORCEGO_ASAS_CIMA, TEMA.morcego, px);
  const baixo = sprite(MORCEGO_ASAS_BAIXO, TEMA.morcego, px);
  const bocaX = 12.5 * px, bocaY = 9 * px;
  const by = y0 - cima.h - 20;
  const bx = x0 + cel / 2 - bocaX;
  const distancia = (n - 1) * passo;
  const queda = y0 - (by + bocaY) - 2;
  est.push(
    `@keyframes anda { 0% { transform: translateX(0) } ${viagem * 100}% { transform: translateX(${distancia}px) } 100% { transform: translateX(${distancia}px) } }`,
    `@keyframes aparece { 0% { opacity: 0 } 2% { opacity: 1 } ${viagem * 100 - 1}% { opacity: 1 } ${viagem * 100 + 3}%,100% { opacity: 0 } }`,
    `.bando { animation: anda ${T}s linear infinite, aparece ${T}s linear infinite; }`,
    "@keyframes voa { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }",
    ".voa { animation: voa .44s ease-in-out infinite; }",
    "@keyframes asa1 { 0% { opacity: 1 } 50% { opacity: 0 } }",
    "@keyframes asa2 { 0% { opacity: 0 } 50% { opacity: 1 } }",
    ".asa1 { animation: asa1 .44s step-end infinite; }",
    ".asa2 { animation: asa2 .44s step-end infinite; opacity: 0; }",
    `@keyframes gota { 0% { transform: translateY(0) scale(.6); opacity: 0 } 15% { opacity: 1 } 100% { transform: translateY(${f1(queda)}px) scale(1); opacity: .2 } }`,
    ".gota { transform-box: fill-box; transform-origin: center; animation: gota .5s ease-in infinite; }",
    "@keyframes nevoa { 0%,100% { transform: translateX(-50px) } 50% { transform: translateX(50px) } }",
    ".nevoa { animation: nevoa 18s ease-in-out infinite; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
  );

  const c = [`<defs>
  <mask id="crescente"><rect x="0" y="0" width="${w}" height="${h}" fill="#000"/><circle cx="792" cy="46" r="17" fill="#fff"/><circle cx="799" cy="41" r="15" fill="#000"/></mask>
  <radialGradient id="brilhoLua"><stop offset="0" stop-color="${SANGUE}" stop-opacity=".35"/><stop offset="1" stop-color="${SANGUE}" stop-opacity="0"/></radialGradient>
  <filter id="borra" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
</defs>`];
  c.push(estrelas(w, 130, 22, 77));
  c.push(`<circle cx="790" cy="46" r="48" fill="url(#brilhoLua)"/><rect width="${w}" height="${h}" fill="${OSSO}" mask="url(#crescente)"/>`);
  c.push(`<text class="lento" x="30" y="42" font-size="13" font-weight="700" letter-spacing="5" fill="${OURO}">✠ ${esc(TEMA.tituloNoites)}</text>`);
  c.push(`<text x="30" y="67" font-size="14.5" fill="${NEVOA}"><tspan fill="${OSSO}" font-weight="700">${plural(d.total, "contribuição", "contribuições")}</tspan> no último ano · maior sequência: <tspan fill="${OSSO}" font-weight="700">${plural(seq, "noite", "noites")}</tspan></text>`);

  [["seg", 1], ["qua", 3], ["sex", 5]].forEach(([nome, linha]) => {
    c.push(`<text class="mono" x="${x0 - 8}" y="${y0 + linha * passo + 9}" text-anchor="end" font-size="10" fill="${NEVOA}" fill-opacity=".8">${nome}</text>`);
  });

  // lápides
  const lapides = [];
  semanas.forEach((semana, i) => {
    const atraso = (i / Math.max(n - 1, 1)) * viagem * T;
    for (const dia of semana) {
      const linha = new Date(dia.date + "T12:00:00Z").getUTCDay();
      const x = x0 + i * passo, y = y0 + linha * passo;
      const nivel = cores[dia.contributionLevel] ? dia.contributionLevel : "NONE";
      lapides.push(`<path class="n_${nivel}" style="animation-delay:${atraso.toFixed(2)}s" d="M${x} ${y + cel} V${y + 4.5} A${cel / 2} 4.5 0 0 1 ${x + cel} ${y + 4.5} V${y + cel} Z"><title>${dia.date}: ${dia.contributionCount}</title></path>`);
    }
  });
  c.push(lapides.join("\n"));

  // meses
  let ultimo = -1, ultimoX = -99;
  semanas.forEach((semana, i) => {
    if (!semana.length) return;
    const mes = new Date(semana[0].date + "T12:00:00Z").getUTCMonth();
    const x = x0 + i * passo;
    if (mes !== ultimo && x - ultimoX > 34) {
      if (ultimo !== -1 || i < 2) c.push(`<text class="mono" x="${x}" y="${fundoGrade + 14}" font-size="10" fill="${NEVOA}" fill-opacity=".8">${MESES[mes]}</text>`);
      ultimoX = x;
    }
    ultimo = mes;
  });

  c.push(`<g class="nevoa" filter="url(#borra)" opacity=".3"><ellipse cx="260" cy="${fundoGrade + 8}" rx="260" ry="12" fill="${NEVOA}" fill-opacity=".5"/><ellipse cx="640" cy="${fundoGrade + 12}" rx="240" ry="12" fill="${NEVOA}" fill-opacity=".5"/></g>`);

  // morcego
  c.push(`<g transform="translate(${f1(bx)},${by})"><g class="bando"><g class="voa">
  <ellipse class="gota" cx="${bocaX}" cy="${bocaY + 2}" rx="2" ry="2.8" fill="${cores.FOURTH_QUARTILE}"/>
  <g class="asa1">${cima.svg}</g><g class="asa2">${baixo.svg}</g>
</g></g></g>`);

  // legenda e rodapé
  const ly = h - 18;
  c.push(`<text x="62" y="${ly + 9}" font-size="10.5" fill="${NEVOA}" fill-opacity=".8">dados públicos do GitHub · atualizado em ${hojeBR()}</text>`);
  const niveis = Object.values(cores);
  const lx = w - 62 - 54 - niveis.length * passo;
  c.push(`<text class="mono" x="${lx - 6}" y="${ly + 9}" text-anchor="end" font-size="10" fill="${NEVOA}">sede</text>`);
  niveis.forEach((cor, k) => {
    const x = lx + k * passo;
    c.push(`<path d="M${x} ${ly + cel} V${ly + 4.5} A${cel / 2} 4.5 0 0 1 ${x + cel} ${ly + 4.5} V${ly + cel} Z" fill="${cor}"/>`);
  });
  c.push(`<text class="mono" x="${lx + niveis.length * passo + 4}" y="${ly + 9}" font-size="10" fill="${NEVOA}">banquete</text>`);

  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ divisor
/** Trepadeira com uma rosa no meio, fundo transparente (funciona no tema claro e no escuro). */
export function gerarDivisor() {
  const w = 840, h = 48, cx = 420, cy = 24;
  const c = [`<defs>${defsRosa()}
  <linearGradient id="some" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".25" stop-color="#fff"/><stop offset=".75" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <mask id="esvai"><rect width="${w}" height="${h}" fill="url(#some)"/></mask>
</defs>`];
  c.push(`<g mask="url(#esvai)">${trepadeira(30, cx - 20, cy, 4, 0)}${trepadeira(cx + 20, w - 30, cy, 4, Math.PI)}
${botao(cx - 160, cy - 5, 0.8)}${botao(cx + 160, cy - 1, 0.8)}${botao(cx - 290, cy - 1, 0.6)}${botao(cx + 290, cy - 5, 0.6)}</g>`);
  c.push(folha(cx - 18, cy + 3, 160, 0.9), folha(cx + 18, cy + 3, 20, 0.9));
  c.push(rosa(cx, cy, 0.5, 0));
  return moldura(w, h, c.join("\n"), ESTILO_RESPIRA, { comCantos: false, comFundo: false });
}

// ------------------------------------------------------------------ cabeçalho de seção
export function gerarSecao(titulo) {
  const w = 840, h = 72, cx = 420, cy = 37;
  const texto = String(titulo).toUpperCase();
  const tw = texto.length * 20;
  const est = [ESTILO_RESPIRA, ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }"];
  const c = [`<defs>${defsRosa()}
  <linearGradient id="osso" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="${OSSO}"/><stop offset="1" stop-color="${NEVOA}"/></linearGradient>
</defs>`];
  c.push(estrelas(w, h, 10, texto.length * 7));
  const xe = cx - tw / 2 - 30, xd = cx + tw / 2 + 30;
  c.push(trepadeira(44, xe - 18, cy, 3, 0, 2.2), trepadeira(xd + 18, w - 44, cy, 3, Math.PI, 2.2));
  c.push(`<path d="M38 ${cy} l5 -4 l5 4 l-5 4 Z M${w - 48} ${cy} l5 -4 l5 4 l-5 4 Z" fill="${OURO}" fill-opacity=".8"/>`);
  c.push(rosa(xe, cy, 0.4, 0), rosa(xd, cy, 0.4, 3));
  c.push(`<text x="${cx + 1.5}" y="${cy + 9.5}" text-anchor="middle" font-size="22" font-weight="700" letter-spacing="5" fill="${SANGUE_ESCURO}">${esc(texto)}</text>`);
  c.push(`<text x="${cx}" y="${cy + 8}" text-anchor="middle" font-size="22" font-weight="700" letter-spacing="5" fill="url(#osso)">${esc(texto)}</text>`);
  c.push(petalas(est, 80, 780, h, 3, texto.length * 13));
  return moldura(w, h, c.join("\n"), est.join("\n  "), { comCantos: false });
}

// ------------------------------------------------------------------ carta de projeto
const ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export function gerarProjeto(p, i = 0) {
  const w = 410, h = 240;
  const est = [ESTILO_RESPIRA, ".lento { animation: cintila 5s ease-in-out infinite; opacity: .75; }"];
  const c = [`<defs>${defsRosa()}
  <linearGradient id="osso" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="${OSSO}"/><stop offset="1" stop-color="${NEVOA}"/></linearGradient>
</defs>`];
  c.push(estrelas(w, 90, 8, 60 + i));
  c.push(`<text class="lento" x="30" y="44" font-size="10.5" letter-spacing="4" fill="${OURO}">✠ ARCANO ${ROMANOS[i] || i + 1}</text>`);
  c.push(ramo([396, 244], [404, 186], [366, 124], [352, 70], 2.8, 8));
  c.push(botao(381, 168, 0.75));
  c.push(rosa(352, 64, 0.62, i * 1.3));
  const nome = String(p.nome || "");
  c.push(`<text x="31.5" y="81.5" font-size="22" font-weight="700" fill="${SANGUE_ESCURO}">${esc(nome)}</text><text x="30" y="80" font-size="22" font-weight="700" fill="url(#osso)">${esc(nome)}</text>`);
  c.push(`<rect x="30" y="92" width="190" height="2.5" rx="1.2" fill="url(#sangue)"/>`);
  quebrar(p.descricao || "", 40, 4).forEach((linha, k) => {
    c.push(`<text x="30" y="${120 + k * 19}" font-size="13" fill="${NEVOA}">${esc(linha)}</text>`);
  });
  let x = 30;
  for (const tag of p.tags || []) {
    const pw = largTexto(tag, 10.5, 0.6) + 18;
    if (x + pw > 326) break;
    c.push(`<rect x="${f1(x)}" y="${h - 46}" width="${f1(pw)}" height="21" rx="10.5" fill="${PAINEL}" stroke="${SANGUE}" stroke-opacity=".85"/><text class="mono" x="${f1(x + pw / 2)}" y="${h - 31.5}" text-anchor="middle" font-size="10.5" fill="${OSSO}">${esc(tag)}</text>`);
    x += pw + 7;
  }
  c.push(petalas(est, 60, 400, h, 4, 50 + i));
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ estufa de tecnologias
export function gerarEstufa(lista) {
  const w = 840, mx = 52, gapX = 16, maxL = w - 2 * mx;
  const itens = lista.map((t) => ({ t, pw: largTexto(t, 13, 0.62) + 44 }));
  const linhas = [];
  let atual = [], larg = 0;
  for (const it of itens) {
    if (atual.length && larg + it.pw > maxL) { linhas.push(atual); atual = []; larg = 0; }
    atual.push(it);
    larg += it.pw + gapX;
  }
  if (atual.length) linhas.push(atual);
  const y0 = 70, passoY = 76;
  const h = y0 + Math.max(linhas.length, 1) * passoY + 6;
  const est = [
    "@keyframes balanca { 0%,100% { transform: rotate(-3deg) } 50% { transform: rotate(3deg) } }",
    ".balanca { animation: balanca 4.2s ease-in-out infinite; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
  ];
  const c = [`<defs>${defsRosa()}</defs>`];
  c.push(estrelas(w, h, 14, 99));
  c.push(`<text class="lento" x="30" y="42" font-size="12" font-weight="700" letter-spacing="4.5" fill="${OURO}">✠ ESTUFA</text><text x="128" y="42" font-size="12.5" fill="${NEVOA}">o que eu cultivo</text>`);
  linhas.forEach((linha, r) => {
    const vy = y0 + r * passoY, fase = r * 1.7;
    c.push(trepadeira(36, w - 36, vy, 3, fase, 2.4));
    const total = linha.reduce((s, it) => s + it.pw, 0) + gapX * (linha.length - 1);
    let x = (w - total) / 2;
    linha.forEach((it, k) => {
      const ax = x + it.pw / 2, ay = vy + 3 * Math.sin((ax - 36) / 38 + fase);
      c.push(`<g class="balanca" style="transform-origin: ${f1(ax)}px ${f1(ay)}px; animation-delay: -${f1((r * 5 + k) * 0.6)}s">
  <line x1="${f1(ax)}" y1="${f1(ay)}" x2="${f1(ax)}" y2="${f1(vy + 18)}" stroke="${OURO}" stroke-opacity=".55" stroke-width="1"/>
  <rect x="${f1(x)}" y="${vy + 18}" width="${f1(it.pw)}" height="28" rx="14" fill="${PAINEL}" stroke="${SANGUE}" stroke-opacity=".85" stroke-width="1.3"/>
  <path d="M${f1(x + 14)} ${vy + 28} l3.5 4 l-3.5 4 l-3.5 -4 Z" fill="${(r + k) % 2 ? SANGUE_VIVO : OURO}"/>
  <text x="${f1(x + it.pw / 2 + 7)}" y="${vy + 36.5}" text-anchor="middle" font-size="13" fill="${OSSO}">${esc(it.t)}</text>
</g>`);
      c.push(botao(ax, ay - 2, 0.62));
      x += it.pw + gapX;
    });
  });
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ diário da noite
const iconesDiario = {
  cultivando: (x, y) => `<path d="M${x} ${y + 12} V${y - 1}" stroke="${FOLHA}" stroke-width="2" stroke-linecap="round"/>${folha(x, y + 7, -30, 0.55)}${folha(x, y + 4, 210, 0.5)}${botao(x, y - 1, 1)}`,
  lendo: (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-12 -7 Q-6 -10 0 -7 V9 Q-6 6 -12 9 Z" fill="${OSSO}" fill-opacity=".9"/><path d="M12 -7 Q6 -10 0 -7 V9 Q6 6 12 9 Z" fill="${OSSO}" fill-opacity=".75"/>
  <path d="M-9.5 -3 Q-6 -4.5 -2.5 -3 M-9.5 0.5 Q-6 -1 -2.5 0.5 M-9.5 4 Q-6 2.5 -2.5 4" stroke="${NEVOA}" stroke-width=".8" fill="none"/>
  <path d="M5 -8 V5 l2 -2 l2 2 V-8 Z" fill="${SANGUE}"/></g>`,
  ouvindo: (x, y) => `<g class="gira" style="transform-origin: ${x}px ${y}px">
  <circle cx="${x}" cy="${y}" r="12" fill="#070506" stroke="${NEVOA}" stroke-opacity=".45"/>
  <circle cx="${x}" cy="${y}" r="9" fill="none" stroke="#2a2326"/><circle cx="${x}" cy="${y}" r="6.5" fill="none" stroke="#2a2326"/>
  <circle cx="${x}" cy="${y}" r="3.8" fill="${SANGUE}"/><circle cx="${x}" cy="${y}" r="1" fill="#000"/>
  <path d="M${x - 9} ${y - 5} A10 10 0 0 1 ${x - 3} ${y - 9.5}" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/></g>`,
  jogando: (x, y) => `<g transform="translate(${x},${y})">
  <path d="M-8 -6 H8 A6 6 0 0 1 14 0 V3 A5 5 0 0 1 5 6 L3 4 H-3 L-5 6 A5 5 0 0 1 -14 3 V0 A6 6 0 0 1 -8 -6 Z" fill="${NEVOA}" fill-opacity=".85"/>
  <path d="M-8 -3 V3 M-11 0 H-5" stroke="${PAINEL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="7" cy="-1.5" r="1.7" fill="${SANGUE}"/><circle cx="10" cy="1.5" r="1.7" fill="${SANGUE_VIVO}"/></g>`,
};

export function gerarDiario(diario) {
  const w = 840;
  const rotulos = { cultivando: "CULTIVANDO", lendo: "LENDO", ouvindo: "OUVINDO", jogando: "JOGANDO" };
  const entradas = Object.entries(rotulos).filter(([k]) => diario[k]);
  const linhas = Math.ceil(entradas.length / 2) || 1;
  const h = 64 + linhas * 58 + 16;
  const est = [
    "@keyframes gira { to { transform: rotate(360deg) } }",
    ".gira { animation: gira 3.5s linear infinite; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
    ESTILO_RESPIRA,
  ];
  const c = [`<defs>${defsRosa()}</defs>`];
  c.push(estrelas(w, 60, 10, 23));
  c.push(`<text class="lento" x="30" y="42" font-size="12" font-weight="700" letter-spacing="4.5" fill="${OURO}">✠ DIÁRIO DA NOITE</text>`);
  c.push(`<text x="${w - 30}" y="42" text-anchor="end" font-size="11.5" fill="${NEVOA}">anotado em ${hojeBR()}</text>`);
  entradas.forEach(([chave, rotulo], k) => {
    const col = k % 2, lin = Math.floor(k / 2);
    const x = 28 + col * 396, y = 62 + lin * 58;
    c.push(`<rect x="${x}" y="${y}" width="388" height="48" rx="10" fill="${PAINEL}" stroke="${BORDA}" stroke-width="2"/>`);
    c.push(iconesDiario[chave](x + 30, y + 24));
    c.push(`<text x="${x + 58}" y="${y + 19}" font-size="9.5" font-weight="700" letter-spacing="3" fill="${OURO}">${rotulo}</text>`);
    const valor = String(diario[chave]);
    const tam = valor.length <= 40 ? 14.5 : Math.max(10.5, (14.5 * 40) / valor.length);
    const texto = valor.length * tam * 0.5 > 318 ? quebrar(valor, Math.floor(318 / (tam * 0.5)), 1)[0] : valor;
    c.push(`<text x="${x + 58}" y="${y + 37}" font-size="${f1(tam)}" fill="${OSSO}">${esc(texto)}</text>`);
  });
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ oráculo (fase da lua + frase do dia)
// Frases de obras em domínio público (tradução livre).
const FRASES_NOITE = [
  ["Tudo o que vemos ou parecemos não passa de um sonho dentro de um sonho.", "Edgar Allan Poe", "Um sonho dentro de um sonho"],
  ["Os limites que separam a vida da morte são, quando muito, sombrios e vagos.", "Edgar Allan Poe", "O enterro prematuro"],
  ["Entre livremente, e por sua própria vontade!", "Bram Stoker", "Drácula"],
  ["Cuidado, pois não tenho medo, e por isso sou poderoso.", "Mary Shelley", "Frankenstein"],
  ["O único jeito de se livrar de uma tentação é ceder a ela.", "Oscar Wilde", "O retrato de Dorian Gray"],
  ["Seja do que for que nossas almas são feitas, a dele e a minha são iguais.", "Emily Brontë", "O morro dos ventos uivantes"],
  ["Há mais coisas entre o céu e a terra, Horácio, do que sonha a tua filosofia.", "William Shakespeare", "Hamlet"],
  ["Estamos todos na sarjeta, mas alguns de nós estão olhando para as estrelas.", "Oscar Wilde", "O leque de Lady Windermere"],
  ["E o corvo, sem esvoaçar, ainda pousa, ainda pousa.", "Edgar Allan Poe", "O corvo"],
  ["Sê sempre poeta, mesmo em prosa.", "Charles Baudelaire", "Meu coração a nu"],
  ["Enlouqueci, com longos intervalos de horrível sanidade.", "Edgar Allan Poe", "carta de 1848"],
];

const SINODICO = 29.530588853;
export function faseDaLua(data = new Date()) {
  const ref = Date.UTC(2000, 0, 6, 18, 14);
  const idade = ((((data.getTime() - ref) / 86400000) % SINODICO) + SINODICO) % SINODICO;
  const iluminada = (1 - Math.cos((2 * Math.PI * idade) / SINODICO)) / 2;
  const nomes = ["Lua nova", "Lua crescente", "Quarto crescente", "Crescente gibosa", "Lua cheia", "Minguante gibosa", "Quarto minguante", "Lua minguante"];
  const nome = nomes[Math.floor(((idade / SINODICO) * 8 + 0.5)) % 8];
  const ateCheia = Math.round((((SINODICO / 2 - idade) % SINODICO) + SINODICO) % SINODICO);
  return { idade, iluminada, nome, ateCheia };
}

export function gerarOraculo(data = new Date()) {
  const w = 840, h = 236;
  const lua = faseDaLua(data);
  const dia = Math.floor(data.getTime() / 86400000);
  const [frase, autor, obra] = FRASES_NOITE[dia % FRASES_NOITE.length];
  const est = [
    ESTILO_RESPIRA,
    "@keyframes pulsa { 0%,100% { opacity: .45 } 50% { opacity: .95 } }",
    ".pulsa { animation: pulsa 6s ease-in-out infinite; }",
    "@keyframes surge { from { opacity: 0 } to { opacity: 1 } }",
    ".surge { opacity: 0; animation: surge 1.4s ease-out .2s forwards; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
  ];
  const cx = 128, cy = 116, r = 44;
  const crescendo = lua.idade < SINODICO / 2;
  const k = Math.cos((2 * Math.PI * lua.idade) / SINODICO);
  const rx = f1(Math.max(0.01, r * Math.abs(k)));
  const topo = `${cx} ${cy - r}`, base = `${cx} ${cy + r}`;
  const luz = crescendo
    ? `M${topo} A${r} ${r} 0 0 1 ${base} A${rx} ${r} 0 0 ${k > 0 ? 0 : 1} ${topo} Z`
    : `M${topo} A${r} ${r} 0 0 0 ${base} A${rx} ${r} 0 0 ${k > 0 ? 1 : 0} ${topo} Z`;
  const c = [`<defs>${defsRosa()}
  <radialGradient id="luaO" cx=".42" cy=".38" r=".72"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="${OSSO}"/><stop offset="1" stop-color="${NEVOA}"/></radialGradient>
  <radialGradient id="brilhoO"><stop offset="0" stop-color="${SANGUE}" stop-opacity=".4"/><stop offset="1" stop-color="${SANGUE}" stop-opacity="0"/></radialGradient>
</defs>`];
  c.push(estrelas(w, h, 20, 314));
  c.push(`<text class="lento" x="30" y="42" font-size="12" font-weight="700" letter-spacing="4.5" fill="${OURO}">✠ ORÁCULO DA NOITE</text>`);
  c.push(`<text x="${w - 30}" y="42" text-anchor="end" font-size="11.5" fill="${NEVOA}">noite de ${hojeBR()}</text>`);

  // lua de hoje
  c.push(`<circle class="pulsa" cx="${cx}" cy="${cy}" r="${r * 2.1}" fill="url(#brilhoO)" style="opacity:${f1(0.3 + lua.iluminada * 0.7)}"/>`);
  c.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#17110f" stroke="${NEVOA}" stroke-opacity=".25"/>`);
  if (lua.iluminada > 0.01) c.push(`<path d="${luz}" fill="url(#luaO)"/>`);
  c.push(`<g fill="#000" fill-opacity=".1"><circle cx="${cx - 14}" cy="${cy - 10}" r="8"/><circle cx="${cx + 13}" cy="${cy + 9}" r="11"/><circle cx="${cx + 16}" cy="${cy - 19}" r="4.5"/><circle cx="${cx - 9}" cy="${cy + 21}" r="5"/></g>`);
  c.push(ramo([36, 240], [52, 176], [108, 190], [172, 152], 2.6, 7));
  c.push(rosa(172, 150, 0.5, 1));
  c.push(`<text x="${cx}" y="${h - 36}" text-anchor="middle" font-size="15" font-weight="700" fill="${OSSO}">${lua.nome}</text>`);
  const proxima = lua.ateCheia === 0 ? "cheia hoje" : `cheia em ${plural(lua.ateCheia, "noite", "noites")}`;
  c.push(`<text x="${cx}" y="${h - 19}" text-anchor="middle" font-size="11.5" fill="${NEVOA}">${Math.round(lua.iluminada * 100)}% · ${proxima}</text>`);

  // separador
  c.push(`<path d="M250 64 V${h - 30}" stroke="${OURO}" stroke-opacity=".25"/><path d="M250 ${(64 + h - 30) / 2 - 6} l4 6 l-4 6 l-4 -6 Z" fill="${OURO}" fill-opacity=".7"/>`);

  // frase do dia
  const linhas = quebrar(frase, 48, 3);
  const yIni = 124 - (linhas.length - 1) * 14;
  c.push(`<g class="surge"><text x="268" y="${yIni + 46}" font-size="100" font-weight="700" font-family="Georgia, 'Times New Roman', serif" fill="${SANGUE}" fill-opacity=".6">“</text>`);
  linhas.forEach((l, i) => c.push(`<text x="316" y="${yIni + i * 28}" font-size="18.5" font-style="italic" fill="${OSSO}">${esc(l)}</text>`));
  c.push(`<text x="316" y="${yIni + linhas.length * 28 + 8}" font-size="12.5" fill="${NEVOA}">— <tspan fill="${OURO}">${esc(autor)}</tspan> · ${esc(obra)}</text></g>`);
  c.push(petalas(est, 300, 820, h, 4, dia % 97));
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ estante (jogos e filmes favoritos)
function lombada(titulo, cx, cy, disponivel, cor, maxTam = 11.5) {
  const palavras = String(titulo).split(" ");
  let linhas = [String(titulo)];
  if (titulo.length * 0.56 * maxTam > disponivel && palavras.length > 1) {
    let melhor = null;
    for (let k = 1; k < palavras.length; k++) {
      const a = palavras.slice(0, k).join(" "), b = palavras.slice(k).join(" ");
      const m = Math.max(a.length, b.length);
      if (!melhor || m < melhor.m) melhor = { a, b, m };
    }
    linhas = [melhor.a, melhor.b];
  }
  const maior = Math.max(...linhas.map((l) => l.length));
  const tam = Math.min(maxTam, disponivel / (maior * 0.56));
  const offs = linhas.length === 1 ? [tam * 0.35] : [-tam * 0.25, tam * 0.95];
  return `<g transform="translate(${f1(cx)},${f1(cy)}) rotate(-90)">${linhas.map((l, i) =>
    `<text x="0" y="${f1(offs[i])}" text-anchor="middle" font-size="${f1(tam)}" font-weight="700" letter-spacing=".5" fill="${cor}">${esc(l)}</text>`).join("")}</g>`;
}

export function gerarEstante(estante) {
  const w = 840, h = 262, prat = 210;
  const jogos = estante.jogos || [], filmes = estante.filmes || [];
  const lj = 40, lf = 38, gap = 5, vaso = 100;
  const total = jogos.length * (lj + gap) + vaso + filmes.length * (lf + gap);
  const est = [
    ESTILO_RESPIRA,
    "@keyframes aranha { 0%,100% { transform: translateY(0) } 50% { transform: translateY(16px) } }",
    ".aranha { animation: aranha 7s ease-in-out infinite; }",
    ".lento { animation: cintila 5s ease-in-out infinite; opacity: .7; }",
  ];
  const c = [`<defs>${defsRosa()}
  <linearGradient id="madeira" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a2d"/><stop offset="1" stop-color="#140d0f"/></linearGradient>
  <linearGradient id="vidro" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1a1216"/><stop offset=".35" stop-color="#3b2a31"/><stop offset="1" stop-color="#0a0708"/></linearGradient>
  <linearGradient id="brilhoCaixa" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".12"/><stop offset=".3" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
</defs>`];
  c.push(estrelas(w, 120, 14, 616));
  c.push(`<text class="lento" x="30" y="42" font-size="12" font-weight="700" letter-spacing="4.5" fill="${OURO}">✠ ESTANTE</text><text x="142" y="42" font-size="12.5" fill="${NEVOA}">jogos e filmes que moram aqui</text>`);

  // aranha
  c.push(`<g class="aranha"><line x1="772" y1="-60" x2="772" y2="66" stroke="${NEVOA}" stroke-opacity=".45" stroke-width=".8"/>
<g transform="translate(772,72)" stroke="#2a2124" stroke-width="1.1" fill="none" stroke-linecap="round">
  <path d="M-2 -2 Q-8 -8 -11 -3 M-2 0 Q-9 -3 -12 2 M-2 2 Q-8 3 -11 8 M-2 3 Q-6 7 -8 12 M2 -2 Q8 -8 11 -3 M2 0 Q9 -3 12 2 M2 2 Q8 3 11 8 M2 3 Q6 7 8 12"/>
  <ellipse rx="4" ry="5.2" fill="#050304" stroke="${NEVOA}" stroke-opacity=".35"/><circle cy="-6" r="2.7" fill="#050304" stroke="none"/>
  <circle cx="-1" cy="-6.5" r=".7" fill="${SANGUE_VIVO}" stroke="none"/><circle cx="1" cy="-6.5" r=".7" fill="${SANGUE_VIVO}" stroke="none"/>
  <path d="M-1.5 1 L0 3 L1.5 1" stroke="${SANGUE}" stroke-width="1"/>
</g></g>`);

  // prateleira
  c.push(`<rect x="40" y="${prat}" width="760" height="11" rx="2" fill="url(#madeira)"/><path d="M42 ${prat + 0.5} H798" stroke="${OURO}" stroke-opacity=".3"/>
<path d="M96 ${prat + 11} v14 l14 -14 Z M730 ${prat + 11} l14 14 v-14 Z" fill="#1d1416"/>`);

  let x = (w - total) / 2;
  const coresJ = [SANGUE_ESCURO, "#1f2a24", "#2b2233", "#4a1022", "#1d1a2b", "#2a2420"];
  jogos.forEach((t, i) => {
    const alt = 150 - (i % 2) * 10, y = prat - alt, cx = x + lj / 2;
    c.push(`<rect x="${f1(x)}" y="${y}" width="${lj}" height="${alt}" rx="2.5" fill="${coresJ[i % coresJ.length]}" stroke="#000" stroke-opacity=".6"/>
<rect x="${f1(x)}" y="${y}" width="${lj}" height="${alt}" rx="2.5" fill="url(#brilhoCaixa)"/>
<rect x="${f1(x)}" y="${y + 6}" width="${lj}" height="2" fill="${OURO}" fill-opacity=".45"/><rect x="${f1(x)}" y="${prat - 8}" width="${lj}" height="2" fill="${OURO}" fill-opacity=".45"/>
<path d="M${f1(cx)} ${y + 15} l3.5 4 l-3.5 4 l-3.5 -4 Z" fill="${OURO}"/>`);
    c.push(lombada(t, cx, y + alt / 2 + 9, alt - 50, OSSO));
    x += lj + gap;
  });

  // vaso com rosa negra
  const vx = x + vaso / 2 - gap / 2;
  c.push(ramo([vx, prat - 38], [vx - 8, prat - 70], [vx + 12, prat - 96], [vx + 4, prat - 120], 2.4, 5));
  c.push(ramo([vx + 2, prat - 40], [vx + 14, prat - 60], [vx + 22, prat - 70], [vx + 30, prat - 84], 1.8, 3));
  c.push(botao(vx + 30, prat - 86, 0.75));
  c.push(rosa(vx + 4, prat - 122, 0.62, 1));
  c.push(`<path d="M${vx - 13} ${prat} C${vx - 23} ${prat - 18} ${vx - 17} ${prat - 30} ${vx - 7} ${prat - 34} V${prat - 42} H${vx + 7} V${prat - 34} C${vx + 17} ${prat - 30} ${vx + 23} ${prat - 18} ${vx + 13} ${prat} Z" fill="url(#vidro)" stroke="${OURO}" stroke-opacity=".45"/>
<ellipse cx="${vx}" cy="${prat - 42}" rx="9" ry="2.4" fill="#0a0708" stroke="${OURO}" stroke-opacity=".45"/>
<path d="M${vx - 12} ${prat - 20} Q${vx - 13} ${prat - 10} ${vx - 9} ${prat - 4}" stroke="#fff" stroke-opacity=".25" stroke-width="1.5" fill="none" stroke-linecap="round"/>
<path transform="translate(${vx + 26},${prat - 1}) rotate(100)" d="M0 0 C4 -3 4.5 -9 0 -11 C-4.5 -9 -4 -3 0 0 Z" fill="${SANGUE}"/>`);
  x += vaso;

  // fitas VHS
  filmes.forEach((t, i) => {
    const alt = 112, y = prat - alt, cx = x + lf / 2;
    const inclina = i === filmes.length - 1 ? ` transform="rotate(7 ${f1(x)} ${prat})"` : "";
    c.push(`<g${inclina}><rect x="${f1(x)}" y="${y}" width="${lf}" height="${alt}" rx="2" fill="#0b090a" stroke="#2c2427"/>
<rect x="${f1(x + 6)}" y="${y + 10}" width="${lf - 12}" height="${alt - 22}" rx="1.5" fill="#dcd1c6"/>
<rect x="${f1(x + 6)}" y="${prat - 22}" width="${lf - 12}" height="5" fill="${i % 2 ? SANGUE : SANGUE_ESCURO}"/>
${lombada(t, cx, y + (alt - 22) / 2 + 6, alt - 40, "#24161b", 11)}</g>`);
    x += lf + gap;
  });

  const xj = (w - total) / 2;
  if (jogos.length) c.push(`<text x="${f1(xj + (jogos.length * (lj + gap) - gap) / 2)}" y="${prat + 34}" text-anchor="middle" font-size="10" letter-spacing="4" fill="${OURO}" fill-opacity=".8">JOGOS</text>`);
  if (filmes.length) c.push(`<text x="${f1(xj + jogos.length * (lj + gap) + vaso + (filmes.length * (lf + gap) - gap) / 2)}" y="${prat + 34}" text-anchor="middle" font-size="10" letter-spacing="4" fill="${OURO}" fill-opacity=".8">FILMES</text>`);
  c.push(petalas(est, 80, 760, h, 4, 444));
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ rodapé
export function gerarRodape(cfg = CONFIG) {
  const w = 840, h = 184, cx = 420;
  const est = [ESTILO_RESPIRA, ".lento { animation: cintila 5s ease-in-out infinite; opacity: .75; }"];
  const c = [`<defs>${defsRosa()}</defs>`];
  c.push(estrelas(w, h - 40, 24, 808));
  c.push(trepadeira(44, cx - 64, 104, 4, 0), trepadeira(cx + 64, w - 44, 104, 4, Math.PI));
  c.push(botao(170, 101, 0.8), botao(670, 103, 0.8), botao(90, 104, 0.6), botao(750, 100, 0.6));
  c.push(ramo([cx, 132], [cx - 4, 112], [cx - 30, 82], [cx - 50, 66], 2.6, 5));
  c.push(ramo([cx, 132], [cx + 4, 112], [cx + 30, 82], [cx + 50, 66], 2.6, 5));
  c.push(ramo([cx, 132], [cx - 2, 104], [cx + 2, 76], [cx, 50], 2.6, 5));
  c.push(`<path d="M${cx} 116 C${cx - 14} 104 ${cx - 22} 122 ${cx} 118 C${cx + 22} 122 ${cx + 14} 104 ${cx} 116 Z M${cx - 2} 118 L${cx - 10} 134 M${cx + 2} 118 L${cx + 10} 134" fill="${SANGUE}" stroke="${SANGUE}" stroke-width="2" stroke-linecap="round"/>`);
  c.push(rosa(cx - 50, 64, 0.55, 2), rosa(cx + 50, 64, 0.55, 4), rosa(cx, 46, 0.72, 0));
  c.push(`<text class="lento" x="${cx}" y="${h - 32}" text-anchor="middle" font-size="13" font-weight="700" letter-spacing="5" fill="${OURO}">✠  ${esc(cfg.despedida || "")}  ✠</text>`);
  c.push(`<text x="${cx}" y="${h - 14}" text-anchor="middle" font-size="12" font-style="italic" fill="${NEVOA}">${esc(cfg.despedidaSub || "")}</text>`);
  c.push(petalas(est, 60, 820, h, 10, 77));
  return moldura(w, h, c.join("\n"), est.join("\n  "));
}

// ------------------------------------------------------------------ atalho
export const ARTES_PRINCIPAIS = ["banner.svg", "grimorio.svg", "noites.svg"];

/** Gera todas as artes de um tema. */
export function gerarTudo(dados, cfg = CONFIG) {
  aplicarTema(cfg.tema);
  const artes = {
    "banner.svg": gerarBanner(cfg),
    "grimorio.svg": gerarGrimorio(dados),
    "noites.svg": gerarNoites(dados),
    "divisor.svg": gerarDivisor(),
    "diario.svg": gerarDiario(cfg.diario || {}),
    "estante.svg": gerarEstante(cfg.estante || {}),
    "oraculo.svg": gerarOraculo(),
    "rodape.svg": gerarRodape(cfg),
  };
  if ((cfg.tecnologias || []).length) artes["estufa.svg"] = gerarEstufa(cfg.tecnologias);
  for (const [chave, titulo] of Object.entries(cfg.secoes || {})) artes[`secao-${chave}.svg`] = gerarSecao(titulo);
  (cfg.projetos || []).forEach((p, i) => { artes[`projeto-${i + 1}.svg`] = gerarProjeto(p, i); });
  return artes;
}

// ------------------------------------------------------------------ dados de exemplo
const nivelDe = (n) => (n === 0 ? "NONE" : n <= 2 ? "FIRST_QUARTILE" : n <= 4 ? "SECOND_QUARTILE" : n <= 7 ? "THIRD_QUARTILE" : "FOURTH_QUARTILE");

export function dadosDemo() {
  const r = rng(1897);
  const hoje = new Date();
  hoje.setUTCHours(12, 0, 0, 0);
  const ini = new Date(hoje);
  ini.setUTCDate(ini.getUTCDate() - 364 - ini.getUTCDay());
  const semanas = [], dias = [];
  let total = 0;
  for (let s = 0; s < 53; s++) {
    const semana = [];
    for (let k = 0; k < 7; k++) {
      const dt = new Date(ini);
      dt.setUTCDate(ini.getUTCDate() + s * 7 + k);
      if (dt > hoje) break;
      const ativo = r() < 0.3 + 0.45 * Math.sin(s / 7) ** 2;
      const qtd = ativo ? 1 + Math.floor(r() ** 2 * 12) : 0;
      total += qtd;
      const dia = { date: dt.toISOString().slice(0, 10), contributionCount: qtd, contributionLevel: nivelDe(qtd) };
      semana.push(dia);
      dias.push(dia);
    }
    if (semana.length) semanas.push(semana);
  }
  return {
    total,
    commits: Math.round(total * 0.86),
    prsIssues: 7,
    repos: 12,
    seguidores: 9,
    estrelas: 14,
    linguagens: [["JavaScript", 52000], ["Python", 31000], ["HTML", 18000], ["CSS", 12000], ["C#", 7000], ["Java", 3000]],
    cores: { JavaScript: "#f1e05a", Python: "#3572A5", HTML: "#e34c26", CSS: "#663399", "C#": "#178600", Java: "#b07219" },
    semanas,
    dias,
  };
}
