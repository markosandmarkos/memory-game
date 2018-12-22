window.onload = function() {

  let container = document.getElementsByClassName("container");
  let sources = ["images/monkey.jpg", "images/Flamingo.jpg", "images/mousee.jpg", "images/Fox.jpg"];
  let double = sources.concat(sources);
  let length = double.length;

  for (let i = 0; i < length; i++) {
    let div = document.createElement('div');
    container[0].append(div);
    div.className = `node ${i}`;
    var image = document.createElement("IMG");
    image.src = double[i];
    div.appendChild(image);
    image.className = `image ${i}`;
    image.classList.add('hidden');

  }

  let nodes = document.getElementsByClassName('node');
  let images = document.getElementsByClassName('image');

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].onclick = function () {
      images[i].classList.remove('hidden');
      for (let j = 0; j < nodes.length; j++) {
        nodes[j].onclick = function () {
          if (images[i].src != images[j].src) {
            images[i].classList.add('hidden');
          } else {
            images[j].classList.remove('hidden');
          }
        };
      }
    };
  }
};
