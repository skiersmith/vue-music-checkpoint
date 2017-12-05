<template>
  <div>
    <h1>MyTunes</h1>
    <div class="song-list" v-for="song in songs">
      <div class='card'>

        <span class="glyphicon glyphicon-trash" aria-hidden="true" @click="removeMyTune(song)"></span>
        <div>
          <img :src="song.artworkUrl100" width="100">
          <p>{{song.artistName}} - {{song.trackName}}</p>
          <p>Collection: {{song.collectionName}} </p>
          <p>Price: {{song.collectionPrice}} </p>
          <div>
            <audio controls>
              <source :src="song.previewUrl" />
            </audio>
          </div>
          
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "MyTunes",
    data() {
      return {
        song: {}
      }
    },
    methods: {
      getMyTunes() {
        this.$store.dispatch("getMyTunes")
      },
      removeMyTune(song){
        this.$store.dispatch("removeMyTune", song)
        this.$store.dispatch("getMyTunes")
      }
      
    },
    computed: {
      songs() {
        return this.$store.state.myTunes
      }
    },
  }

</script>


<style>
  .card {
    background-color: white;
    max-width: 500px;
    padding: 0.6rem;
  }
  .glyphicon{
    float: right;
  }
</style>