const express = require("express");
const app = express();
app.use(express.static("../public"));
app.set('view engine','ejs')

app.listen(process.env.PORT || 3000,()=>
    console.log("Levantando un servidor con Express en 3000")
    )
const homeRoutes = require ('./src/routes/homeRoutes')

app.use('/',homeRoutes)

const loginRoutes = require ('./src/routes/logInRoutes')

app.use('/login',loginRoutes)

const signinRoutes = require ('./src/routes/signInRoutes')

app.use('/signin',signinRoutes)

const productRoutes = require ('./src/routes/productRoutes')

app.use('/productDetail',productRoutes)

const adminProductRoutes = require ('./routes/adminProductRoutes')

app.use('/adminProduct',adminProductRoutes)