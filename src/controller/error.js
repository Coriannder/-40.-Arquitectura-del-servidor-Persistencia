


export const getErrorController = (req, res) => {
    console.log(req.session)
    res.render('pages/error', {
        error: global.error,
        ruta: global.ruta
    })
}