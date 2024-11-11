$(function() {
    $('.one').hide();
    $('.two').hide();

    $('#btn-two').click(function() {
        $('.one').slideDown();
        $('.two').show(1000);
    });
    $('#btn-one').click(function() {
        $('.one').slideUp();
        $('.two').hide(800);
    });

    // FOEM
    $('#SubmitBtn').mouseover(function() {
         let Firstname = $('#Firstname').val();
         if(Firstname === ""){alert("Firstname cannot be empty")}
         let Lastname = $('#Lastname').val();
         if(Lastname === ""){alert("Lastname cannot be empty")}
         let Email = $('#Email').val();
         if(Email === ""){alert("Email cannot be empty")}
         let Password = $('#Password').val();
         if(Password === ""){alert("Password cannot be empty")}
         let Address = $('#Address').val();
         if(Address === ""){alert("Address cannot be empty")}
         let select = $('#select').val();
         if(select === ""){alert("select cannot be empty")}
         let phone = $('#phone').val();
         if(phone === ""){alert("phone cannot be empty")}
    });

    $('#SubmitBtn').click(function() {
        let Firstname = $("#Firstname").val();
        let Lastname = $("#Lastname").val();
        let Email = $("#Email").val();
        let Password = $("#Password").val();
        let Address = $("#Address").val();
        let select = $("#select").val();
        let phone = $("#phone").val();

        alert("Firstname: " + Firstname + "\nLastname: " + Lastname + "\nEmail: " + Email + 
            "\nPassword: " + Password + "\nAddress: " + Address + "\nSelect: " + select + "\nphone: " + phone);
        return false; // to prevent form from submitting
 
   });

   $('#LoginBtn').mouseover(function() {
    let Fullname = $('#Fullname').val();
    if(Fullname === ""){alert("Fullname cannot be empty")}
    let Email = $('#Email').val();
    if(Email === ""){alert("Email cannot be empty")}
    let Password = $('#Password').val();
    if(Password === ""){alert("Password cannot be empty")}
    let phone = $('#phone').val();
    if(phone === ""){alert("phone cannot be empty")}
    });

    $('#LoginBtn').click(function() {
    let Fullname = $("#Fullname").val();    
    let Email = $("#Email").val();
    let Password = $("#Password").val();
    let phone = $("#phone").val();

    alert("Fullname: " + Fullname + "\nEmail: " + Email + 
        "\nPassword: " + Password + "\nphone: " + phone);
    return false; // to prevent form from submitting

    });
});

