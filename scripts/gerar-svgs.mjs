#!/usr/bin/env node
/**
 * Busca os dados públicos do GitHub e gera as artes em dist/.
 * Roda todo dia pelo GitHub Actions (.github/workflows/atualizar-svgs.yml).
 *
 * Local:
 *   GITHUB_TOKEN=$(gh auth token) node scripts/gerar-svgs.mjs
 *   node scripts/gerar-svgs.mjs --demo        (dados de exemplo, sem token)
 *   node scripts/gerar-svgs.mjs --modelos     (galeria com todos os temas em modelos/)
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { CONFIG, TEMAS, ARTES_PRINCIPAIS, gerarTudo, dadosDemo } from "./artes.mjs";

const SAIDA = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
const USUARIO = process.env.GITHUB_USER || CONFIG.usuario;

const CONSULTA = `
query($login: String!) {
  user(login: $login) {
    followers { totalCount }
    repositories(ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC, first: 100) {
      totalCount
      nodes {
        name
        stargazerCount
        languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
          edges { size node { name color } }
        }
      }
    }
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`;

async function buscarDados() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("Defina GITHUB_TOKEN (no Actions ele já existe; local: gh auth token) ou use --demo.");
    process.exit(1);
  }
  const resp = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json", "User-Agent": "readme-svgs" },
    body: JSON.stringify({ query: CONSULTA, variables: { login: USUARIO } }),
  });
  const json = await resp.json();
  if (json.errors || !json.data?.user) {
    console.error("Erro da API:", JSON.stringify(json.errors || json));
    process.exit(1);
  }
  const u = json.data.user;
  const cc = u.contributionsCollection;

  const linguagens = {}, cores = {};
  let estrelas = 0;
  for (const repo of u.repositories.nodes) {
    estrelas += repo.stargazerCount;
    // o repositório do próprio perfil só tem os scripts das artes: não conta nas linguagens
    if (repo.name.toLowerCase() === USUARIO.toLowerCase()) continue;
    for (const e of repo.languages.edges) {
      linguagens[e.node.name] = (linguagens[e.node.name] || 0) + e.size;
      cores[e.node.name] = e.node.color || "#c1121f";
    }
  }
  const semanas = cc.contributionCalendar.weeks.map((w) => w.contributionDays);
  return {
    total: cc.contributionCalendar.totalContributions,
    commits: cc.totalCommitContributions,
    prsIssues: cc.totalPullRequestContributions + cc.totalIssueContributions,
    repos: u.repositories.totalCount,
    seguidores: u.followers.totalCount,
    estrelas,
    linguagens: Object.entries(linguagens).sort((a, b) => b[1] - a[1]),
    cores,
    semanas,
    dias: semanas.flat(),
  };
}

async function salvar(pasta, artes) {
  await mkdir(pasta, { recursive: true });
  for (const [nome, svg] of Object.entries(artes)) {
    await writeFile(path.join(pasta, nome), svg, "utf8");
    console.log(`✓ ${path.relative(path.join(SAIDA, ".."), path.join(pasta, nome))} (${(svg.length / 1024).toFixed(1)} KB)`);
  }
}

if (process.argv.includes("--modelos")) {
  // Galeria: todos os temas com dados de exemplo, em modelos/<tema>/
  const dados = dadosDemo();
  for (const tema of Object.keys(TEMAS)) {
    const artes = gerarTudo(dados, { ...CONFIG, nome: "Seu Nome", saudacao: undefined, tema });
    await salvar(path.join(SAIDA, "..", "modelos", tema), Object.fromEntries(ARTES_PRINCIPAIS.map((n) => [n, artes[n]])));
  }
} else {
  const demo = process.argv.includes("--demo");
  const dados = demo ? dadosDemo() : await buscarDados();
  await salvar(SAIDA, gerarTudo(dados, CONFIG));
  console.log(`Tema: ${TEMAS[CONFIG.tema]?.nome ?? CONFIG.tema}. ` + (demo ? "Dados de exemplo." : `Dados de @${USUARIO}.`));
}
