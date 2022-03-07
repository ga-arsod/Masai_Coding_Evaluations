let express = require("express");

let app = express();

app.use(logger);

app.get("/books", (req, res) => {
    let data = { 
        route: req.path,
    }
    res.send(data);
    console.log(data);
})

app.get("/libraries",checkPermission("libraries"), (req, res) => {
    let data = { 
        route: req.path,
        permission : req.permission
    }

    res.send(data);
    console.log(data);
})

app.get("/authors", checkPermission("authors"), (req, res) => {
    let data = { 
        route: req.path,
        permission : req.permission
    }
    res.send(data);
    console.log(data);
})

function logger(req, res, next) {
    next();
}

function checkPermission(user) {
    return function logger2(req, res, next) {
        if(user == "authors" || user == "libraries") {
            req.permission = true;
        }
        else {
            req.permission = false;
        }
        next();
    }
}

app.listen(4001, () => {
    console.log("listening to port 4001 of C-1 Evaluation")
})