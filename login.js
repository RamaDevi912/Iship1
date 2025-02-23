// document.getElementsByTagName('table').addEventlistener('submit',function(event)
// {
//     event.preventDefault();
//     const username=document.getElementById('f-newuser').value;
//     const password=document.getElementById('f-newpass').value;


//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');
//     if(username == storedUsername && password ==storedPassword){
//         window.location.href='./home.html';
//         alert('User registered successfully!');
//     } else {
//         alert('Please fill in both fields');
//     }
// });
// function check(){
//     document.getElementById('loginform').addEventListener('submit', function(event) {
//         event.preventDefault();
//         const loginUsername = document.getElementById('f-username').value;
//         const loginPassword = document.getElementById('f-password').value;

//           localStorage.setItem('username',loginUsername);
//          localStorage.setItem('password',loginPassword);

//         // const storedUsername = localStorage.getItem('username');
//         // const storedPassword = localStorage.getItem('password');
    
//         // if (loginUsername === storedUsername && loginPassword === storedPassword) {
//         //     document.getElementById('loginStatus').textContent = 'Login successful! Redirecting to the home page...';
//         //     // Redirect to the home page
//         //     window.location.href = './home.html';
//         // } else {
//         //     document.getElementById('loginStatus').textContent = 'Invalid username or password';
//         // }
//     });
// }
