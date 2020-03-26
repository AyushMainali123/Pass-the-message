
const submitBtn = document.querySelector('[data-submit-button]');
const inputText = document.querySelector('[data-message] input[type = "text"]');
const deliveredText = document.querySelector('[data-message-delivered]');


submitBtn.addEventListener('click', ()=>{
    if(inputText.value === ''){
        alert('Please Input Some Message');
    }
    else{
        deliveredText.textContent = inputText.value;
        inputText.value = '';
    }
})
 


