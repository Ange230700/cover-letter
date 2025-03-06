// client\source\javascript\document\manipulation.js

function getHtmlElement(selector) {
  return document.querySelector(selector);
}

function setHtmlElementContent(htmlElement, content) {
  htmlElement.innerHTML = content;
}

function addNewContentToHtmlElement(htmlElement, content) {
  htmlElement.innerHTML += content;
}

export { getHtmlElement, setHtmlElementContent, addNewContentToHtmlElement };
