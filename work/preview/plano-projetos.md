# Planejamento: seção de projetos expansível

Data: 2026-11-21. Coordenação: Nick Fury.

## Escopo e acesso

Repositório: `/Users/gabmarques/Documents/Projetos/portfolio`, portfólio React/Vite.
Missão atual: leitura, planejamento e prévia visual com projetos fictícios. Nenhuma implementação em `src` ou operação de Git.
Registro desta missão neste arquivo porque `.agents` está com acesso somente leitura na configuração efetiva. O handoff anterior foi preservado.

## Organização proposta

1. Cabeçalho e apresentação principal.
2. Sobre, habilidades e informações profissionais.
3. Seção exclusiva de projetos: destaque à esquerda e carrossel horizontal à direita, centralizado verticalmente, sobre fundo do projeto ativo.
4. Detalhes expansíveis abaixo da composição, em toda a largura interna da seção.
5. Contato e rodapé.

## Comportamento

- Selecionar cartão atualiza fundo, título e resumo; fecha detalhes anteriores.
- Ver projeto abre um painel por vez; fechar recolhe o painel.
- Setas, toque e trackpad; sem rotação automática.
- No celular, texto acima dos cartões e painel abaixo; sem overflow horizontal da página.
- Exemplos explicitamente demonstrativos, sem alegações de projetos ou resultados reais.

## Implementação futura

1. Reorganizar `src/pages/Details/index.jsx` e `style.js` em fluxo vertical, retirando a sobreposição por margens negativas de `CardsFooter`.
2. Transformar `featuredProject` em coleção `projects` em `src/data/portfolio.js`, com IDs, conteúdo, imagens e links opcionais. Manter exemplos substituíveis nos dados.
3. Criar `ProjectsSection`, `ProjectCarousel` e `ProjectDetails`; adaptar `ProjectCard` e colocar a âncora `projects` na seção.
4. Ajustar o Dock à página mais longa e preservar espaço da navegação no celular.
5. Validar teclado, foco, toque, contraste, movimento reduzido, lint e build.

## Critério de pronto da implementação

- Seleção, setas e abrir/fechar funcionam sem misturar projetos.
- Painel ocupa toda a largura da seção e empurra o conteúdo seguinte.
- Um projeto pode ser substituído nos dados sem alterar a estrutura.
- Sem links demonstrativos que aparentem funcionar nem overflow da página.
- Layout legível em desktop e celular, controles acessíveis e verificações aplicáveis aprovadas.

## Entregas e próxima ação

- Doutor Estranho: análise estrutural e plano concluídos.
- Tony Stark: prévia interativa em `work/preview/projetos-expansiveis.html`.
- Visão: script executado em Node VM com DOM simulado. Passaram seleção, abrir/fechar, fechamento ao trocar, estados ARIA, retorno de foco e setas circulares. Não houve renderização em navegador; avaliação visual final ocorre na prévia exibida ao usuário.
- Site preservado; nenhum arquivo em `src` alterado e nenhum comando de Git executado.
- Próxima ação: apresentar prévia e plano ao usuário; implementar depois conforme o direcionamento recebido.

## Continuação: implementação autorizada

Usuário autorizou ler este plano e começar a implementação. O escopo passa a incluir edição de `src`, ativos locais necessários e verificações; operações de commit e push não foram solicitadas nesta missão.

- Repositório: `/Users/gabmarques/Documents/Projetos/portfolio`.
- Branch inicial: `#1-implementacao-de-plano-de-fundo-tema-claro`; árvore inicialmente sem mudanças em `src`, com `work/` ainda não rastreado.
- Tony confirmou a composição da prévia e a preservação do tema, vidro global, retrato interativo e foto do perfil.
- Doutor Estranho confirmou coleção de exemplos substituíveis, estado central na seção, painel único em fluxo normal, controles acessíveis e Dock persistente com espaço reservado.
- Thor é responsável pela implementação em `src`; Visão fará revisão e validação após a entrega.
- Validação e arquivos finais serão registrados ao concluir. `.agents/handoff.md` permanece protegido; registro desta missão mantido aqui.

## Entrega implementada e validada

