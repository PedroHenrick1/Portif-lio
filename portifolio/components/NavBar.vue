<script setup>
const redesSociais = [
  { name: 'github', url: 'https://github.com/PedroHenrick1', icon: '/img/github.png' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/pedro-henrick-borges-silva-322a922ba/', icon: '/img/linkedin.png' },
  { name: 'instagram', url: '#', icon: '/img/instagram.png' }
]
</script>

<template>
  <div class="main-content">
    <div class="nav-bar">
      <a href="#header">Início</a>
      <a href="#sobre">Sobre mim</a>
      <a href="#meus-projetos">Meus projetos</a>
      <a href="#contato">Contato</a>

      <div class="redes-sociais">
        <a v-for="rede in redesSociais" :key="rede.name" :href="rede.url" target="_blank">
          <img :src="rede.icon" :alt="rede.name">
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Os estilos do seu CSS que se aplicam a .nav-bar e .redes-sociais 
   já estão no arquivo global, então não precisamos adicioná-los aqui
   a menos que queira isolar algum estilo específico. */
.redes-sociais img {
  width: 30px;
  height: 30px;
}
</style>