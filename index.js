import http from "http"
import fs from "fs"

const server = http.createServer(handleRequest)
server.listen(3000)

function handleRequest(request, response) {
  if (request.url == "/") {
    const html = fs.readFileSync("index.html")
    response.end(html)
  } else {
    const css = fs.readFileSync("style.css")
    response.end(css)
  }
}

