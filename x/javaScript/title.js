var default1 = "alesta"; 
var text1 = "a"; 
var text2 = "al"; 
var text3 = "ale"; 
var text4 = "ales"; 
var text5 = "alest";
var text4 = "alesta";  
var changeRate = 1000; // Zaman ayarı [1000 = 1 Saniye]
var messageNumber = 0;

function changeStatus() {
if (messageNumber == 0) {
window.status=default1;
document.title=default1;
messageNumber = 0;
}
messageNumber++;
setTimeout("changeStatus();",changeRate);

}

changeStatus();