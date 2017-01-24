'use strict'

const express = require('express')
const productController = require('../controllers/products')
const gastoController = require('../controllers/gastos')
const api = express.Router()

api.get('/product', productController.getProducts)
api.get('/product/:productId', productController.getProduct)
api.post('/product', productController.saveProduct)
api.put('/product/:productId', productController.updateProduct)
api.delete('/product/:productId', productController.deleteProduct)

api.get('/gasto', gastoController.getGastos)
api.get('/gasto/:gastoId', gastoController.getGasto)
api.post('/gasto', gastoController.saveGasto)
api.put('/gasto/:gastoId', gastoController.updateGasto)
api.delete('/gasto/:gastoId', gastoController.deleteGasto)

module.exports = api