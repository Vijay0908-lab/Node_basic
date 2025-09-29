const http = require("http");
const fs = require("fs");
// function rqListener(req, res) {
//   console.log(req.url, req.method, req.headers);
//   //process.exit(); //used for terminating the server
// }

// const server = http.createServer(rqListener);

// server.listen(3000);

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write(
      '<body><h1> Enter your message to the development world </h1><form action="/Vijay" method ="POST" ><input type="text" name="message"><button type="text">send</button></input></form> </body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/Vijay" && method === "POST") {
    fs.writeFileSync("Vijay.txt", "Dummy");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1> hello my first node.js server </h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
