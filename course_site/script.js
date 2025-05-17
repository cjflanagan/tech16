document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('keyup', filterTable);
});

function filterTable() {
    const query = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#course-table tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(query)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
