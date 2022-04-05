//navbar toggle
function changeIcons(){
    var toggleBtn = document.getElementById("togglebtn");
    if (document.getElementById("togglebtn").className == "fas fa-bars") {
        toggleBtn.classList.remove("fa-bars");
        toggleBtn.classList.add("fa-times");

    }else{
        toggleBtn.classList.remove("fa-times");
        toggleBtn.classList.add("fa-bars");
    }
}

//scroll effect

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
                window.location.hash = hash;
            });
        }
    });
});

//send to email

function sendEmail(){var sender=document.getElementById('name').value;
var email=document.getElementById('email').value;
var question=document.getElementById('question').value;
var content=sender+" ("+email+"): "+question;
if(sender==""||email==""||question=="")
    {
    alert(" message failed : all text input must be filled")
    }else{
    Email.send(
        {
            SecureToken:"5ed1c3a9-6727-46ba-849b-865ef135f9eb",
            To:'alif.zhorif@gmail.com',
            From:"izoru.experimental@gmail.com",
            Subject:"Question from "+sender,
            Body:content
        }).then(message=>alert(message));
    }
} 
function emptyInput(){
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('question').value='';
}