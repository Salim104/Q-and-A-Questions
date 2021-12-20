//using selectors inside the element
// traversing the dom
const btns =document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
         let classItem =e.currentTarget.parentElement.parentElement;
         classItem.classList.toggle('show-text')
    })
 })