const burger = document.getElementById('toggle-navbar');

burger.addEventListener('click', function () {
  document.getElementById('navbar-default').classList.toggle('hidden');
});
