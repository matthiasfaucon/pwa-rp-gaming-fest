<template>
    <section>
        <div class="first-presentation">
            <h1>Un évènement, un nouvel univers</h1>
            <div>
                <p>L’association RPG Normandie organise le samedi 21 et dimanche 22 janvier 2023 le « RPGaming Fest », un festival du jeu de rôle. Durant ces deux jours, les visiteurs seront invités à prendre part à une aventure fantastique et (re)découvrir le monde du jeu de rôle.</p>
                <img src="@/assets/photos_site/hibou.png" alt="femme hibou" />
            </div>
        </div>
        <div class="second-presentation">
            <h1>Un donjon, un univers</h1>
            <div>
                <p>Une ludothèque et des espaces thématiques seront à disposition des visiteurs pour leur permettre de jouer une ou plusieurs parties de leurs jeux favoris ou de pépites encore inconnues (Zombicide, Saboteur, Dungeons & Dragons, Civis, et pleins d’autres…)</p>
                <img src="@/assets/photos_site/plateau-de-jeux.jpeg" alt="plateau de jeux" />
            </div>
        </div>
        <div class="second-presentation">
            <h1>Atelier Participatifs</h1>
            <div>
                <p>De nombreux exposants seront présents pour présenter leurs produits et services (dans la limite des stocks disponibles). Différentes conférences auront lieu durant toute la durée de l’événement et des ateliers inviteront petits et grands à créer leur premier jeu de rôle.</p>
                <img src="@/assets/photos_site/dés.png" alt="dès" />
            </div>
        </div>
        <InfosUtiles></InfosUtiles>
    </section>
</template>
  
<script lang="ts" setup>
import InfosUtiles from './InfosUtiles.vue';
</script>
  
<style scoped>
section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 100vw;
}

section div {
    padding: 5rem;
    max-width: 100vw;
}

section div div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10%;
    padding: 2rem 0 2rem 0;
}


section div p{
    width: 60%;
}

section div img{
    /* background: grey; */
    width: 30%;
    border-radius: 10px;
}

section div:nth-of-type(odd){
    background-color: var(--second_color-lt);
    /* box-shadow: var(--box_shadow-second-lt); */
    color: var(--text_color-lt);
}

section div:nth-of-type(even){
    background-color: var(--main_color-lt);
    /* box-shadow: var(--box_shadow-default-lt); */
    text-align: right;
    color: var(--second_text_color-lt);
}

section div:nth-of-type(even) div{
    flex-direction: row-reverse;
    background-color: var(--main_color-lt);
    color: white;
}

section div:nth-of-type(even) h1{
    display: flex;
    justify-content: flex-end;
}

.logo {
    width: 20%;
    padding-left: 1rem;
}

.menu {
    padding-right: 1rem;
    display: flex;
    column-gap: 0.5rem;
}

@media screen and (max-width: 1024px){

    p,h1,h2{
        text-align: center;
    }

    section div p {
        width: 90%;
    }

    section div.first-presentation div, section div.second-presentation div, section div:nth-of-type(even) h1{
        flex-direction: column-reverse;
        text-align: center;
        justify-content: center;
    }

    section div img{
        margin-bottom: 2rem;
        width: 50%;
    }
}

@media screen and (max-width: 768px){

    section div img{
        margin-bottom: 2rem;
        width: 70%;
    }
}

@media screen and (max-width: 480px){

section div img{
    margin-bottom: 2rem;
    width: 100%;
}
}

</style>
  