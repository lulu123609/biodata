// Personal Dashboard: interaksi kecil untuk tampilan profil.
document.addEventListener("DOMContentLoaded", () => {
  // Tahun footer otomatis mengikuti tahun saat halaman dibuka.
  const footer = document.querySelector("footer");
  if (footer) {
    footer.textContent = `Personal Dashboard · Dibuat dengan HTML, CSS & JavaScript · ${new Date().getFullYear()}`;
  }
});
