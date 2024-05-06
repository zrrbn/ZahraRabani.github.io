window.addEventListener("load", function (e) {
    var toggle = document.getElementById("theme-toggle");
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    if (storedTheme) {
        document.documentElement.setAttribute('theme', storedTheme);
        toggle.checked = (storedTheme == "light");
    }

    toggle.addEventListener('click', (e) => {
        const checked = e.target.checked;
        document.documentElement.setAttribute('theme', checked ? 'light' : 'dark');
        localStorage.setItem('theme', checked ? "light" : "dark");
    });
})

function openNav() {
    console.log("ddd")
    document.getElementById("sidenav").style.width = "100vw";
}

function closeNav() {
    console.log("ddd")
    document.getElementById("sidenav").style.width = "0";
}