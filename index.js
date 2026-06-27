import express from 'express'
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send('Hello world server is running');
})
app.get('/about',(req,res)=>{
    res.send('this is about page');
})
app.get('/contact',(req,res)=>{
    res.send('this s contact page');
})
app.get('/service',(req,res)=>{
    res.send('This is service page');
})
app.get('/Home',(req,res)=>{
    res.send('Hello this is home page new page');
})

app.listen(3000,()=>{
    console.log(`Server running on port ${port}`)
}
)