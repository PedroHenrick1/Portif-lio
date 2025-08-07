<script setup>
  import TecnologiasSection from '../components/TecnologiasSection.vue'
</script>
<template>
  <div class="pagina-inicial">
    <div class="main-content">
      <div class="informacoes">
        <div class="descricao">
          <h1>Pedro Henrick</h1>
          <h4>Desenvolvedor Full Stack</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
          <button>Descubra mais sobre mim</button>
        </div>
        <div class="imagem-perfil">
          <img src="/img/foto_PedroPerfil.jpeg" alt="foto_PedroPerfil" width="300" height="300">
        </div>
      </div>
    </div>
    <TecnologiasSection />
    
  </div>
</template>