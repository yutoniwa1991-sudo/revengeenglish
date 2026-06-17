const words=[
{word:"achieve",image:"🏆",meaning:"達成する",example:"I achieved my goal.",jp:"私は目標を達成した。"},
{word:"maintain",image:"⚖️",meaning:"維持する",example:"She maintained her weight.",jp:"彼女は体重を維持した。"},
{word:"prevent",image:"☔",meaning:"防ぐ",example:"The umbrella prevents rain.",jp:"傘が雨を防ぐ。"},
{word:"reduce",image:"📉",meaning:"減らす",example:"We reduced costs.",jp:"私たちはコストを削減した。"},
{word:"concern",image:"😟",meaning:"心配させる",example:"The news concerned me.",jp:"そのニュースは私を心配させた。"},
{word:"improve",image:"📈",meaning:"改善する",example:"I improved my English.",jp:"私は英語を上達させた。"},
{word:"increase",image:"🚀",meaning:"増加する",example:"Sales increased.",jp:"売上が増加した。"},
{word:"recognize",image:"👀",meaning:"認識する",example:"I recognized him.",jp:"私は彼に気づいた。"},
{word:"compare",image:"🍎🍏",meaning:"比較する",example:"Compare these apples.",jp:"これらのリンゴを比較してください。"},
{word:"require",image:"🎫",meaning:"必要とする",example:"The event requires a ticket.",jp:"そのイベントには入場券が必要です。"}
];
let stage=1,current;const card=document.getElementById('card');
const favorites=JSON.parse(localStorage.getItem('favorites')||'[]');
const unknowns=JSON.parse(localStorage.getItem('unknowns')||'[]');
function randomWord(){current=words[Math.floor(Math.random()*words.length)];stage=1;show();}
function show(){if(stage===1){card.innerHTML=`<div class='word'>${current.word}</div><p>タップしてイラストを見る</p>`;}else if(stage===2){card.innerHTML=`<div class='emoji'>${current.image}</div><p>タップして意味を見る</p>`;}else{card.innerHTML=`<div class='word'>${current.word}</div><div class='meaning'>${current.meaning}</div><div class='example'>${current.example}<br><br>${current.jp}</div>`;}}
card.addEventListener('click',()=>{if(stage<3){stage++;show();}});
function speak(){const u=new SpeechSynthesisUtterance(current.word);u.lang='en-US';speechSynthesis.speak(u);}
function favorite(){if(!favorites.includes(current.word)){favorites.push(current.word);localStorage.setItem('favorites',JSON.stringify(favorites));alert('お気に入り登録');}}
function unknown(){if(!unknowns.includes(current.word)){unknowns.push(current.word);localStorage.setItem('unknowns',JSON.stringify(unknowns));alert('復習リストに追加');}}
function nextWord(){randomWord();}
randomWord();