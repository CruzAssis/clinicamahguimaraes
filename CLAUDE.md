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

## Tarefa prioritária: remover as notas internas do código

Nove páginas carregam um `<div class="dev-note">` logo depois do `<body>`, com anotações de
trabalho da agência. O CSS deixa em `display:none`, então não aparecem no site — mas o texto
está no HTML, legível no "exibir código-fonte", e **este repositório é público**.

São elas: `botox.html`, `clinicas-esteticas-zona-norte.html`, `criolipolise.html`,
`harmonizacao-facial.html`, `harmonizacao-glutea.html`, `mentoria.html`, `metodo-maf.html`,
`metodo-rar.html`, `sobre.html`.

O conteúdo inclui comentário comercial sobre a cliente e admissão de suposições — por exemplo
que ela informou o nome do equipamento de forma diferente do nome real do fabricante, e que o
prefixo do COREN foi assumido. Nada ofensivo, mas nada que deva ficar público.

**O que fazer:** remover o `<div class="dev-note">…</div>` inteiro das nove páginas, e a regra
`.dev-note` do `style.css` (linhas ~348-350) junto com a menção a `.dev-note` na regra de
impressão (~linha 375). Não remova nada além disso. Antes de apagar, registre o conteúdo de
cada nota em algum lugar fora do repositório — várias delas descrevem confirmações pendentes
com a cliente que ainda importam.

## Pendências conhecidas

Levantadas no cruzamento entre o site publicado e o briefing respondido pela clínica. Não
resolva por conta própria — as duas primeiras dependem de confirmação com a cliente.

1. **O procedimento de criolipólise tem três nomes.** A página `criolipolise.html` descreve o
   equipamento CriUSculpt da HTM em detalhe técnico — o aparelho existe. Mas no briefing a
   clínica escreveu *criomodelagem*, o card da home vende *criolipólise*, e o antes/depois
   legenda *criomodelagem*. É divergência de nomenclatura, não procedimento inexistente.
   Definido o nome com a cliente, ele precisa ficar igual no card, na página, na legenda da
   foto e no rodapé.
2. **Bronzeamento** aparece no site ("Também realizamos bronzeamento e outros protocolos
   corporais", na home) e não está na lista da clínica nem entre os descontinuados.
3. **Horário** — confirmado com a clínica, o site está correto. Não "corrigir".
4. **Método MAF** — a palavra "diástase" não aparece em nenhuma das 11 páginas. É a informação
   mais vendável do briefing e está fora do site.
5. **Método R.A.R.** — o site descreve só para estrias; o uso real é mais amplo.
6. **"Sem robô"** — o passo 1 de "Como funciona" promete atendimento sem robô, e o projeto
   prevê automação de WhatsApp e direct. Reescrever antes de a automação entrar no ar.
7. **Rodapé** — falta a categoria profissional ("Enfermeira") ao lado do COREN.
8. **12 procedimentos** que a clínica realiza não têm nenhuma menção no site: Space Shape,
   tratamentos para celulite, pós-operatório, massagem relaxante, quiropraxia, Hipro, depilação
   a laser, laser Lavieen, remoção de tatuagem, clareamento de axila e virilha, harmonização
   íntima e aplicação de vasinhos. Outros 4 aparecem só de passagem, sem lugar próprio:
   criomodelagem (legenda de foto), bioestimulador de colágeno, drenagem linfática, peeling e
   microagulhamento. Quiropraxia, pós-operatório, drenagem e massagem são os de recorrência —
   os que sustentam agenda.

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
