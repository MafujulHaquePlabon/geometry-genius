document.getElementById('blog').addEventListener('click',function(){
  window.location.href='blog.html';
});
/*============== card hover random background color================ */
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}
document.getElementById("card1").addEventListener("mouseover", (event) => {
  document.getElementById("card1").style.backgroundColor = randomColor();
});
document.getElementById("card1").addEventListener("mouseout", (event) => {
  document.getElementById("card1").style.backgroundColor = "white";
});
document.getElementById("card2").addEventListener("mouseover", (event) => {
  document.getElementById("card2").style.backgroundColor = randomColor();
});
document.getElementById("card2").addEventListener("mouseout", (event) => {
  document.getElementById("card2").style.backgroundColor = "white";
});
document.getElementById("card3").addEventListener("mouseover", (event) => {
  document.getElementById("card3").style.backgroundColor = randomColor();
});
document.getElementById("card3").addEventListener("mouseout", (event) => {
  document.getElementById("card3").style.backgroundColor = "white";
});
document.getElementById("card5").addEventListener("mouseover", (event) => {
  document.getElementById("card5").style.backgroundColor = randomColor();
});
document.getElementById("card5").addEventListener("mouseout", (event) => {
  document.getElementById("card5").style.backgroundColor = "white";
});
document.getElementById("card6").addEventListener("mouseover", (event) => {
  document.getElementById("card6").style.backgroundColor = randomColor();
});
document.getElementById("card6").addEventListener("mouseout", (event) => {
  document.getElementById("card6").style.backgroundColor = "white";
});
document.getElementById("card7").addEventListener("mouseover", (event) => {
  document.getElementById("card7").style.backgroundColor = randomColor();
});
document.getElementById("card7").addEventListener("mouseout", (event) => {
  document.getElementById("card7").style.backgroundColor = "white";
});
/* ==============triangle,rhombus,pentagon function========================= */
function getAreaTRP(cardFirstInput, card2ndInput, cardtitle, areaparent,areaFormulaInnerText1,areaFormulaInnerText2) {
  const cardInput1Field = document.getElementById(cardFirstInput);
  const cardInput1Value = parseFloat(cardInput1Field.value);
  const cardInput2Field = document.getElementById(card2ndInput);
  const cardInput2Value = parseFloat(cardInput2Field.value);
  const area = parseFloat(0.5) * cardInput1Value * cardInput2Value;

  const cardTitle = document.getElementById(cardtitle);
  const cardTitleInnerText = cardTitle.innerText;
  const areaParent = document.getElementById(areaparent);
  const newElement = document.createElement("li");
  newElement.setAttribute("class", "py-2");
  /*==================error handling============================*/
  /*====================empty input field check==================== */
 if(cardInput1Field.value=='' || cardInput2Field.value ==''){
    alert(`please give two inputs!`);
    cardInput1Field.value='';
    cardInput2Field.value='';
    return;
  }
  /*====================negative input check==================== */
  else if (Math.sign(cardInput1Field.value) === -1 || Math.sign(cardInput2Field.value) === -1) {
   alert(`please give positive number of input!`);
    cardInput1Field.value='';
    cardInput2Field.value='';
    return;
  }
    /*============isNaN or !isNaN  user input value check=============== */
   else if(!isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
     alert(`${cardInput2Field.value} is not a number Please enter number`);
     cardInput1Field.value='';
     cardInput2Field.value='';
     return;
}
else if(isNaN(cardInput1Field.value) && !isNaN(cardInput2Field.value)) {
  alert(`${cardInput1Field.value} is not a number Please enter number`);
  cardInput1Field.value='';
  cardInput2Field.value='';
  return;
}
  else if(isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
      alert(`${cardInput1Field.value} and ${cardInput2Field.value} both is not a number Please enter number`); 
      cardInput1Field.value='';
      cardInput2Field.value='';
      return;
  }
   /*============Number.isInteger()/ Float check=============== */
  if(typeof area == 'number' && !isNaN(area)){
  /*================Card Area Formula InnerText set================= */
    const cardAreaFormulaInnerText1 = document.getElementById(areaFormulaInnerText1);
    cardAreaFormulaInnerText1.innerText=cardInput1Value;
  const cardAreaFormulaInnerText2 = document.getElementById(areaFormulaInnerText2);
  cardAreaFormulaInnerText2.innerText=cardInput2Value;
/*================Card Area Formula set InnerText end================= */
    if (Number.isInteger(area)) {
      newElement.innerHTML = `
   
      <table class="table">
      <tr>
      <td>${cardTitleInnerText}</td>
      <td>${area}<span>cm<sup>2</sup></span></td>
      <td> <a  class="btn blog text-white fw-bold py-1 px-2" type="submit">Convert to m <sup>2</sup></a></td>
    </tr>
    <tr>
      </table>`;
      newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
        newElement.innerHTML = `
      <table class="table">
      <tr>
      <td>${cardTitleInnerText}</td>
      <td>${area/100}<span>m<sup>2</sup></span></td>
    </tr>
    <tr>
      </table>`;
      });
    }
    // Float 
    else {
      newElement.innerHTML = `
      <table class="table">
      <tr>
      <td>${cardTitleInnerText}</td>
      <td>${area.toFixed(2)}<span>cm<sup>2</sup></span></td>
    </tr>
    <tr>
      </table>`;
      newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
        newElement.innerHTML = `
      <table class="table">
      <tr>
      <td>${cardTitleInnerText}</td>
      <td>${(area.toFixed(2)/100).toFixed(5)}<span>m<sup>2</sup></span></td>
    </tr>
    <tr>
      </table>`;
      });
    }
} 
  areaParent.appendChild(newElement);
  cardInput1Field.value='';
  cardInput2Field.value='';
}
document
  .getElementById("card1-Calc-Btn")
  .addEventListener("click", function () {
    getAreaTRP(
      "card1-Base-Input",
      "card1-Height-Input",
      "card-title-triangle",
      "area-Parent","triangle-base",
      "triangle-height"
    );
  });
