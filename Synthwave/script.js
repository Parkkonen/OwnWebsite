let columnCount = 0;

window.onload = function (){
    const username = "Parkkonen";

    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                newColumn(repo.name, repo.html_url);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function newColumn(name, url) {
        columnCount++;
        const rowElements = document.querySelectorAll('.row');

        let rowElement;

        // New row if there's 5 columns in the current row
        if (rowElements.length === 0 || columnCount > 5) {
            rowElement = document.createElement('div');
            rowElement.className = 'row';
            document.body.appendChild(rowElement);
            columnCount = 1;
        } else {
            rowElement = rowElements[rowElements.length - 1];
        }

        const columnElement = document.createElement('div');
        columnElement.className = 'column';
        // Ugly but couldn't figure out anything else
        columnElement.innerHTML = name + "<br>" + "<a href='" + url + "'>" + url + "</a>";

        rowElement.appendChild(columnElement);
    }
}
