// 1. Если переменная a равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") == 0 ? alert("Верно") : alert("Неверно")

// 2. Если переменная a больше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") > 0 ? alert("Верно") : alert("Неверно")

// // 3. Если переменная a меньше нуля, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") < 0 ? alert("Верно") : alert("Неверно")

// // 4. Если переменная a больше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") >= 0 ? alert("Верно") : alert("Неверно")

// // 5. Если переменная a меньше или равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") <= 0 ? alert("Верно") : alert("Неверно")

// // 6. Если переменная a не равна нулю, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") !== 0 ? alert("Верно") : alert("Неверно")

// // 7. Если переменная a равна ‘test’, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = prompt("работает только при слове test") === "test" ? alert("Верно") : alert("Неверно")

// // 8. Если переменная a равна ‘1’ и по значению и по типу, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число") === 1 ? alert("Верно") : alert("Неверно")

// // 9. Если переменная a больше нуля и меньше 5-ти, то выведите ‘Верно’, иначе выведите ‘Неверно’.

// const a = +prompt("Введите число");
// a > 0 && a < 5 ? alert("Верно") : alert("Неверно")

// 10. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.
// const a = +prompt("Введите число");
//  if (a === 0 || a === 2){
//      alert(+(a +7))
//  } 
//     else alert(+(a/10))

// 11. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// const a = +prompt("Введите число: равно или меньше 1");
// const b = +prompt("Введите число: больше или рвано 3");

// switch (true){
//     case (a <= 1 && b >=3 ):
//         alert(+(a + b))
//         break;

//         default:
//             alert(+(a - b))
// }

// 12. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите ‘Верно’, в противном случае выведите ‘Неверно’.

// const a = +prompt("Введите число: Больше 2-х и меньше 11-ти");
// const b = +prompt("Введите число: Больше 6-ти и меньше 14-ти");

// switch (true){
//     case ((a >=2 && a < 11) || (b > 6 && b < 14)):
//         alert("Верно")
//         break;

//         default:
//             alert("Неверно")
// }

// 13. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение ‘1’, то в переменную result запишем ‘зима’, если имеет значение ‘2’ – ‘весна’ и так далее. Решите задачу через switch-case.

// const num = +prompt("Введите число от 1 до 4 и будет что-то");
// let result;
// switch (num){
//     case 1 :
//         result = "Зима";
//         break;
//     case 2 :
//         result = "Весна";
//         break;
//     case 3 :
//         result = "Лето";
//         break;
//     case 4 :
//         result = "Осень";
//         break;
//     default :
//         result = "Нарушен диапозон чисел";
// }

// alert(result)