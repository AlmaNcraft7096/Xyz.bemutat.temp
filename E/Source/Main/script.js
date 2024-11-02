// Select all links with the class 'delayedLink'
const delayedLinks = document.querySelectorAll('.delayedLink');

// Loop through each link and add a click event listener
delayedLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link action

        // Trigger the transformation by changing the window location hash
        const targetId = link.getAttribute('href'); // Get the target from href
        window.location.hash = targetId; // Set the hash to #egg

        // Set a delay of 5 seconds (5000 milliseconds)
        setTimeout(() => {
            // Redirect to the URL specified in data-href
            window.location.href = link.getAttribute('data-href');
        }, 5000); // 5 seconds
    });
});
