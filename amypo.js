// copy paste 2
// document.querySelectorAll(".editor.ace_editor").forEach(el=>(ace.edit(el)._eventRegistry.change = []))
"use strict";
let canSwitch = true;
let canFullScreen = true;
let trueTabSwitch = false;
let md = { render: () => {} };
// Ctrl + Backspace = Set Random Timer
// Ctrl + Shift + 1 = Open Draggable Notes
// Ctrl + Shift + 2 = Toggle Tab Switch
// Ctrl + Shift + 3 = Copy Access Key
// Ctrl + Shift + 4 = Toggle Force Fullscreen
// Ctrl + Shift + 5 = Toggle Copying Question
// Ctrl + Shift + 6 = Toggle Display of Remaining Test Cases
// Ctrl + Shift + 7 = Toggle Original Tab Switch Behaviour
// Ctrl + Shift + 8 = Auto Answer MCQ

// Ctrl + Shift + ? = Toggle Information Window
// Ctrl + Shift + [ = Toggle Paste
// Ctrl + Shift + ] = Bypass Test Expiration

let mdScriptEl = document.createElement("script");
mdScriptEl.src =
  "https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/dist/markdown-it.min.js";
mdScriptEl.addEventListener("load", () => {
  console.log("Loaded!");
  md = markdownit({ html: false });
});
document.body.append(mdScriptEl);
document.addEventListener("keydown", function (event) {
  if (
      event.shiftKey &&
      (event.ctrlKey || event.metaKey) &&
      event.key === "!"
  ) {
      event.preventDefault();
      showInputForm();
  }
});
const formContainer = Object.assign(document.createElement("div"), {
  id: "copyInputForm",
  style: `
position: fixed;
padding: 10px;
left: 12px;
top: ${window.innerHeight - 0}px; /* OffsetHeight will update later */
background-color: #192132;
border-radius: 3px;
z-index: 9999;
display: none;
`,
});

const notesText = Object.assign(document.createElement("textarea"), {
  style: `
margin-right: 5px;
background-color: #26334D;
outline: none;
border: 1px solid #e7ecee;
border-radius: 3px;
padding: 3px 5px;
width: 20vw;
`,
});

formContainer.appendChild(notesText);
document.body.appendChild(formContainer);

function computeHelp(userT = false) {
  return `
<style>
  #status-ext {
    position: absolute;
    bottom: 5px;
    right: 5px;
    border-radius: 4px;
    background-color: #26334D;
    color: #fff;
    padding: 8px 12px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  #status-ext table {
    width: 100%;
    border-collapse: collapse;
  }
  #status-ext table td {
    padding: 6px 8px;
    text-align: left;
  }
  #status-ext table tr:nth-child(odd) {
    background-color: #2e3a4e;
  }
  #status-ext table tr:nth-child(even) {
    background-color: #3b4a62;
  }
  #status-ext table tr td:first-child {
    width: 40px;
    text-align: center;
    font-weight: bold;
  }
  #status-ext table tr td:last-child {
    width: 60px;
    text-align: center;
  }
</style>
<table>
  <tr>
    <td>[</td>
    <td>Paste</td>
    <td>${userT}</td>
  </tr>
  <tr>
    <td>]</td>
    <td>Test Expired</td>
    <td>-</td>
  </tr>
  <tr>
    <td>←</td>
    <td>Change Timer</td>
    <td>-</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Notes</td>
    <td>-</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Tab Switch</td>
    <td>${canSwitch}</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Access Key</td>
    <td>-</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Fullscreen</td>
    <td>${canFullScreen}</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Allow Copy</td>
    <td>${
      document.querySelector(".coding")?.style.userSelect === "unset"
}</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Hidden Test Cases</td>
    <td>${document.querySelectorAll("#removetestcase").length !== 0}</td>
  </tr>
   <tr>
    <td>7</td>
    <td>OG Tab Switches</td>
    <td>${trueTabSwitch}</td>
  </tr>
   <tr>
    <td>8</td>
    <td>Autoanswer MCQ</td>
    <td>-</td>
  </tr>
</table>`;
}
const statusEl = document.createElement("div");
statusEl.id = "status-ext";
statusEl.style.display = "none";
statusEl.innerHTML = computeHelp();
function showStatus() {
  if (statusEl.style.display === "none") {
      statusEl.style.display = "block";
  } else {
      statusEl.style.display = "none";
  }
}

document.body.appendChild(statusEl);

let isDragging = false;
let offsetX, offsetY;

formContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - formContainer.offsetLeft;
  offsetY = e.clientY - formContainer.offsetTop;
  formContainer.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
      formContainer.style.left = `${e.clientX - offsetX}px`;
      formContainer.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  formContainer.style.cursor = "unset";
});

