


export const getLoginController =  (req, res) => {
    res.render('pages/login', {subtitleLogin: global.subtitleLogin})
}

export const postLoginController =  (req , res , next) => {
    global.ruta = 'login'
    global.error = 'error de logueo'
    next()
}