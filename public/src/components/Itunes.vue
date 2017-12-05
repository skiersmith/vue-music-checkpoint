<template>
  <div>
    <h1>itunes</h1>
    <form class="form" @submit.prevent="getMusicByArtist">
      <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
      <div class="form-group">
        <input type="text"  name="artist" v-model="search" size="30" placeholder="Artist Name" />
        <button type="submit" class="btn-sm btn-primary" id="get-music-button">Get Music</button>
      </div>
    </form>

    <div class="song-list" v-for="song in songs">
      <div class='card'>
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
          <div>
            <button @click="addToMyTunes(song)">Add to Playlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: "itunes",
    data() {
      return {
        search: ""
      }
    },
    methods: {
      getMusicByArtist() {
        this.$store.dispatch("getMusicByArtist", this.search)
      },
      addToMyTunes(song) {
        debugger
        this.$store.dispatch("addToMyTunes", song)
        this.$store.dispatch("getMyTunes")
      },
    },
    computed: {
      songs() {
        return this.$store.state.results
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
</style>