const profile_form=document.querySelector('.profile-form')
const calculator=document.getElementById('calc');
const profile=document.getElementById('prof');
const ord=document.getElementById('ord');
const surv=document.getElementById('surv');
const SurveyWindow=document.querySelector('.Survey');
const ordWindow=document.querySelector(".orders");
const calcWindow=document.querySelector('.calculator')
const display=document.getElementById('display');
const imgs=document.querySelector('.imgs')
let card_img=JSON.parse(localStorage.getItem('card-img'));
let displayValue = '';
let order=false;
//Отображает окно калькулятора
calculator.addEventListener(('click'),()=>{
   profile_form.style.display='none';
   calcWindow.style.display='block';
   ordWindow.style.display='none';
   SurveyWindow.style.display='none';
})
//Отображает окно пользователя
profile.addEventListener(('click'),()=>{
    profile_form.style.display='block';
    calcWindow.style.display='none';
    ordWindow.style.display='none';
    SurveyWindow.style.display='none';
})
//Отображает окно истории заказов
ord.addEventListener('click',()=>{
    profile_form.style.display='none';
    calcWindow.style.display='none';
    SurveyWindow.style.display='none';
    if(!order){
    card_img.src.forEach(element => {
      let img=document.createElement('img');
      img.className+='order-img';
      img.src=element;
      imgs.append(img);
    });
    const date=document.createElement('h1');
    date.textContent=card_img.date;
    date.className+='order-date';
    ordWindow.append(date);
    order=true;
    }
    ordWindow.style.display='block';
    
})
//Отображает анкетное окно 
surv.addEventListener('click',()=>{
  profile_form.style.display='none';
  calcWindow.style.display='none';
  SurveyWindow.style.display='block';
  ordWindow.style.display='none';
})
//Добавляем значение на дисплей(цифры,знаки)
function appendToDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}
//Очищаем дисплей
function clearDisplay() {
  displayValue = '';
  display.value = '';
}
//Данная функция считает результата
function calculateResult() {
  try {
    const result = eval(displayValue);//eval("2+2") return ("4")
    displayValue = result.toString();
    display.value = result;
  } catch (error) {
    displayValue = '';
    display.value = 'Error';
  }
}
document.querySelector(".color-change-button").addEventListener('click',()=>{
  document.querySelector(".color-change-button").style.backgroundColor='green';
})

