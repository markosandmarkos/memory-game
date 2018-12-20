window.onload = function() {

  let container = document.getElementsByClassName("container");
  let sources = ["images/monkey.jpg", "images/Flamingo.jpg", "images/mousee.jpg", "images/Fox.jpg"];
  let double = sources.concat(sources);
  let length = double.length;

  for (let i = 0; i < length; i++) {
    let div = document.createElement('div');
    container[0].append(div);
    div.className = ` node ${i}`;
    var x = document.createElement("IMG");
    x.src = double[i];
    div.appendChild(x);
    x.className = `image ${i}`;
  };
};
