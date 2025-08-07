<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import SobreMimSection from '../components/SobreMimSection.vue'
import ProjetosSection from '../components/ProjetosSection.vue'
import ContatoSection from '../components/ContatoSection.vue'
import MainFooter from '../components/MainFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection id="header" />
    <SobreMimSection id="sobre" />
    <ProjetosSection id="meus-projetos" />
    <ContatoSection id="contato" />
  </main>
  <MainFooter />
</template>

<style scoped>
/* Estilos específicos para o layout principal podem vir aqui, se necessário */
</style>