import fs from "node:fs"

export const getHtmlFile = (res, path) => {
    fs.readFile(`./pages/${path}.html`, 'utf8', (err, data) =>{
        if (err) {
            console.error(err);
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}