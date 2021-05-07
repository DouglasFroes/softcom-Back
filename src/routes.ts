import { Router } from 'express'
import { countClapsController } from './useCases/CountClaps'
import { createArticuleController } from './useCases/CreateArticle'
import { createUserController } from './useCases/createUser'

const router = Router()

router.get('/', (req, res) => res.status(200).json({ api: 'on' }))
router.post('/user', (req, res) => createUserController.handle(req, res))
router.post('/article', (req, res) => createArticuleController.handle(req, res))
router.post('/claps', (req, res) => countClapsController.handle(req, res))

export default router
