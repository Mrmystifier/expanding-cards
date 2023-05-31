const wallpaperArray = ["https://images.unsplash.com/photo-1685520917628-d7ac0e7b186c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
    "https://images.unsplash.com/photo-1685520917803-d8b8ea7061d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80",
    "https://images.unsplash.com/photo-1685520918014-a1cef4ece6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80",
    "https://images.unsplash.com/photo-1685520917412-7cb05c937b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
    "https://images.unsplash.com/photo-1685520917563-d81a6b4e6953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1685520917538-2e82e0640447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80"
]
const textarray = ["a", "yellow Mclaren", "blue lamborghini", "My duke", "red lamborghini", "black Mclaren", "green lamborghini"]

const alldiv = document.querySelectorAll('div')

for (let j = 1; j < alldiv.length; j++) {
    let heading = `<h3>${textarray[j]}</h3>`
    alldiv[j].firstElementChild.insertAdjacentHTML("afterend", heading)

}

const panels = document.querySelectorAll('.panel');

let i = 0;

panels.forEach((panel) => {

    panel.classList.add('bg');
    panel.style.backgroundImage = `url(${wallpaperArray[i]})`;
    i++;

    panel.addEventListener('click', () => {
        removeactiveClasses()
        panel.classList.add('active');
    })
})


function removeactiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })

}

const colour = ["yellow", "blue", "orange", "red", "black", "green"]
const allH = document.querySelectorAll('h3');
for (let k = 0; k < allH.length; k++) {
    allH[k].style.color = colour[k];

}