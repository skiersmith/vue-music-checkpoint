var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var songRoutes = require('./routes/song-routes')
var cors = require('cors')

var server = express()
var port = 3000
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(cors({}))
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(songRoutes)


server.listen(port, () => {
    console.log('Server is running on port, ', port)
})