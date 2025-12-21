// let button = document.querySelectorAll(".fillter-btn");
// let items = document.querySelectorAll(".selector-item");

// button.forEach(btn =>{
//     btn.addEventListener("click",(e)=>{
//         //  e.preventDefault();
//         let sector = btn.getAttribute("data-sector");

//         items.forEach(item =>{
//             if (sector === "all" || item.getAttribute("data-sector") ===sector){
//                 item.style.display = "block";
//             }
//             else{
//                 item.style.display = "none"
//             }
//         })
//     })
// })

let buttons = document.querySelectorAll(".filter-btn");
let items = document.querySelectorAll(".sector-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let sector = btn.getAttribute("data-sector");

        items.forEach(item => {
            if (sector === "all" || item.getAttribute("data-sector") === sector) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



// Validation

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let expertise = document.getElementById("expertise").value.trim();

    if (name !== "") {
        if (email !== '') {

            if (expertise !== "") {
                window.alert("Submission Success")
            }
            else {
                document.getElementById("expertise-error").innerHTML = "<p class='text-danger'>Please enter expertise</p>"
            }
        }
        else {
            document.getElementById("email-error").innerHTML = "<p class='text-danger'>Please enter email</p>"
        }
    }
    else {
        document.getElementById("name-error").innerHTML = "<p class='text-danger'>Please enter name</p>"
    }
})