document.addEventListener('DOMContentLoaded', () => {
    // Handle active state for bottom navigation
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked item
            this.classList.add('active');

            // In a real app, you'd load content here based on the clicked item
            console.log(`${this.querySelector('span').textContent} clicked!`);
        });
    });

    // Example: Handle click on "Toothman adventure"
    const toothmanAdventure = document.querySelector('.menu-item.highlighted');
    if (toothmanAdventure) {
        toothmanAdventure.addEventListener('click', () => {
            alert('Starting Toothman Adventure!');
            // In a real app, you would navigate to the game screen
        });
    }
});