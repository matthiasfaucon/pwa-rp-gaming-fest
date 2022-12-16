<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div class="logo">
      <img src="@/assets/Logo_RPG_Gaming_Fest_blanc.png" alt="Logo" />
    </div> 
    <a href="#" id="openBtn" @click="showMenu = !showMenu">
      <span class="burger-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a> 
    <div id="burger-menu" v-show="showMenu">
      <div class="links">
        <router-link to="/">Présentation</router-link>
        <router-link to="/programme">Programme</router-link>
        <router-link to="/contact">Contact</router-link>
        <div class="billeterie">
          <router-link class="billeterie" to="/billeterie">Billeterie</router-link>
        </div>
      </div>
    </div>
  
    <div class="menu header">
      <div class="links">
        <router-link to="/">Présentation</router-link>
        <router-link to="/programme">Programme</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="billeterie">
        <router-link class="billeterie" to="/billeterie">Billeterie</router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const showMenu = ref(false); 

</script>

<style scoped>

@media screen and (min-width: 768px){
  #openBtn {
    display: none;
  }
}

section {
  background-color: var(--text_color-lt);
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  height: 15vh;
}

/* Icône burger */
.burger-icon {
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  z-index: 1000;
}

/* Icône burger */
.burger-icon span {
  display: flex;
  width: 2rem;
  height: 0.3rem;
  background-color: white;
}

.logo {
  height: 100%;
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  height: 70%;
}

#burger-menu{
  top: 0;
  left: 0;
  z-index: 999;
  position: fixed;
  display: flex;
  width: 15rem;
  height: 100vh;
  background-color: var(--text_color-lt);
}

#burger-menu .links {
  display: flex;
  flex-direction: column;
  margin: 5rem 0 0 2.5rem;
  row-gap: 2rem;
}

#burger-menu .links a:hover{
  font-weight: 800;
}

.links a{
  color: var(--second_text_color-lt);
}


@media screen and (max-width: 768px){

  .logo{
    padding-left: 1rem;
  }

  .menu{
    padding-right: 1rem;
    column-gap: 0.5rem;
    flex-direction: column;
  }

  .logo img{
    height: 50%;
  }
  
  #openBtn {
    display: flex;
    margin-right: 3rem;
    align-items: center;
  }
}

@media screen and (max-width: 480px){

  .logo img{
    height: 40%;
  }
}
</style>
