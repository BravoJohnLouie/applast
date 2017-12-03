
//<span class="sample1-address">Address: <input type="text" class="address" name=""></span>

document.getElementById("sample1-button").addEventListener("click",function(){
var sample1f = document.getElementById("sample1-first").value;
var sample1m =  document.getElementById("sample1-middle").value;
var sample1l = document.getElementById("sample1-last").value;
var sample1FullName= sample1f+" "+sample1m+" "+sample1l;
var address = document.getElementById("address").value;
var gender = document.getElementsByTagName("gender").value;








localStorage.setItem("gender",gender);
localStorage.setItem("sample1fulladdress",address);
localStorage.setItem("sample1-fullName",sample1FullName);

})