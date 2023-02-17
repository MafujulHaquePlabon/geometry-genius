/*============== card hover random background color================ */
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  }  
  document.getElementById('card1').addEventListener('mouseover', event => {
    document.getElementById('card1').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card1').addEventListener('mouseout', event => {
    document.getElementById('card1').style.backgroundColor = 'white';
  }); 
  document.getElementById('card2').addEventListener('mouseover', event => {
    document.getElementById('card2').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card2').addEventListener('mouseout', event => {
    document.getElementById('card2').style.backgroundColor = 'white';
  }); 
  document.getElementById('card3').addEventListener('mouseover', event => {
    document.getElementById('card3').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card3').addEventListener('mouseout', event => {
    document.getElementById('card3').style.backgroundColor = 'white';
  }); 
  document.getElementById('card4').addEventListener('mouseover', event => {
    document.getElementById('card4').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card4').addEventListener('mouseout', event => {
    document.getElementById('card4').style.backgroundColor = 'white';
  }); 
  document.getElementById('card5').addEventListener('mouseover', event => {
    document.getElementById('card5').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card5').addEventListener('mouseout', event => {
    document.getElementById('card5').style.backgroundColor = 'white';
  }); 
  document.getElementById('card6').addEventListener('mouseover', event => {
    document.getElementById('card6').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card6').addEventListener('mouseout', event => {
    document.getElementById('card6').style.backgroundColor = 'white';
  }); 
  document.getElementById('card7').addEventListener('mouseover', event => {
    document.getElementById('card7').style.backgroundColor = randomColor();
  }); 
  document.getElementById('card7').addEventListener('mouseout', event => {
    document.getElementById('card7').style.backgroundColor = 'white';
  }); 
  