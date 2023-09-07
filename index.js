import express from 'express';
const app = express();
app.get('/', (req, res)=>{
    res.send('Any response');

});

app.listen(5000, ()=>{
    console.log('Server is running');
});