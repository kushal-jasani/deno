// let msg:string;
// msg='hello deno'
// console.log(msg)
// const text='hello this is kushal using deno';
// const encoder=new TextEncoder();
// const data=encoder.encode(text);


// Deno.writeFile('message.txt',data).then(()=>{
//     console.log('wrote to file')
// }).catch()

// Deno.serve({port:3030},
// (_req)=>new Response('hello world'));

import { Application } from "https://deno.land/x/oak@14.2.0/mod.ts";

const app = new Application();
 
app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

await app.listen({ port: 3000 });