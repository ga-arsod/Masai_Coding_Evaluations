const express = require("express");
const Connect = require("./configs/db");


const MasterController = require("./controllers/master.controller")
const SavingController = require("./controllers/saving.controller");
const FixedController = require("./controllers/fixed.controller");

const app = express();

app.use(express.json());


app.use("/master", MasterController);

app.use("/savings", SavingController);

app.use("/fixed", FixedController);


app.listen(7000, async () => {
    try{
        await Connect();
    }
    catch(err){
        console.log(err);
    }
    console.log("Listening to 7000")
})