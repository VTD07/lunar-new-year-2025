var correctusername="Bún iu";
var correctpassword="12092007"
function verify()
{
    event.preventDefault(); 
    var username=document.getElementById("logemail").value;
    var password=document.getElementById("logpass").value;
    if(username==='' || password==='')
    {
        alert("Embe hãy nhập đủ thông tin ạ");
    }
    else if (username!=correctusername || password!=correctpassword)
    {
        alert("Embe hãy xem lại thông tin ạ");
    }
    else 
    {
        window.location.href="nextpage.html";
    }
}
function fyp()
{
    alert("Embe hãy inbox instagram: vtd.07 để biết thêm chi tiết ạ")
}