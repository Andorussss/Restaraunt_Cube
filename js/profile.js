const user=JSON.parse(localStorage.getItem('user'));
document.querySelector('input[type=login]').value=user.user_name;
document.querySelector('.profile-name').textContent=user.user_name;
document.getElementById('fname').value=localStorage.getItem('fname');
document.getElementById('lname').value=localStorage.getItem('lname');
let fname;
let lname;
let logout=false;
document.getElementById('fname').addEventListener('input',()=>{
    fname=document.getElementById('fname').value;
})
document.getElementById('lname').addEventListener('input',()=>{
    lname=document.getElementById('lname').value;
})
document.querySelector('.logout').addEventListener('click',()=>{
    if(!logout){ 
    localStorage.setItem('user',{user_name:'',password:''})
    localStorage.setItem('fname','')
    localStorage.setItem('lname','')
    document.querySelector('input[type=login]').value='';
    document.querySelector('.profile-name').textContent='Guest';
    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    const SignIn=document.createElement('a')
    SignIn.href='../html/login.html';
    SignIn.textContent='Sign In'
    document.querySelector('nav').append(SignIn);
    logout=true;
    }
})
