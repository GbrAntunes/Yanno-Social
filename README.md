<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/GbrAntunes/Yanno-Social">
    <img src="src/assets/Yanno.svg" alt="Logo">
  </a>

  <h3 align="center">Yanno PetStore</h3>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#ferramentas">Construído com</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#Considerações">Considerações</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

## Sobre o projeto

Projeto desenvolvido para atender a fase de desafio técnico para um processo que estou participando. Disponibilizaram um link para o Figma contendo uma página com todo o design a ser implementado. Me foi dada liberdade para trabalhar usando Html, Css e JS, portanto, optei por seguir com as tecnologias que já domino.

Algumas considerações sobre as escolhas feitas no projeto e os desafios que tive podem ser encontrados na seção *Considerações*.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

### Ferramentas

Ferramentas utilizadas

* [![Node][Node.nd]][Node-url]
* [![Yarn][Yarn.yr]][Yarn-url]
* [![React][React.js]][React-url]
* [![Typescript][Typescript.ts]][Typescript-url]
* [![StyledComponents][StyledComponents.sc]][StyledComponents-url]
* [![Phosphoricons][Phosphoricons.pi]][Phosphoricons-url]

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

### Instalação

Siga o passo a passo abaixo para inicializar o projeto. Ao executar o git clone, será criada uma pasta no local onde você executar o comando.

1. Clone o repo
   ```sh
   git clone https://github.com/GbrAntunes/Yanno-Social.git
   ```
2. Navegue até a pasta criada
   ```sh
   cd yanno-social
   ```
3. Instale as dependências (escolha npm ou yarn)
   - npm
   ```sh
   npm install
   ```

   - yarn
   ```sh
   yarn install
   ```
4. Execute o projeto
   - npm
   ```sh
   npm run dev
   ```

   - yarn
   ```sh
   yarn dev
   ```
## Considerações

### Sobre o arquivo Figma

O arquivo enviado não continha uma sessão que entregasse todas as imagens, logos, fontes utilizadas, tamanhos, componentes, etc. portanto, tomei a liberdade de realizar alguns ajustes e escolher uma biblioteca de ícones padronizados.

Os ajustes que cito foram os seguintes:
- Espaçamentos padronizados para se adequar a *regra dos 8px*.
- Algumas cores eu não utilize por serem extremamente próximas umas as outras, portanto, escolhi uma delas e adicionei ao arquivo de tema da aplicação para manter o padrão.
- Como as imagens não foram disponibilizadas, ou eu poderia baixá-las diretamente do Figma já editadas ou eu encontraria essas imagens e realizaria as edições manualmente. Para evitar "atalhos" preferi encontrar as imagens originais e editá-las através do CSS ou redimensioná-las para o que eu precisaria.
- Não consegui identificar qual biblioteca de ícones foi escolhida (percebi alguns do Material e outros do Vue) e também não estavam disponíveis na sessão de assets do projeto do Figma, eu escolhi a biblioteca do *Phosphor*.


### Sobre os carrosséis

Dos 3 carrosséis solicitados, comecei pelo mais importante (na minha opinião, o dos produtos) e optei por utilizar duas lógicas diferentes para os carrosséis desenvolvidos:
1. Utilizar os estados do React para armazenar o conteúdo da página atual do carrossel e utilizar funções para alternar entre as posições de um array.
2. Renderizar todos os itens do carrossel e apenas realizar um scroll para controlar quais itens serão exibidos na tela.

Acredito que as duas estratégias possuam prós e contras. Utilizei ambas já que o intuito do projeto é mostrar o que sabemos fazer, evidentemente numa situação real ponderaríamos sobre qual estratégia seria mais eficaz para o cenário.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

## Contato

Gabriel Antunes Tenório

(92) 98269-1236

gbr.antunes@gmail.com

LinkedIn: [https://www.linkedin.com/in/gabriel-antunes-tenorio/](https://www.linkedin.com/in/gabriel-antunes-tenorio/)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

[React.js]: https://img.shields.io/badge/React-18.2.0-61DBFB?logo=react
[React-url]: https://reactjs.org/
[Typescript.ts]: https://img.shields.io/badge/Typescript-5.0.2-blue?logo=typescript
[Typescript-url]: https://www.typescriptlang.org/
[StyledComponents.sc]: https://img.shields.io/badge/Styled%20Components-6.0.7-DB7093?logo=styled-components
[StyledComponents-url]: https://styled-components.com/
[Phosphoricons.pi]: https://img.shields.io/badge/Phosphor%20Icons-2.0.10-c4e456
[Phosphoricons-url]: https://phosphoricons.com/
[Node.nd]: https://img.shields.io/badge/Node-18.16.0-339933?logo=nodedotjs
[Node-url]: https://nodejs.org/
[Yarn.yr]: https://img.shields.io/badge/Yarn-1.22.19-2C8EBB?logo=yarn
[Yarn-url]: https://yarnpkg.com/
