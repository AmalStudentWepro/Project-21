// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt("Какая скидка?");

let totalSale = Number;

let total = Number;

let max = Object;

let min = Object;

let average = Number;

let arr = [
  {
    name: "Milk",

    price: 3.25,
  },

  {
    name: "Coffee",

    price: 1.5,
  },

  {
    name: "Ice Cream",

    price: 7.85,
  },

  {
    name: "Tomatos",

    price: 4.14,
  },

  {
    name: "Onion",

    price: 2.25,
  },
];

let arr_sale = [];

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
  discount = Number(discount) || 0;

  max = arr[0];
  min = arr[0];
  total = 0;
  arr_sale = [];

  for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item.price > max.price) max = item;
      if (item.price < min.price) min = item;
      total += item.price;
      arr_sale.push({ name: item.name, price: item.price * (1 - discount / 100) });
  }

  totalSale = total * (1 - discount / 100);
  average = total / arr.length;

  console.log(max);
  console.log(min);
  console.log(total);
  console.log(totalSale);
  console.log(average);
  console.log(arr_sale);
};

setup();
