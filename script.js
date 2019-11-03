let test = '`';
let test2 = '/';

document.body.insertAdjacentHTML("afterbegin", `<div class="wrapper">
<div class="textArea">
  <textarea name="textarea" id="name" class="textarea" cols="30" rows="10" autofocus  placeholder="Write something here"></textarea>
</div>
<div class="virtualKeyboard">
  <div class="keyboard_row">
    <div class="key" id="Backquote">
      <span class="Back_quote on">
        <span class="case off">Ё</span>
        <span class="case on">ё</span>
      </span>
      <span class="Back_quote off">
        <span class="case off">~</span>
        <span class="case">${test}</span>
      </span>
    </div>
    <div class="key" id="Digit1">
        <span class="digit1 on">
          <span class="case off">!</span>
          <span class="case on">1</span>
        </span>
        <span class="digit1 off">
          <span class="case off">!</span>
          <span class="case">1</span>
        </span>
    </div>
    <div class="key" id="Digit2">
        <span class="digit2 on">
          <span class="case off">"</span>
          <span class="case">2</span>
        </span>
        <span class="digit2 off">
          <span class="case off">@</span>
          <span class="case">2</span>
        </span>
    </div>
    <div class="key" id="Digit3">
        <span class="digit3 on">
          <span class="case off">№</span>
          <span class="case on">3</span>
        </span>
        <span class="digit3 off">
          <span class="case off">#</span>
          <span class="case">3</span>
        </span>
    </div>
    <div class="key" id="Digit4">
        <span class="digit4 on">
          <span class="case off">;</span>
          <span class="case on">4</span>
        </span>
        <span class="digit4 off">
          <span class="case off">$</span>
          <span class="case">4</span>
        </span>
    </div>
    <div class="key" id="Digit5">
        <span class="digit5 on">
          <span class="case off">%</span>
          <span class="case on">5</span>
        </span>
        <span class="digit5 off">
          <span class="case off">%</span>
          <span class="case">5</span>
        </span>
    </div>
    <div class="key" id="Digit6">
        <span class="digit6 on">
          <span class="case off">:</span>
          <span class="case on">6</span>
        </span>
        <span class="digit6 off">
          <span class="case off">^</span>
          <span class="case">6</span>
        </span>
    </div>
    <div class="key" id="Digit7">
        <span class="digit7 on">
          <span class="case off">?</span>
          <span class="case on">7</span>
        </span>
        <span class="digit7 off">
          <span class="case off">&</span>
          <span class="case">7</span>
        </span>
    </div>
    <div class="key" id="Digit8">
        <span class="digit8 on">
          <span class="case off">*</span>
          <span class="case on">8</span>
        </span>
        <span class="digit8 off">
          <span class="case off">*</span>
          <span class="case">8</span>
        </span>
    </div>
    <div class="key" id="Digit9">
        <span class="digit9 on">
          <span class="case off">(</span>
          <span class="case on">9</span>
        </span>
        <span class="digit9 off">
          <span class="case off">(</span>
          <span class="case">9</span>
        </span>
    </div>
    <div class="key" id="Digit0">
        <span class="digit0 on">
          <span class="case off">)</span>
          <span class="case on">0</span>
        </span>
        <span class="digit0 off">
          <span class="case off">)</span>
          <span class="case">0</span>
        </span>
    </div>
    <div class="key" id="Minus">
        <span class="digit- on">
          <span class="case off">_</span>
          <span class="case on">-</span>
        </span>
        <span class="digit- off">
          <span class="case off">_</span>
          <span class="case">-</span>
        </span>
    </div>
    <div class="key" id="Equal">
        <span class="digit= on">
          <span class="case off">+</span>
          <span class="case on">=</span>
        </span>
        <span class="digit= off">
          <span class="case off">+</span>
          <span class="case on">=</span>
        </span>
    </div>
    <div class="key backspace" id="Backspace">
      <span class="case on">
       <span class="case on">Backspace</span>
      </span>
    </div>
  </div>
  <div class="keyboard_row">
    <div class="key tab" id="Tab">
      <span class="case on">
        <span class="case on">Tab</span>
      </span>
    </div>
    <div class="key" id="KeyQ">
        <span class="digitQ on">
          <span class="case off">Й</span>
          <span class="case on">й</span>
        </span>
        <span class="digitQ off">
          <span class="case off">Q</span>
          <span class="case on">q</span>
        </span>
    </div>
    <div class="key" id="KeyW">
        <span class="digitW on">
          <span class="case off">Ц</span>
          <span class="case on">ц</span>
        </span>
        <span class="digitW off">
          <span class="case off">W</span>
          <span class="case on">w</span>
        </span>
    </div>
    <div class="key" id="KeyE">
        <span class="digitE on">
          <span class="case off">У</span>
          <span class="case on">у</span>
        </span>
        <span class="digitE off">
          <span class="case off">E</span>
          <span class="case on">e</span>
        </span>
    </div>
    <div class="key" id="KeyR">
        <span class="digitR on">
          <span class="case off">К</span>
          <span class="case on">к</span>
        </span>
        <span class="digitR off">
          <span class="case off">R</span>
          <span class="case on">r</span>
        </span>
    </div>
    <div class="key" id="KeyT">
        <span class="digitT on">
          <span class="case off">Е</span>
          <span class="case on">е</span>
        </span>
        <span class="digitT off">
          <span class="case off">T</span>
          <span class="case on">t</span>
        </span>
    </div>
    <div class="key" id="KeyY">
        <span class="digitY on">
          <span class="case off">Н</span>
          <span class="case on">н</span>
        </span>
        <span class="digitY off">
          <span class="case off">Y</span>
          <span class="case on">y</span>
        </span>
    </div>
    <div class="key" id="KeyU">
        <span class="digitU on">
          <span class="case off">Г</span>
          <span class="case on">г</span>
        </span>
        <span class="digitU off">
          <span class="case off">U</span>
          <span class="case on">u</span>
        </span>
    </div>
    <div class="key" id="KeyI">
        <span class="digitI on">
          <span class="case off">Ш</span>
          <span class="case on">ш</span>
        </span>
        <span class="digitI off">
          <span class="case off">I</span>
          <span class="case on">i</span>
        </span>
    </div>
    <div class="key" id="KeyO">
        <span class="digitO on">
          <span class="case off">Щ</span>
          <span class="case on">щ</span>
        </span>
        <span class="digitO off">
          <span class="case off">O</span>
          <span class="case on">o</span>
        </span>
    </div>
    <div class="key" id="KeyP">
        <span class="digitP on">
          <span class="case off">З</span>
          <span class="case on">з</span>
        </span>
        <span class="digitP off">
          <span class="case off">P</span>
          <span class="case on">p</span>
        </span>
    </div>
    <div class="key" id="BracketLeft">
        <span class="digit[ on">
          <span class="case off">Х</span>
          <span class="case on">х</span>
        </span>
        <span class="digit[ off">
          <span class="case off">{</span>
          <span class="case on">[</span>
        </span>
    </div>
    <div class="key" id="BracketRight">
        <span class="digit] on">
          <span class="case off">Ъ</span>
          <span class="case on">ъ</span>
        </span>
        <span class="digit] off">
          <span class="case off">}</span>
          <span class="case on">]</span>
        </span>
    </div>
    <div class="key" id="Backslash">
        <span class="digit\ on">
          <span class="case off">/</span>
          <span class="case on">${test2}</span>
        </span>
        <span class="digit\ off">
          <span class="case off">|</span>
          <span class="case on">${test2}</span>
        </span>
    </div>
    <div class="key del" id='Delete'>
      <span class="case del on">
        <span class="case del on">Del</span>
      </span>
    </div>
  </div>
  <div class="keyboard_row">
    <div class="key capsLock" id='CapsLock'>
        <span class="case caps">Caps Lock</span>
    </div>
    <div class="key" id='KeyA'>
        <span class="digitA on">
          <span class="case off">Ф</span>
          <span class="case on">ф</span>
        </span>
        <span class="digitA off">
          <span class="case off">A</span>
          <span class="case on">a</span>
        </span>
    </div>
    <div class="key" id='KeyS'>
        <span class="digitS on">
          <span class="case off">Ы</span>
          <span class="case on">ы</span>
        </span>
        <span class="digitS off">
          <span class="case off">S</span>
          <span class="case on">s</span>
        </span>
    </div>
    <div class="key" id='KeyD'>
        <span class="digitD on">
          <span class="case off">В</span>
          <span class="case on">в</span>
        </span>
        <span class="digitD off">
          <span class="case off">D</span>
          <span class="case on">d</span>
        </span>
    </div>
    <div class="key" id='KeyF'>
        <span class="digitF on">
          <span class="case off">А</span>
          <span class="case on">а</span>
        </span>
        <span class="digitF off">
          <span class="case off">F</span>
          <span class="case on">f</span>
        </span>
    </div>
    <div class="key" id='KeyG'>
        <span class="digitG on">
          <span class="case off">П</span>
          <span class="case on">п</span>
        </span>
        <span class="digitG off">
          <span class="case off">G</span>
          <span class="case on">g</span>
        </span>
    </div>
    <div class="key" id='KeyH'>
        <span class="digitH on">
          <span class="case off">Р</span>
          <span class="case on">р</span>
        </span>
        <span class="digitH off">
          <span class="case off">H</span>
          <span class="case on">h</span>
        </span>
    </div>
    <div class="key" id='KeyJ'>
        <span class="digitJ on">
          <span class="case off">О</span>
          <span class="case on">о</span>
        </span>
        <span class="digitJ off">
          <span class="case off">J</span>
          <span class="case on">j</span>
        </span>
    </div>
    <div class="key" id='KeyK'>
        <span class="digitK on">
          <span class="case off">Л</span>
          <span class="case on">л</span>
        </span>
        <span class="digitK off">
          <span class="case off">K</span>
          <span class="case on">k</span>
        </span>
    </div>
    <div class="key" id='KeyL'>
        <span class="digitL on">
          <span class="case off">Д</span>
          <span class="case on">д</span>
        </span>
        <span class="digitL off">
          <span class="case off">L</span>
          <span class="case on">l</span>
        </span>
    </div>
    <div class="key" id='Semicolon'>
        <span class="digit; on">
          <span class="case off">Ж</span>
          <span class="case on">ж</span>
        </span>
        <span class="digit; off">
          <span class="case off">:</span>
          <span class="case on">;</span>
        </span>
    </div>
    <div class="key" id='Quote'>
        <span class="digit; on">
          <span class="case off">Э</span>
          <span class="case on">э</span>
        </span>
        <span class="digit; off">
          <span class="case off">"</span>
          <span class="case on">'</span>
        </span>
    </div>
    <div class="key enter" id='Enter'>
      <span class="case on">     
        <span class="case on">Enter</span>
      </span>
    </div>
  </div>
  <div class="keyboard_row">
    <div class="key shift" id='ShiftLeft'>
        <span class="case shift">Shift</span>
    </div>
    <div class="key" id='KeyZ'>
        <span class="digitZ on">
          <span class="case off">Я</span>
          <span class="case on">я</span>
        </span>
        <span class="digitZ off">
          <span class="case off">Z</span>
          <span class="case on">z</span>
        </span>
    </div>
    <div class="key" id='KeyX'>
        <span class="digitX on">
          <span class="case off">Ч</span>
          <span class="case on">ч</span>
        </span>
        <span class="digitX off">
          <span class="case off">X</span>
          <span class="case on">x</span>
        </span>
    </div>
    <div class="key" id='KeyC'>
        <span class="digitC on">
          <span class="case off">С</span>
          <span class="case on">с</span>
        </span>
        <span class="digitC off">
          <span class="case off">C</span>
          <span class="case on">c</span>
        </span>
    </div>
    <div class="key" id='KeyV'>
        <span class="digitV on">
          <span class="case off">М</span>
          <span class="case on">м</span>
        </span>
        <span class="digitV off">
          <span class="case off">V</span>
          <span class="case on">v</span>
        </span>
    </div>
    <div class="key" id='KeyB'>
        <span class="digitB on">
          <span class="case off">И</span>
          <span class="case on">и</span>
        </span>
        <span class="digitB off">
          <span class="case off">B</span>
          <span class="case on">b</span>
        </span>
    </div>
    <div class="key" id='KeyN'>
        <span class="digitN on">
          <span class="case off">Т</span>
          <span class="case on">т</span>
        </span>
        <span class="digitN off">
          <span class="case off">N</span>
          <span class="case on">n</span>
        </span>
    </div>
    <div class="key" id='KeyM'>
        <span class="digitM on">
          <span class="case off">Ь</span>
          <span class="case on">ь</span>
        </span>
        <span class="digitM off">
          <span class="case off">M</span>
          <span class="case on">m</span>
        </span>
    </div>
    <div class="key" id='Comma'>
        <span class="digit on">
          <span class="case off">Б</span>
          <span class="case on">б</span>
        </span>
        <span class="digitB off">
          <span class="case off"><</span>
          <span class="case on"><</span>
        </span>
    </div>
    <div class="key" id='Period'>
        <span class="digitB on">
          <span class="case off">Ю</span>
          <span class="case on">ю</span>
        </span>
        <span class="digitB off">
          <span class="case off">></span>
          <span class="case on">></span>
        </span>
    </div>
    <div class="key" id="Slash">
        <span class="digit? on">
          <span class="case off">,</span>
          <span class="case on">.</span>
        </span>
        <span class="digit? off">
          <span class="case off">?</span>
          <span class="case on">/</span>
        </span>
    </div>
    <div class="key" id="ArrowUp">
      <span class="case arrow_up">▲</span>
    </div>
    <div class="key shift" id="ShiftRight">
      <span class="case shift">Shift</span>
    </div>
  </div>
  <div class="keyboard_row">
    <div class="key"id='ControlLeft'>
      <span class="case ctrl">Ctrl</span>
    </div>
    <div class="key" id = 'OSLeft'>
      <span class="case win">Win</span>
    </div>
    <div class="key" id="AltLeft">
      <span class="case alt_left">Alt</span>
    </div>
    <div class="key space" id='Space'>
      <span class="space on">
        <span class="case on"> </span>
      </span>
    </div>
    <div class="key" id='AltRight'>
        <span class="case alt_right">Alt</span>
    </div>
    <div class="key" id='ArrowLeft'>
        <span class="case arrow_left">◄</span>
    </div>
    <div class="key" id='ArrowDown'>
        <span class="case arrow_down">▼</span>
    </div>
    <div class="key" id='ArrowRight'>
      <span class="case arrow_right">►</span>
    </div>
    <div class="key" id="ControlRight">
      <span class="case ctrl">Ctrl</span>
    </div>
  </div>
    </div>       
</div>`);

