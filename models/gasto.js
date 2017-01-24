'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GastoSchema = Schema({
	name: String,	
	amount: {type: Number, default: 0 },	
	date: Date,
	type: String,
	description: String
})

module.exports = mongoose.model('Gasto',GastoSchema)