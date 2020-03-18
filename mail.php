<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $time = $_POST['time'];

    // создаем переменную с содержанием письма
    // $content = $name . ' оставил заявку. Его телефон: ' . $phone;

    if ($time) {
        $content = $name . ' оставил заявку. Время и дата: ' . $time . '. Его телефон: ' . $phone;
    } else {
        $content = $name . ' оставил заявку. ' . '. Его телефон: ' . $phone;
    }

    $success = mail("maxk.kuznetsov@gmail.com", 'Запрос на бронирование звонок', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}