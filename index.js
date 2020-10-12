const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1, name: 'Electronic'},
    {id:2, name: 'data stracture'},
    {id:3, name: 'machine learning'},
    {id:4, name: 'Deep learning'}
];

app.post('/api/courses',(req, res)=>{
    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    


    if(result.error){
        res.status(400).send(result.error);
        return;
    }
    const course ={
        id: courses.length +1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

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