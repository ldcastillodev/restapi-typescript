import { Router } from 'express';
import { createTecnico, getTecnicos,  getTecnico, deleteTecnico  } from '../controllers/tecnicos';
import { createServicio, getServicios } from "../controllers/servicios"; 
import { login } from '../controllers/login';
import { verificarToken } from '../routes-protection/token';

const router = Router();

// GET  Routes

router.get('/tecnicos', verificarToken, getTecnicos);

router.get('/tecnicos/:id', verificarToken, getTecnico);

router.get('/servicios/:id_tecnico', verificarToken, getServicios);

// POST Routes
router.post('/create-servicio', verificarToken, createServicio);
router.post('/create-tecnico', verificarToken, createTecnico);
router.post('/login', login);
// DELETE Routes
router.delete('/delete-tecnico/:id', verificarToken, deleteTecnico);

export default router;


