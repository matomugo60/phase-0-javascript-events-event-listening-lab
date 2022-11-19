function addingEventListener() {
    const input = document.getElementById("input");
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

addingEventListener('click', function() {
    alert("I was clicked!");
} );