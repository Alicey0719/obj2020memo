window.onload = Main;

function Main() {
  let submit = document.getElementById("submit");
  let clear = document.getElementById("clear");
  let exit = document.getElementById("exit");
  exit.addEventListener("click", (event) => {
    window.open("about:blank", "_self").close();
  });
  submit.addEventListener("click", add);
  clear.addEventListener("click", cla);
}

function add() {
  //console.log("submit");
  let area = document.getElementById("memoArea");
  let textArea = document.getElementById("textArea");
  let newMemo = document.createElement("div");
  let date = document.createElement("p");
  let text = document.createElement("p");
  let goodCounter = document.createElement("p");
  let goodButton = document.createElement("p");
  let goodArea = document.createElement("div");

  date.className = "date";
  date.innerText = getDate();

  text.className = "text";
  text.innerText = textArea.value;
  textArea.value = "";

  goodArea.className = "goodArea";
  goodButton.className = "goodButton";
  goodButton.innerText = "👍";
  goodCounter.className = "goodCounter";
  goodCounter.innerText = 0;

  goodButton.addEventListener("click", (event) => {
    goodCounter.innerText++;
    if (goodCounter.innerText >= 100) {
      goodCounter.style.color = "#fa9612";
    }
  });

  newMemo.className = "memo";
  newMemo.appendChild(date);
  newMemo.appendChild(text);
  newMemo.appendChild(goodArea);
  goodArea.appendChild(goodButton);
  goodArea.appendChild(goodCounter);
  area.prepend(newMemo);
}

function cla() {
  let area = document.getElementById("memoArea");
  area.innerHTML = "";
}

function getDate() {
  const date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth();
  let dd = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let result = yyyy + "/" + mm + "/" + dd + "　" + h + ":" + m + ":" + s;

  let res = `${yyyy}/${mm}/${dd} $[h}:${m}:${s}]`;
  return result;
}
