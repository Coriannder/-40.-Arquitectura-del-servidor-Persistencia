import { usuariosDao } from '../daos/index.js';



export const getLogoutController = async (req, res) => {
    console.log('Estas en ruta /logout')
    res.render('pages/logout', { nombre : (await usuariosDao.listar(req.session.passport.user))[0].email })
    console.log(await usuariosDao.listar(req.session.passport.user))
    req.session.destroy()
}