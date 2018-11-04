/*** Disabling form submission if there are invalid fields ***/

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



/*** Highlight current schedule item based on current time ***/

var scheds = document.getElementsByClassName('sched');
var d = new Date();
var t = d.getHours();

if (t == 9) {
  scheds[0].classList.add('list-group-item-success');
} else if (t == 10) {
  scheds[1].classList.add('list-group-item-success');
} else if (t == 11) {
  scheds[2].classList.add('list-group-item-success');
} else if (t == 12) {
  scheds[3].classList.add('list-group-item-success');
} else if (t == 13) {
  scheds[4].classList.add('list-group-item-success');
} else if (t == 14) {
  scheds[5].classList.add('list-group-item-success');
} else if (t == 15) {
  scheds[6].classList.add('list-group-item-success');
}
