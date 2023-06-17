// Animate element on scroll

const animated_element_ids = ["present-text", "fondateur-content-desktop", "services_cards", "fondateur-content-mobile"]

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__fadeInUp");
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: 0.25
})

animated_element_ids.forEach(element_id => {
    element = document.getElementById(element_id);
    observer.observe(element);
})

// Mail sender form
function sendMail() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let obj = document.getElementById("objet").value;
    let corps = document.getElementById("corps").value;

    let data = [nom, email, obj, corps]
    let cpt = 0

    data.forEach((value) => {
        if (value != "")
        {
            cpt += 1
        }
    })

    if(cpt == data.length)
    {
        let body = `Nom: ${nom}<br>Email: ${email}<br>Objet du mail: ${obj}<br><br>Corps: <br>${corps}`
    
        Email.send({
            SecureToken: "eb32df70-12f3-4ca5-8e0f-9bde545cfbb9",
            To: 'oscar.grd7@gmail.com',
            From: "oscar.grd7@gmail.com",
            Subject: "Un formulaire de contact à été rempli",
            Body: body,
        })
    }else {
        alert("Tout les champs n'ont pas été remplis");
    }
}

// Offcanvas close on click
// offcanvas_body = document.getElementsByClassName("offcanvas-body")[0];
// var offcanvas_el = document.getElementById("offcanvasTop")
// var offcanvas = new bootstrap.Offcanvas(offcanvas_el, {backdrop: false})
// for(let i = 0; i < offcanvas_body.children.length; i++)
// {
//     console.log(offcanvas_body.children[i]);
//     offcanvas_body.children[i].addEventListener("click", function() {
//         offcanvas.hide();
//     })   
// }
// // offcanvas_body.children.forEach((child) => {
// //     child.addEventListener("click", function() {
// //         offcanvas_body.classList.add("hide.bs.offcanvas");
// //     }) 
// // })
