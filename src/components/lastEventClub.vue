<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Last 5 Match</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <!-- <h1 v-for="lc in lastEvent" :key="lc.idTeam">{{ lc.strTeam }}</h1> -->
            <ion-list v-for="le in lastEvent" :key="le.idEvent">
                <ion-card>
                <ion-card-title style="text-align: center; margin: 1rem">{{ le.strHomeTeam }} vs {{ le.strAwayTeam }}</ion-card-title>
                <ion-card-title style="text-align: center; margin: 1rem"><ion-badge color="dark">{{ le.intHomeScore }}</ion-badge> - <ion-badge color="dark">{{ le.intAwayScore }}</ion-badge></ion-card-title>
                <!-- <ion-badge color="dark">{{ le.intHomeScore }}</ion-badge> - <ion-badge color="dark">{{ le.intAwayScore }}</ion-badge> -->
                <ion-card-header>
                    <ion-card-subtitle>{{ le.strFilename }}</ion-card-subtitle>
                    <h5 style="font-weight: bold">{{ le.strLeague }} / {{ le.strSeason }}</h5>
                </ion-card-header>
            </ion-card>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script>
    import axios from "axios";

    export default {
        name: "lastEventClub",
        data() {
            return {
                lastEvent: [],
            };
        },
        created() {
            const id = localStorage.getItem('idClub');
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`).then((response) => {
                this.lastEvent = response.data.results;
            });
        },
        // methods: {
        //     detailClub(id) {
        //         localStorage.setItem('idClub', id)
        //         this.$router.push({ 
        //             name: 'detailClub' 
        //         });
        //     },
        // }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>