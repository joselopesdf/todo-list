const tarefas =document.getElementById('tarefas')
const adicionar =document.getElementById('adicionar')
const container =document.querySelector('.container')

adicionar.addEventListener('click',function(){
    const div =document.createElement('div')
    div.classList.add('nova-div')
    const li=document.createElement('li')
    li.style.listStyle='none'
    li.classList.add('tarefas')
    li.innerText=`${tarefas.value}`
   
   
    div.appendChild(li)

    const marcar =document.createElement('button')
    marcar.innerText='Marcar'
    marcar.classList.add('marcar')

    const eliminar =document.createElement('button')
    eliminar.innerText='Eliminar'
    eliminar.classList.add('eliminar')
    
    div.appendChild(marcar)
    div.appendChild(eliminar)
    if(tarefas.value==''){
        alert('adiciona uma tarefa!')
    }
    else{

        container.appendChild(div)
        tarefas.value=''
    }
    marcar.addEventListener('click',function(){
       li.style.textDecoration='line-through' 
        
    })
   eliminar.addEventListener('click',function(e){
    const eliminando =e.target
    eliminando.parentElement.remove()

   })
    

   
    
}
    
)
