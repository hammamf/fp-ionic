<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Select Your Favorite League</ion-title>
            </ion-toolbar>
            <!-- <ion-searchbar></ion-searchbar> -->
        </ion-header>
        <ion-content padding>
            <ion-slides>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaInggris.strBadge" />
                        <h2>{{ligaInggris.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaInggris.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaInggris.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaSpanyol.strBadge" />
                        <h2>{{ligaSpanyol.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaSpanyol.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaSpanyol.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaJerman.strBadge" />
                        <h2>{{ligaJerman.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaJerman.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaJerman.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaPrancis.strBadge" />
                        <h2>{{ligaPrancis.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaPrancis.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaPrancis.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaItalia.strBadge" />
                        <h2>{{ligaItalia.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaItalia.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaItalia.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

                <ion-slide>
                    <div class="slide">
                        <img :src="ligaBelanda.strBadge" />
                        <h2>{{ligaBelanda.strLeague}}</h2>
                        <ion-button @click.prevent="detailLiga(ligaBelanda.idLeague)">Detail League</ion-button>
                        <ion-button @click.prevent="listClub(ligaBelanda.idLeague)">List Club</ion-button>
                    </div>
                </ion-slide>

            </ion-slides>
        </ion-content>
    </ion-page>
</template>

<script>
    import axios from "axios";

    export default {
        name: "HomePage",
        props: {
            msg: String
        },
        // mounted: function () {
        //     console.log(this.ligaInggris);
        //     console.log(this.ligaSpanyol.time);

        // },
        data() {

            return {
                ligaInggris: {},
                ligaSpanyol: {},
                ligaJerman: {},
                ligaPrancis: {},
                ligaItalia: {},
                ligaBelanda: {},
            };
        },
        created() {
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4328').then(response => {
                this.ligaInggris = response.data.leagues[0];
            });
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4335').then(response => {
                this.ligaSpanyol = response.data.leagues[0];
            });
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4331').then(response => {
                this.ligaJerman = response.data.leagues[0];
            });
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4334').then(response => {
                this.ligaPrancis = response.data.leagues[0];
            });
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4332').then(response => {
                this.ligaItalia = response.data.leagues[0];
            });
            axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=4337').then(response => {
                this.ligaBelanda = response.data.leagues[0];
            });

            // localStorage.removeItem('idLeague');
            localStorage.clear();
        },
        methods: {
            detailLiga(id) {
                localStorage.setItem('idLeague', id)
                this.$router.push({ 
                    name: 'detailLiga' 
                });
            },
            listClub(id) {
                localStorage.setItem('idLeague', id)
                this.$router.push({ 
                    name: 'listClub' 
                });
            },
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* ion-header {
        --ion-background-color: #36a87a
    } */

    /* ion-searchbar {
        border: 5rem black !important;
        padding: 0px;
    } */

    ion-title {
        color: white;
        text-align: center;
        margin-top: 10%;
        margin-bottom: 10%;
    }

    img {
        width: 50%;
    }

    .slide {
        padding-top: 20%;
    }
</style>