const getRandomArbitrary = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const initializeNumbers = () =>
  Array(90)
    .fill(0)
    .map((v: number, i: number) => i + 1);

const getNextRandom = (numbers: number[]) => {
  const idx = getRandomArbitrary(0, numbers.length);
  return numbers[idx];
};

const getIndexToPushInto = (ticket: any, value: number) => {
  const columnToCheck = Math.ceil(value / 10) - 1;
  let index = [];
  for (let row = 0; row < 3; row++) {
    if (
      ticket[row][columnToCheck] === 0 &&
      ticket[row].filter((val: number) => val !== 0).length < 5
    ) {
      index[0] = row;
      index[1] = columnToCheck;
    }
  }
  return index;
};
const sortColumns = (ticket: any) => {
  for (let col = 0; col < 9; col++) {
    if (ticket[0][col] !== 0 && ticket[1][col] !== 0 && ticket[2][col] !== 0) {
      for (let r = 0; r < 2; r++) {
        if (ticket[r][col] > ticket[r + 1][col]) {
          let temp = ticket[r][col];
          ticket[r][col] = ticket[r + 1][col];
          ticket[r + 1][col] = temp;
        }
      }
    } else if (
      ticket[0][col] !== 0 &&
      ticket[1][col] !== 0 &&
      ticket[2][col] === 0
    ) {
      if (ticket[0][col] > ticket[1][col]) {
        let temp = ticket[0][col];
        ticket[0][col] = ticket[1][col];
        ticket[1][col] = temp;
      }
    } else if (
      ticket[0][col] !== 0 &&
      ticket[1][col] === 0 &&
      ticket[2][col] !== 0
    ) {
      if (ticket[0][col] > ticket[2][col]) {
        let temp = ticket[0][col];
        ticket[0][col] = ticket[2][col];
        ticket[2][col] = temp;
      }
    } else if (
      ticket[0][col] === 0 &&
      ticket[1][col] !== 0 &&
      ticket[2][col] !== 0
    ) {
      if (ticket[1][col] > ticket[2][col]) {
        let temp = ticket[1][col];
        ticket[1][col] = ticket[2][col];
        ticket[2][col] = temp;
      }
    }
  }
  return ticket;
};

const removeUsedValues = (ticket: any, numbers: number[]) => {
  let numbersToBeRemoved = [];
  for (var col = 0; col < 9; col++) {
    if (ticket[2][col] !== 0 && ticket[1][col] !== 0 && ticket[0][col] !== 0) {
      for (var i = col * 10 + 1; i <= col * 10 + 10; i++) {
        numbersToBeRemoved.push(i);
      }
    }
    if (ticket[2][col]) {
      numbersToBeRemoved.push(ticket[2][col]);
    }
    if (ticket[1][col]) {
      numbersToBeRemoved.push(ticket[1][col]);
    }
    if (ticket[0][col]) {
      numbersToBeRemoved.push(ticket[0][col]);
    }
  }
  if (numbersToBeRemoved.length) {
    numbersToBeRemoved.map(function (val) {
      const index = numbers.indexOf(val);
      if (index !== -1) numbers.splice(index, 1);
      return null;
    });
  }
};

const getTickets = (count: number) => {
  let tickets = [];
  for (var i = 0; i < count; i++) {
    let numbers = initializeNumbers();
    var ticket = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    for (var j = 1; j <= 15; j++) {
      var randomNumber = getNextRandom(numbers);
      var indexToPushInto = getIndexToPushInto(ticket, randomNumber);

      if (indexToPushInto.length) {
        ticket[indexToPushInto[0]][indexToPushInto[1]] = randomNumber;
        removeUsedValues(ticket, numbers);
      } else {
        j--;
      }
    }
    ticket = sortColumns(ticket);
    tickets.push(ticket);
  }
  return tickets;
};

export default getTickets;
