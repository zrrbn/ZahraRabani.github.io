window.addEventListener("load", function (e) {
    var loading = document.getElementById("loading");
    var content = document.getElementById("content");
    function hideContent() {
        loading.style.display = 'flex';
        content.style.display = 'none';
    }
    function showContent() {
        loading.style.display = 'none';
        content.style.display = 'block';
    }
    hideContent();
    setTimeout(showContent,5000);
})