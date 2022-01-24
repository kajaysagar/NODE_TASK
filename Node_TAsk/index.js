const fs = require("fs");
const http = require("http");
const PORT = 8000;
const data = new Date().toString();

fs.writeFileSync("date-time.txt", data);

fs.readFile("date-time.txt", (err, data) => {
  if (err) throw err;
  http
    .createServer((req, res) => {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    })
    .listen(PORT, () => {
      console.log("Listening to port" + PORT);
    });
});
