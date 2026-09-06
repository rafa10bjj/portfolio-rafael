# Prompt de Construção Final: Portfólio de Alta Performance de Rafael Rodrigues

Você é um Engenheiro Front-end e UI/UX Designer Sênior.
Sua missão é gerar o arquivo `index.html` definitivo do portfólio profissional de **Rafael Rodrigues**, unindo a arquitetura de conteúdo do `PAGINA.png` com a excelência visual, tokens e componentes canônicos do `design-system.html`.

---

## 1. REGRAS INEGOCIÁVEIS DE RECURSOS LOCAIS

Utilize EXCLUSIVAMENTE os arquivos locais da pasta `assets/`:
- **Estilos & Fontes:** `assets/css2_19fd9cc6b396.css`, `assets/css2_62759cd015bd.css`, `assets/css2_86e10c4bcbd4.css`.
- **Scripts:** `assets/resource_3fa48481346f.es` (Tailwind), `assets/three_1aecfa5aa56f.js` (Three.js), `assets/lucide_latest_2eebd0ebe8c2.es` (Lucide Icons).
- **Fotos Oficiais de Rafael Rodrigues:**
  - Hero (Close-up no frame com glow e badges): `assets/Gemini_Generated_Image_ (1).png`
  - Sobre Mim (Card de perfil profissional `aspect-[4/5]`): `assets/Gemini_Generated_Image_.png`

---

## 2. REGRAS DE DESIGN SYSTEM & QUALIDADE VISUAL (ZERO GENÉRICO)

1. **Tipografia Canônica:**
   - Textos institucionais e títulos: `font-sans` (Geist Sans).
   - Métricas, tags, código, botões e dados técnicos: `font-geist-mono` (Geist Mono).
2. **Superfícies & Contraste:**
   - Fundo base: `bg-white text-neutral-900`.
   - Seções alternadas e cards de apoio: `bg-neutral-50` e `bg-neutral-100`.
   - Superfície de código / destaque: `bg-neutral-900` com texto claro.
   - Bordas de 1px sutis: `border-neutral-200`.
3. **Motion & Interação 3D:**
   - Manter o elemento `<div id="canvas-container"></div>` absoluto dentro do `<header>`.
   - Executar o loop Three.js do Torus Knot com rotação suave sensível ao mouse e 100 partículas douradas (`#D4AF37`).
   - Cards com elevação suave no hover (`hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`).
   - Nudge na seta dos botões (`group-hover:translate-y-0.5 duration-300`).

---

## 3. SEÇÕES A CONSTRUIR (100% FIÉIS AO PAGINA.PNG)

- **Header / Nav:** Logo `Rafael_Data` (BI & Supply Chain) + links ancorados (`#hero`, `#sobre`, `#habilidades`, `#projetos`, `#experiencia`, `#formacao`, `#contato`) + botão CTA `Vamos Conversar`.
- **Hero Section:**
  - Citação editorial: *"Em tudo na vida, você não precisa ser bom para começar. Você tem que se permitir começar para ser bom."*
  - Tag: `• INTELIGÊNCIA DE DADOS & SUPPLY CHAIN`.
  - Título: `Olá, eu sou Rafael Rodrigues`.
  - Subtítulo: `Analista de Dados & BI • Python & SQL • Supply Chain & Logística`.
  - Bio: *"Especialista em transformar dados operacionais e estratégicos em decisões de alto impacto através de Business Intelligence no Power BI, automação de rotinas em Python e modelagem relacional em SQL Server."*
  - Botões de Ação: `Explorar Dashboards` (Primário Sólido), `Conversar no WhatsApp` (Outline) e `LinkedIn ↗`.
  - Tags de Stack: `Power BI (DAX / M)`, `Python (Pandas)`, `SQL Server`, `Gestão Logística`.
  - Foto Hero: `assets/Gemini_Generated_Image_ (1).png` com tags flutuantes `Power BI Specialist` e `Data & Supply Chain`.
  - Grid de Métricas: `20+` Anos em Logística & Operações | `15+` Dashboards & Relatórios | `10+` Projetos em Python & SQL | `5+` Especializações & Cursos.
- **Sobre Mim (Split 12-Colunas):**
  - Esquerda (`lg:col-span-5`): Card com a foto `assets/Gemini_Generated_Image_.png`, tag `PERFIL PROFISSIONAL`, `Recife, PE` e badges de graduação/MBA.
  - Direita (`lg:col-span-7`): Os 3 parágrafos da trajetória e o Grid 2x2 dos Pilares (*Visão Analítica*, *Automação*, *Liderança*, *Resolução de Problemas*).
- **Habilidades & Competências (Grid 3-Colunas):**
  - Cards estruturados para: *Business Intelligence & Dados*, *Logística & Supply Chain* e *Liderança & Gestão* com itens e níveis (*Especialista*, *Avançado*, *Intermediário*).
- **Projetos & Dashboards (Grid 3x3):**
  - 9 projetos completos de Rafael (Infográfico de Vendas, Performance de Vendas, HPN Heavy Power Nutrition, ENEM 2019, SAC & CSAT, Instagram Analytics, Lojas Seu João, Churn x-Telecom e Coletânea Python).
  - Cards com tags de tecnologias, descrições e links (`Acessar Relatório ↗` / `Ver no GitHub ↗`).
- **Experiência Profissional (Linha do Tempo):**
  - Klab Distribuidora (Atual - Analista de Prevenção e Demanda).
  - Frutto do Brasil (3 anos - Encarregado de Logística).
  - Focus Distribuidora (10 anos - Encarregado Geral de Operações).
- **Formação & Certificações:**
  - 5 cards com graduação em ADS, Python Impressionador, Formação em Análise de Dados, MBA em Logística e Gestão de Supply Chain.
- **Contato & Envio WhatsApp:**
  - Lado esquerdo: WhatsApp `(81) 99504-6827`, E-mail `rafa10k@hotmail.com`, LinkedIn e GitHub.
  - Lado direito: Formulário interativo para disparo direto ao WhatsApp.
- **Footer:**
  - Assinatura, status verde pulsante `Disponível para oportunidades` e direitos autorais.
