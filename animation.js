document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true)
            document.querySelector('.center-text').classList.add('visible');
    }, { threshold: [1] });

    observer.observe(document.querySelector('.center-text'));
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach((link) => {
    if (link.href.includes(currentPage)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
