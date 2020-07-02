<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Detail Data : {{ detailClub.strTeam }}</ion-title>
            </ion-toolbar>
            <!-- <ion-toolbar color="primary">
                <ion-title>{{ detailClub.strTeam }}</ion-title>
            </ion-toolbar> -->
        </ion-header>,
        <ion-content fullscreen>
            <ion-button style="margin-right: 1rem; margin-left: 1rem; margin-bottom: 1rem" expand="block" @click.prevent="lastEventClub(detailClub.idTeam)">Last Event</ion-button>
            <ion-card>
                <img :src="detailClub.strTeamBadge" />
                <ion-card-header style="text-align: center">
                    <ion-card-subtitle>{{ detailClub.strAlternate }}</ion-card-subtitle>
                    <ion-card-title>{{ detailClub.strTeam }}</ion-card-title>
                </ion-card-header>
            </ion-card>
            
            <ion-card>
                <ion-card-title style="text-align: center; margin: 1rem">Jersey</ion-card-title>
                <img style="margin-bottom: 0.75rem" :src="detailClub.strTeamJersey" />
            </ion-card>

            <ion-card>
                <ion-card-title style="text-align: center; margin: 1rem">Stadium</ion-card-title>
                <img :src="detailClub.strStadiumThumb" />
                <ion-card-header>
                    <ion-card-subtitle>{{ detailClub.strStadiumLocation }}</ion-card-subtitle>
                    <ion-card-title>{{ detailClub.strStadium }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    {{ detailClub.strStadiumDescription }}
                </ion-card-content>
            </ion-card>

        </ion-content>
    </ion-page>
</template>

<script>
    import axios from "axios";

    export default {
        name: "detailClub",
        data() {
            return {
                detailClub: {},
            };
        },
        created() {
            const id = localStorage.getItem('idClub');
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`).then((response) => {
                this.detailClub = response.data.teams[0];
            });
            // axios.get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`).then((response) => {
            //     this.lastEvent = response.data.teams[0];
            // });
        },
        methods: {
            lastEventClub(id) {
                localStorage.setItem('idClub', id)
                this.$router.push({ 
                    name: 'lastEventClub' 
                });
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>