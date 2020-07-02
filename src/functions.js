function createElement(element, className) {
  const elm = document.createElement(element);
  elm.className = className;
  return elm;
}

function createElementWithText(element, className, text) {
  const elm = document.createElement(element);
  elm.className = className;
  elm.innerHTML = text;
  return elm;
}

function createImage(src, alt, className) {
  const myImage = new Image();
  myImage.src = src;
  myImage.alt = alt;
  myImage.className = className;
  return myImage;
}

export {
  createElement,
  createElementWithText,
  createImage,
};
