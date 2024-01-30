var tableData = [
    { name: 'pavan', state: 'kansas', age: 23 },
    { name: 'vamsi', state: 'arkansas', age: 26 },
    { name: 'harsha', state: 'texas', age: 35 },
    { name: 'saradhi', state: 'arkansas', age: 45 },
    { name: 'ajay', state: 'texas', age: 32 }
];

document.addEventListener('DOMContentLoaded', function () {
    populateTable(tableData);
});

function populateTable(data) {
    var table = document.querySelector('table');
    var tableBody = table.createTBody();

    data.forEach(function (item) {
        var row = tableBody.insertRow();
        for (var key in item) {
            var cell = row.insertCell();
            cell.textContent = item[key];
        }
    });
}

function searchTable() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var tableRows = document.querySelectorAll('table tbody tr');

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
