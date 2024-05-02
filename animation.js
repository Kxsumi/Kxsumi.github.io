document.addEventListener("DOMContentLoaded", function() {
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true)
            document.querySelector('.center-text').classList.add('visible');
    }, { threshold: [1] });

    observer.observe(document.querySelector('.center-text'));
});
