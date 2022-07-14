function passwordPattern(){
    pw = document.getElementById("passwordform");
    cpw = document.getElementById("confirmpasswordform");
    pwText = pw.value;
    cpw.pattern = pwText;
}