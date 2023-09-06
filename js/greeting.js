/**
 * 당신은 누구십니까?
 * 라고 사용자에게 물어서 답변을 화면에 표시한다.
 */

/**
 * document에 있는 id가 frmLogin인 form.
 * input box와 logIn 버튼으로 구성
 */
const frmLogin = document.querySelector("#frmLogin");

/**
 * document에 있는 input box.
 */
const inputLogin = document.querySelector("#frmLogin input");

/**
 * document에 있는 H1 요소.
 */
const hello = document.getElementById("hello");

/**
 * "hidden"문자열을 저장한 상수
 */
const HIDDEN_CLASSNAME = "hidden";

/**
 * "userName"문자열을 저장한 상수
 */
const KEY_USERNAME = "userName";
/**
 * 로그인 버튼 클릭 시 실행되는 함수
 */
function onClickLoginBtn(event){
    //1) event의 기본 행동이 발생되지 않도록 막는다.
    event.preventDefault();
    //2) form을 다시 숨긴다.
    frmLogin.classList.add(HIDDEN_CLASSNAME);
    //3) inputLogin.value 를 변수에 저장한다.
    const userName = inputLogin.value;
    //4) 3)의 값을 userName 이라는 key와 함께 local storage에 저장한다.
    //localStorage.setItem("userName", userName);
    localStorage.setItem(KEY_USERNAME, userName);
    //5) 함수 호출’
    displayHello(userName);
  }
/**
 * h1을 디스플레이하는 함수.
 * h1요소 안에 인사말 텍스트를 추가하고, 히든 클래스 제거
 */
function displayHello(argName){
    hello.innerText = `hello ${argName}`;
    //hello.classList.remove("hidden");
    hello.classList.remove(HIDDEN_CLASSNAME);
  }
/**
 * 로컬스토리지의 userName값을 담은 변수
 */
const lsUserName = localStorage.getItem("userName");

if (lsUserName === null){
    //form을 보여준다
    frmLogin.classList.remove(HIDDEN_CLASSNAME);
    frmLogin.addEventListener("submit", onClickLoginBtn);
   
}else{ //로컬스토리지에 값이 저장되어 있다.
    //h1을 보여준다.
    displayHello(lsUserName);
}
