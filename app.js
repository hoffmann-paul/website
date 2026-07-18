document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("laubrechen-card").style.display = "none";
    document.getElementById("rasenmähen-card").style.display = "none";
});

function collapse_angebote(angebot) {
    document.getElementById("laubrechen-card").style.display = "none";
    document.getElementById("rasenmähen-card").style.display = "none";
    let card_id = angebot + "-card";
    document.getElementById(card_id).style.display = "block";
}
