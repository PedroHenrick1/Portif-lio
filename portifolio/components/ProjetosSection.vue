<script setup>
const projetos = [
  { 
    nome: 'Treino Lab', 
    tecnologia: '/img/react.png', 
    descricao: 'App de armazenamento de treinos de musculação', 
    imagem: '/img/TreinoLab.png',
    repoUrl: 'https://github.com/PedroHenrick1/TreinoLab'
  },
  // Adicione outros projetos aqui no mesmo formato
  { 
    nome: 'Projeto Exemplo 2', 
    tecnologia: '/img/vue-js.png', 
    descricao: 'Descrição do segundo projeto', 
    imagem: '/img/TreinoLab.png', // Trocar imagem
    repoUrl: '#'
  },
  { 
    nome: 'Projeto Exemplo 3', 
    tecnologia: '/img/js.png', 
    descricao: 'Descrição do terceiro projeto', 
    imagem: '/img/TreinoLab.png', // Trocar imagem
    repoUrl: '#'
  }
]
</script>
<template>

  <div class="main-black">
    <div class="container">
      <div class="header-h1">
        <h1>Meus projetos</h1>
      </div>
      <div class="projeto-container">
        <button id="prev-button" class="nav-button">&lt;</button>
        <div class="todos-projetos">
          <div v-for="projeto in projetos" :key="projeto.nome" class="projeto">
            <div class="nome-e-tecnologia">
              <h4>{{ projeto.nome }}</h4>
              <img :src="projeto.tecnologia" alt="tecnologia do projeto" width="30" height="30">
            </div>
            <p>{{ projeto.descricao }}</p>
            <img :src="projeto.imagem" alt="imagem do projeto" width="100" height="200" style="margin-bottom: 10px;">
            <a :href="projeto.repoUrl" target="_blank">Repositório</a>
          </div>
        </div>
        <button id="next-button" class="nav-button">&gt;</button>
      </div>
      
    </div>
  </div>
</template>