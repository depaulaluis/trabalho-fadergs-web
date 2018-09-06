(() => {
    const navBurguer = document.querySelector('.navbar-burger');
    let menuBurguer = document.querySelector('.navbar-menu');
    navBurguer.addEventListener('click', function() {
        const classNames = this.className;
        if(classNames.indexOf('is-active') > -1) {
            this.className = this.className.split('is-active').join(' ');
            menuBurguer.className = menuBurguer.className.split('is-active').join(' ');
        } else {
            this.className = this.className + ' is-active';
            menuBurguer.className = menuBurguer.className + ' is-active';
        }
    });
})();