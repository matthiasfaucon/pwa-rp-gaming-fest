<template>
    <section>
        <div class="text">
            <p>Bienvenue sur le site du RP Gaming Fest...</p>
            <p>Un festival exceptionnel, qui vous fera voyager dans 8 univers !</p>
            <p>Explorez-les et découvrez des jeux interactifs, qui vous plongerons dans un autre monde, le temps d'une partie !</p>
        </div>
        <div class="text">
            <a href="https://www.eventbrite.fr/e/billets-rpgaming-fest-488602803137?aff=ebdssbdestsearch&keep_tld=1">Prenez votre place</a>
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
    height: 85vh;
    background-color:  var(--second_color-lt);
}

section div:first-of-type {
    position: absolute;
    left: 10%;
    top: 30%;
    width: 40vw;
    text-align: justify;
}

section div:last-of-type {
    position: absolute;
    right: 10vw;
    top: 70%;
}

section div:last-of-type a {
    text-decoration: none;
    padding: 1rem;
    border-radius: 50px;
    background: var(--main_color-lt);
    color: var(--second_color-lt);
}

</style>
  