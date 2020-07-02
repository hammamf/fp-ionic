<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title>List Club</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <!-- <h1 v-for="lc in listClub" :key="lc.idTeam">{{ lc.strTeam }}</h1> -->
            <ion-list>
                <ion-item v-for="lc in listClub" :key="lc.idTeam">
                    <ion-avatar slot="start">
                        <img :src="lc.strTeamBadge">
                    </ion-avatar>
                    <ion-label>
                        <h2>{{ lc.strTeam }}</h2>
                        <h3>{{ lc.strStadium }}</h3>
                        <p>{{ lc.strStadiumLocation }}</p>
                    </ion-label>
                    <ion-button @click.prevent="detailClub(lc.idTeam)">Detail Club</ion-button>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script>
    import axios from "axios";

    export default {
        name: "listClub",
        data() {
            return {
                listClub: [],
            };
        },
        created() {
            const id = localStorage.getItem('idLeague');
            axios.get(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`).then((response) => {
                this.listClub = response.data.teams;
            });
        },
        methods: {
            detailClub(id) {
                localStorage.setItem('idClub', id)
                this.$router.push({ 
                    name: 'detailClub' 
                });
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>