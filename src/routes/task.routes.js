const express = require('express');
const router = express.Router();

//-------------------------------------- Task Model --------------------------------------
const Task = require('../models/task');//obtenemos el modelo de la collection task


//-----LISTAR
router.get('/',async (req, res) => {
    //-----metodo 1
    // Task.find(function (err, tasks) {
    //     console.log('tareas:', tasks)
    // })
    //-----metodo 2
    // Task.find()
    //     .then(data=>console.log(data))
    //     .catch(error=>console.log(error))

    const tasks = await Task.find();
    res.json(tasks);

})

// Obtener
router.get('/:id', async (req, res) => {
    // const task = await Task.findById(req.params.id);
    const task = await Task.findById({_id:req.params.id});
    res.json(task);
});


// ADD a new task
router.post('/', async (req, res) => {
        //el req  recivira  dos  datos
     const { title, description } = req.body;//almacenamos las  variables que  recibimos

    //const task = new Task({title, description});
    const task = new Task({"title":title, "description":description});

    // con esto lo almacenamos en la  DB
    await task.save();

    console.log('task',task)
    res.json({status: 'Task Saved'});

});

// UPDATE a new task
//http://localhost:3000/api/task/5ca521e250a01c1b98ff1893
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    // await Task.findByIdAndUpdate({_id:req.params.id}, newTask);
    console.log('id',req.params.id)
    res.json({status: 'Task Updated',id:req.params.id});
});

//-- DELETE
//http://localhost:3000/api/task/5ca521e250a01c1b98ff1893
router.delete('/:id', async (req, res) => {
    // await Task.findByIdAndRemove(req.params.id);
    await Task.findByIdAndRemove({_id:req.params.id});
    res.json({status: 'Task Deleted'});
});

/*
// GET all Tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'Task Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});
*/
module.exports = router;