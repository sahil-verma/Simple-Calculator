/**
 * Created by sahil on 2017-01-25.
 */

let connect = require('connect');

let url = require('url');

let app = connect();

let index = function(request, response, next){
    let qs = url.parse(request.url, true).query;
    let method = qs.method;
    let x = parseInt(qs.x);
    let y = parseInt(qs.y);

    switch (method) {
        case 'add': response.end(`${x} + ${y} = ${x+y}`);
        case 'subtract': response.end(`${x} - ${y} = ${x-y}`);
        case 'multiply': response.end(`${x} X ${y} = ${x*y}`);
        case 'divide': response.end(`${x} / ${y} = ${x/y}`);
        default: response.end('boom!');
    }


};


app.use("/", index);
app.listen(3000, function () {
    console.log("Server running on port 3000");
});
