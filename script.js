function Myfunction(){
    window.print();
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Collect form data
        const fullName = encodeURIComponent(document.getElementById('fullName').value);
        const email = encodeURIComponent(document.getElementById('email').value);
        const mobile = encodeURIComponent(document.getElementById('mobile').value);
        const subject = encodeURIComponent(document.getElementById('subject').value);
        const message = encodeURIComponent(document.getElementById('message').value);

        // Create the mailto link
        const mailtoLink = `mailto:gangdh40@gmail.com?subject=${subject}&body=Name:%20${fullName}%0AEmail:%20${email}%0AMobile:%20${mobile}%0A%0A${message}`;

        // Redirect to the mailto link
        window.location.href = mailtoLink;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('open');
    });

    // Close the navbar if a menu link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuIcon.classList.remove('open');
            }
        });
    });
});

function Warning(){
    alert('Wait ಮಾಡಿ ಬರುತ್ತೆ, Not yet hosted.');
};

function Warning2nd(){
    alert('😂😂😂 ಇದು ಕೂಡ ಇನ್ನೂ host ಆಗಿಲ್ಲ.');
};






