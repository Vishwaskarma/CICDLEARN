import express from 'express'
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello world server is running');
})
app.get('/about',(req,res)=>{
    res.send('this is about page');
})

app.listen(3000,()=>{
    console.log(`Server running on port ${port}`)
}
)