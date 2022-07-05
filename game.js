let n = Math.floor(Math.random() * 1000);
console.log('Загадано число: ', n)


while (true) {
    let guess = prompt('Угадайте число от 0 до 1000: ')
    console.log('Пользователь ввёл: ', guess)
    if (guess == 'q') {
        alert('Игра завершена!')
        break;
    }
    if (isNaN(guess)) {
        alert('Вы ввели не число!')}
    if (n > guess) {
        alert('Вы не угадали, загаданное число больше!')}   
    if (n < guess) {
        alert('Вы не угадали, загаданное число меньше!')}
    if (guess == n) {
        alert('Поздравляем! Вы угадали!')
        break;
    }   
}