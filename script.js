var i = 0,
  images = ["images/s1.jpg", "images/s2.jpg", "images/s3.jpg"],
  slider = document.getElementById("slider");

function slide_start() {
  slider.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("slide_start()", 3000);
}

slide_start();
