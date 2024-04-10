const zod = require('zod');
    
const createTodo = zod.ZodObject({
    title : zod.ZodString,
    description : zod.ZodString
})
const updateTodo = zod.ZodObject({
    id : zod.ZodString
})

module.export = {
    createTodo,
    updateTodo
}