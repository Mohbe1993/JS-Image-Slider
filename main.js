var imeges = Array.from(document.querySelectorAll(".container img"));
var imegesCount = imeges.length;
var currentImage = 1;
var imageNum = document.getElementById("number");
var nextB = document.getElementById("next");
var prevB = document.getElementById("prev");

nextB.onclick = next;
prevB.onclick = prev;

var indicatorsEl = document.createElement("ul");
indicatorsEl.setAttribute("id", "indiUL");

for (var i = 1; i <= imegesCount; i++) {
  var indicatorsItem = document.createElement("li");
  indicatorsItem.setAttribute("data-index", i);

  indicatorsItem.appendChild(document.createTextNode(i));

  indicatorsEl.appendChild(indicatorsItem);
}
document.getElementById("indicators").appendChild(indicatorsEl);

var indiNewUl = document.getElementById("indiUL");

var indiBUl = Array.from(document.querySelectorAll("#indiUL li"));

for (var i = 0; i < indiBUl.length; i++) {
  indiBUl[i].onclick = function () {
    currentImage = parseInt(this.getAttribute("data-index"));

    checker();
  };
}

checker();
function next() {
  if (nextB.classList.contains("dis")) {
    return false;
  } else {
    currentImage++;
    checker();
  }
}

function prev() {
  if (prevB.classList.contains("dis")) {
    return false;
  } else {
    currentImage--;
    checker();
  }
}

function checker() {
  imageNum.textContent = "Slide " + currentImage + " of " + imegesCount;

  removeAllActive();

  imeges[currentImage - 1].classList.add("active");

  indiNewUl.children[currentImage - 1].classList.add("active");

  if (currentImage == 1) {
    prevB.classList.add("dis");
  } else {
    prevB.classList.remove("dis");
  }

  if (currentImage == imegesCount) {
    nextB.classList.add("dis");
  } else {
    nextB.classList.remove("dis");
  }
}

function removeAllActive() {
  imeges.forEach(function (img) {
    img.classList.remove("active");
  });

  indiBUl.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
