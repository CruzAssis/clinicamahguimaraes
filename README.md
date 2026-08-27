# Clínica Mah Guimarães — site institucional

Site estático da Clínica Mah Guimarães (estética avançada — Vila Maria, Zona Norte de São Paulo).

Sem framework, sem build, sem dependências. HTML, CSS e um arquivo de JavaScript. Abrir `index.html` no navegador já funciona.

## Estrutura

```
index.html                        home
sobre.html                        a Dra. Maressa
mentoria.html                     mentoria VIP para profissionais
formulario.html                   formulário de briefing da clínica
botox.html                        \
criolipolise.html                  |
harmonizacao-facial.html           |  páginas de procedimento
harmonizacao-glutea.html           |  (tráfego orgânico e pago)
metodo-maf.html                    |
metodo-rar.html                   /
clinicas-esteticas-zona-norte.html  página de captura regional
style.css                         estilos (tema claro e escuro)
js/site.js                        interações
robots.txt
img/                              fotos da clínica
img/portfolio/                    antes e depois e procedimentos
video/                            vídeos de fundo
```

O tema (claro/escuro) é decidido no `<head>` do HTML e guardado em `localStorage` sob a chave `mg-theme`.

## Rodar localmente

Qualquer servidor estático serve:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Publicar

O site está hospedado na Vercel, projeto `clinica-mah-guimares`, sem integração com Git — os deploys foram feitos por CLI/upload. Conectando este repositório ao projeto na Vercel, cada `push` na branch principal passa a publicar sozinho.

Domínio de destino: `clinicamahguimaraes.com.br` (ainda não registrado — o site responde hoje pela URL da Vercel).

## Pendências conhecidas

Levantadas no cruzamento entre o site publicado e o briefing respondido pela clínica:

- **`criolipolise.html`** — a clínica informou que realiza *criomodelagem*, não criolipólise. Confirmar antes de manter a página, que hoje anuncia um procedimento possivelmente não realizado.
- **Bronzeamento** — citado no site, ausente da lista de procedimentos informada pela clínica.
- **Método MAF** — a clínica informou que o protocolo também auxilia no tratamento de diástase. O site não menciona.
- **Método R.A.R.** — descrito no site apenas para estrias; a clínica descreve uso mais amplo (regeneração de tecido e melhora do aspecto da pele).
- **"Sem robô"** — a home promete atendimento sem robô, e o projeto prevê automação de atendimento. Reescrever antes de ligar.
- **Antes e depois** — a Resolução COFEN nº 554/2017, art. 4º XIV, veda expor imagens comparativas salvo mediante autorização expressa. Manter arquivado o termo de autorização de uso de imagem de cada paciente das fotos em `img/portfolio/`.
- **Rodapé** — o art. 3º da mesma resolução exige nome, número do COREN e categoria profissional. Falta "Enfermeira".
- **16 procedimentos** informados pela clínica não têm presença no site.

## Dados da clínica

Maressa Alves Farias Guimarães — Enfermeira, COREN-SP 289883
Rua Mere Amédea, 557 — Vila Maria, São Paulo/SP — CEP 02125-001
Telefone e WhatsApp: (11) 99288-1766
Terça a sexta 9h–19h · Sábado 9h–15h · Domingo, segunda e feriados: fechado
