
"use strict";
(function() {
  let username = null;
  let birth = null;
  let sex = null;
  let date = null;

  window.addEventListener("load", init); 

  function init() {
    id("submit").addEventListener("click", submitForm);
    id("cookie").addEventListener("click", getFortune);
  }

  function submitForm() {
    username = id("username").value;
    birth = id("birth").value
    sex = id("sex").value;
    date = id("date").value;

    if (!Number.isInteger(parseInt(birth))) {
      alert("올바른 생년월일을 입력해주세요.");
      return;
    }
  }

  function getFortune() {
    let output = "";
    let fortune = birth%7;
    if(fortune == 0) {
      output = "오늘 하루 운세 좋습니다.";
    }
    else if(fortune ==1) {
      output = "내일 조심하세요.";
    }
    else if(fortune ==2 ) {
      output = "내일 복이 찾아올거에요.";
    }
    else if(fortune ==3 ) {
      output = "고민이 많으시군요.";
    }
    else if(fortune ==4 ) {
      output = "지금 해야 할 것에 집중하세요.";
    }
    else if(fortune ==5 ) {
      output = "주변을 조심하세요";
    }
    else {
      output = "아무도 믿지 마세요.";
    }
    id("output").classList.remove("hidden");

    let fortuneParagraph = document.createElement("p");
    let fortuneText = document.createTextNode("오늘 날짜 : " + date + "--------오늘의 운세 : " + output);
    fortuneParagraph.appendChild(fortuneText);

    id("output").appendChild(fortuneParagraph);
    
  }




















  function id(name) {
    return document.getElementById(name);
  }
})();

