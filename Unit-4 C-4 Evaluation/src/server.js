const app = require("./index");
const connect = require("./config/db");

app.listen(4000, async() => {
    try{
        await connect();
        console.log("Listening to port 4000 of Unit-4 C4");
    }
    catch(err) {
        console.error(err);
    }
});

