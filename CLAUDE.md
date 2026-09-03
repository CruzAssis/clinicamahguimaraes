# Contexto do projeto — Clínica Mah Guimarães

Site institucional de uma clínica de estética avançada em Vila Maria, Zona Norte de São Paulo.
Cliente real, site em produção, recebendo tráfego. Não é projeto de estudo.

## Regras não-negociáveis

**A responsável técnica é enfermeira.** Maressa Alves Farias Guimarães, COREN-SP 289883.
Isso sujeita toda a publicidade à Resolução COFEN nº 554/2017, que é mais restritiva que a regra
geral de publicidade:

- **Nunca prometer ou garantir resultado.** As construções "eu elimino" e "eu sumo" foram
  proibidas expressamente pela cliente. Vale para qualquer texto novo — headline, CTA, alt de
  imagem, meta description.
- **Todo anúncio precisa de nome + número do COREN + categoria profissional.** O rodapé hoje
  traz nome e COREN mas não diz "Enfermeira". Isso é uma pendência aberta, não uma escolha.
- **As imagens de antes e depois em `img/portfolio/` dependem de autorização expressa** de cada
  paciente (art. 4º, XIV). Os termos ainda não foram assinados. Não amplie o uso dessas imagens,
  não crie novas seções com elas, não as replique em outras páginas.

**Nunca inventar informação clínica.** Procedimento, produto, indicação, número de sessões,
tempo de resultado: se não estiver neste arquivo ou já no site, pergunte. Não preencha lacuna
com o que "costuma ser".

## Dados da clínica

Devem estar idênticos aqui, no site e no Google Meu Negócio.

- Endereço: Rua Mere Amédea, 557 — Vila Maria, São Paulo/SP — CEP 02125-001
- Telefone e WhatsApp: (11) 99288-1766 (mesmo número)
- Horário: terça a sexta 9h–19h · sábado 9h–15h · domingo, segunda e feriados fechado
- Instagram: @clinicamahguimaraes
- Reputação: 5,0 no Google com 86 avaliações · GuiaZN Awards 2023, 2024 e 2025

## Procedimentos

**Realiza:** harmonização glútea, harmonização facial, harmonização íntima, botox,
criomodelagem, tratamento de estrias, Space Shape, bioestimulador de colágeno, aplicação de
enzimas, tratamentos para celulite, limpeza de pele, drenagem linfática, pós-operatório,
massagem relaxante, quiropraxia, Hipro, depilação a laser, laser Lavieen, remoção de tatuagem,
clareamento de axila e virilha, peeling químico, microagulhamento, aplicação de vasinhos.

**Não realiza mais:** endolaser, Onix, designer de sobrancelhas.

**Harmonização glútea** usa ácido hialurônico e bioestimulador de colágeno.

**Método MAF** (protocolo próprio): trata retenção de líquidos, drena, modela e auxilia no
tratamento de diástase.

**Método R.A.R.** (protocolo próprio): ativos para regeneração do tecido e melhora do aspecto
da pele.

**Preço:** nunca informar valores. A resposta é que varia conforme avaliação e queixa da
paciente, e o caminho é agendar a avaliação.

## Pendências conhecidas

Levantadas no cruzamento entre o site publicado e o briefing respondido pela clínica.

### Resolvidas

- **Notas internas (`dev-note`)** — removidas das nove páginas e do `style.css`. O conteúdo
  de cada nota foi registrado fora do repositório antes de apagar.
- **Nomenclatura da criomodelagem** — nome definido com a cliente: **Criomodelagem**. Aplicado
  no card da home, no `<title>`, `<h1>`, meta description, FAQ, JSON-LD, legenda da foto,
  textos de WhatsApp e no rodapé das 24 páginas. **O arquivo continua `criolipolise.html`** e o
  canonical também — a URL é destino de anúncio e não pode ser renomeada. A menção em
  minúscula em `clinicas-esteticas-zona-norte.html` (~linha 89) descreve a **Clínica Gil
  Rodrigues**, outra clínica do guia regional, e por isso foi mantida como estava.
- **Bronzeamento** — removido da home. A frase passou a "Também realizamos outros protocolos
  corporais".
