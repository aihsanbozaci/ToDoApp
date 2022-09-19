const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');

const generateTemp = add =>{
    const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${add} </span>
    <i class="fa-solid fa-trash delete"></i>
</li>`;
list.innerHTML+=html;
}


addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const add = addForm.add.value.trim();
    console.log(add);
    if(add.length>0){
        generateTemp(add);
        addForm.reset();
    } 
})

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove(); 
    }
})

const filterToDo=text=>{

    Array.from(list.children)
    .filter(todo => !todo.textContent.includes(text) ) 
    .forEach(todo=>todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.includes(text) ) 
    .forEach(todo=>todo.classList.remove('filtered'));
}

search.addEventListener('keyup',()=>{
    const text = search.value.trim().toLowerCase();
    filterToDo(text);
})