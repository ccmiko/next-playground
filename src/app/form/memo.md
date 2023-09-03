## components

検証アプリでそこまでやり切らんけど、綺麗に作るならこうするかなメモ

- form(should be Template of Atomic Design, pages.tsx import this)
  - form items（slot）
    - needs form parts!
  - button label?
    - submit button default value is 確認画面へ
  - submit event（event contains validate）
- confirm
  - input data
    - what best practice passed data by next.js13 and app router?
  - button labels?
    - cancel button default value is 戻る
    - submit button default value is 登録する
  - submit event
- complete
  - init event
  - redirect?
    - if has redirect url, redirect in init event
  - complete message and next page link?
