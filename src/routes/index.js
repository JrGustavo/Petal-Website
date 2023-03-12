import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/soluciones', (req, res) => res.render('soluciones'))

router.get('/comerciantes', (req, res) => res.render('comerciantes'))

export default router
