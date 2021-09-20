const http = require('http');

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.end('welcome to home')
};
if(req.url === '/about'){
    res.end('here is our about')
}

res.end(`
<h1>Oops!</h1>
<p> there is no page</p>
<a href="/">back home</a>
`)

})


server.listen(5000)