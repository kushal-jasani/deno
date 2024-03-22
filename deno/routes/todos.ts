import { Router } from "https://deno.land/x/oak/mod.ts";

const router= new Router();

interface Todo{
    id:string;
    text:string; 
}
let todos:Todo[]=[];
router.get('/todos',(ctx)=>{
    ctx.response.body={todos:todos}
})

router.post('/todos',async(ctx)=>{
    const data=await ctx.request.body();
    const newtodo:Todo={
        id:new Date().toISOString(),
        text:data.value.text
    }
    todos.push(newtodo);
    ctx.response.body={message:'new todo created',todo:newtodo}
})

router.put('/todos/:todoId',async  (ctx)=>{
    const tid=ctx.params.todoId;
    const data=await ctx.request.body();

    const todoIndex = todos.findIndex((todo) => {
        return todo.id == tid;
      });
    todos[todoIndex] = { id: todos[todoIndex].id, text: data.value.text };
    ctx.response.body={message:'updated todo'}
})

router.delete('/todos/:todoId',(ctx)=>{
    const tid = ctx.params.todoId;
   todos = todos.filter((todo) => {
    todo.id !== tid;
  });
  ctx.response.body={message:'deleted todo'} 

})

export default router;