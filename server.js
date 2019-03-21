let express = require('express');
let serveStatic = require('serve-static');
 
let app = express();
 
app.use(serveStatic('www', {'index': ['index.html', 'index.htm']}));

//app.listen(8080);
app.listen(process.env.PORT, '0.0.0.0');

console.log('Server started on 0.0.0.0:' + process.env.PORT);