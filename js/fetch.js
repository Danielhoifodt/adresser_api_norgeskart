async function street() {
    let gate = document.getElementById("gate").value;
    let response = await fetch(`https://ws.geonorge.no/adresser/v1/sok?sok=${gate}&kommunenummer=0301`);
    
    if(response.status == 200){
    let data = await response.json();
    let html = '';
    data.adresser.forEach(street => {
        let htmlSegment1 = `<p>${street.adressetekst}</p>`;
        html += htmlSegment1;

        if(street.bruksenhetsnummer.length > 0)
        {
            html += '<p>Bolignummer:</p>';
        }

        street.bruksenhetsnummer.forEach(bruk => {
            let htmlSegment2 = `<li>${bruk}</li>`;
            html += htmlSegment2;
        }) 
    });
    let output = document.querySelector('#output');
    output.innerHTML = html;
    }
}
