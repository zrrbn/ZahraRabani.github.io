fetch("../src/components/footer.html")
    .then(function (response) {
        if (!response.ok) {
            setTimeout(() => {
                console.log('refetching')
                reFetch();
            }, 1000)
        } else {
            return response.text();
        }
    })
    .then(text => define(text, 'm-footer'))
    .catch((error) => {
        console.log(error)
        setTimeout(() => {
            console.log('refetching')
            reFetch();
        }, 1000)
    });

function reFetch() {
    fetch("../components/footer.html")
        .then(function (response) {
            if (!response.ok) {
                console.log('failed!')
                console.log(response)
            } else {
                return response.text();
            }
        })
        .then(text => define(text, 'm-footers'))
        .catch((error) => {
            console.log(error)
        });
}

function define(html, name) {
    class Footer extends HTMLElement {
        constructor() {
            super();
            var shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = html;
        }
    }
    customElements.define(name, Footer);
    // customElements.define('m-carousel', Footer);
    customElements.whenDefined('m-footer').then(() => {
        console.log('footer defined');
    });
}