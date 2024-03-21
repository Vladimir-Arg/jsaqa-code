module.exports = { // модуль генерации случайных логинов и паролей
      /*
    randomUsername: function (length) { // генерация случайного логина с заданным количеством символов
      let name = "a"; //здесь будем хранить результат
      let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // возможные символы для генерации
      let charLength = chars.length; // определяем длину
      for (let i = 0; i < length; i++) {
        //запускаем цикл для формирования строки
        name += chars.charAt(Math.floor(Math.random() * charLength));
      }
      return name;
    },
    randomPass: function (length) { генерация случайного пароля с заданным количеством символов
        let name = ""; //здесь будем хранить результат
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"; //возможные символы для генерации
        let charLength = chars.length; //определяем длину
        for (let i = 0; i < length; i++) {
          //запускаем цикл для формирования строки
          name += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return name;
      },
    */
    randomPass: () => {
        return Math.random().toString(36).slice(-10); // генерируются символы вида "0.ХХХХХХХХХХХ"; .slice(-10) = количество генирируемых символов от 1 до 13 (12символов выглядят как ".ХХХХХХХХХХХ")
    },
    randomUsername :  () => {
        const randomUser = () => { return Math.floor(Math.random() * Date.now()).toString(36).slice(-7)}; // при такой генерации максимум генерируемых символов = 8; slice(-8) может уменьшить кол-во символов до 1
        const randomUsername = (randomUser() + "@examle.com");
        return randomUsername;
        }
    };