// write js code here corresponding to matches.html

//variable
var dataArr = JSON.parse(localStorage.getItem('schedule')) || [];
var favArr = JSON.parse(localStorage.getItem('favourites'))||[];


display(dataArr);

// filter
function filter(){
   var selected = document.getElementById('filterVenue').value;
   console.log(selected);

   var filterList = dataArr.filter(function(ele){
          if(selected == "none"){
              return dataArr;
        }else{
              return ele.venue === selected;
          }
   })

   display(filterList);

}

// function

function display(dataArr) {
  var parent = document.querySelector('tbody');
  parent.innerHTML = '';

  dataArr.forEach(function (ele) {
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
    var fav = document.createElement('td');
    fav.innerText = 'favourite';
    fav.setAttribute('class', 'fav');

    fav.addEventListener('click', function () {
      favourite(ele);
    });

    row.append(mNum, tA, tB, date, venue, fav);

    parent.append(row);
  });

  function favourite(ele) {
    favArr.push(ele);
    localStorage.setItem('favourites', JSON.stringify(favArr));
  }
}
