String.prototype.format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};


// <div class="carousel-item" style="background-image: url('./assets/img/campus/2.jpg')">
//   <div class="carousel-caption">
//     <h2 class="display-4">Second Slide</h2>
//     <p class="lead">This is a description for the second slide.</p>
//   </div>
// </div>

function load_images(){
  console.log("called me")
  var parent = document.getElementById('header_slider');
  var content = parent.innerHTML;
  console.log(parent.innerHTML);

  var arr = {
    1: ["'./assets/img/campus/4.jpg'", "Main Header", "Some small caption"],
    2: ["'./assets/img/campus/5.jpg'", "Main Header", "Some small caption"],
    3: ["'./assets/img/campus/6.jpg'", "Main Header", "Some small caption"],
    4: ["'./assets/img/campus/7.jpg'", "Main Header", "Some small caption"],
    5: ["'./assets/img/campus/8.jpg'", "Main Header", "Some small caption"],
    6: ["'./assets/img/campus/9.jpg'", "Main Header", "Some small caption"],
    7: ["'./assets/img/campus/10.jpg'", "Main Header", "Some small caption"],
    8: ["'./assets/img/campus/11.jpg'", "Main Header", "Some small caption"],
    9: ["'./assets/img/campus/12.jpg'", "Main Header", "Some small caption"],
    10: ["'./assets/img/campus/13.jpg'", "Main Header", "Some small caption"]
  }

  for(var key in arr){
    var temp = `<div class="carousel-item" style="background-image: url({})">
                  <div class="carousel-caption">
                    <h2 class="display-4">{}</h2>
                    <p class="lead">{}</p>
                  </div>
                </div>`.format(arr[key][0], arr[key][1], arr[key][2]);
    content =  content + temp
  }
  parent.innerHTML = content;

  console.log(parent.innerHTML);
}