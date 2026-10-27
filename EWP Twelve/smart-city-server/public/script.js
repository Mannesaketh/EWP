const cityFacilities = [
    "Public Library", 
    "Central Bus Station", 
    "Government Hospital", 
    "Town Park", 
    "Municipal Office Desk"
];

function loadFacilities() {
    let facilityContainer = document.getElementById("facilityList");
    facilityContainer.innerHTML = ""; 
    
    let ul = document.createElement("ul");
    ul.className = "custom-ul";

    for (let i = 0; i < cityFacilities.length; i++) {
        let li = document.createElement("li");
        li.textContent = cityFacilities[i];
        ul.appendChild(li);
    }
    
    facilityContainer.appendChild(ul);
}

function registerComplaint() {
    let outputBox = document.getElementById("dashboardOutput");
    outputBox.style.display = "none";
    outputBox.innerHTML = "";

    try {
        let citizenName = document.getElementById("citizenName").value;
        let citizenContact = document.getElementById("citizenContact").value;
        let requiredService = document.getElementById("serviceType").value;
        let description = document.getElementById("complaintDesc").value;

        if (citizenName.trim() === "" || citizenContact.trim() === "" || description.trim() === "") {
            throw new Error("Important information is missing. Please fill out all required fields.");
        }

        if (citizenContact.length !== 10 || isNaN(citizenContact)) {
            throw new Error("Incorrect contact format. Please enter a valid 10-digit mobile number.");
        }

        let formattedName = citizenName.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        let complaintId = "CMP-" + Math.floor(Math.random() * 900000 + 100000);
        let submissionDate = new Date().toLocaleString();

        let complaintObject = {
            id: complaintId,
            name: formattedName,
            contact: citizenContact,
            category: requiredService,
            details: description,
            date: submissionDate
        };

        let complaintJSON = JSON.stringify(complaintObject);
        localStorage.setItem("citizenComplaint", complaintJSON);

        let retrievedJSON = localStorage.getItem("citizenComplaint");
        let parsedData = JSON.parse(retrievedJSON);

        outputBox.style.display = "block";
        outputBox.style.backgroundColor = "#e0f7fa";
        outputBox.style.borderColor = "#0a9396";
        outputBox.style.color = "#005f73";
        outputBox.innerHTML = `
            Complaint Registered Successfully!<br><br>
            <strong>Complaint ID:</strong> ${parsedData.id} <br>
            <strong>Date & Time:</strong> ${parsedData.date} <br>
            <strong>Citizen Name:</strong> ${parsedData.name} <br>
            <strong>Category:</strong> ${parsedData.category} <br>
            <strong>Description:</strong> ${parsedData.details} <br><br>
            <em>Data successfully processed and stored via JSON.</em>
        `;

        document.getElementById("citizenName").value = "";
        document.getElementById("citizenContact").value = "";
        document.getElementById("complaintDesc").value = "";

    } catch (error) {
        outputBox.style.display = "block";
        outputBox.style.backgroundColor = "#ffcccc";
        outputBox.style.borderColor = "#cc0000";
        outputBox.style.color = "#cc0000";
        outputBox.innerHTML = `<strong>Registration Error:</strong> ${error.message}`;
    }
}

function fetchTransportData() {
    let outputBox = document.getElementById("transportOutput");
    outputBox.style.display = "block";
    outputBox.innerHTML = "Establishing server connection and fetching JSON data via AJAX...";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/transport", true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            let tableHTML = `<table class="transport-table">
                                <tr>
                                    <th>Route No.</th>
                                    <th>Destination</th>
                                    <th>Departure Time</th>
                                    <th>Status</th>
                                </tr>`;
            
            for(let i = 0; i < data.length; i++) {
                let statusClass = data[i].status === 'Delayed' ? 'status-delayed' : 'status-ontime';
                tableHTML += `<tr>
                                <td>${data[i].route}</td>
                                <td>${data[i].destination}</td>
                                <td>${data[i].time}</td>
                                <td><span class="${statusClass}">${data[i].status}</span></td>
                              </tr>`;
            }
            tableHTML += `</table>`;
            outputBox.innerHTML = tableHTML;
        } else if (xhr.readyState === 4) {
            outputBox.innerHTML = "Failed to load public transport data. Ensure the Node.js server is running.";
            outputBox.style.backgroundColor = "#ffcccc";
            outputBox.style.color = "#cc0000";
        }
    };
    xhr.send();
}

function highlightSection(element) {
    element.style.backgroundColor = "#e9d8a6";
    element.style.borderLeftColor = "#ca6702";
}

function resetSection(element) {
    element.style.backgroundColor = "#f8f9fa";
    element.style.borderLeftColor = "#0a9396";
}

document.addEventListener("DOMContentLoaded", function() {
    let registerButton = document.getElementById("registerBtn");
    if (registerButton) {
        registerButton.addEventListener("click", registerComplaint);
    }

    let facilityButton = document.getElementById("facilityBtn");
    if (facilityButton) {
        facilityButton.addEventListener("click", loadFacilities);
    }

    let transportButton = document.getElementById("transportBtn");
    if (transportButton) {
        transportButton.addEventListener("click", fetchTransportData);
    }
});