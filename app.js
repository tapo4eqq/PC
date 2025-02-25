document.getElementById("buildButton").onclick = function() {
    document.getElementById("message").textContent = "Вы выбрали сборки компьютеров.";
};

document.getElementById("partButton").onclick = function() {
    document.getElementById("message").textContent = "Вы выбрали комплектующие.";
};

document.getElementById("reviewButton").onclick = function() {document.getElementById("message").textContent = "Вы выбрали обзоры.";
};

document.getElementById("guideButton").onclick = function() {
    document.getElementById("message").textContent = "Вы выбрали руководства.";
};

document.getElementById("contactButton").onclick = function() {
    document.getElementById("message").textContent = "Вы выбрали контакты.";
};