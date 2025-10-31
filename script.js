Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if (top >= Offset && top < Offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href'=' + id + ']').classList.add('active');
});
        };
    });


    Let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY >100);



menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};