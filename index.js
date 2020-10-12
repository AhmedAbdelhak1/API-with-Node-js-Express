const express = require('express');
const app = express();

const courses = [
    {id:1, name: 'Electronic'},
    {id:2, name: 'data stracture'},
    {id:3, name: 'machine learning'},
    {id:4, name: 'Deep learning'}
];

app.get('/',(req,res)=>{
    res.send("Hi what's up");
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('the course with this ID do not exist!!')
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}....!`))