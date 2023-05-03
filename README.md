# Currency-exchange
 currency exchange

</br>

## URL
https://heeseok-j.github.io/Currency-exchange/

</br>

## 1. 目的
 両替システムを理解するために作りました
   
</br>

## 2. 機能
 - 両替したい国を選択して金額を入力すると、表記される
 - 両替する国に金額を入力しても、元の国の金額が表記される
 
 </br>
 
<img src="https://user-images.githubusercontent.com/89200643/235697623-29bdc630-3065-4da3-8c80-df556ae495fc.png" width="800px" height="500px">

</br>

## 3. 使用技術
- HTML
- CSS
- Javascript

</br>

## 4. 利用方法
 両替したい国を選択してfromのところに数字を入力する
 
</br>

## 5. 苦労
 国をクリックして選択した国に指すようにしたかったが、エラーが発生した。エラーの内容は確認せずに文字に間違いがあるか何回もよんでみてもエラーの原因はわからなかった。後でエラーの内容を確認してみたら、存在しないオブジェクトだとわかりました。thisやfunction又はarrow functionで指すどころに問題があると判断した。

</br>

### 5-1. function VS arrow functionによってのthis違い

functionでthisを確認してみたら
 ```javascript
for (let menuList = 0; menuList < fromCurrency.length; menuList++) {
  fromCurrency[menuList].addEventListener("click", function () {
    console.log(this);　　//function() {console.log(this)}で指しているのはfromCurrencyのmenuList(=index)である四つの国だとわかる
  });
}
``` 

</br>

下記のようにthisはwindowを指しているのがわかる

<img src="https://user-images.githubusercontent.com/89200643/235846604-2ba082f5-2127-4763-80b3-b624acb2afee.png">


functionのthisに説明すると
- **function**(関数)の**this** ： 関数の宣言位置に関係せず、関数を呼出する方法による
  - つまり、ここでのthisは関数を呼出したオブジェクトを指す

---

arrow functionでthisを確認してみたら
 ```javascript
for (let menuList = 0; menuList < fromCurrency.length; menuList++) {
  fromCurrency[menuList].addEventListener("click", () => {
    console.log(this);   // () => {console.log(this)}が指しているのは外部のスコープである上位のwindowになっている
  });
}
```

</br>

下記のようにthisはwindowを指しているのがわかる

<img src="https://user-images.githubusercontent.com/89200643/235842787-64106c51-1694-4bbb-854b-754138cf1b1b.png">

</br>

つまり、簡単に説明すると
- **arrow function**(アロー関数)の**this** ： 関数の呼出に関係せず、関数を宣言した位置による
  - ここでのthisは、関数を包む上位スコープのthisをそのまま使う
---

</br>

## 6. 修正
2022年11月30日基準の両替 → 2023年5月2日基準の両替に修正

</br>

## 7. 感想
 このプロジェクトでthisを始めて勉強して使ってみたけどthisは何をどこを指しているのかわかっていない状況だった。ES6に文法にでるarrow functionを軽く勉強してfunction VS arrow functionの違いも確実に知らず、ただ楽にコードを書けると思っていた。本当に多くの時間をかけてもまだthisははっきり理解できてない状態ぐらい、私にとっては未だに難しいレベルだと思う。


