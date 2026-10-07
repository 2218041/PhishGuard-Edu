// Data Sementara (Array of Objects)
let dataModul = [
    { id: 1, judul: "Pengenalan Phishing", kategori: "Dasar" },
    { id: 2, judul: "Analisis Header Email", kategori: "Lanjutan" }
];

let dataSimulasi = [
    { id: 1, email: "budi@sekolah.id", status: "Lulus" },
    { id: 2, email: "siti@sekolah.id", status: "Gagal" }
];

// ============================
// FUNGSI RENDER (READ)
// ============================

function renderModul() {
    const tbody = document.querySelector("#tabelModul tbody");
    tbody.innerHTML = "";

    dataModul.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.judul}</td>
                <td>${item.kategori}</td>
                <td>
                    <button class="btn-action btn-edit" onclick="editModul(${index})">Edit</button>
                    <button class="btn-action btn-delete" onclick="hapusModul(${index})">Hapus</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function renderSimulasi() {
    const tbody = document.querySelector("#tabelSimulasi tbody");
    tbody.innerHTML = "";

    dataSimulasi.forEach((item, index) => {
        let row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.email}</td>
                <td style="color: ${item.status === 'Lulus' ? '#25c7f7' : '#d9534f'}">${item.status}</td>
                <td>
                    <button class="btn-action btn-edit" onclick="editSimulasi(${index})">Edit</button>
                    <button class="btn-action btn-delete" onclick="hapusSimulasi(${index})">Hapus</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// ============================
// FUNGSI CRUD MODUL
// ============================

function tambahModul() {
    let judul = document.getElementById("modulTitle").value;
    let kategori = document.getElementById("modulCategory").value;

    if (judul === "" || kategori === "") {
        alert("Harap isi semua field!");
        return;
    }

    let newId = dataModul.length > 0 ? dataModul[dataModul.length - 1].id + 1 : 1;
    dataModul.push({ id: newId, judul: judul, kategori: kategori });
    
    // Reset form
    document.getElementById("modulTitle").value = "";
    document.getElementById("modulCategory").value = "";
    
    renderModul();
}

function hapusModul(index) {
    if (confirm("Yakin ingin menghapus modul ini?")) {
        dataModul.splice(index, 1);
        renderModul();
    }
}

function editModul(index) {
    let newJudul = prompt("Edit Judul Modul:", dataModul[index].judul);
    let newKategori = prompt("Edit Kategori:", dataModul[index].kategori);

    if (newJudul !== null && newKategori !== null) {
        dataModul[index].judul = newJudul;
        dataModul[index].kategori = newKategori;
        renderModul();
    }
}

// ============================
// FUNGSI CRUD SIMULASI
// ============================

function tambahSimulasi() {
    let email = document.getElementById("simEmail").value;
    let status = document.getElementById("simStatus").value;

    if (email === "") {
        alert("Harap isi email!");
        return;
    }

    let newId = dataSimulasi.length > 0 ? dataSimulasi[dataSimulasi.length - 1].id + 1 : 1;
    dataSimulasi.push({ id: newId, email: email, status: status });

    document.getElementById("simEmail").value = "";
    renderSimulasi();
}

function hapusSimulasi(index) {
    if (confirm("Yakin ingin menghapus riwayat ini?")) {
        dataSimulasi.splice(index, 1);
        renderSimulasi();
    }
}

function editSimulasi(index) {
    let newEmail = prompt("Edit Email:", dataSimulasi[index].email);
    let newStatus = prompt("Edit Status (Lulus/Gagal):", dataSimulasi[index].status);

    if (newEmail !== null && newStatus !== null) {
        dataSimulasi[index].email = newEmail;
        dataSimulasi[index].status = newStatus;
        renderSimulasi();
    }
}

// Jalankan render saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderModul();
    renderSimulasi();
});