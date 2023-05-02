"use strict";

// currency ratio
let currencyRatio = {
  JPY: {
    JPY: 1,
    KRW: 9.75,
    USD: 0.0073,
    CNY: 0.05,
    unit: "円",
  },
  KRW: {
    JPY: 0.1,
    KRW: 1,
    USD: 0.00075,
    CNY: 0.0052,
    unit: "ウォン",
  },
  USD: {
    JPY: 137.51,
    KRW: 1341.35,
    USD: 1,
    CNY: 6.91,
    unit: "ドル",
  },
  CNY: {
    JPY: 19.89,
    KRW: 194.06,
    USD: 0.14,
    CNY: 1,
    unit: "元",
  },
};

// click event
const formCurrencyBtn = document.querySelector("#from-currency-btn");
const toCurrencyBtn = document.querySelector("#to-currency-btn");
const fromCountryBtn = document.querySelector("#from-country");
const toCountryBtn = document.querySelector("#to-country");

formCurrencyBtn.addEventListener("click", () => {
  fromCountryBtn.classList.toggle("active");
});

fromCountryBtn.addEventListener("click", () => {
  fromCountryBtn.classList.toggle("active");
});

toCurrencyBtn.addEventListener("click", () => {
  toCountryBtn.classList.toggle("active");
});

toCountryBtn.addEventListener("click", () => {
  toCountryBtn.classList.toggle("active");
});

// 両替リストからアイテム選択すると国が変わる
const fromCurrency = document.querySelectorAll("#from-country a");
const toCurrency = document.querySelectorAll("#to-country a");
let fromCountry = "JPY";
let toCountry = "JPY";

for (let menuList = 0; menuList < fromCurrency.length; menuList++) {
  fromCurrency[menuList].addEventListener("click", function () {
    formCurrencyBtn.textContent = this.textContent;
    fromCountry = this.textContent;
    fromPrintInput();
  });
}

for (let menuList = 0; menuList < toCurrency.length; menuList++) {
  toCurrency[menuList].addEventListener("click", function () {
    toCurrencyBtn.textContent = this.textContent;
    toCountry = this.textContent;
    toPrintInput();
  });
}

// 5. 金額入力すると両替できるよう
const fromResult = document.getElementById("from-result");
const toResult = document.getElementById("to-result");
const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");

function fromPrintInput() {
  // input 入力
  const fromInputResult = fromInput.value;
  // 入力したinput見せる
  let fromToMoney = fromInputResult * currencyRatio[fromCountry][toCountry];
  // 両替された価見せる
  toInput.value = fromToMoney;
  fromResult.innerText = `${fromInputResult}${currencyRatio[fromCountry]["unit"]} `;
  toResult.innerText = `${fromToMoney}${currencyRatio[toCountry]["unit"]} `;
}

function toPrintInput() {
  const toInputResult = toInput.value;
  let toFromMoney = toInputResult * currencyRatio[toCountry][fromCountry];
  fromInput.value = toFromMoney;
  toResult.innerText = `${toInputResult}${currencyRatio[toCountry]["unit"]} `;
  fromResult.innerText = `${toFromMoney}${currencyRatio[fromCountry]["unit"]} `;
}
