function getWeekday(day, month, year) {
  const days = [
    "в воскресенье",
    "в понедельник",
    "во вторник",
    "в среду",
    "в четверг",
    "в пятницу",
    "в субботу",
  ];

  const date = new Date(year, month - 1, day);

  return days[date.getDay()];
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getAge(day, month, year) {
  const today = new Date();
  let age = today.getFullYear() - year;
  if (
    today.getMonth() + 1 < month ||
    (today.getMonth() + 1 === month && today.getDate() < day)
  ) {
    age--;
  }
  return age;
}

function printDigit(digit) {
  const digits = [
    " ***  *   * *   * *   * *   *  *** ",
    "  *    **    *    *    *    *   *** ",
    " ***    *    *   ***  *    *   *** ",
    " ***    *    *   ***    *    *   *** ",
    " *   * *   * *   *  ***    *    *   ",
    " ***  *    *    ***    *    *   *** ",
    " ***  *    *    ***  *   * *   *** ",
    " ***    *    *    *    *    *    * ",
    " ***  *   * *   *  ***  *   *  *** ",
    " ***  *   * *   *  ***    *    *** ",
  ];
  return digits[digit];
}

function printDate(day, month, year) {
  const dateStr = `${String(day).padStart(2, "0")} ${String(month).padStart(
    2,
    "0"
  )} ${year}`;
  let output = "\n";
  for (let i = 0; i < 5; i++) {
    for (let char of dateStr) {
      if (char === " ") {
        output += "     ";
      } else {
        output += printDigit(parseInt(char)).split("\n")[i] + "  ";
      }
    }
    output += "\n";
  }
  console.log(output);
}

try {
  const day = parseInt(prompt("Укажите день рождения"), 10);
  const month = parseInt(prompt("Укажите месяц рождения"), 10);
  const year = parseInt(prompt("Укажите год рождения"), 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error("Ошибка: укажите корректные числовые значения");
  }

  const weekday = getWeekday(day, month, year);
  const leapYear = isLeapYear(year) ? "високосный" : "не високосный";
  const age = getAge(day, month, year);

  console.log(`Вы родились ${weekday}`);
  console.log(`${year} год был ${leapYear}`);
  console.log(`Ваш возраст: ${age}`);
  printDate(day, month, year);
} catch (error) {
  console.error(error.message);
}
