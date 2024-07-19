
function validateForm(){
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let errname = document.getElementById('err_name');
    let erremail = document.getElementById('err_email');
    let phone = document.getElementById('phone').value.trim();
    let errphone = document.getElementById('err_phone');
    let errcountry = document.getElementById('errcountry');
    let erraddress = document.getElementById('erraddress');
    let address = document.getElementById('address').value.trim();
    let country = document.getElementById('country').value;
    let checkbox = document.getElementById('checkbox').value.trim();

    let namepattern = /[A-Z]([a-zA-Z\s])+/;
    let error = 0;
    if(name == ''){
        errname.innerText = 'Enter name';
        error++;
    } else if(!namepattern.test(name)){
        errname.innerText = 'Enter valid name character';
        error++;
    } else {
        errname.innerText = "";
    }

    var emailptrn = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(email == ''){
        erremail.innerText = 'Enter email';
        error++;
    } else if(!emailptrn.test(email)){
        errname.innerText = 'Enter valid email';
        error++;
    } else {
        erremail.innerText = "";
    }
    if(phone == ''){
        errphone.innerText = 'Enter phone numnber';
        error++;
    }
    if(address == ''){
        erraddress.innerText = 'Enter your address';
        error++;
    }
    
    if (country == ''){
        errcountry.innerText = 'choose your country';
        error++;
    }
    if (!(checkbox.checked)){
        errmsg.innerText = 'check in terms and conditions';
        error++;
    }
    if(error == 0){
        alert("your form is validate");
        return false;
    }
}