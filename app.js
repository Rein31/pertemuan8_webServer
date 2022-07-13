const fs = require('fs');

const http = require("http");

const port = 3000;

// function for read file
const readFile = (path, res) => {
    fs.readFile(path, (err,data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error : page not found')
        }else {
            res.write(data);
        }
        res.end();
    })
}


http
  .createServer((req, res) => {
    const url = req.url;
    // console.log(url);

    res.writeHead(200,{'Content-Type' : 'text/html'})
    // res.write("Hello World!");

    if (url === '/about') {
        // res.write('<h1>this is about page</h1>'); // using html language
        // res.end();
        readFile('./about.html',res);
    } else if (url === '/contact') {
        // res.write('<h2>this is contact page</h2>'); // using html language
        // res.end();
        readFile('./contact.html',res);
    } else {
        readFile('./index.html',res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
