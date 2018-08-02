  var Restart=document.querySelector("#b");
  var squares = document.querySelectorAll('td');
var count=0;
  function clearBoard()
  {
    for(var i = 0; i< squares.length ; i++)
    {
      squares[i].textContent ='';
    }
  }
  function checkwin()
  {
    if(
        //Horizontal Checks
          ((squares[0].textContent==squares[1].textContent) && (squares[0].textContent==squares[2].textContent) && (squares[0].textContent!=''))
        ||((squares[3].textContent==squares[4].textContent) && (squares[3].textContent==squares[5].textContent) && (squares[3].textContent!=''))
        ||((squares[6].textContent==squares[7].textContent) && (squares[6].textContent==squares[8].textContent) && (squares[6].textContent!=''))
        //vertical Checks
        ||((squares[0].textContent==squares[3].textContent) && (squares[0].textContent==squares[6].textContent) && (squares[0].textContent!=''))
        ||((squares[1].textContent==squares[4].textContent) && (squares[1].textContent==squares[7].textContent) && (squares[1].textContent!=''))
        ||((squares[2].textContent==squares[5].textContent) && (squares[2].textContent==squares[8].textContent) && (squares[2].textContent!=''))
        //for diagonal Checks
        ||((squares[0].textContent==squares[4].textContent) && (squares[0].textContent==squares[8].textContent) && (squares[0].textContent!=''))
        ||((squares[2].textContent==squares[4].textContent) && (squares[2].textContent==squares[6].textContent) && (squares[2].textContent!=''))
       )
    {
      alert("you won");
      clearBoard();
    }
  }
function changemark()
{
  if(this.textContent=='')
  {
    if(count === 0)
    {
      this.textContent='X';
      count=1;

    }
    else
    {
        this .textContent='O';
        count=0;

    }
    checkwin();
  }
}
  Restart.addEventListener('click',clearBoard);
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changemark)
  }
