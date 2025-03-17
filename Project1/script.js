let weightInKG = document.getElementById("num").value;

let conversion = weightInKG * 2.20462;

document.getElementById("results").textContent = `${weightInKG} kg is equal to {conversion} lbs`;