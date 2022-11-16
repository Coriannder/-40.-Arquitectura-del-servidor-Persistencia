
export const getInfoController = (req, res) => {
    const processInfo = {
        platform: process.platform,
        version: process.version,
        title: process.title,
        execPath: process.execPath,
        processId: process.pid,
        rss: process.memoryUsage().rss,
        numberOfProcessors: numCPUs
    }
    res.send(`Estas en el puerto ${port}`)
}


export const getInfoZipController = (req, res) => {
    res.send(`Estas en el puerto ${port}`)
}