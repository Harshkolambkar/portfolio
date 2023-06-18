window.addEventListener('DOMContentLoaded', function () {
    var highlightRow = document.querySelector('.highlight-row');
    highlightRow.style.opacity = 1;
  });
  
  
  // Trigger animation when the progress bars are in the viewport
    document.addEventListener("DOMContentLoaded", function () {
      var progressBars = document.querySelectorAll(".progress-bar");

      // Check if a progress bar is in the viewport
      function isProgressBarInViewport(progressBar) {
        var rect = progressBar.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }

      // Add 'animated' class to progress bars in the viewport
      function animateProgressBars() {
        progressBars.forEach(function (progressBar) {
          if (isProgressBarInViewport(progressBar)) {
            progressBar.classList.add("animated");
          }
        });
      }

      // Check if the progress bars are in the viewport on page load
      animateProgressBars();

      // Check if the progress bars are in the viewport on scroll
      window.addEventListener("scroll", animateProgressBars);
    });
	
	document.addEventListener("DOMContentLoaded", function () {
      var aboutEducation = document.getElementById("about-education");

      // Add 'animate' class to education section
      function animateEducationSection() {
        aboutEducation.classList.add("animate");
      }

      // Check if the education section is in the viewport
      function isEducationSectionInViewport() {
        var rect = aboutEducation.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
      }

      // Animate education section when it is in the viewport
      function handleScroll() {
        if (isEducationSectionInViewport()) {
          animateEducationSection();
          // Remove event listener after animating the section
          window.removeEventListener("scroll", handleScroll);
        }
      }

      // Check if the education section is in the viewport on page load
      handleScroll();

      // Check if the education section is in the viewport on scroll
      window.addEventListener("scroll", handleScroll);
    });