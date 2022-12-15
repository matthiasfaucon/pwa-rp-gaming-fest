<template>
<div class="card" :class="{full_width: number_of_cards === 1}">
    <p class="horaire">{{ heure_debut }} - {{ heure_fin }}</p>
    <h2 class="titre">{{ title }}</h2>
    <p class="nom-jeux">{{ nom_du_jeux }}</p>
    <p class="univers">{{ univers }}</p>
</div>
</template>

<script lang="ts" setup>

let props = defineProps(['title', 'nom_du_jeux', 'univers', 'number_of_cards', 'heure_debut', 'heure_fin'])

</script>

<style scoped>
    .card{
        display: flex;
        background: #FFFFFF;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
        border-left: 1px solid var(--main_color-lt);
        padding: 1rem;
        width: 33%;
        height: 8rem;
        border-radius: 5px;
    }

    .univers{
        font-family: 'Century Gothic';
        font-weight: 600;
    }

    .card:hover{
        border: 1px solid var(--main_color-lt);
    }

    .card.full_width{
        width: 100%;
    }

    .horaire{
        font-size: 13px;
        color: var(--main_color-lt);
    }

    @media screen and (max-width: 768px){
        .card{
            width: 100%;
        }

    }
</style>