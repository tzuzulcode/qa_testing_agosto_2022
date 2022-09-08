const path = require('path')
const env = process.env.NODE_ENV

require('dotenv').config({
	path:path.join(__dirname, '..', `.env.${env}`)
})

const config = {
	message: process.env.MESSAGE
}

module.exports = config