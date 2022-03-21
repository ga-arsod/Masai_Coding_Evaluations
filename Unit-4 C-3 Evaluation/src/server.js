let connect = require("./config/db");
let app = require("./index");

app.listen(5400, async () => {
    try{
        console.log("Listening to port 5400");
        await connect();
    }
    catch(err) {
        console.log({error: err});
    }
});