- **Método MAF e diástase** — a página agora traz diástase no card de indicação, na FAQ e na
  meta description, e o card da home menciona "auxilia no tratamento de diástase".
- **Rodapé** — a categoria profissional "Enfermeira" foi acrescentada ao lado do nome e do
  COREN-SP 289883 nas 24 páginas que têm rodapé (`formulario.html` não tem).

### Abertas

1. **Horário** — confirmado com a clínica, o site está correto. Não "corrigir".
2. **Método R.A.R.** — o site descreve só para estrias; o uso real é mais amplo. Falta o texto
   da cliente sobre o uso ampliado.
3. **"Sem robô"** — o passo 1 de "Como funciona" promete atendimento sem robô, e o projeto
   prevê automação de WhatsApp e direct. Reescrever antes de a automação entrar no ar.
4. **Termos de autorização de imagem** — as fotos de `img/portfolio/` seguem sem termo assinado
   (art. 4º, XIV). Não amplie o uso delas enquanto isso.
5. **Páginas de procedimento ainda em rascunho.** Dez páginas existem, estão linkadas na home e
   carregam `noindex,follow`: `space-shape`, `tratamento-de-celulite`, `hipro`,
   `depilacao-a-laser`, `laser-lavieen`, `remocao-de-tatuagem`, `clareamento-axila-virilha`,
   `harmonizacao-intima`, `aplicacao-de-vasinhos` e `aplicacao-de-enzimas`. Elas só têm hero e
   CTA. Para sair do `noindex` cada uma precisa do conteúdo clínico da cliente — o que é, para
   quem é, como é a sessão. **Não preencher por conta própria.**
6. **Quatro páginas prioritárias sem conteúdo clínico.** `quiropraxia`, `pos-operatorio`,
   `drenagem-linfatica` e `massagem-relaxante` já são páginas completas e indexáveis, mas o
   conteúdo é logístico (avaliação, endereço, horário, política de preço, responsabilidade
   técnica). Falta a parte clínica: o que cada atendimento faz, para quem é indicado e como é
   a sessão. Nada disso foi inventado — está esperando a cliente.
7. **Bioestimulador de colágeno, peeling químico e microagulhamento** aparecem só de passagem,
   sem página nem card próprio.
8. **"Dra." no rodapé** — a assinatura é "Dra. Maressa Guimarães — COREN-SP 289883 —
   Enfermeira". Vale confirmar com a cliente se ela quer manter o "Dra." ou trocar por
   "Enfermeira Maressa Guimarães", que é a forma mais segura sob a Resolução COFEN 554/2017.
9. **E-mail no domínio próprio** (`@clinicamahguimaraes.com.br`) — depende do registro do
   domínio, que ainda não aconteceu.

## Convenções técnicas

- **Site estático puro.** HTML, CSS e um arquivo de JS. Sem framework, sem build, sem
  `package.json`, sem dependências. Não introduza nenhum — o deploy na Vercel serve os arquivos
  como estão.
- **Tema claro/escuro** é decidido por um script inline no `<head>` de cada página, que lê
  `localStorage` na chave `mg-theme` e escreve `data-theme` no elemento raiz. O CSS trabalha
  em cima desse atributo. Mantenha o script inline e antes do CSS: tirar dele do `<head>`
  causa flash de tema errado no carregamento.
- **Não renomeie arquivos HTML.** As URLs são páginas de SEO e destino de anúncio. Renomear
  quebra link externo e indexação.
- **Canonical e og:url apontam para `https://clinicamahguimaraes.com.br/`.** Esse domínio ainda
  **não foi registrado** — o site responde hoje por uma URL da Vercel. Isso é intencional, é o
  domínio de destino. Não troque os canonicals para a URL da Vercel.
- **Imagens e vídeos** vivem em `img/`, `img/portfolio/` e `video/`. São os arquivos originais
  da clínica; não há versões maiores em outro lugar.

## Deploy

Push na branch `main` publica automaticamente na Vercel (projeto `clinica-mah-guimares`).
Não há ambiente de staging. Toda alteração em `main` vai para a produção que a cliente e as
pacientes veem.
