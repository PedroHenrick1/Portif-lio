<script setup>
const tecnologias = [
  { name: 'JavaScript', icon: '/img/js.png' },
  { name: 'React', icon: '/img/react.png' },
  { name: 'HTML', icon: '/img/html-5.png' },
  { name: 'CSS', icon: '/img/css-3.png' },
  { name: 'VUE JS', icon: '/img/vue-js.png' },
  { name: 'C#', icon: '/img/c-sharp.png' }
]
</script>

<template>
  <div class="main-tecnologias">
    <div class="container-tecnologias">
      <div>
        <h4>Tecnologias que utilizo no meu dia a dia</h4>
      </div>
      <div class="tecnologias">
        <div v-for="tec in tecnologias" :key="tec.name" class="tec">
          <img :src="tec.icon" :alt="tec.name" width="50" height="50">
          <p>{{ tec.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>