import http from "node:http"
import { getHtmlFile } from "./utils/getHtmlFile.js"
import 'dotenv/config'

console.log(typeof process.env.VIDEO_URL)

const PORT = 8080

const server = http.createServer((req, res) => {

    let url = new URL(req.url, `http://${req.headers.host}`)

    const path = url.pathname

    if (url.pathname === '/' && req.method === 'GET'){
        getHtmlFile(res, 'index')
    } else if (url.pathname === '/contact-me' && req.method === 'GET'){
        getHtmlFile(res, url.pathname)
    }else if (url.pathname === '/about' && req.method === 'GET'){
        getHtmlFile(res, url.pathname)
    } else {
        getHtmlFile(res, '404')
    }

})


server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))