function showInputForm() {
  if (formContainer.style.display === "none") {
      formContainer.style.display = "block";
      formContainer.style.top = `${
  window.innerHeight - formContainer.offsetHeight
  }px`;
  } else {
      formContainer.style.display = "none";
  }
}

document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey || event.metaKey) && event.key === "Backspace") {
      event.preventDefault(); // Prevent default behavior if needed
      prevTime = Math.floor(Math.random() * 500 + 1000);
  }

  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "{"
  ) {
      event.preventDefault();
      if (userType === "s") {
          userType = "student";
      } else {
          userType = "s";
      }
      statusEl.innerHTML = computeHelp(userType !== "student");
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "?"
  ) {
      event.preventDefault();
      statusEl.innerHTML = computeHelp();
      showStatus();
      console.log("?");
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "}"
  ) {
      event.preventDefault();
      let data = document.querySelector("[class='mt-5'][x-data]")
      ._x_dataStack[0];
      if (data.showDiv) {
          setTimeout(() => {
              data.showDiv = false;
              data.showKey = true;
          }, 500);
      }
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "@"
  ) {
      event.preventDefault();
      canSwitch = !canSwitch;
      statusEl.innerHTML = computeHelp();
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "#"
  ) {
      event.preventDefault();
      let rawKey = document
      .querySelector("[class='mt-5'][x-data]")
      .getAttribute("x-data");
      const regex = /key\s*==\s*(\d+)/g;
      const matches = [...rawKey.matchAll(regex)].map((match) => match[1]);
      let accessKey = parseInt(matches[0]);
      GM_setClipboard(accessKey);
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "₹"
  ) {
      event.preventDefault();
      canFullScreen = !canFullScreen;
      statusEl.innerHTML = computeHelp();
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "%"
  ) {
      event.preventDefault();
      let codingStyle = document.querySelector(".coding");
      if (codingStyle.style.userSelect === "none") {
          codingStyle.style.userSelect = "unset";
      } else {
          codingStyle.style.userSelect = "none";
      }
      statusEl.innerHTML = computeHelp();
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "^"
  ) {
      event.preventDefault();
      let otherTest = document.querySelectorAll("#removetestcase");
      if (otherTest.length !== 0) {
          otherTest.forEach((el) => el.remove());
      } else {
          let curr = document.querySelector(
              '[class="tabs flex flex-col"][data-has-alpine-state="true"]'
          )._x_dataStack[0].activeTab[11];
          document.querySelector(
              `[x-show="activeTab === 'tabQuestion${curr}'"] [class="p-4 h-[400px] overflow-auto show-scrollbar w-full"]`
  ).innerHTML += test_cases[curr - 1]
              .slice(2)
              .map(
              (
                  el,
                  idx
              ) => `<div class="mt-2 pt-4 flex gap-4 justify-center w-full" id="removetestcase">
                                                    <label class="block w-full h-full">
                                                        <h1 class="p-2 font-semibold"> Sample Input ${
                                                          idx + 3
              } : </h1>
                                                        <textarea rows="4" placeholder="Enter your custom input here..." class="text-sm form-textarea w-full h-full resize-none rounded-lg p-2.5 bg-slate-150  placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300" disabled="">${
                                                          el.input
              }
</textarea>

                                                    </label>
                                                    <label class="block w-full h-full">
                                                        <h1 class="p-2 font-semibold">Sample Output ${
                                                          idx + 3
              } :</h1>
                                                        <textarea rows="4" placeholder="Enter your custom input here..." class="text-sm form-textarea w-full h-full resize-none rounded-lg p-2.5 bg-slate-150  placeholder:text-slate-400 dark:bg-navy-900 dark:placeholder:text-navy-300" disabled="">${
                                                          el.output
              }
</textarea>
                                                    </label>
                                                </div>`
    )
              .join("\n");
      }
      statusEl.innerHTML = computeHelp();
  }

  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "&"
  ) {
      event.preventDefault();
      trueTabSwitch = !trueTabSwitch;
      statusEl.innerHTML = computeHelp();
  }
  if (
      (event.ctrlKey || event.metaKey) &&
      event.shiftKey &&
      event.key === "*"
  ) {
      event.preventDefault();
      autoAnswerMCQ();
  }
});
function mockFullScreen() {
  let docEl = document.documentElement;

  if (docEl.requestFullscreen) {
      docEl.requestFullscreen();
  } else if (docEl.mozRequestFullScreen) {
      /* Firefox */
      docEl.mozRequestFullScreen();
  } else if (docEl.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docEl.webkitRequestFullscreen();
  } else if (docEl.msRequestFullscreen) {
      /* IE/Edge */
      docEl.msRequestFullscreen();
  }
}
function autoAnswerMCQ(){
  if(typeof saveSelectedValue === "undefined") return;
  let ogSave = saveSelectedValue;

  saveSelectedValue = (q,i, e, s)=> {
      document.querySelectorAll(`input[name='${q}']`).forEach(el=>{
          if(el.nextSibling.nextElementSibling.innerHTML === s.solution){
              el.click()
              ogSave(q,i, e, s);
          }
      })
  }

  let qLen = document.querySelectorAll("[id^='quizOption'][id$=-submit]").length;

  for(let i = 1; i <= qLen; i++){
      requestAnimationFrame(()=>{
          document.getElementById(`quizOption${i}-submit`).click()
      })
  }
}
function mockTabSwitch() {
  if (trueTabSwitch && tabswitch == 2) {
      document.getElementById("triggerEnd").click();
      document.getElementById("reason").innerHTML =
          "We noticed tab switching, so your test was auto-closed. Some answers might not have been submitted.";
      return;
  }
  if (tabswitch === 2) {
      tabswitch = 0;
  } else {
      tabswitch++;
  }
  const elements = document.querySelectorAll(".remaining");
  elements.forEach((element) => {
      element.innerHTML = tabswitch;
  });
}
if (typeof checkAttempts !== "undefined") {
  checkAttempts = () => {
      if (!canSwitch) {
          mockTabSwitch();
      } else {
          const elements = document.querySelectorAll(".remaining");
          elements.forEach((element) => {
              element.innerHTML = 0;
          });
      }
  };
}
document
  .querySelectorAll("[oncopy]")
  .forEach((el) => el.removeAttribute("oncopy"));
