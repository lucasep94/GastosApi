'use strict'

const Gasto = require('../models/gasto')

function getGasto(req,res){
	let gastoId = req.params.gastoId

	Gasto.findById(gastoId, (err, gasto) =>{
		if(err) return res.status(500).send({message: `Error al obtener by ID : ${err}`})			
		if(!gasto) return res.status(404).send({message: 'El gasto no existe'})

		res.status(200).send({gasto: gasto})
	})
}

function getGastos(req, res){
	Gasto.find({},(err, gastos) => {
		if(err) return res.status(500).send({message: `Error obteniendo gastos : ${err}`})
		if(!gastos) return res.status(404).send({message: 'No existen gastos'})

		res.status(200).send({ gastos })	
	})
}

function saveGasto(req,res){
	console.log('POST /api/gastos')
	console.log(req.body)

	let gasto = new Gasto()
	gasto.name = req.body.name
	gasto.description = req.body.description

	gasto.save((err, gastoStored) => {
		if (err) res.status(500).send({message: `Error al guardar en BD: ${err} `})

			res.status(200).send({gasto: gastoStored})
	})
}

function updateGasto(req,res){
	let gastoId = req.params.gastoId
	let update = req.body

	Gasto.findByIdAndUpdate(gastoId,update,(err,gastoUpdated) =>{
		if(err) res.status(500).send({message : `Error al actualizar gasto: ${err}`})

		res.status(200).send({ gasto: gastoUpdated })
	})
}

function deleteGasto(req,res){
	let gastoId = req.params.gastoId

	Gasto.findById(gastoId, (err, gasto) =>{
 		if(err) res.status(500).send({message : `Error al borrar gasto: ${err}`})

 		gasto.remove(err => {
 			if(err) res.status(500).send({message : `Error al borrar gasto: ${err}`})

 			res.status(200).send({message: 'El gasto ha sido eliminado'})
 		})
	})
}

module.exports = {
	getGasto,
	getGastos,
	saveGasto,
	updateGasto,
	deleteGasto
}