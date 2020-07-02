<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ detailLiga.strLeague }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <ion-button style="margin: 1rem" expand="block" @click.prevent="lastEvent(detailLiga.idLeague)">Last Event</ion-button>
            <ion-card>
                <img :src="detailLiga.strBadge" />
                <ion-card-header>
                    <ion-card-subtitle>{{ detailLiga.strCountry }}</ion-card-subtitle>
                    <ion-card-title>{{ detailLiga.strLeagueAlternate }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    {{ detailLiga.strDescriptionEN }}
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script>
import axios from "axios";

    export default {
        name: "detailLiga",
        data() {
            return {
                detailLiga: {},
            };
        },
        created() {
            const id = localStorage.getItem('idLeague');
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`).then((response) => {
                this.detailLiga = response.data.leagues[0];
            });
            // axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`).then((response) => {
            //     this.lastEvent = response.data.teams[0];
            // });
        },
        methods: {
            lastEvent(id) {
                localStorage.setItem('idLeague', id)
                this.$router.push({ 
                    name: 'lastEvent' 
                });
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>