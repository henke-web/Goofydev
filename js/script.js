//Toggle sidebar visibility when the toggle button is clicked
document.getElementById('sidebarToggle').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.sidebar').classList.toggle('visible');
    document.querySelector('.overlay').style.display = 'block'; // Show the overlay
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

//Hide sidebar when the close button is clicked
document.getElementById('closeSidebar').addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.sidebar').classList.remove('visible');
    document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
    document.body.style.overflow = 'auto'; // Allow scrolling
});

//Hide sidebar when anywhere else on the document is clicked
document.addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('visible');
    document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
    document.body.style.overflow = 'auto'; // Allow scrolling
});

//Prevent clicks inside the sidebar from bubbling up to the document
document.querySelector('.sidebar').addEventListener('click', function(event) {
    event.stopPropagation();
});