const correctUserNames = ["bropet@mail.ru","test@test.com"] // массив из корректных e-mail
const correctPass = ["123","test"] // массив из корректных паролей, где порядок паролей должен соотвсетвовать порядку корректных e-mail из массива выше
const random =  Math.floor(Math.random() * correctUserNames.length)
exports.username = correctUserNames[random];
exports.pass = correctPass[random];