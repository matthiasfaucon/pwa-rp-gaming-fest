<template>
    <section>
        <div class="landing">
            <h1 class="title-landing">RP Gaming Fest</h1>
            <router-link class="link-landing" to="/billeterie">Billeterie</router-link>
            <div class="ancres">
                <a class="ancre" href="#first-presentation">Évènement</a>
                <a class="ancre" href="#second-presentation">Donjons</a>
                <a class="ancre" href="#third-presentation">Ateliers</a>
                <a class="ancre" href="#fourth-presentation">Informations</a>
            </div>
            <div class="opacity"></div>
        </div>
        <div id="first-presentation">
            <h1>Un évènement, un nouvel univers</h1>
            <div>
                <p>L’association RPG Normandie organise le samedi 21 et dimanche 22 janvier 2023 le « RPGaming Fest », un festival du jeu de rôle. Durant ces deux jours, les visiteurs seront invités à prendre part à une aventure fantastique et (re)découvrir le monde du jeu de rôle.</p>
                <img src="@/assets/photos_site/hibou.png" alt="plateau de jeux" />
            </div>
        </div>
        <div id="second-presentation">
            <h1>Un donjon, un univers</h1>
            <div>
                <p>Une ludothèque et des espaces thématiques seront à disposition des visiteurs pour leur permettre de jouer une ou plusieurs parties de leurs jeux favoris ou de pépites encore inconnues (Zombicide, Saboteur, Dungeons & Dragons, Civis, et pleins d’autres…)</p>
                <img src="@/assets/photos_site/plateau-de-jeux.jpeg" alt="plateau de jeux" />
            </div>
        </div>
        <div id="third-presentation">
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
    background-color: var(--main_color-lt);
    color: white;
}

section div:nth-of-type(even) h1{
    display: flex;
    justify-content: flex-end;
}

.landing .opacity{
    position: absolute;
    background: black;
    left: 0;
    z-index: 1;
    opacity: 0.6;
    top: 15vh;
    height: 85vh;
    width: 100%;
}

.landing .ancres {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: row;
    background-color: transparent;
    height: max-content;
}

.landing .ancres .ancre {
    color: white;
}

.landing .ancres .ancre:hover {
    color: var(--main_color-lt);
}

.landing{
    max-width: 100%;
    width: 100vw;
    height: 85vh;
    background-image: url('@/assets/photos_site/landing.jpg');
    background-size: cover;
}

.title-landing{
    color: var(--second_color-lt);
    z-index: 2;
    top: 45%;
    font-size: 3.5rem;
    position: absolute;
}

.link-landing{
    z-index: 2;
    top: 60%;
    width: max-content;
    position: absolute;
    padding: 0.7rem 1.3rem 0.7rem 1.3rem;
    background: var(--main_color-lt);
    color: white;
    border-radius: 10px;
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

    section div div {
        flex-direction: column;
    }

    section div div {
        flex-direction: column-reverse;
    }

    section div:nth-of-type(even) h1[data-v-5bc437e8] {
        display: flex;
        justify-content: center;
    }

    .title-landing{
        font-size: 2.5rem;
    }   

    p,h1,h2{
        text-align: center;
    }

    section div p {
        width: 100%;
    }

    section {
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }

    section div img{
        margin-bottom: 2rem;
        width: 50%;
    }

    .link-landing{
        left: 8%;
    }
}

@media screen and (max-width: 768px){

    .title-landing{
        font-size: 2rem;
    }   

    section div img{
        margin-bottom: 2rem;
        width: 70%;
    }
    .link-landing{
        left: 11%;
    }
}

@media screen and (max-width: 480px){

    .landing{
        padding: 3rem;
    }
    .landing .ancres {
        flex-direction: column;
        row-gap: 0.4rem;
        align-items: flex-start;
    }
    .title-landing{
        font-size: 1.5rem;
    }   

    section div img{
        margin-bottom: 2rem;
        width: 100%;
    }
}

</style>
  