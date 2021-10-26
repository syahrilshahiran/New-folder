function toggleDark(x) {
  var element = document.body;
  let header = document.querySelectorAll(".bar-item");
  let img = document.querySelectorAll("#img-dark");
  var index = 0,
    length = header.length;
  imglength = img.length;
  if (element.classList.contains("light-mode")) {
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
    for (; index < length; index++) {
      header[index].classList.remove("scrolling-active-light");
      if (window.scrollY > 10) {
        header[index].classList.add("scrolling-active-dark");
      }
    }
  } else if (element.classList.contains("dark-mode")) {
    element.classList.add("light-mode");
    element.classList.remove("dark-mode");
    for (; index < length; index++) {
      header[index].classList.remove("scrolling-active-dark");
      if (window.scrollY > 10) {
        header[index].classList.add("scrolling-active-light");
      }
    }
  }
  var index = 0;
  for (; index < imglength; index++) {
    img[index].classList.toggle("dark");
  }
  x.classList.toggle("dark");
}

function scrollPage(x) {
  document.getElementById(x).scrollIntoView();
  console.log(x)
}

window.addEventListener("scroll", function () {
  let header = document.querySelectorAll(".bar-item");
  var element = document.body;

  var index = 0,
    length = header.length;
  let windowPosition = window.scrollY > 10;
  if (element.classList.contains("light-mode")) {
    for (; index < length; index++) {
      header[index].classList.toggle("scrolling-active-light", windowPosition);
      header[index].classList.toggle("rainbow-box", windowPosition);
      header[index].classList.toggle("noisy", windowPosition)
    }
  } else if (element.classList.contains("dark-mode")) {
    for (; index < length; index++) {
      header[index].classList.toggle("scrolling-active-dark", windowPosition);
      header[index].classList.toggle("rainbow-box", windowPosition);
      header[index].classList.toggle("noisy", windowPosition)
    }
  }
});

// const observer = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       console.log('nice')
//       entry.target.classList.add('scroll-animate');
//     }
//   });
// });
// observer.observe(document.getElementById('about'));
// observer.observe(document.getElementById('skills'));
// observer.observe(document.getElementById('contact'));
// observer.observe(document.getElementById('project'));
const sr = ScrollReveal({
  distance: '60px',
  duration: 1500,
  delay: 300,
  // reset: true
})
sr.reveal('.about')
sr.reveal('.skills')
sr.reveal('.contact')
sr.reveal('.project')