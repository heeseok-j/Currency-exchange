"use strict";

// 박스 클릭 이벤트 (currency-button click event)
const currencyBtn = document.querySelector("#from-currency-btn");
const country = document.querySelector("#from-country");
const currencyBtn2 = document.querySelector("#to-currency-btn");
const country2 = document.querySelector("#to-country");
const fromCurrency = document.querySelectorAll("#from-country a");
const toCurrency = document.querySelectorAll("#to-country a");

currencyBtn.addEventListener("click", () => {
  country.classList.toggle("active");
});

country.addEventListener("click", () => {
  country.classList.toggle("active");
});

currencyBtn2.addEventListener("click", () => {
  country2.classList.toggle("active");
});

country2.addEventListener("click", () => {
  country2.classList.toggle("active");
});

// 환율 리스트에서 아이템 선택하면 아이템 바뀜(나라)
let fromCountry = "JPY";
let toCountry = "JPY";

for (let menuList = 0; menuList < fromCurrency.length; menuList++) {
  fromCurrency[menuList].addEventListener("click", function () {
    currencyBtn.textContent = this.textContent;
    fromCountry = this.textContent;
    printInput();
  });
}

for (let menuList = 0; menuList < toCurrency.length; menuList++) {
  toCurrency[menuList].addEventListener("click", function () {
    currencyBtn2.textContent = this.textContent;
    toCountry = this.textContent;
    printInput();
  });
}

// 환율정보 들고오기
let currencyRatio = {
  JPY: {
    JPY: 1,
    KRW: 9.5,
    USD: 0.0072,
    CNY: 0.052,
    unit: "円",
  },
  KRW: {
    JPY: 0.11,
    KRW: 1,
    USD: 0.00076,
    CNY: 0.0054,
    unit: "ウォン",
  },
  USD: {
    JPY: 138.56,
    KRW: 1317.43,
    USD: 1,
    CNY: 7.14,
    unit: "ドル",
  },
  CNY: {
    JPY: 19.4,
    KRW: 184.47,
    USD: 0.14,
    CNY: 1,
    unit: "元",
  },
};

// 5. 금액 입력하면 환전 가능하게
const fromResult = document.getElementById("from-result");
const toResult = document.getElementById("to-result");
const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");

function printInput() {
  // 인풋 값 입력하기
  const fromInputResult = fromInput.value;
  // 인풋 환전 값 입력하기
  let fromToMoney = fromInputResult * currencyRatio[fromCountry][toCountry];
  console.log(fromToMoney);
  // 환전 값 보이게 하기 (to-result / to-input)
  toInput.value = fromToMoney;
  fromResult.innerText = `${fromInputResult}${currencyRatio[fromCountry]["unit"]} `;
  toResult.innerText = `${fromToMoney}${currencyRatio[toCountry]["unit"]} `;
}

function printInput2() {
  // 인풋 값 입력하기
  const toInputResult = toInput.value;
  // 인풋 환전 값 입력하기
  let toFromMoney = toInputResult * currencyRatio[toCountry][fromCountry];
  console.log(toFromMoney);
  fromInput.value = toFromMoney;
  // 환전 값 보이게 하기 (from-result / from-input)
  toResult.innerText = `${toInputResult}${currencyRatio[toCountry]["unit"]} `;
  fromResult.innerText = `${toFromMoney}${currencyRatio[fromCountry]["unit"]} `;
}
