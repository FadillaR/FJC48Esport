// Contoh penambahan event baru secara dinamis
const scheduleData = [
  { tanggal: "20 Nov 2025", kegiatan: "Latihan gabungan", divisi: "Free Fire" },
  { tanggal: "25 Nov 2025", kegiatan: "Scrim dengan EVOS", divisi: "Mobile Legends" },
];

const table = document.getElementById("scheduleTable");
scheduleData.forEach(item => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td class="p-2 border">${item.tanggal}</td>
    <td class="p-2 border">${item.kegiatan}</td>
    <td class="p-2 border">${item.divisi}</td>
  `;
  table.appendChild(row);
});
:root {
  --warna-utama: #FFD700;
  --warna-sekunder: #111;
}

#calendar {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
