import { usuariosDao  } from '../daos/index.js';
import { createHash } from '../utils/crypt.js';


import { Router } from 'express';
export const register = Router();


register.get('/', (req, res) => {
    console.log('Estas en ruta /register')
    res.render('pages/register')
})


register.post('/', async(req, res) => {
    const usuarios = await usuariosDao.listarAll()
    const email = req.body.email
    const password = createHash(req.body.password)
    if(usuarios.find(usuario => usuario.email == email)){
        global.ruta = '/register'
        global.error = "email ya registrado por otro usuario"
        res.redirect('/error')
    } else {
        await usuariosDao.guardar( {email: email, password: password })
        subtitleLogin = 'Usuario creado exitosamente, Ahora inicia sesion'
        res.redirect('/login')
    }
})