const menuIcon = document.querySelector('.menu-Icon')
console.log(menuIcon);
menuIcon.onclick = () =>{
        document.querySelector('nav').classList.toggle('showed_Nav')
}