// Select the link element
const delayedLink = document.getElementById('delayedLink');

// Add a click event listener to the link
delayedLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link action

    // Trigger the transformation by changing the window location hash
    window.location.hash = 'egg';

    // Set a delay of 5 seconds (5000 milliseconds)
    setTimeout(() => {
        // Redirect to the URL specified in data-href
        window.location.href = delayedLink.getAttribute('data-href');
    }, 3000); // 5 seconds
});