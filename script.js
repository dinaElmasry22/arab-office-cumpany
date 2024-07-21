document.addEventListener("DOMContentLoaded", function() {
    var header = `
        <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="./images/logo.jpeg" class="logo" width="250px" alt=""></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="index.html">Company Profile</a>
                        <a class="nav-link" href="about-us.html">About Us</a>
                        <a class="nav-link" href="inspections.html">Inspections & Certifications</a>
                        <a class="nav-link" href="training.html">Training</a>
                        <a class="nav-link" href="approval.html">Approval</a>
                        <a class="nav-link" href="gallery.html">Gallery</a>
                        <a class="nav-link" href="contact.html">Contact us</a>
                    </div>
                    <div class="lang">
                        <input type="checkbox" id="switch" />
                        <label for="switch"></label>
                    </div>
                    <div class="social-media">
                        <a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://x.com"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://facebook.com"><i class="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const activePage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
        }
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var footer = `
        <footer>
        <div class="container-fluid text-white py-3 animate__animated animate__fadeInUp">
            <div class="container">
                <div class="row align-items-center py-5 ">
                    <div class="col-lg-5 col-md-12 col-sm-12 mb-sm-4"><img class="white-logo"
                            src="./images/white_logo.png" alt="">
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 links mb-sm-4">
                        <h3>Links</h3>
                        <a class="nav-link active " aria-current="page" href="#">Company Profile</a>
                        <a class="nav-link" href="#">About Us</a>
                        <a class="nav-link" href="#">Inspections & Certifications</a>
                        <a class="nav-link" href="#">Training</a>
                        <a class="nav-link" href="#">Approval</a>
                        <a class="nav-link" href="#">Gallery</a>
                        <a class="nav-link" href="#">Contact us</a>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <h3>Contact Us</h3>
                        <div class=" flex items-center text-white lg:text-2xl my-2">
                            <i class="fa-solid fa-location-dot mx-2"></i>Arabian Bureau of Services

                        </div>
                        <div class=" flex items-center text-white lg:text-2xl my-2">
                            <i class="fa-solid fa-envelope-open mx-2"></i>P.O.Box 47133 - Musaffah
                        </div>
                        <div class=" flex items-center text-white lg:text-2xl my-2">
                            <i class="fa-solid fa-phone mx-2"></i>Tel: +971 2 5511520
                        </div>
                        <div class=" flex items-center text-white lg:text-2xl my-2">
                            <i class="fa-solid fa-envelope mx-2"></i>Email: abs@abosad.com
                        </div>
                        <div class="social-media">
                            <a href="https://youtube.com"><i class="fa-brands fa-youtube"></i></a>
                            <a href="https://instagram.com"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://x.com"><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="https://facebook.com"><i class="fa-brands  fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footer);
});


