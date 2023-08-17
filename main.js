let btn = document.querySelector("button");
btn.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let btnW = btn.clientWidth;
  let btnH = btn.clientHeight;
  let transX = x - btnW / 2;
  let transY = y - btnH / 2;
  btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
};
btn.onmouseout = () => {
  btn.style.transform = `translateX(0px) translateY(0px)`;
};
