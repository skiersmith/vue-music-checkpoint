var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')

var server = express()
var port = 3000
// SERVES THE DEFAULT STATIC FILES

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


server.listen(port, () => {
    console.log('Server is running on port, ', port)
})