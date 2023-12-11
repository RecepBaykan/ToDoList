const { castObject } = require('../models/todoModels')
const todo = require('../models/todoModels')


const todoAdd = async (req,res) =>
{
    try
    {
        const _todo = await todo.findOne({name: req.body.name})
        if (_todo)
        {
            return res.status(400).json
            (
                {
                    succes: false,
                    mesaage: "Bu isimde kayıt mevcuttur"
                }
            )
        }

        const todoApp = new todo(req.body)
        await todoApp.save()
        .then (() => 
        {
            return res.status(201).json(todoAdd)
            
            
        })
        .catch((err)=>
        {
            return res.status(400).json
            (
                {
                    succes: false,
                    message: "Kayıt sırasında hata oluştur" + err
                }
            )
        })
    }
    catch(error)
    {
        return res.status(500).json
        (
            {
                success: false,
                message: "Kayıt oluşturulmadı"
            }
        )
    }
    
}

const todoGetAll = async (req, res) => 
{
    try
    {
        const todoGetAll = await todo.find({})
        return res.status(200).json
        (
            {
                succes: true,
                data: todoGetAll
            }
        )

    }
    catch(error)
    {   
        return res.status(500).json
        (
            {
                succes: false,
                message: "kayıtlar getirilmedi"
            }
        ) 
    }
}

const todoUpdate = async (req, res) =>
{
    const {id} = req.params
    
    try
    {

        const todoUpdate = await todo.findByIdAndUpdate(id, req.body)
        if(todoUpdate)
        {
            return res.status(200).json
            (
                {
                    succes: true,
                    message: "Kayıt güncellendi"
                }
            )          
        }
        else
        {
            return res.status(400).json
            (
                {
                    succes: false,
                    message: "Kayıt güncellenmedi!"
                }
            )


        } 

    }
    catch(error)
    {
        return res.status(500).json
        (
            {
                succes: false,
                message: "Kayıt güncellenemedi"
            }
        )
    }
}

const todoDelete = async (req, res) => 
{
    const {id} = req.params
    req.params.id
    try
    {
        const todoDelete = await todo.findByIdAndDelete(id)
        if(todoDelete)
        {
            return res.status(200).json
            (
                {
                    succes: true,
                    message: "Kayıt silindi"
                }
            )
        }
        else
        {
            return res.status(400).json
            (
                {
                    succes: false,
                    message: "Kayıt silinemedi"
                }
            )

        } 
    }
    catch(error)
    {
        return res.status(500).json
        (
            {
                succes: false,
                message: "Kayıt silinemedi"
            }
        )
    }
}

const todoGet = async(req, res) => 
{
    const {id} = req.params
    
    const todoGet = await todo.findById(id)
    if(todoGet)
    {
        return res.status(200).json(todoGet)
    }
    else
    {
        return res.status(404).json
        (
            {
                succes: false,
                message: "Kayıt bulunumadı"
            }
        )
    }
}

module.exports = 
{
    todoAdd,
    todoGetAll,
    todoDelete,
    todoGet,
    todoUpdate
}
