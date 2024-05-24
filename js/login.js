const user={user_name:'',password:''}
document.querySelector('.confirm').addEventListener('click',()=>{
    user.user_name=document.querySelector('input[type=login]').value;
    user.password=document.querySelector('input[type=password]').value;
    localStorage.setItem("user",JSON.stringify(user));
})
