const userCardTemplate = document.querySelector("[data-user-template]")
console.log(userCardTemplate)

const userCardContainer = document.querySelector("[data-user-card-container]")

const searchInput = document.querySelector("[data-search]")


// to hide the unneccessary and show the relevant  info while a user is searching
let users = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach( user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
   
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data =>{
 users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")    
        const body = card.querySelector("[data-body]")
        header.textContent = user.name
        body.textContent = user.email
        userCardContainer.append(card)
        return{name: user.name, email: user.email, element: card}
    })
    
})

