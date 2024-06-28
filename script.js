document.getElementById('toggleButton').addEventListener('click', function() {
    var myDiv = document.getElementById('myDiv');
    if (myDiv.classList.contains('hidden')) {
        myDiv.classList.remove('hidden');
        this.textContent = 'Ocultar Video';
    } else {
        myDiv.classList.add('hidden');
        this.textContent = 'Revelar Genero';
    }
});

