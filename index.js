import express from 'express';
import path from 'path';
const app = express()
const port = process.env.PORT || 8080;
const __dirname = path.resolve();


//app.get that redirect to index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})