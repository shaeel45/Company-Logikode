let sideNav = document.getElementById("sideNav");
sideNav.style.right = "-290px";
    menubtn.onclick = function () {
      if (sideNav.style.right == "-290px") {
        sideNav.style.right = "0";
      } else {
        sideNav.style.right = "-290px";
      }
    };

    window.ityped.write(document.querySelector('.ityped'),{
      strings: [`We specialize in creating custom websites and web applications that help businesses achieve their online goals. With a team of experienced developers, designers, and project managers, we are equipped to handle projects of all sizes and industries.`],
      loop: true
  })


  