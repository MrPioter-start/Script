let arrayDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
// 1
let date = new Date(2012, 1, 20, 3, 12);
console.log(
  date.toDateString() +
    " year " +
    date.getHours() +
    " hour " +
    date.getMinutes() +
    " minutes"
);

// 2

function getWeekDay(date) {
  return arrayDays[date.getDay()];
}
console.log(getWeekDay(date));

// 3
function getLocalDay(date) {
  return arrayDays[date.getDay()] === 0
    ? arrayDays[0]
    : arrayDays[date.getDay()];
}
console.log(getLocalDay(date));

// 4
function getDateAgo(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

console.log(getDateAgo(new Date(), 5));

// 5
function formatDate(date) {
  const now = new Date();
  const diff = now - date;

  return diff < 1000
    ? "Прямо сейчас"
    : Math.floor(diff / 1000) < 60
    ? `${Math.floor(diff / 1000)} сек. назад`
    : Math.floor(diff / 60000) < 60
    ? `${Math.floor(diff / 60000)} мин. назад`
    : Math.floor(diff / 3600000) < 24
    ? `${Math.floor(diff / 3600000)} ч. назад`
    : `${Math.floor(diff / 86400000)} д. назад`;
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// 6
console.log(Math.abs(date.getFullYear() - new Date(2005, 0, 12).getFullYear()));

function calculateElectricityCost(time, energyConsumed, costPerKWh) {
  const [hours, minutes] = time.split(":").map(Number);
  const totalCost = energyConsumed * (costPerKWh / 100);

  let paymentPercentage;

  if ((hours >= 8 && hours < 11) || (hours >= 20 && hours < 23)) {
    paymentPercentage = 1.0;
  } else if (
    (hours === 7 && minutes >= 0) ||
    (hours === 11 && minutes === 0) ||
    (hours > 7 && hours < 8) ||
    (hours > 11 && hours < 20)
  ) {
    paymentPercentage = 0.7;
  } else {
    paymentPercentage = 0.4;
  }

  const totalToPay = totalCost * paymentPercentage;

  return totalToPay.toFixed(2);
}

const time = "10:30";
const energyConsumed = 120;
const costPerKWh = 150;

const finalCost = calculateElectricityCost(time, energyConsumed, costPerKWh);
console.log(`Итоговая сумма к оплате: ${finalCost} рублей`);

// 7
class RadioSession {
  constructor(
    callSign,
    frequency,
    date,
    startTime,
    endTime,
    groupsTransmitted
  ) {
    this.callSign = callSign;
    this.frequency = frequency;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.groupsTransmitted = groupsTransmitted;
  }

  calculateTransmissionSpeed() {
    const startMinutes = this._timeToMinutes(this.startTime);
    const endMinutes = this._timeToMinutes(this.endTime);
    const duration = endMinutes - startMinutes;

    if (duration > 0) {
      return (this.groupsTransmitted.length / duration) * 60;
    } else {
      return 0;
    }
  }

  _timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  }
}

const sessions = [
  new RadioSession("RA123", "144.0", "2025-01-28", "10:00", "10:30", "ABCDE"),
  new RadioSession("RA456", "146.0", "2025-01-28", "10:15", "10:45", "FGHIJ"),
  new RadioSession("RA789", "148.0", "2025-01-28", "10:30", "11:00", "KLMNO"),
];

function displayTransmissionSpeeds(sessions) {
  sessions.forEach((session) => {
    console.log(
      `Позывной: ${session.callSign}, Скорость передачи: ${session
        .calculateTransmissionSpeed()
        .toFixed(2)} групп в минуту`
    );
  });
}

function viewSessionsByTime(sessions, date, startTime, endTime) {
  console.log(`Сеансы радиосвязи на ${date} с ${startTime} до ${endTime}:`);
  sessions.forEach((session) => {
    if (
      session.date === date &&
      session.startTime >= startTime &&
      session.startTime <= endTime
    ) {
      console.log(
        `Позывной: ${session.callSign}, Время начала: ${session.startTime}, Время окончания: ${session.endTime}, Группы: ${session.groupsTransmitted}`
      );
    }
  });
}

displayTransmissionSpeeds(sessions);
viewSessionsByTime(sessions, "2025-01-28", "10:00", "10:30");
