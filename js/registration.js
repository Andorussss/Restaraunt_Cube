document.addEventListener("DOMContentLoaded", function () {
    // Ссылка на элемент кнопки
    const writeButton = document.getElementById("writeButton");

    // Обработчик события для клика по кнопке
    writeButton.addEventListener("click", function () {
        // Информация для записи в текстовый файл
        const textToWrite = "Это информация для записи в текстовый файл.";

        // Создать Blob с текстовыми данными
        const blob = new Blob([textToWrite], { type: "text/plain" });

        // Создать ссылку для скачивания Blob
        const a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "ProfileDB.txt"; // Имя текстового файла

        // Инициировать событие клика на ссылке для начала загрузки
        a.click();
    });
});

