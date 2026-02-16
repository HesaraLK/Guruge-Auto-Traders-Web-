document.querySelectorAll("table tr").forEach(row => {
    row.addEventListener("click", () => {
        const cells = row.querySelectorAll("td");
        const inputs = document.querySelectorAll(".form input");

        cells.forEach((cell, i) => {
            if (inputs[i]) {
                inputs[i].value = cell.innerText;
            }
        });
    });
});
