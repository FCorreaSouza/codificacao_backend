const express = require('express')
const app = express()
const port = 3000


app.get('/alunos/:id',(req, res)=>{
  const id =parseInt(req.params.id)
  const alunos = alunos.find(a => a.id === id)
     if (!alunos){
      return res.status(404).json({
       success:false,
       message:'aluno não encontrado'     
      })
    }
   res.json({
    success: true,
    data: aluno,
   })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


///:)//