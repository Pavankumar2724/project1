function searchTable() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var tableRows = document.querySelectorAll('table tr:not(:first-child)');

    tableRows.forEach(function (row) {
        var showRow = false;
        row.querySelectorAll('td').forEach(function (cell) {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
                showRow = true;
            }
        });

        if (showRow) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
