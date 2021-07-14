// VIEW
let inputEl = document.querySelector("input[type=text][name=toInput]");

let todos = [];

let todoContainerEl = document.querySelector(".todo-container");

function App(arrName) {
    todoEl = document.createElement("div");
    todoEl.innerHTML = '<input type="checkbox" id='+ arrName.id +'><label>' + arrName.todo + '</label><button class="delete_button" id='+ arrName.id +' onclick="test(this);">Delete</button>';
    todoEl.className = 'todo';
    todoContainerEl.appendChild(todoEl);
}

let plusBtnEl = document.querySelector(".add-todo .input_button");
//  let deleteBtnE1 = document.querySelector(".add-todo .delete_button");
//document.querySelector('.fail').innerHTML = todos.filter(function(el){el.done == true}).length;

plusBtnEl.addEventListener("click", function(){
        let newTodo = {
        id: todos.length,
        todo: inputEl.value,
        done: false
    }
       addData(todos, newTodo);
       render(todos);
       inputEl.value = "";
       inputEl.focus();
}, false);

function render(list) {
    // list => todo list 그리는 작업
       todoContainerEl.innerHTML="";
       list.forEach(function(el){
           App(el);
       });
   }
   
   function addData(original, newData) {
       original.push(newData);
   }
   
   function delData(original, id){
       // index 검사
       
    //    console.log('id', id);
    //    console.log(typeof id);
    //    console.log('original', original);
       let index = original.findIndex(function(element){
                // console.log('original.id', element.id);
           return element.id === Number.parseInt(id);
       });
    //    console.log('index', index);
       original.splice(index,1);
   }

//    deleteBtnE1.addEventListener("click",function(){
//     let id = this.getAttribute("id");
//     delData(todos, id);
//     render(todos);
//     inputEl.value = "";
//     inputEl.focus();
// });

/** dynamic binding */
function test(my){
    // console.log(my);
    console.log(my.id);

    delData(todos, my.id);
    render(todos);
}

// inputEl.addEventListener('keydown', function(e){
//     let newTodo = {
//         id: todos.length,
//         todo: inputEl.value,
//         done: false,
//     }
//    if (e.keyCode === 13){
//        App(newTodo);
//     //    todos.push(newTodo);
//        addData(todos, newTodo);
//        inputEl.value = ""
//        inputEl.focus();
//    }
// });

// plusBtnE2.addEventListener("click", function(e){
//    var target = document.querySelector("label");
//    target.parentNode.innerHTML = "";
// });

// 

// 1. 추가
// LIST 추가 => RENDER 호출

// 2. 삭제
// LIST 삭제 => RENDER 호출




// for (let i = 0; i < todos.length; i++) {
//     let todoEl = document.createElement("div");
//     todoEl.innerHTML = '<input type="checkbox"><label>' + todos[i].todo + '</label>';
//     todoEl.className = 'todo';
//     todoContainerEl.appendChild(todoEl);
// }

//  todos.forEach(
//      function(el){
//      let todoEl = document.createElement("div");
//      todoEl.innerHTML = '<input type="checkbox"><label>' + el.todo + '</label>';
//      todoEl.className = 'todo';
//      todoContainerEl.appendChild(todoEl);
//      }
//  );