$(document).ready(function () {

    $("#signinForm").submit(function () {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val();

        // can't leave username empty
        if (username == "") {
            $("#usernameError").text("Username is required");
        }
        if (password === "") {
            $("#passwordError").text("Password is required");
        }
        // password should begin with capital letter
        if (password[0] != password[0].toUpperCase()) {
            $("#passwordError").text("Password should  start with a capital letter");
        }
        let passcheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        let numcheck = /[0-9]/;

        let pc = passcheck.test(password);
        let nc = numcheck.test(password)
        if(!pc && !nc) {
            $("#passwordError").text("Password should  contain special characters and numbers");
        }

    })

    $("#signupForm").submit(function () {
        event.preventDefault();
        let fname = $("#fname").val();
        let lname = $("#lname").val();
        let email = $("#email").val();
        let username = $("#Username").val();
        let age = $("#age").val();
        let num = $("#number").val();
        let pass = $("#pw").val();
        let cpass = $("#cp").val();

        emailregex = /.com/;
        emailcheck = emailregex.test(email);
        if (!emailcheck) {
            $("#eerror").text("Email should contain an @");

        }
        if (age === "" || isNaN(age) || parseInt(age) <= 0 || parseInt(age) >= 100) {
            $("#ageError").text("age invalid");
        }

        if(num.length > 11) {
            $("#nerror").text("number can't be more than 11 digits");
        }


        if (pass != cpass) {
            $("#cperror").text("password does not match");
        }
        if(fname == "") {
            $("#ferror").text("Field can not be empty");
        }

        if(lname == "") {
            $("#lError").text("Field can not be empty");
        }
        if(email == "") {
            $("#eerror").text("Field can not be empty");
        }
        if(username == "") {
            $("#uerror").text("Field can not be empty");
        }
        if(age == "") {
            $("#ageError").text("Field can not be empty");
        }
        if(num == "") {
            $("#nerror").text("Field can not be empty");
        }
        if(pass == "") {
            $("#perror").text("Field can not be empty");
        }
        if(cpass == "") {
            $("#cperror").text("Field can not be empty");
        }

    })

})