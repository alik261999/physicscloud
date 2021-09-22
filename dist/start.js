function time(){
    let today=new Date();
    var str=today.toDateString();
    document.getElementById("date").innerHTML=str;
}
function nextPage(){
    var name = document.getElementById("name").value;
    var add = document.getElementById("address").value;
    window.sessionStorage.setItem("name",name);
    window.sessionStorage.setItem("mail",add);
    console.log(name);
    location.href = "bootstrap.html";
    return false;
}