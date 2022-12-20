const salam = document.querySelector('.salam input')

salam.addEventListener (' click', () => {
    const onoff = salam.parentNode.querySelector('.onoff')
    onoff.textContent = salam.checked ? 'aciq' : ' bagli'
})