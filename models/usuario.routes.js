import { Router } from 'express';
import usuariocontroller from '../controllers/usuario.controllers.js'

const routes = new Router();

routes.post('/',usuariocontroller.index)
routerusuario.post('/',usuariocontroller.store)