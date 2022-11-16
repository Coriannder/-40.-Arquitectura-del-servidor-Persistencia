
import express from 'express'
import { Server as HttpServer }  from 'http'
import { productosDao , mensajesDao , usuariosDao } from './daos/index.js'
import { ContenedorMemoria } from './container/ContenedorMemoria.js'
import { createManyProducts } from './mocks/productosMocks.js'
import session from 'express-session'
import cluster from 'cluster'
import { cpus } from 'os'

const numCPUs = cpus().length;
const app = express()
const httpServer = new HttpServer(app)


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//------------------Configuracion EJS---------------------------------//
app.set('views', './views')
app.set('view engine', 'ejs')


//-----------------Configuracion Session-------------------------------//

app.use(session(mongoSession))
app.use(passport.initialize())
app.use(passport.session())

//------------------------PASSPORT----------------------------------//
import passport from 'passport'


//------------------------------RUTAS---------------------//

global.subtitleLogin
global.ruta = 'login'
global.error

app.use( '/info' , info )
app.use('/api/randoms', noBloqueante )
app.use('/login' , login )
app.use( '/index' , index )
app.use( '/logout' , logout )
app.use( '/register' , register )
app.use( '/error' , error )
app.use( '*' , noImplementRoutes )

const mensajesMemoria = new ContenedorMemoria()        // Instancio contendor de mensajes en memoria

await mensajesDao.borrarTodo()                           // Borro los mensajes guardados en mongoDB
await productosDao.borrarTodo();                         // Booro los productos guardados en mongoDB


const prod = createManyProducts(5)                       // Mockeo 5 productos
prod.forEach(elem => {
    productosDao.guardar(elem)
})



//------------------YARGS---------------------------------//
import yargs from  'yargs'

const { /* port, */ mode } = yargs(process.argv.slice(2))
    .alias({
        //p: 'port',
        m: 'mode'
    })
    .default({
        //port: 8086,
        mode: 'fork'
    })
    .argv

//------------------------------------------------------------------//

import dotenv from 'dotenv'
import { login } from './routes/login.js'
import { index } from './routes/index.js'
import { logout } from './routes/logout.js'
import { register } from './routes/register.js'
import { noImplementRoutes } from './routes/noImplementRoutes.js'
import { error } from './routes/error.js'
import { mongoSession } from './session/mongoSession.js'
import { info } from './routes/info.js'
import { noBloqueante } from './routes/no-bloqueante.js'
dotenv.config()
let port = process.env.PORT || 8080

if(mode === 'cluster'){
    if (cluster.isPrimary) {
        console.log(`Primary ${process.pid} is running`);

        // Fork workers.
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {

    //------------------Configuracion Server---------------------------------//

    const server = httpServer.listen(port, ()=>{
        console.log(`Servidor escuchando en el puerto ${server.address().port}`, `numero de cpus ${numCPUs}`)
    })
    server.on(`error`, error => console.log(`Error en servidor: ${error}`))

    }

}else{

    //------------------Configuracion Server---------------------------------//
 
    //const PORT = 8080
    const server = httpServer.listen(process.env.PORT, ()=>{
        puerto = server.address().port
        console.log(`Servidor escuchando en el puerto ${server.address().port}`, `numero de cpus ${numCPUs}`)
    })
    server.on(`error`, error => console.log(`Error en servidor: ${error}`))

}

let puerto;




