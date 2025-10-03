const fs = require("fs");

const requestHandler = (req, res) => {
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
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("Vijay.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1> hello my first node.js server </h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
  someText: "some hard coded text",
};
