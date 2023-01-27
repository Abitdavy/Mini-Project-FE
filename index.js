const api_url = 'https://dummyjson.com/posts';

// async function getAPI()  {
//     const response = await fetch(api_url);
//     const data = await response.json();
//     console.log(data.posts[0].title);

//     let tableData = "";
//     data.map((values) => {
//         tableData = '<h1>${}</h1>';
//     })
// }

// getAPI();

// Fetch API
function fetchingAPI() {
    fetch(api_url).then((data) => {
        return data.json();
    }).then((objectData) => {
        // console.log(objectData.posts);
        let tableData = ""
        Object.entries(objectData.posts).map(element => {
            tableData += `<tr>
            <td>${element[1].id}</td>
            <td>${element[1].title}</td>
            <td>${element[1].body}</td>
            <td>${element[1].userId}</td>
            <td>${element[1].tags}</td>
            <td>${element[1].reactions}</td>
        </tr>`
            //console.log(element[1])
        });
        // objectData.
        document.getElementById("table-body").innerHTML = tableData;
    })
}
fetchingAPI();


// Search Function
// const search = document.querySelector('.input-group input'),
//     table_rows = document.querySelectorAll('tbody tr');

// search.addEventListener('input', searchTable);

// function searchTable() {
//     // Object.entries(table_rows).forEach((rows, i) => {
//     //     console.log(rows);
//     // })
//     table_rows.forEach((rows, i) => {
//         console.log(rows.textContent);
//         // let table_data = rows.textContent,
//         //     searct_data = search.value;

//         // rows.classList.toggle('hide', table_data.indexOf(searct_data) < 0);
//     })
// }

// Convert HTML table to PDF

const pdf_btn = document.querySelector('#toPDF');
const json_table = document.querySelector('#json_table');

const toPDF = function (json_table) {
    const html_code = `
    <link rel="stylesheet" href="styleindex.css">
    <main class="table">${json_table.innerHTML}</main>
`;

    const new_window = window.open();
    new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 1000);
}

pdf_btn.onclick = () => {
    toPDF(json_table);
}
