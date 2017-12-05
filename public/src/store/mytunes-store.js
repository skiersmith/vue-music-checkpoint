import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [
      {
        trackName: "hello"
      }
    ],
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data.results
    },
    setTrack(state, data) {
      state.myTunes = data
    }
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        commit('setResults', JSON.parse(data))
      })
    },
    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      debugger
      $.get('//localhost:3000/api/songs').then(data => {
      console.log(data)  
      commit('setTrack', data)
      })
    },
    addToMyTunes({ commit, dispatch }, track) {
      //this will post to your server adding a new track to your tunes
      
      $.post('http://localhost:3000/api/songs', track)
    },
    removeMyTune({ commit, dispatch }, track) {
      //Removes track from the database with delete
      debugger
      $.ajax({
        url:'http://localhost:3000/api/songs/' + track._id,
        method: 'DELETE'
      })
    },
    promoteTrack({ commit, dispatch }, track) {
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({ commit, dispatch }, track) {
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
