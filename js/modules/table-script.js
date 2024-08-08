document.addEventListener("DOMContentLoaded", function() {
    const tableCells = document.querySelectorAll("table.tablepress td , .learn-model-table table td , .learn-main table td");
    tableCells.forEach(cell => {
        const cellValue = parseFloat(cell.innerText);
        if (cellValue < 0 || (cellValue === 0 && 1 / cellValue === -Infinity)) {
            cell.classList.add('negative-value');
        }
    });
});