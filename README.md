# Repositório oficial do módulo 01 do curso Frontend React - SCTEC

Usando o Codespace do Github

Código escrito ao vivo nas aulas do **Módulo 1 — Fundamentos da Programação com JavaScript** (turma T3). Cada aula fica em `semanaNN/aulaNN/`, do jeito que saiu na aula: os trechos comentados fazem parte da explicação, e alguns arquivos terminam num erro de propósito (como o de escopo, na semana 03).

## Como rodar

- **Semanas 02 a 06 e 12 (terminal):** abra o terminal na pasta da aula e rode `node nome-do-arquivo.js`. Se a pasta tiver um `package.json`, rode `npm install` antes.
- **Semanas 07 a 11 e a página da aula 03 da semana 12 (navegador):** abra o `index.html` da aula com a extensão **Live Server** do VS Code. As páginas com `type="module"` só funcionam assim: abrindo o arquivo direto, o navegador bloqueia os módulos.

## Sumário

- [Semana 02 — Lógica de programação: tipos, variáveis, operadores e decisões](#semana-02)
- [Semana 03 — Escopo, laços de repetição e funções](#semana-03)
- [Semana 04 — Arrays, métodos de array e objetos](#semana-04)
- [Semana 05 — Orientação a objetos e JavaScript assíncrono](#semana-05)
- [Semana 06 — Plantões do Mini-Projeto M1.1](#semana-06)
- [Semana 07 — HTML e CSS: primeiros passos](#semana-07)
- [Semana 08 — DOM e eventos](#semana-08)
- [Semana 09 — Formulários e validação](#semana-09)
- [Semana 10 — CSS avançado: Flexbox, especificidade e responsividade](#semana-10)
- [Semana 11 — Fetch API, localStorage e HTML semântico](#semana-11)
- [Semana 12 — Node.js, npm e módulos](#semana-12)
- [Outros repositórios da turma](#outros-repositórios-da-turma)

## Semana 02

**Lógica de programação: tipos, variáveis, operadores e decisões**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana02/aula01) · 07/07 | [Primeiro programa](semana02/aula01/ola.js) com `console.log` · [Tipos de dados](semana02/aula01/tipos-de-dados.js) com `typeof` · [Variáveis](semana02/aula01/variaveis.js): `let` × `const` | — |
| [Aula 02](semana02/aula02) · 09/07 | [Operadores de comparação](semana02/aula02/01-comparacao.js): `==` × `===`, `!=`, `<=`, `!` · [Operadores matemáticos e de atribuição](semana02/aula02/02-operadores.js): `+ - * / ** %`, `++`, `--`, `+=`, `*=` · [`if` / `else`](semana02/aula02/03-if-else.js) · [`else if`](semana02/aula02/04-if-else-if.js) com `&&` · [`switch`](semana02/aula02/05-switch.js) | [Nível da bateria](semana02/aula02/00-atividades.js) |
| [Aula 03](semana02/aula03) · 10/07 | [Operador ternário](semana02/aula03/01-ternario.js) · [Entrada de dados pelo terminal](semana02/aula03/02-prompt.js) com `prompt-sync` e `Number()` · primeira biblioteca instalada com `npm install` ([`package.json`](semana02/aula03/package.json) e [`.gitignore`](semana02/aula03/.gitignore)) | [Montanha-russa](semana02/aula03/00-atividades.js) |

## Semana 03

**Escopo, laços de repetição e funções**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana03/aula01) · 14/07 | [Escopo de bloco](semana03/aula01/01-escopo.js) · [`for`](semana03/aula01/02-for.js) (tabuada) · [`while`](semana03/aula01/03-while.js) · [`do...while`](semana03/aula01/04-do-while.js) · template literal | [Contagem regressiva, soma de 1 a 10 e cofrinho da viagem](semana03/aula01/05-atividades.js) |
| [Aula 02](semana03/aula02) · 16/07 | [Funções](semana03/aula02/01-funcao.js): declarar e chamar · [Parâmetros](semana03/aula02/02-parametro.js) · [`return`](semana03/aula02/03-return.js) · [Arrow functions](semana03/aula02/04-arrow.js) | [Média de duas notas](semana03/aula02/05-atividades.js) · [Desafios: preço com desconto e maior de dois](semana03/aula02/06-desafios.js) |
| [Aula 03](https://github.com/Desenvolvedor-FrontEnd-React-T3/jogo-adivinhacao) · 17/07 | Projeto num repositório próprio: função + `while` + `prompt-sync` + número sorteado com `Math.random()` e `Math.floor()` | [Jogo da adivinhação](https://github.com/Desenvolvedor-FrontEnd-React-T3/jogo-adivinhacao/blob/main/main.js) |

## Semana 04

**Arrays, métodos de array e objetos**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana04/aula01) · 21/07 | [Arrays](semana04/aula01/01-array.js): posição e `length` · [`push` e `pop`](semana04/aula01/02-push-pop.js) · percorrer com [`for`](semana04/aula01/03-for.js) e com [`forEach`](semana04/aula01/04-foreach.js) | [Lista de compras](semana04/aula01/05-atividades.js) · [Chamada da turma](semana04/aula01/06-desafio.js) |
| [Aula 02](semana04/aula02) · 23/07 | [`splice`, `shift` e `indexOf`](semana04/aula02/00-splice.js) · [`map`](semana04/aula02/01-map.js) · [`filter`](semana04/aula02/02-filter.js) · [`find`](semana04/aula02/03-find.js) · [`every`](semana04/aula02/04-every.js) · [`reduce`](semana04/aula02/05-reduce.js) | [Desconto com `map` e `filter`](semana04/aula02/06-atividade.js) · [10 desafios em grupo](semana04/aula02/07-desafios.js) |
| [Aula 03](semana04/aula03) · 24/07 | [Revisão](semana04/aula03/00-revisao.js) · [Objetos](semana04/aula03/01-objeto.js) · [Alterar e remover propriedades](semana04/aula03/02-manipular-objeto.js): `delete`, `Object.keys`, `Object.values` · [Array de objetos](semana04/aula03/03-array-objeto.js) | [Catálogo de produtos](semana04/aula03/04-catalogo.js) com `filter`, `map` e `reduce` · [Primeira branch e primeiro pull request](https://github.com/Desenvolvedor-FrontEnd-React-T3/contribuicao-semana04) no Git, em grupo |

## Semana 05

**Orientação a objetos e JavaScript assíncrono**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana05/aula01) · 28/07 | [Revisão de objetos](semana05/aula01/00-revisao-objeto.js): método e `this` · [Objetos sem classe](semana05/aula01/01-sem-classe.js) · [`class` e `new`](semana05/aula01/02-classe.js) · [`constructor`](semana05/aula01/03-constructor.js) · [Herança](semana05/aula01/04-heranca.js) com `extends` e `super` · [Sobrescrever métodos](semana05/aula01/05-sobrescrever.js) | [Veículos](semana05/aula01/06-atividade.js) |
| [Aula 02](semana05/aula02) · 30/07 | [Função como valor](semana05/aula02/01-funcao-como-valor.js) · [Closure](semana05/aula02/02-closure.js) · [Callback](semana05/aula02/03-callback.js) · [Código assíncrono com `setTimeout`](semana05/aula02/04-assincrono.js) · [Callbacks aninhados](semana05/aula02/05-callback-aninhado.js) · [Promise](semana05/aula02/06-promise.js) com `then` e `catch` · [`async` / `await`](semana05/aula02/07-async-await.js) · [`try` / `catch`](semana05/aula02/08-try-catch.js) | [Solicitação de empréstimo](semana05/aula02/09-atividade.js) |
| [Aula 03](semana05/aula03) · 31/07 | [Revisão](semana05/aula03/01-revisao.js): classe + dados de um "servidor" simulado com Promise e `async` / `await` · lançamento do Mini-Projeto M1.1 | [Dinâmica de conflito no Git e declaração do squad do Mini-Projeto](https://github.com/Desenvolvedor-FrontEnd-React-T3/contribuicao-semana04) |

## Semana 06

**Plantões do Mini-Projeto M1.1** — o código compara receitas com a despensa, com a mesma lógica de comparação do projeto.

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana06/aula01) · 04/08 | [Receitas](semana06/aula01/01-receitas.js): array de objetos, classe `Recipe` e herança `DessertRecipes`, dados de um "servidor" simulado com `async` / `await` e `try` / `catch` | — |
| [Aula 02](semana06/aula02) · 06/08 | [Comparar uma receita com a despensa](semana06/aula02/01-comparacao-receitas.js): `forEach` por fora e `filter` por dentro, listas do que tem e do que falta, `toLowerCase`, porcentagem com `toFixed(2)` · [Comparar todas as receitas](semana06/aula02/02-comparacao-total.js): a função `analyzeRecipe` e as faixas com `if` / `else if` | — |
| [Aula 03](semana06/aula03) · 07/08 | [Classe e herança](semana06/aula03/01-classe-heranca.js): a análise vira método da classe (`this`), sobremesas por herança, dois carregamentos assíncronos, `join(", ")` | — |

## Semana 07

**HTML e CSS: primeiros passos**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana07/aula01) · 11/08 | [Primeira página](semana07/aula01/index.html) · [Títulos e textos](semana07/aula01/02-titulos-e-textos.html): `h1` a `h6`, `p`, `strong`, `em`, `span`, `br`, `hr` · [Listas](semana07/aula01/03-listas.html): `ul`, `ol` e lista dentro de lista · [Links e imagens](semana07/aula01/04-links-e-imagens.html): link interno e externo, `img` com `alt` | — |
| [Aula 02](semana07/aula02) · 13/08 | [Três formas de usar CSS](semana07/aula02/index.html): inline, `<style>` e arquivo externo · [Seletores](semana07/aula02/seletores.styles.css) por tag, classe e id · [Cores](semana07/aula02/cores.styles.css) por nome, hexadecimal e RGB/RGBA · [Fontes](semana07/aula02/fontes.styles.css): Google Fonts, `font-family`, `line-height`, `letter-spacing`, `text-align` | — |
| [Aula 03](semana07/aula03) · 14/08 | [Box model](semana07/aula03/assets/styles/index.styles.css): `margin`, `padding`, `border`, `border-radius` · [Display](semana07/aula03/assets/styles/display.styles.css): `block` × `inline`, reset com `box-sizing`, centralizar com `margin: 0 auto`, `:hover`, `:focus-visible` · a pasta do projeto com `pages/` e `assets/` | — |

## Semana 08

**DOM e eventos**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana08/aula01) · 18/08 | [Primeiro script](semana08/aula01/assets/scripts/primeiro.script.js): `<script src>`, `getElementById`, `textContent`, `setTimeout`, `getElementsByTagName` · [Selecionar elementos](semana08/aula01/assets/scripts/selecionar.script.js): `querySelector` e `querySelectorAll` com `forEach` · [Alterar conteúdo](semana08/aula01/assets/scripts/conteudo.script.js) | — |
| [Aula 02](semana08/aula02) · 20/08 | [Mudar o visual](semana08/aula02/assets/scripts/mudar-visual.script.js) com `classList` (`add`, `remove`, `toggle`) e `onclick` · [Eventos](semana08/aula02/assets/scripts/eventos.script.js) com `addEventListener`: contador de + e − | — |
| [Aula 03](semana08/aula03) · 21/08 | [Valor dos campos](semana08/aula03/assets/scripts/value.script.js): `.value`, eventos `input` e `keydown` · [Array na tela](semana08/aula03/assets/scripts/array.script.js) com `map`, `join` e `innerHTML` | [Mural do Bairro](semana08/aula03/mural): cartões gerados de um array, busca, filtros por categoria, contador e modo escuro |

## Semana 09

**Formulários e validação**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana09/aula01) · 25/08 | [Formulário em HTML](semana09/aula01/index.html): `form` e `action`, `label` e `input`, `fieldset` e `legend`, tipos de campo (`text`, `email`, `number`, `password`, `tel`, `date`, `color`), `select`, `radio`, `checkbox`, `textarea`, validação nativa com `required`, `minlength` / `maxlength` e `min` / `max` · [envio para outra página](semana09/aula01/teste.html) | — |
| [Aula 02](semana09/aula02) · 27/08 | [Formulário com JavaScript](semana09/aula02/assets/scripts/index.script.js): evento `submit` e `preventDefault`, `.value` e `.checked`, o `radio` marcado, `focus()`, objeto criado por classe, mensagem que some com `setTimeout`, dados na tela com `innerHTML`, `reset()` | — |
| [Aula 03](semana09/aula03) · 28/08 | [Validação com JavaScript](semana09/aula03/assets/scripts/index.script.js): `trim()`, campo vazio, nome repetido com `filter` e `toLowerCase`, lista que cresce com `push`, `map` e `join` | [Lista de presença no churrasco](semana09/aula03/pages/lista.html): erro mostrado na tela, objeto por convidado, contador de confirmados |

## Semana 10

**CSS avançado: Flexbox, especificidade e responsividade**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana10/aula01) · 01/09 | [Bandeiras](semana10/aula01/assets/styles/index.styles.css) com `display: flex` e `flex-direction` · [Itinerário do ônibus](semana10/aula01/assets/styles/display-flex.styles.css): vertical × horizontal e `gap` · [Cabeçalho do g1](semana10/aula01/assets/styles/header-g1.styles.css): `justify-content` e `align-items` | — |
| [Aula 02](semana10/aula02) · 03/09 | [Vitrine do pet shop](semana10/aula02/index.html) na largura do celular ([CSS](semana10/aula02/assets/styles/index.styles.css)): `flex-grow`, `flex: 1` e `flex: 2`, `flex-wrap`, cartão em coluna com `margin-top: auto`, `align-self`, especificidade (tag × classe) | — |
| [Aula 03](semana10/aula03) · 04/09 | [Responsividade](semana10/aula03/assets/styles/index.styles.css): mobile-first com `@media (min-width: 700px)` trocando a coluna por linha | — |

## Semana 11

**Fetch API, localStorage e HTML semântico**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana11/aula01) · 08/09 | [Fetch API](semana11/aula01/assets/scripts/index.script.js) com `async` / `await` e `response.json()`: CEP no ViaCEP, personagem na API de Harry Potter, cotação do dólar na AwesomeAPI com `response.ok` e `try` / `catch` | — |
| [Aula 02](semana11/aula02) · 10/09 | [localStorage](semana11/aula02/assets/scripts/index.script.js): `setItem`, `getItem`, `removeItem`, lista guardada com `JSON.stringify` e lida com `JSON.parse` · [Página de visitante](semana11/aula02/assets/scripts/guest.script.js) que lembra o nome | — |
| [Aula 03](semana11/aula03) · 11/09 | [HTML semântico](semana11/aula03/index.html): o Jornal do Bairro sai das `div`s para `header`, `nav`, `main`, `article`, `aside` e `footer`, com `alt` na imagem | — |

## Semana 12

**Node.js, npm e módulos (CommonJS × ESM)**

| Aula | Assuntos | Atividades |
| --- | --- | --- |
| [Aula 01](semana12/aula01) · 15/09 | [`package.json`](semana12/aula01/package.json): `scripts`, `"type"` e dependências · [`.gitignore`](semana12/aula01/.gitignore) com `node_modules/` · [`require`](semana12/aula01/server.js) de bibliotecas (`prompt-sync`, `chalk`) · `fetch` no Node com `response.ok` e `try` / `catch` | [Soma até digitar "pare"](semana12/desafio01/server.js) |
| [Aula 02](semana12/aula02) · 17/09 | [Módulos CommonJS](semana12/aula02/server.js): `module.exports` e `require` · [Os mesmos arquivos em ESM](semana12/aula02-esm/server.js): `"type": "module"`, `export default`, `export` nomeado e `import` · [dados importados como módulo no navegador](semana11/aula01/assets/data/users.data.js), na página da semana 11 | — |
| [Aula 03](semana12/aula03) · 18/09 | [ESM no Node](semana12/aula03/api-harry.js) com `fetch` · [ESM no navegador](semana12/aula03-browser/index.html): `<script type="module">`, [três módulos](semana12/aula03-browser/assets/scripts/fetch-users.js) que se importam, `fetch` de um JSON local e `await` fora de função | — |

## Outros repositórios da turma

- [jogo-adivinhacao](https://github.com/Desenvolvedor-FrontEnd-React-T3/jogo-adivinhacao) — o projeto da aula 03 da semana 03.
- [contribuicao-semana04](https://github.com/Desenvolvedor-FrontEnd-React-T3/contribuicao-semana04) — a prática de Git em grupo: a primeira branch e o primeiro pull request de cada um (24/07), a dinâmica de conflito e a declaração dos squads do Mini-Projeto M1.1 (31/07). É privado: abre para quem aceitou o convite para o repositório.
