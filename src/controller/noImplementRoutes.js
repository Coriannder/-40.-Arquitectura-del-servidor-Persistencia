export const getNoImplementRoutesController = (req, res) => {
    res.status(404).send(`Ruta: ${req.method} ${req.url} no esta implementada`)
    //logger.warn(`Ruta: ${req.method} ${req.url} no esta implementada`)
}




