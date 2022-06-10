# Star Wars Wiki

### Projeto desenvolvido para ser uma referência aos personagens de StarWars

## Instalação:

Para instalação dos pacotes

```sh
  npm install
```

Para visualizar em modo desenvolvimento

```sh
  npm run dev
```

Criação de build:

```sh
  npm run build
```

---

## Tecnologias utilizadas:

- Vue 3
- SCSS
- [PrimeVue](https://www.primefaces.org/primevue/)
- [Vue3-Carousel](https://ismail9k.github.io/vue3-carousel/)
- [Pinia](https://pinia.vuejs.org/)

---

## Descrição Técnica:

O projeto conta com duas rotas:

- " / ": Página inicial, com listagem de personagens, lazy loading e scroll infinito.
- " /character/:id ": Página com detalhes de um personagen específico, incluindo:
  - Foto
  - Características Básicas
  - Filmes em que o personagem participou
  - Naves associadas ao personagem

Todas as informações são armazenadas em uma Store e são disponibilizadas globalmente aos componentes e páginas, possibilitando também um cache de informações já obtidas da API.

---

## Deploy

O deploy foi feito na plataforma serveless netlify e pode ser acessado através do link [https://donderisw.netlify.app/](https://donderisw.netlify.app/)

---

## Referências / Créditos

- API de dados: https://swapi.dev/
- Imagens: https://starwars-visualguide.com/
