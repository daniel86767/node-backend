import { Router } from 'express';
import {UsuarioController} from '../controllers/Usuario.Controller.js';

const routerUsuario = new Router();

routerUsuario.get('/', UsuarioController.index)
routerUsuario.post('/',UsuarioController.store)

export default routerUsuario;