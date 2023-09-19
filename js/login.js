
document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('submit button clicked')
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    console.log(email)
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    console.log(password)
    if (email === 'sudeptaghosh09@gmail.com' && password === '123456') {
        window.location.href = 'bank.html'
    }
    else {
        alert('invaild user')
    }
})