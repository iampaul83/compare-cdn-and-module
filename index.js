import $ from 'jquery';

window.onClick = function () {
    try {
        $(document.body).append('<p>jquery works!</p>')
    } catch (error) {
        document.body.innerHTML += `<p>${error}</p>`
    }
}