let textarea = document.getElementById('name')

document.onkeydown = function(e){
 let activeKey = document.getElementsByClassName("key");
 textarea.focus();
 let lang = 0;
    for(let i = 0; i < activeKey.length;i++){
      if (activeKey[i].id == e.code){
        if (e.code == 'ShiftLeft'){
          console.log("Шифт");
          lang++;
        } else if(e.code == 'CapsLock'){
          console.log("Капслок");
        } else if(e.code == 'Tab'){
          e.preventDefault();
        }
        activeKey[i].classList.add('active');
        break
      }
    }
}

document.onkeyup = function(e){
  let activeKey = document.getElementsByClassName("key");
     for(let i = 0; i < activeKey.length;i++){
       if (activeKey[i].id == e.code){
         activeKey[i].classList.remove('active');
         break
        }
     }
 }


 document.onmousedown = function(){
   let presButton = document.querySelectorAll(":hover>.on>.case.on");
  for(let i=0; i < presButton.length; i++){
    console.log(i+"ый элемент  = " + presButton[i].innerText);
     if(presButton[i].innerText == ""){
      document.querySelector('.textarea').value += ' ';
      console.log('qwe');
      break
     } else if(presButton[i].innerText == "Del") {
      console.log('qweqew');
      break
     }else if(presButton[i].innerText == "Backspace") {
      console.log('qweqew123');
      break
     }else if(presButton[i].innerText == "Enter") {
      document.querySelector('.textarea').value += "\n";
      break
     }
     else if(presButton[i].innerText == "Tab") {
      document.querySelector('.textarea').value += "\t";
      break
     }
    document.querySelector('.textarea').value += presButton[i].innerText;
  }
   }