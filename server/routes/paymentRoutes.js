import express from 'express'
const router = express.router
import checkout from '../controllers/paymentController.js'

router.route('/api/checkout', checkout)

export default router