if (document.querySelector("#endAuth")) {
  document.querySelector("#endAuth").value = "CONFIRM";
}
if (typeof goFullscreen !== "undefined") {
  goFullscreen = () => {
      if (!canFullScreen) {
          mockFullScreen();
      }
  };
}
if (typeof checkAlwaysActiveWindow !== "undefined") {
  checkAlwaysActiveWindow = () => {};
}
setTimeout(() => {
  document.querySelectorAll(".editor.ace_editor").forEach((el) => {
      el.classList.add("ace-github-dark");
      console.log("hhh");
  });
}, 2000);

function chatGPTExperimental(){
  const chatBOT = Object.assign(document.createElement("div"), {
      id: "chatgpt",
      style: `
  position: fixed;
  padding: 10px;
  left: 12px;
  top: ${window.innerHeight / 2}px; /* OffsetHeight will update later */
  background-color: #192132;
  border-radius: 3px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,
  });
  const question = Object.assign(document.createElement("textarea"), {
      style: `
margin-right: 5px;
background-color: #26334D;
outline: none;
border: 1px solid #e7ecee;
border-radius: 3px;
padding: 3px 5px;
width: 20vw;
`,
  });
  const submitButton = Object.assign(document.createElement("button"), {
      style: `
margin-right: 5px;
background-color: #26334D;
outline: none;
border: 1px solid #e7ecee;
border-radius: 3px;
padding: 3px 5px;
width: 40vw;
`,
      innerText: "Send",
  });
  const chats = Object.assign(document.createElement("button"), {
      style: `
display: flex;
flex-direction: column;
gap: 4px;
max-height: 20vh;
overflow-y: scroll;
`,
  });
  submitButton.addEventListener("click", async () => {
      question.disabled = true;
      const textContainer = Object.assign(document.createElement("div"), {
          style: `
  background-color: #26334D;
  border: 1px solid #e7ecee;
  border-radius: 3px;
  padding: 3px 5px;
  width: 40vw;
`,
      });
      textContainer.innerHTML = "Loading...";
      chats.append(textContainer);
      axios
          .post(
          "https://api.openai.com/v1/chat/completions",
          {
              model: "gpt-4o-mini",
              messages: [
                  {
                      role: "system",
                      content: "You are a helpful assistant in coding.",
                  },
                  { role: "user", content: question.value },
              ],
          },
          {
              headers: {
                  Authorization:
                  "Bearer " +
                  "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",
                  "Content-Type": "application/json",
              },
          }
      )
          .then((response) => {
          console.log(response.data, {
              msg: response.data.choices[0].message.content,
              md: md.render(response.data.choices[0].message.content),
          });
          textContainer.innerHTML = md.render(
              response.data.choices[0].message.content
          );
      })
          .finally(() => {
          question.disabled = false;
      });
  });
  chatBOT.append(question);
  chatBOT.append(chats);
  chatBOT.append(submitButton);
  document.body.appendChild(chatBOT);

}
