import express from "express"

const app = express()
app.set("view engine" , "pug")

app.get("/" ,(req, res) => {
    res.send("<h1>Welcome to server side rendering</h1>")
})

app.get("/login" , (req , res) => {
    res.render("partials/login", {
        pageTitle: 'Login Page',
        pageHeading: 'Login to your page',
        buttonText: 'Login'
    })
})

app.listen(3000,() => {
    console.log("server started at 3000")
})