<template>
    <section>
        <div class="menu">
            <router-link to="/">Présentation</router-link>
            <router-link to="/programme">Programme</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>

section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
    background-color: var(--text_color-lt);
    height: 5rem;
}

.menu{
    height: 100%;
    padding: 0;
}

</style>