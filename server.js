const express = require('express')
const connectDB = require('./config/db');
const app = express()
const morgan = require('morgan')
const cors = require('cors');
const PORT = process.env.PORT || 5000

connectDB();

app.use(express.json({extends:false})); 

app.use(cors());

app.use(morgan('dev'))

app.get('/',(req,res)=>{
  res.send("Homepage Server");
});


// respond with "hello world" when a GET request is made to the homepage
app.use('/product',require('./routes/product.routes'));
app.use('/user',require('./routes/users.routes'))

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
