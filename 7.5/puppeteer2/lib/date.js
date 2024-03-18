module.exports = {
  bookingDay: function (nextday) {
    // функция вычисления числа для бронирования билетов относительно сегодняшней даты
    try {
      const currentDay = new Date();
      return currentDay.getDate() + nextday;
    } catch (error) {
      throw new Error(`Day for booking is not available`);
    }
  },
};
