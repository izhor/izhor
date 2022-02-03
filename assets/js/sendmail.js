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