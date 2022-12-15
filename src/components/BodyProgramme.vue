<template>
    <section>
        <!-- <div class="horaires">
            <h2 v-for="horaire in horaires">{{ horaire }}</h2>
        </div> -->
        <div class="cards">
            <div class="creneau" v-for="(card, index) in cards">
                <Card v-for="creneau in card" :number_of_cards="card.length" :title="creneau.title" :heure_debut="creneau.heure_debut" :heure_fin="creneau.heure_fin"
                    :nom_du_jeux="creneau.nom_du_jeux" :univers="creneau.univers">{{ card }}</Card>
            </div>
        </div>
        <!-- <div class="row" v-for="horaire in horaires">
            <div class="horaires">
                <h2>{{ horaire }}</h2>
            </div> -->
            <!-- <div class="cards">
                <div class="creneau" v-for="(card, index) in cards">
                    <Card v-for="creneau in card" :number_of_cards="card.length" :title="creneau.title"
                        :nom_du_jeux="creneau.nom_du_jeux" :univers="creneau.univers">{{ card }}</Card>
                </div>
            </div> -->
        <!-- </div> -->
    </section>
</template>
  
<script lang="ts" setup>
import { ref } from "vue";
import Card from "./Card.vue"

    // const horaires = [
    //     '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'
    // ]

const cards = {
    heure1: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 1",
            heure_debut: '9h',
            heure_fin: '10h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 2",
            heure_debut: '9h',
            heure_fin: '10h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 3",
            heure_debut: '9h',
            heure_fin: '10h'
        }
    ],
    heure2: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 4",
            heure_debut: '10h',
            heure_fin: '11h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 5",
            heure_debut: '10h',
            heure_fin: '11h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 6",
            heure_debut: '10h',
            heure_fin: '11h'
        },
    ],
    heure3: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 8",
            heure_debut: '11h',
            heure_fin: '12h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 2",
            heure_debut: '11h',
            heure_fin: '12h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 3",
            heure_debut: '11h',
            heure_fin: '12h'
        }
    ],
    heure4: [
        {
            id: 1,
            title: "Pause du midi",
            heure_debut: '12h',
            heure_fin: '13h'
        },
    ],
    heure5: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 1",
            heure_debut: '13h',
            heure_fin: '14h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 4",
            heure_debut: '13h',
            heure_fin: '14h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 6",
            heure_debut: '13h',
            heure_fin: '14h'
        }
    ],
    heure6: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 5",
            heure_debut: '14h',
            heure_fin: '15h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 2",
            heure_debut: '14h',
            heure_fin: '15h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 7",
            heure_debut: '14h',
            heure_fin: '15h'
        }
    ],
    heure7: [
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 3",
            heure_debut: '15h',
            heure_fin: '16h'
        }
    ],
    heure8: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 1",
            heure_debut: '16h',
            heure_fin: '17h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 6",
            heure_debut: '16h',
            heure_fin: '17h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 8",
            heure_debut: '16h',
            heure_fin: '17h'
        }
    ],
    heure9: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 7",
            heure_debut: '17h',
            heure_fin: '18h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 2",
            heure_debut: '17h',
            heure_fin: '18h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 3",
            heure_debut: '17h',
            heure_fin: '18h'
        }
    ],
    heure10: [
        {
            id: 1,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 5",
            heure_debut: '18h',
            heure_fin: '19h'
        },
        {
            id: 2,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 4",
            heure_debut: '18h',
            heure_fin: '19h'
        },
        {
            id: 3,
            title: "lorem ipsum",
            nom_du_jeux: "Lorem ipsum lorem ipsum",
            univers: "Univers 6",
            heure_debut: '18h',
            heure_fin: '19h'
        }
    ],
    // heure11: [
    //     {
    //         id: 1,
    //         title: "lorem ipsum",
    //         nom_du_jeux: "Lorem ipsum lorem ipsum",
    //         univers: "Univers 8"
    //     },
    //     {
    //         id: 2,
    //         title: "lorem ipsum",
    //         nom_du_jeux: "Lorem ipsum lorem ipsum",
    //         univers: "Univers 1"
    //     },
    //     {
    //         id: 3,
    //         title: "lorem ipsum",
    //         nom_du_jeux: "Lorem ipsum lorem ipsum",
    //         univers: "Univers 3"
    //     }
    // ],
}

</script>
  
<style scoped>
section {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    margin: 2rem 0 2rem 0;
}

.creneau {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: max-content;
    column-gap: 1rem;
}

.horaires {
    width: 10%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
}

.horaires h2 {
    height: 9rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.cards {
    width: 80%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    row-gap: 1rem;
}

@media screen and (max-width: 768px){
        .creneau{
            flex-direction: column;
            row-gap: 1rem;
        }

    }
</style>
  