const tableContent = document.getElementById("table-content");
const searchByName = document.getElementById("search-by-name");
const sortBy = document.getElementById("sort-by");

function displayTable(tableToDisplay) {
    for(let i=0; i < tableToDisplay.length; i++) {
        tableContent.innerHTML += `<tr>
            <td scope="rowgroup" rowspan="2"><input type="checkbox" id="1" name="1"></td>
            <td scope="rowgroup" rowspan="2"><img src=${tableToDisplay[i].logo} alt="figma"></td>
            <td>${tableToDisplay[i].trasactionName.name}</td>
            <td>${tableToDisplay[i].cardInfo.cardType}</td>
            <td>${tableToDisplay[i].userCredentials.user}</td>
            <td>${tableToDisplay[i].lastTransaction.date}</td>
            <td scope="rowgroup" rowspan="2" class="${tableToDisplay[i].transactionStatus.toLowerCase()}">${tableToDisplay[i].transactionStatus}</td>
                <td scope="rowgroup" rowspan="2">${tableToDisplay[i].endDate}</td>
                <td scope="rowgroup" rowspan="2">${tableToDisplay[i].totalUsed}</td>
                <td scope="rowgroup" rowspan="2"><div class="elipsis"></div></td>
        </tr>
                <tr>
                <td class="second-row">${tableToDisplay[i].trasactionName.webSite}</td>
                <td class="second-row">${tableToDisplay[i].cardInfo.cardNumber}</td>
                <td class="second-row">${tableToDisplay[i].userCredentials.userMail}</td>
                <td class="second-row">${tableToDisplay[i].lastTransaction.amount}</td>
        </tr>`
    }
}

displayTable(transactions);

function sortByUserName(a, b) {
    if (a.trasactionName.name < b.trasactionName.name) {
       return -1;
    }
    if (a.trasactionName.name > b.trasactionName.name) {
       return 1;
    }
    return 0;
};

function sortByUserCredentials(a, b) {
    if (a.userCredentials.user < b.userCredentials.user) {
       return -1;
    }
    if (a.userCredentials.user > b.userCredentials.user) {
       return 1;
    }
    return 0;
};

function sortByLastTransaction(a, b) {
    if (new Date(a.lastTransaction.date) < new Date(b.lastTransaction.date)) {
        return -1;
    }
    if (new Date(a.lastTransaction.date) > new Date(b.lastTransaction.date)) {
        return 1;
    }
     return 0; 
};

function sortByStatus(a, b) {
    if (a.transactionStatus < b.transactionStatus) {
       return -1;
    }
    if (a.transactionStatus > b.transactionStatus) {
       return 1;
    }
    return 0;
};

function sortByEndDate(a, b) {
    if(new Date(a.endDate) < new Date(b.endDate)) {
        return - 1;
    }
    if(new Date(a.endDate) > new Date(b.endDate)) {
        return 1;
    }
    return 0;
};

function sortByTotalUsed(a, b) {
    const aConverted = new Number(a.totalUsed.replace('$', ''));
    const bConverted = new Number(b.totalUsed.replace('$', ''));

    if(aConverted < bConverted) {
        return - 1;
    }
    if(aConverted > bConverted) {
        return 1;
    }
    return 0;  
};

function sortTable(sortingFieldMethod){
    tableContent.innerHTML = ``;
    transactions.sort(sortingFieldMethod);
    displayTable(transactions); 
};

function sortTableByItems() {
    switch(sortBy.value) {
        case "name":
            sortTable(sortByUserName)
            break;
        case "user-credentials":
            sortTable(sortByUserCredentials);
            break;
        case "last-transcation":
            sortTable(sortByLastTransaction);
            break;
        case "status":
            sortTable(sortByStatus); 
            break;
        case "end-date":
            sortTable(sortByEndDate);  
            break;   
        case "total-used":
            sortTable(sortByTotalUsed);    
            break;        
    }
};

sortBy.addEventListener("change", sortTableByItems); 

function searchItemsByName() {
    tableContent.innerHTML = ``; // TODO refactor this this line
    const filteredTransactions = transactions.filter(item => item.trasactionName.name.toLowerCase().includes(searchByName.value.toLowerCase()));
    displayTable(filteredTransactions)
    console.log(filteredTransactions);
    console.log(searchByName.value);
};





searchByName.addEventListener("input", searchItemsByName); 