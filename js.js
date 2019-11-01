var d = new Date();
var day = new Array("Воскресенье", "Понедельник", "Вторник",
    "Среда", "Четверг", "Пятница", "Суббота");
document.write(day[d.getDay()] + " " + d.getDate() + " ");