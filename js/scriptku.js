const tampilan = document.getElementById("tampilanHasil");
tampilan.style.display = "none";
const hitungLuas = () => {
    const alas = document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
    const hasil = document.getElementById("hasil");
    const luas = 0.5 * alas * tinggi;

    //print ke console
    console.log("Luas = " + luas);

    //print ke web
    hasil.innerHTML = luas;
    if (tampilan.style.display == "none") {
        tampilan.style.display = "block";
    }
    else {
        tampilan.style.display = "none";
    }
}

const hapus = () => {
    const alas = document.getElementById("alas");
    const tinggi = document.getElementById("tinggi");
    const hasil = document.getElementById("hasil");

    alas.value = "";
    tinggi.value = "";
    hasil.innerHTML = 0;
    tampilan.style.display = "none";
}