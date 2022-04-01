// const { connect } = require("net");
const port = process.env.PORT || 3008;
const app = require("./app");
const connec = require("./configs/db");
app.listen(port, async () => {
    try {
        await connec();
        console.log("listening port 3008")

    } catch (error) {
        console.error(error.message)
    }
})
