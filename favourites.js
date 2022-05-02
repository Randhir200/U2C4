// write js code here corresponding to favourites.html
// variable
var favArr = JSON.parse(localStorage.getItem('favourites')) || [];
display(favArr);

// function
function display(favArr) {
    var parent = document.querySelector('tbody');
    parent.innerHTML = '';
  
    favArr.forEach(function (ele,index) {
      //   console.log(ele);
      var row = document.createElement('tr');
      var mNum = document.createElement('td');
      mNum.innerText = ele.matchNum;
      var tA = document.createElement('td');
      tA.innerText = ele.teamA;
      var tB = document.createElement('td');
      tB.innerText = ele.teamB;
  
      var date = document.createElement('td');
      date.innerText = ele.date;
      var venue = document.createElement('td');
      venue.innerText = ele.venue;
      var del = document.createElement('td');
      del.innerText = 'delete';
      del.setAttribute('class', 'delete');
  
      del.addEventListener('click', function () {
        deleteItem(ele,index);
      });
  
      row.append(mNum, tA, tB, date, venue, del);
  
      parent.append(row);
    });

    function deleteItem(ele,index) {
        favArr.splice(index, 1);
        localStorage.setItem('favourites', JSON.stringify(favArr));
        window.location.reload();
      }
  }
  


