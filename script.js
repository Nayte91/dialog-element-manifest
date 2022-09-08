const openModalButtons = document.querySelectorAll('[data-open-modal]')
const closeModalButtons = document.querySelectorAll('[data-close-dialog]')
const openDialogButton = document.querySelector('[data-open-dialog]')

openModalButtons.forEach(button =>
    button.addEventListener('click', () => {
        let dialogName = button.getAttribute('data-open-modal')
        let dialogElement = document.getElementById(dialogName)
        dialogElement.showModal()
    })
)

closeModalButtons.forEach(button =>
    button.addEventListener('click', () => {
        let dialogName = button.getAttribute('data-close-dialog')
        let dialogElement = document.getElementById(dialogName)
        dialogElement.close()
    })
)

openDialogButton.addEventListener('click', () => {
    let dialogName = openDialogButton.getAttribute('data-open-dialog')
    let dialogElement = document.getElementById(dialogName)
    dialogElement.show()
})
