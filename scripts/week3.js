families.forEach => {
    // create a new row
    let tr = document.createElement('tr');

    // create a new cell
    let td = document.createElement('td');
    td.textContent = family;

    // append cell to the row
    tr.appendChild(td);

    document.querySelector('tbody').appendChild(tr);
}
);

