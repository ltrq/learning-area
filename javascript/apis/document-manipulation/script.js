const inputHTML = document.querySelector('input');
const ulHTML = document.querySelector('ul');
const buttonHTML = document.querySelector('button');

buttonHTML.addEventListener('click', () => {
    const text = inputHTML.value;       //4.Storing current value of input
    inputHTML.value = '';               //5. Clearing the input field


    const li = document.createElement('li'); //6a. Creating a new list item
    const span = document.createElement('span'); //6b. Creating new span element
    const button = document.createElement('button'); //6c. Creating new button element

    li.appendChild(span);   //7. Append Span and Button to list item
    li.appendChild(button);

    span.textContent = text;        //8.Span content to input text
    button.textContent = 'delete';  //8. Button content to delete
    
    ulHTML.appendChild(li);         //9. Append list item to ul;
   
    button.addEventListener('click', () => { //10.Delete li
        button.parentNode.remove();
        inputHTML.focus();
    })
    inputHTML.focus();      //11.focus on input field
})


