// redirect to the bank main page

document.getElementById('login-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const userEmailValue = userEmail.value;

    const userPass = document.getElementById('user-password');
    const userPassValue = userPass.value;
    

    if (userEmailValue == 'hello@gmail.com' && userPassValue == 'gmail')
    {
        window.location.href = 'bank.html';
    }
})