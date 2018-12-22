// window.onload = function() {
//
//   let container = document.getElementsByClassName("container");
//   let sources = ["images/monkey.jpg", "images/Flamingo.jpg", "images/mousee.jpg", "images/Fox.jpg"];
//   let double = sources.concat(sources);
//   let length = double.length;
//
//   for (let i = 0; i < length; i++) {
//     let div = document.createElement('div');
//     container[0].append(div);
//     div.className = `node ${i}`;
//     var image = document.createElement("IMG");
//     image.src = double[i];
//     div.appendChild(image);
//     image.className = `image ${i}`;
//     image.classList.add('hidden');
//
//   }
//
//   let nodes = document.getElementsByClassName('node');
//   let images = document.getElementsByClassName('image');
//
//   for (let i = 0; i < nodes.length; i++) {
//     nodes[i].onclick = function () {
//       images[i].classList.remove('hidden');
//       for (let j = 0; j < nodes.length; j++) {
//         nodes[j].onclick = function () {
//           if (images[i].src != images[j].src) {
//             images[i].classList.add('hidden');
//           } else {
//             images[j].classList.remove('hidden');
//           }
//         };
//       }
//     };
//   }
// };



window.onload = function () {
  
  let container = document.querySelector(".container");
  let sources = ["images/monkey.jpg", "images/Flamingo.jpg", "images/mousee.jpg", "images/Fox.jpg"];
  let double = [...sources, ...sources];
  
  let html = '';
  
  for (let i = 0; i < double.length; i++) {
    html += `<div class="node">
      <img class="hidden" data-img-index="${i}" src=${double[i]}>
    </div>`;
  }
  
  container.innerHTML = html;
  
  let imageIndexStore = '';
  let timer = 0;
  container.addEventListener('click', function (e) {
    
    if (!e.target.closest('.node')) return;
    let img = e.target.closest('.node').querySelector('img');
    
    let { imgIndex } = img.dataset;
    
    if (img.classList.contains('hidden')) {
      img.classList.remove('hidden');
    }
    
    if (imageIndexStore === '') {
      imageIndexStore = imgIndex
    } else if (imgIndex !== imageIndexStore) {
      let a = imageIndexStore;
      timer = setTimeout(() => {
        img.classList.add('hidden');
        container.querySelector(`[data-img-index="${a}"]`).classList.add('hidden')
      }, 1000);
    }
  });
};

function openImage(e) {
  console.log(e);
}