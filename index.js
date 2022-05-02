// write js code here corresponding to index.html
// You should add submit event on the form
// varibale
var form = document.getElementById('masaiForm');
var dataArr = JSON.parse(localStorage.getItem('schedule')) || [];

// events
form.addEventListener('submit', takeData);

// fucntion
function takeData(event) {
  event.preventDefault();

  var data = {
    matchNum: form.matchNum.value,
    teamA: form.teamA.value,
    teamB: form.teamB.value,
    date: form.date.value,
    venue: form.venue.value,
  };

  dataArr.push(data);
  localStorage.setItem('schedule', JSON.stringify(dataArr));
}
