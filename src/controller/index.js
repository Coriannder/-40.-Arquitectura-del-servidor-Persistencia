import { usuariosDao } from '../daos/index.js';

export const getIndexController = async (req, res) => {
    if(req.isAuthenticated()){
        const email = (await usuariosDao.listar(req.session.passport.user))[0].email
        res.render('pages/index',{nombre: email})
        console.log((await usuariosDao.listar(req.session.passport.user))[0])
    } else {
        res.redirect('/login' )
    }
}