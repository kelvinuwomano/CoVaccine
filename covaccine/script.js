//get the button
const scrollTop = document.getElementById("scrollToTop")

window.addEventListener("scroll", () => {
    // console.log("here", window.scrollY)
    if (window.scrollY > 700) {
        scrollTop.style.display = "block"
    } else {
        scrollTop.style.display = "none"
    }
})
//show the button when the scroll is up to the particular height 
//scroll to the top, on click of the button

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//form submission
//get the form
const contactForm = document.getElementById("contact-form")
//add the event listener for the form submission
contactForm.addEventListener("submit", (event) => {
    //prevent default submission behaviour of the form
    event.preventDefault()


    //show a success alert 
    Swal.fire({
        title: "Submission Successful",
        text: "Thank you for responding",
        icon: "success"
      });
})