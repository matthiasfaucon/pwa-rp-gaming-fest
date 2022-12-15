<template>
    <div class="third-presentation">
        <h1>Informations utiles</h1>
        <div class="les-infos">
            <div class="date info">
                <h2>Date: </h2>
                <p>21 janvier - 22 janvier</p>
                <p>2023</p>
            </div>
            <div class="horaire info">
                <h2>Horaire: </h2>
                <p>9h - 19h</p>
            </div>
            <div class="lieu info">
                <h2>Lieu: </h2>
                <p>Parc des expositions de Rouen</p>
            </div>
            <!-- <p>De nombreux exposants seront présents pour présenter leurs produits et services (dans la limite des stocks disponibles). Différentes conférences auront lieu durant toute la durée de l’événement et des ateliers inviteront petits et grands à créer leur premier jeu de rôle.</p>
                <img src="" alt="coucou" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
    .third-presentation{
        width: 100%;
    }

    .third-presentation h1{
        text-align: center;
    }

    .les-infos{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 2rem;
        column-gap: 2rem;
    }

    .les-infos div {
        width: 33%;
        height: 10rem;
        flex-direction: column;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 15px rgb(0 0 0 / 10%);
        border-radius: 10px;
        padding: 1rem;
    }

    .date p:nth-of-type(2){
        font-weight: 600;
    }

    @media screen and (max-width: 1024px){
        .les-infos{
            column-gap: 1rem;
        }

    }

    @media screen and (max-width: 768px){

        .les-infos{
            flex-wrap: wrap;
            row-gap: 1rem;
        }
        .les-infos div{
            width: 75%;
        }

    }
</style>