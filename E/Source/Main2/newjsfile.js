        // Select all links with the class 'delayedLink'
        const delayedLinks = document.querySelectorAll('.delayedLink');
        const egg = document.getElementById('egg'); // Select the Egg element

        // Function to handle the click event
        function handleClick(event) {
            event.preventDefault(); // Prevent the default link action

            // Add the 'expanded' class to trigger transformation
            egg.classList.add('expanded');

            // Get the href from the clicked link
            const redirectUrl = this.getAttribute('data-href');
            console.log("Redirecting to:", redirectUrl); // Debugging line

            // Set a delay of 5 seconds (5000 milliseconds)
            setTimeout(() => {
                // Redirect to the URL specified in data-href
                window.location.href = redirectUrl;
            }, 2500); // 5 seconds
        }

        // Loop through each link and add the click event listener
        delayedLinks.forEach(link => {
            link.addEventListener('click', handleClick);
        });