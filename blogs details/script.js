let count = 1;
document.getElementById('number').innerHTML = count;

function add() {
    count++;
    updateCounter();
}

function remove() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function updateCounter() {
    document.getElementById('number').innerHTML = count;
    document.getElementById('removeBtn').disabled = (count === 0);
}


    function show() {
      var ansElement = document.getElementById('ans');
      if (ansElement) {
        ansElement.classList.toggle('show');
      } else {
        console.error("Element with id 'ans' not found.");
      }
    }


      function show3() {
        var ansElement = document.getElementById('ans3');
        if (ansElement) {
          ansElement.classList.toggle('show');
        } else {
          console.error("Element with id 'ans' not found.");
        }
      }