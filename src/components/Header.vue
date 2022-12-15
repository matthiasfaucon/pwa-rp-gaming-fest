<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div class="logo">
      <img src="@/assets/Logo_RPG_Gaming_Fest_blanc.png" alt="Logo" />
    </div>
    <div class="menu">
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

</script>

<style scoped>
section {
  background-color: var(--text_color-lt);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 15vh;
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
}

@media screen and (max-width: 480px){

  .logo img{
    height: 40%;
  }
}
</style>
