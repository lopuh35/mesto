// 4 категории запросов

// 1)
// 2) запросы js, css, картпнок и д.р. файлов
// 3) отправить формы
// 4) js запросы
// JSON язык сервера для js

//JSON.stringify - объект js в объект json (json строка)
//JSON.parse - объект json  в объект js

const songs = [
  {
    title: "Вектора",
    artist: "OZORA",
  },
  {
    title: "Страшно",
    artist: "Shortparis",
  },
];

const songsJson = JSON.stringify(songs); // преобразую в строку json
// [{"title":"Вектора","artist":"OZORA"},{"title":"Страшно","artist":"Shortparis"}]
