function onClick() {
    try {
        $(document.body).append('<p>jquery works!</p>')
    } catch (error) {
        document.body.innerHTML += `<p>${error}</p>`
    }
}