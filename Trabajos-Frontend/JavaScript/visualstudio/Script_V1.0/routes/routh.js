import {Router} from "express";
import { getusuarios, getusuario, createusuarios, updateusuarios, deleteusuarios } from '../controllers/control.js';

const router = Router()

router.get('/', getusuarios)
router.get('/:id', getusuario)
router.post('/', createusuarios)
router.put('/:id', updateusuarios)
router.delete('/:id', deleteusuarios)

export default router   