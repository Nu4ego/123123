// Добавьте пункт к выпадающему списку
// var selectElement = document.getElementById('genres');
// var newOption = document.createElement('option');
// newOption.text = 'Классика';
// newOption.value = 'classic';
// selectElement.add(newOption);
// selectElement.selectedIndex = 2;

// <select id="genres">
//     <option value="rock">Рок</option>
//     <option value="blues">Блюз</option>
//     <option value="classic" selected>Классика</option>
// </select>

// Редактируемый div
// var div = document.createElement('div');
// div.innerHTML = 'Ваш текст';
// document.body.appendChild(div);

// div.addEventListener('click', function() {
//     var textarea = document.createElement('textarea');
//     textarea.value = div.innerHTML;
//     div.parentNode.replaceChild(textarea, div);
//     textarea.focus();
// });

// textarea.addEventListener('blur', function() {
//     var div = document.createElement('div');
//     div.innerHTML = this.value;
//     this.parentNode.replaceChild(div, this);
// });

// Редактирование TD по клику
// document.addEventListener('DOMContentLoaded', function() {
//     var table = document.querySelector('table');
//     table.addEventListener('click', function(event) {
//         var target = event.target;
//         if (target.tagName === 'TD') {
//             var textarea = document.createElement('textarea');
//             textarea.value = target.innerHTML;
//             target.innerHTML = '';
//             target.appendChild(textarea);
//             textarea.focus();
//             textarea.addEventListener('blur', function() {
//                 target.innerHTML = this.value;
//             });
//         }
//     });
// });


// Депозитный калькулятор
// document.getElementById('deposit-calculator').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var deposit = Number(this.deposit.value);
//     var interest = Number(this.interest.value) / 100 / 12;
//     var years = Number(this.years.value);
//     var result = deposit * (1 + interest) ** (years * 12);
//     document.getElementById('result').innerText = 'Сумма через ' + years + ' лет: $' + result.toFixed(2);
// });
