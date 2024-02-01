function validate() {
    var username = document.getElementById('email');
    var password = document.getElementById('password');
    let regular_expression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (username.value.trim() == '') {
        alert('Email cannot be empty')
        return false;
    } 
 else if (!regular_expression.test(username.value.trim())) {
    alert('Invalid Email Format');
    username.style.border='2px solid red'
    return false;
}
    else if (password.value.trim() == '') {
        alert("I will be champion one day");
        return false;}
    else if (password.value.trim().length < 7) {
        alert('Password is Too Short');
        password.style.border='2px solid red'
        return false;
    } else {
        return true;
    }
}