document
  .getElementById("card5-Calc-Btn")
  .addEventListener("click", function () {
    getAreaTRP(
      "card6-D1-Input",
      "card6-D2-Input",
      "card-title-rhombus",
      "area-Parent","rhombus-d1",
      "rhombus-d2"
    );
  });
document
  .getElementById("card6-Calc-Btn")
  .addEventListener("click", function () {
    getAreaTRP(
      "card6-P-Input",
      "card6-B-Input",
      "card-title-pentagon",
      "area-Parent","pentagon-p",
      "pentagon-b"
    );
  });
  /*=================Rectangle,Parallelogram function==================== */
  function getAreaRectangleParallelogram(cardFirstInput, card2ndInput, cardtitle, areaparent,areaFormulaInnerText1,areaFormulaInnerText2) {
    const cardInput1Field = document.getElementById(cardFirstInput);
    const cardInput1Value = parseFloat(cardInput1Field.value);
    const cardInput2Field = document.getElementById(card2ndInput);
    const cardInput2Value = parseFloat(cardInput2Field.value);
    const area =cardInput1Value * cardInput2Value;
    const cardTitle = document.getElementById(cardtitle);
    const cardTitleInnerText = cardTitle.innerText;
    const areaParent = document.getElementById(areaparent);
    const newElement = document.createElement("li");
    newElement.setAttribute("class", "py-2");
    /*==================error handling============================*/
  /*====================empty input field check==================== */
 if(cardInput1Field.value=='' || cardInput2Field.value ==''){
  alert(`please give two inputs!`);
  cardInput1Field.value='';
  cardInput2Field.value='';
  return;
}
/*====================negative input check==================== */
else if (Math.sign(cardInput1Field.value) === -1 || Math.sign(cardInput2Field.value) === -1) {
 alert(`please give positive number of input!`);
  cardInput1Field.value='';
  cardInput2Field.value='';
  return;
}
  /*============isNaN or !isNaN  user input value check=============== */
 else if(!isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
   alert(`${cardInput2Field.value} is not a number Please enter number`);
   cardInput1Field.value='';
   cardInput2Field.value='';
   return;
}
else if(isNaN(cardInput1Field.value) && !isNaN(cardInput2Field.value)) {
alert(`${cardInput1Field.value} is not a number Please enter number`);
cardInput1Field.value='';
cardInput2Field.value='';
return;
}
else if(isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
    alert(`${cardInput1Field.value} and ${cardInput2Field.value} both is not a number Please enter number`); 
    cardInput1Field.value='';
    cardInput2Field.value='';
    return;
}
 /*============Number.isInteger()/ Float check=============== */
if(typeof area == 'number' && !isNaN(area)){
   /*================Card Area Formula InnerText set================= */
   const cardAreaFormulaInnerText1 = document.getElementById(areaFormulaInnerText1);
   cardAreaFormulaInnerText1.innerText=cardInput1Value;
 const cardAreaFormulaInnerText2 = document.getElementById(areaFormulaInnerText2);
 cardAreaFormulaInnerText2.innerText=cardInput2Value;
/*================Card Area Formula set InnerText end================= */
if (Number.isInteger(area)) {
  newElement.innerHTML = `

  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area}<span>cm<sup>2</sup></span></td>
  <td> <a  class="btn blog text-white fw-bold py-1 px-2" type="submit">Convert to m <sup>2</sup></a></td>
</tr>
<tr>
  </table>`;
  newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
    newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area/100}<span>m<sup>2</sup></span></td>
</tr>
<tr>
  </table>`;
  });
}
// Float 
else {
  newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area.toFixed(2)}<span>cm<sup>2</sup></span></td>
  <td> <button class="btn blog text-white fw-bold py-1 px-2" type="submit">Convert to m <sup>2</sup></button></td>
</tr>
<tr>
  </table>`;
  newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
    newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${(area.toFixed(2)/100).toFixed(5)}<span>m<sup>2</sup></span></td>
</tr>
<tr>
  </table>`;
  });
  }
}
    areaParent.appendChild(newElement);
    cardInput1Field.value='';
    cardInput2Field.value='';
  }
  document
  .getElementById("card2-Calc-Btn")
  .addEventListener("click", function () {
    getAreaRectangleParallelogram(
      "card2-W-Input",
      "card2-I-Input",
      "card-title-rectangle",
      "area-Parent","rectangle-w",
      "rectangle-l"
    );
  });
  document
  .getElementById("card3-Calc-Btn")
  .addEventListener("click", function () {
    getAreaRectangleParallelogram(
      "card2-B-Input",
      "card2-H-Input",
      "card-title-parallelogram",
      "area-Parent","parallelogram-b",
      "parallelogram-h"
    );
  });
  /*=================Ellipse function======================= */
  function getAreaEllipse(cardFirstInput, card2ndInput, cardtitle, areaparent,areaFormulaInnerText1,areaFormulaInnerText2,piId) {
    const cardInput1Field = document.getElementById(cardFirstInput);
    const cardInput1Value = parseFloat(cardInput1Field.value);
    const cardInput2Field = document.getElementById(card2ndInput);
    const cardInput2Value = parseFloat(cardInput2Field.value);
    const area = parseFloat(3.14)*cardInput1Value * cardInput2Value;
    const cardTitle = document.getElementById(cardtitle);
    const cardTitleInnerText = cardTitle.innerText;
    const areaParent = document.getElementById(areaparent);
    const newElement = document.createElement("li");
    newElement.setAttribute("class", "py-2");
   /*==================error handling============================*/
  /*====================empty input field check==================== */
 if(cardInput1Field.value=='' || cardInput2Field.value ==''){
  alert(`please give two inputs!`);
  cardInput1Field.value='';
  cardInput2Field.value='';
  return;
}
/*====================negative input check==================== */
else if (Math.sign(cardInput1Field.value) === -1 || Math.sign(cardInput2Field.value) === -1) {
 alert(`please give positive number of input!`);
  cardInput1Field.value='';
  cardInput2Field.value='';
  return;
}
  /*============isNaN or !isNaN  user input value check=============== */
 else if(!isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
   alert(`${cardInput2Field.value} is not a number Please enter number`);
   cardInput1Field.value='';
   cardInput2Field.value='';
   return;
}
else if(isNaN(cardInput1Field.value) && !isNaN(cardInput2Field.value)) {
alert(`${cardInput1Field.value} is not a number Please enter number`);
cardInput1Field.value='';
cardInput2Field.value='';
return;
}
else if(isNaN(cardInput1Field.value) && isNaN(cardInput2Field.value)) {
    alert(`${cardInput1Field.value} and ${cardInput2Field.value} both is not a number Please enter number`); 
    cardInput1Field.value='';
    cardInput2Field.value='';
    return;
}
 /*============Number.isInteger()/ Float check=============== */
if(typeof area == 'number' && !isNaN(area)){
  /*================Card Area Formula InnerText set================= */
  const cardAreaFormulaInnerText1 = document.getElementById(areaFormulaInnerText1);
  cardAreaFormulaInnerText1.innerText=cardInput1Value;
const cardAreaFormulaInnerText2 = document.getElementById(areaFormulaInnerText2);
cardAreaFormulaInnerText2.innerText=cardInput2Value;
const piValue=document.getElementById(piId);
piValue.innerText='3.14';
/*================Card Area Formula set InnerText end================= */
if (Number.isInteger(area)) {
  newElement.innerHTML = `

  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area}<span>cm<sup>2</sup></span></td>
  <td> <a  class="btn blog text-white fw-bold py-1 px-2" type="submit">Convert to m <sup>2</sup></a></td>
</tr>
<tr>
  </table>`;
  newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
    newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area/100}<span>m<sup>2</sup></span></td>
</tr>
<tr>
  </table>`;
  });
}
// Float 
else {
  newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${area.toFixed(2)}<span>cm<sup>2</sup></span></td>
  <td> <button class="btn blog text-white fw-bold py-1 px-2" type="submit">Convert to m <sup>2</sup></button></td>
</tr>
<tr>
  </table>`;
  newElement.childNodes[1].childNodes[1].childNodes[0].childNodes[5].childNodes[1].addEventListener('click',function(){
    newElement.innerHTML = `
  <table class="table">
  <tr>
  <td>${cardTitleInnerText}</td>
  <td>${(area.toFixed(2)/100).toFixed(5)}<span>m<sup>2</sup></span></td>
</tr>
<tr>
  </table>`;
  });
  }
}
    areaParent.appendChild(newElement);
    cardInput1Field.value='';
    cardInput2Field.value='';
  }
  document
  .getElementById("card7-Calc-Btn")
  .addEventListener("click", function () {
    getAreaEllipse(
      "card7-A-Input",
      "card7-B-Input",
      "card-title-ellipse",
      "area-Parent","ellipse-a",
      "ellipse-b","pi"
    );
  });