- Fluxo em `Details`: apresentação e retrato, sobre/perfil/habilidades, projetos, contato e rodapé. Sobreposição anterior removida; Dock fixo com gutter no desktop e espaço inferior no celular.
- Dados em `src/data/portfolio.js`: coleção de três exemplos fictícios (Aura Interface, Orbit Workspace, Nexo Studio), sem links fictícios; imagens e links opcionais.
- Novos componentes: `ProjectsSection`, `ProjectCarousel`, `ProjectDetails`. `ProjectCard` tornou-se seletor de projeto sem IDs repetidos.
- Preservados retrato interativo, foto do perfil e bloqueios locais, tema azul e vidro global.
- Arquivos alterados: `src/pages/Details/index.jsx`, `src/pages/Details/style.js`, `src/data/portfolio.js`, `src/components/Dock/style.js`, `src/components/ProjectCard/index.jsx`, `src/components/ProjectCard/style.js`; novos componentes possuem `index.jsx` e `style.js`.
- Thor executou lint, build e `git diff --check`: aprovados, inclusive após a correção de foco.
- Visão revisou estados, ARIA, layout e dados; identificou foco fora da tela ao fechar no celular. Thor trocou `focus({preventScroll:true})` por `focus()`; Visão aprovou a correção.
- Navegador: seleção e fechamento ao trocar projeto aprovados; End e ArrowRight com retorno circular aprovados; abrir/fechar e Escape aprovados; painel em largura total interna empurra contato. Em viewport de 390px não houve overflow horizontal da página nem IDs duplicados. Após correção, o botão focado ficou visível entre y383,8 e431,8 em viewport844px.
- Captura desktop: `/private/tmp/portfolio-projetos-implementados.jpg`.
- Limite de validação: toque/trackpad físicos e preferência de movimento reduzido não foram emulados; rolagem nativa e tratamento da preferência foram revisados no código.
- Nenhum commit ou push executado. Próxima ação: avaliação visual do usuário e substituição futura dos exemplos pelos dados reais, quando solicitada.

### Refinamento: transição dos detalhes

A pedido do usuário, `ProjectDetails/index.jsx/style.js` agora anima a expansão e o recolhimento via grid0fr/1fr (360ms), opacidade e margem. Conteúdo permanece durante a saída; `aria-hidden` e `inert` impedem interação quando fechado. Movimento reduzido desativa transições. Visão aprovou revisão e serialização React18. Lint/build/diff-check passaram. Navegador confirmou painel aberto com altura natural689,9px; fechado altura0, inert presente, aria-hidden true e foco devolvido ao botão. Sem commit/push.

### Refinamento: transparência lateral do carrossel

Adicionado fade direcional à pista em `ProjectCarousel/index.jsx/style.js`:26px desktop,16px celular. Detecta overflow via scroll/ResizeObserver com cleanup; controles fora da máscara. Padding preserva foco. Lint/build/diff-check e Visão aprovados. Navegador confirmou início scrollLeft0 com fade apenas direito e fim scrollLeft121/max121 com fade apenas esquerdo. Captura `/private/tmp/portfolio-projetos-fade.jpg`. Sem commit/push.

### Projeto real: AutoStore

Usuário solicitou primeiro card com https://github.com/gabrielmarques23/AutoStore. Doutor Estranho consultou README, autostore/package.json, app/page.tsx, app/api/chat/route.ts e app/api/leads/route.ts via plugin GitHub (leitura). Primeiro item de src/data/portfolio.js substituído: AutoStore, Aplicação full-stack · IA, demonstration:false; catálogo/busca/filtros/detalhes, IA contextual com Gemini e captura de leads. Tecnologias: Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Google Gemini. Apenas link real do repositório. Demo declarada no README não pôde ser verificada e não foi adicionada. Sem screenshot confirmado, arte CSS mantida; demais projetos demonstrativos preservados. Thor: lint/build/diffcheck aprovados. Visão aprovou conteúdo e labels condicionais. Validação visual desta troca pendente: revisão automática de acesso ao navegador localhost expirou sem decisão; nenhuma alternativa para contornar controle foi usada. Sem commit/push.
