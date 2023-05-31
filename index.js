// const bg = document.querySelectorAll('.bg')
// const wallpaperArray = ["https://images.unsplash.com/photo-1685520917628-d7ac0e7b186c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
//     "https://images.unsplash.com/photo-1685520917803-d8b8ea7061d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80",
//     "https://images.unsplash.com/photo-1685520918014-a1cef4ece6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2273&q=80",
//     "https://images.unsplash.com/photo-1685520917412-7cb05c937b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80",
//     "https://images.unsplash.com/photo-1685520917563-d81a6b4e6953?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
//     "https://images.unsplash.com/photo-1685520917538-2e82e0640447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80"
// ]

// for (i = 0; i < 6; i++) {
//     bg[i].computedStyleMap.backgroundImage = "url(wallpaperArray[i])";
// }


const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
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