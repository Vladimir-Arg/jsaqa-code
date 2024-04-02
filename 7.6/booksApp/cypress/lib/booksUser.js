const correctUserNames = ["bropet@mail.ru","test@test.com"]; // массив из корректных e-mail
const correctPass = ["123","test"]; // массив из корректных паролей, где порядок паролей должен соотвсетвовать порядку корректных e-mail из массива выше
/* вот тут можно добавить дополнительных пользователей, либо изменить данные текущих пользователей
https://github.com/Vladimir-Arg/jsaqa-code/blob/738627fda636c1606a87e3414d3c1661dfc3c6fb/booksApp/server.js#L98-L101
*/
const random =  Math.floor(Math.random() * correctUserNames.length);
exports.username = correctUserNames[random];
exports.pass = correctPass[random];