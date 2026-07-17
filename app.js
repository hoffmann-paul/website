document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("laubrechen-card").style.display = "none";
});

function laubrechen() {
    if(document.getElementById("laubrechen-card").style.display == "none") {
        document.getElementById("laubrechen-card").style.display = "block";
    } else {
        document.getElementById("laubrechen-card").style.display = "none";
    }
}
