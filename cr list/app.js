/* =========================================================
   CR DEPLOYMENT MANAGEMENT PORTAL
   PoC - Static / LocalStorage Version
   ========================================================= */


/* =========================================================
   USERS
   ========================================================= */

// const users = {

//     developer: {
//         name: "Vishal Mishra",
//         role: "Developer",
//         team: "MSD",
//         initials: "V"
//     },

//     lead: {
//         name: "Giridhar s",
//         role: "Team Lead",
//         team: "MSD",
//         initials: "G"
//     },

//     was: {
//         name: "Rahul Sharma",
//         role: "WAS",
//         team: "ALL",
//         initials: "R"
//     },

//     admin: {
//         name: "Manager",
//         role: "Admin",
//         team: "ALL",
//         initials: "M"
//     }

// };

/* =========================================================
   USERS
   ========================================================= */

const users = {

    dev_msd_01: {
        username: "dev_msd_01",
        password: "1234",
        name: "Vishal Mishra",
        role: "Developer",
        team: "MSD",
        initials: "V"
    },

    dev_msd_02: {
        username: "dev_msd_02",
        password: "1234",
        name: "Amit Kumar",
        role: "Developer",
        team: "MSD",
        initials: "A"
    },

    dev_msd_03: {
        username: "dev_msd_03",
        password: "1234",
        name: "Rahul Singh",
        role: "Developer",
        team: "MSD",
        initials: "R"
    },

    dev_mob_01: {
        username: "dev_mob_01",
        password: "1234",
        name: "Amit Verma",
        role: "Developer",
        team: "MOB",
        initials: "A"
    },

    dev_crm_01: {
        username: "dev_crm_01",
        password: "1234",
        name: "Pooja",
        role: "Developer",
        team: "CRM",
        initials: "P"
    },


    lead_msd: {
        username: "lead_msd",
        password: "1234",
        name: "Giridhar",
        role: "Team Lead",
        team: "MSD",
        initials: "G"
    },

    lead_mob: {
        username: "lead_mob",
        password: "1234",
        name: "Suresh",
        role: "Team Lead",
        team: "MOB",
        initials: "S"
    },

    lead_crm: {
        username: "lead_crm",
        password: "1234",
        name: "Meena",
        role: "Team Lead",
        team: "CRM",
        initials: "M"
    },


    was_01: {
        username: "was_01",
        password: "1234",
        name: "Rahul Sharma",
        role: "WAS",
        team: "ALL",
        initials: "R"
    },

    was_02: {
        username: "was_02",
        password: "1234",
        name: "WAS User 02",
        role: "WAS",
        team: "ALL",
        initials: "W"
    },


    admin: {
        username: "admin",
        password: "1234",
        name: "Manager",
        role: "Admin",
        team: "ALL",
        initials: "M"
    }

};

/* =========================================================
   SAMPLE CR DATA
   ========================================================= */

const defaultCRs = [

    {
        id: "SALES-18533",
        description: "C2I Plus Rider Requirement",
        developer: "Vishal Mishra",
        team: "MSD",
        lead: "Giridhar s",
        ba: "Rahul",
        spoc: "Arun",
        releaseDate: "2026-11-05",
        priority: "High",
        type: "Enhancement",
        status: "PENDING_LEAD",
        rejectionReason: ""
    },

    {
        id: "SALES-18521",
        description: "Premium Calculation Enhancement",
        developer: "Amit Kumar",
        team: "MSD",
        lead: "Giridhar s",
        ba: "Priya",
        spoc: "Arun",
        releaseDate: "2026-11-05",
        priority: "Medium",
        type: "Enhancement",
        status: "APPROVED",
        rejectionReason: ""
    },

    {
        id: "SALES-18544",
        description: "Policy Rider Update",
        developer: "Rahul Singh",
        team: "MSD",
        lead: "Giridhar s",
        ba: "Rahul",
        spoc: "Arun",
        releaseDate: "2026-11-05",
        priority: "High",
        type: "Change",
        status: "REJECTED",
        rejectionReason: "Test evidence is missing."
    },

    {
        id: "SALES-18510",
        description: "Customer Details Enhancement",
        developer: "Karan Sharma",
        team: "MSD",
        lead: "Giridhar s",
        ba: "Priya",
        spoc: "Naveen",
        releaseDate: "2026-11-05",
        priority: "Low",
        type: "Enhancement",
        status: "DEPLOYED",
        rejectionReason: ""
    },

    {
        id: "MOB-10422",
        description: "Mobile Login Enhancement",
        developer: "Amit Verma",
        team: "MOB",
        lead: "Suresh",
        ba: "Anita",
        spoc: "Raj",
        releaseDate: "2026-11-05",
        priority: "High",
        type: "Enhancement",
        status: "APPROVED",
        rejectionReason: ""
    },

    {
        id: "CRM-20981",
        description: "CRM Customer Search Change",
        developer: "Pooja",
        team: "CRM",
        lead: "Meena",
        ba: "Kiran",
        spoc: "Vijay",
        releaseDate: "2026-11-05",
        priority: "Medium",
        type: "Change",
        status: "DEPLOYED",
        rejectionReason: ""
    },

    {
        id: "POL-30211",
        description: "Policy Validation Update",
        developer: "Rohit",
        team: "POLICY",
        lead: "Ajay",
        ba: "Ravi",
        spoc: "Sunil",
        releaseDate: "2026-11-05",
        priority: "High",
        type: "Change",
        status: "APPROVED",
        rejectionReason: ""
    },

    {
        id: "PAY-11821",
        description: "Payment Gateway Enhancement",
        developer: "Sneha",
        team: "PAYMENT",
        lead: "Anil",
        ba: "Ramesh",
        spoc: "Vikas",
        releaseDate: "2026-11-05",
        priority: "High",
        type: "Enhancement",
        status: "DEPLOYED",
        rejectionReason: ""
    }

];


/* =========================================================
   APPLICATION STATE
   ========================================================= */

let currentUser = null;

let crs = JSON.parse(
    localStorage.getItem("crs")
) || defaultCRs;


/* =========================================================
   SAVE DATA
   ========================================================= */

function saveData() {

    localStorage.setItem(
        "crs",
        JSON.stringify(crs)
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

// function login() {

//     const selectedUser =
//         document.getElementById("loginUser").value;

//     currentUser = users[selectedUser];

//     localStorage.setItem(
//         "currentUser",
//         selectedUser
//     );

//     document
//         .getElementById("loginPage")
//         .classList.add("hidden");

//     document
//         .getElementById("appPage")
//         .classList.remove("hidden");

//     setupUser();

//     showPage("dashboard");

// }

function login() {

    const username =
        document
            .getElementById("loginUsername")
            .value
            .trim();

    const password =
        document
            .getElementById("loginPassword")
            .value;

    const error =
        document.getElementById("loginError");


    error.classList.add("hidden");


    if (!username || !password) {

        error.innerText =
            "Please enter username and password.";

        error.classList.remove("hidden");

        return;
    }


    const user =
        users[username];


    if (!user || user.password !== password) {

        error.innerText =
            "Invalid username or password.";

        error.classList.remove("hidden");

        return;
    }


    currentUser = user;


    localStorage.setItem(
        "currentUser",
        username
    );


    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("appPage")
        .classList.remove("hidden");


    setupUser();

    showPage("dashboard");

}


/* =========================================================
   SETUP USER
   ========================================================= */

function setupUser() {

    document.getElementById("loggedUserName").innerText =
        currentUser.name;

    document.getElementById("loggedUserRole").innerText =
        currentUser.role;

    document.getElementById("userAvatar").innerText =
        currentUser.initials;

    buildSidebar();

}


/* =========================================================
   SIDEBAR
   ========================================================= */

function buildSidebar() {

    const menu =
        document.getElementById("sidebarMenu");

    let html = "";


    html += `
        <div class="menu-item active"
             onclick="showPage('dashboard')">
            🏠 Dashboard
        </div>
    `;


    if (currentUser.role === "Developer") {

        html += `
            <div class="menu-item"
                 onclick="showPage('create-cr')">
                ➕ Create CR
            </div>

            <div class="menu-item"
                 onclick="showPage('my-crs')">
                📋 My CRs
            </div>

            <div class="menu-item"
                 onclick="showPage('ai-assistant')">
                🤖 AI Assistant
            </div>
        `;

    }


    if (currentUser.role === "Team Lead") {

        html += `
            <div class="menu-item"
                 onclick="showPage('team-crs')">
                📋 Team CRs
            </div>

            <div class="menu-item"
                 onclick="showPage('ai-assistant')">
                🤖 AI Assistant
            </div>
        `;

    }


    if (currentUser.role === "WAS") {

        html += `
            <div class="menu-item"
                 onclick="showPage('release-queue')">
                🚀 Release Queue
            </div>

            <div class="menu-item"
                 onclick="showPage('all-crs')">
                📋 All CRs
            </div>

            <div class="menu-item"
                 onclick="showPage('ai-assistant')">
                🤖 AI Assistant
            </div>
        `;

    }


    if (currentUser.role === "Admin") {

        html += `
            <div class="menu-item"
                 onclick="showPage('all-crs')">
                📋 All CRs
            </div>

            <div class="menu-item"
                 onclick="showPage('ai-assistant')">
                🤖 AI Assistant
            </div>
        `;

    }


    html += `
        <div class="menu-item"
             onclick="showPage('notifications')">
            🔔 Notifications
        </div>
    `;


    menu.innerHTML = html;

}


/* =========================================================
   PAGE ROUTER
   ========================================================= */

function showPage(page) {

    const content =
        document.getElementById("pageContent");

    const title =
        document.getElementById("pageTitle");

    const subtitle =
        document.getElementById("pageSubtitle");


    switch (page) {

        case "dashboard":

            title.innerText = "Dashboard";

            subtitle.innerText =
                "Overview of CR deployment activities";

            renderDashboard(content);

            break;


        case "create-cr":

            title.innerText = "Create CR";

            subtitle.innerText =
                "Add a new change request";

            renderCreateCR(content);

            break;


        case "my-crs":

            title.innerText = "My CRs";

            subtitle.innerText =
                "Track your submitted change requests";

            renderMyCRs(content);

            break;


        case "team-crs":

            title.innerText = "Team CRs";

            subtitle.innerText =
                "Review CRs submitted by your team";

            renderTeamCRs(content);

            break;


        case "release-queue":

            title.innerText = "Release Queue";

            subtitle.innerText =
                "Manage approved CRs for deployment";

            renderReleaseQueue(content);

            break;


        case "all-crs":

            title.innerText = "All CRs";

            subtitle.innerText =
                "Organization-wide CR visibility";

            renderAllCRs(content);

            break;


        case "notifications":

            title.innerText = "Notifications";

            subtitle.innerText =
                "Latest CR activities";

            renderNotifications(content);

            break;


        case "ai-assistant":

            title.innerText = "AI Assistant";

            subtitle.innerText =
                "AI-powered CR analysis";

            renderAIAssistant(content);

            break;

    }

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard(content) {

    if (currentUser.role === "Developer") {

        renderDeveloperDashboard(content);

    }

    else if (currentUser.role === "Team Lead") {

        renderLeadDashboard(content);

    }

    else if (currentUser.role === "WAS") {

        renderWASDashboard(content);

    }

    else if (currentUser.role === "Admin") {

        renderAdminDashboard(content);

    }

}


/* =========================================================
   DEVELOPER DASHBOARD
   ========================================================= */

function renderDeveloperDashboard(content) {

    const myCRs =
        crs.filter(
            c => c.developer === currentUser.name
        );


    const pending =
        myCRs.filter(
            c => c.status === "PENDING_LEAD"
        ).length;


    const approved =
        myCRs.filter(
            c => c.status === "APPROVED"
        ).length;


    const deployed =
        myCRs.filter(
            c => c.status === "DEPLOYED"
        ).length;


    content.innerHTML = `

        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="label">My CRs</div>
                <div class="value">${myCRs.length}</div>
                <div class="small">Total submitted</div>
            </div>

            <div class="kpi-card">
                <div class="label">Pending</div>
                <div class="value">${pending}</div>
                <div class="small">Waiting for lead</div>
            </div>

            <div class="kpi-card">
                <div class="label">Approved</div>
                <div class="value">${approved}</div>
                <div class="small">Approved CRs</div>
            </div>

            <div class="kpi-card">
                <div class="label">Deployed</div>
                <div class="value">${deployed}</div>
                <div class="small">Successfully deployed</div>
            </div>

        </div>


        <div class="ai-box">

            <div class="ai-title">
                🤖 AI CR Assistant
            </div>

            <div class="ai-text">
                Use AI to extract CR information,
                validate required fields and identify
                potential deployment risks.
            </div>

            <br>

            <button class="primary-btn"
                    onclick="showPage('ai-assistant')">
                Open AI Assistant
            </button>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>Recent CRs</h3>

                <button class="secondary-btn"
                        onclick="showPage('create-cr')">
                    + Create CR
                </button>

            </div>

            ${generateCRTable(myCRs)}

        </div>

    `;

}


/* =========================================================
   LEAD DASHBOARD
   ========================================================= */

function renderLeadDashboard(content) {

    const teamCRs =
        crs.filter(
            c => c.team === currentUser.team
        );


    const pending =
        teamCRs.filter(
            c => c.status === "PENDING_LEAD"
        ).length;


    const approved =
        teamCRs.filter(
            c => c.status === "APPROVED"
        ).length;


    const deployed =
        teamCRs.filter(
            c => c.status === "DEPLOYED"
        ).length;


    const rejected =
        teamCRs.filter(
            c => c.status === "REJECTED"
        ).length;


    content.innerHTML = `

        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="label">Team CRs</div>
                <div class="value">${teamCRs.length}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Pending Review</div>
                <div class="value">${pending}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Approved</div>
                <div class="value">${approved}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Rejected</div>
                <div class="value">${rejected}</div>
            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>Team CRs - ${currentUser.team}</h3>

                <button class="primary-btn"
                        onclick="showPage('team-crs')">
                    Review CRs
                </button>

            </div>

            ${generateLeadTable(teamCRs)}

        </div>

    `;

}


/* =========================================================
   WAS DASHBOARD
   ========================================================= */

function renderWASDashboard(content) {

    const pending =
        crs.filter(
            c => c.status === "APPROVED"
        ).length;


    const deployed =
        crs.filter(
            c => c.status === "DEPLOYED"
        ).length;


    const notDeployed =
        crs.filter(
            c => c.status === "NOT_DEPLOYED"
        ).length;


    content.innerHTML = `

        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="label">Total CRs</div>
                <div class="value">${crs.length}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Ready for Deployment</div>
                <div class="value">${pending}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Deployed</div>
                <div class="value">${deployed}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Not Deployed</div>
                <div class="value">${notDeployed}</div>
            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>Release Overview</h3>

                <button class="primary-btn"
                        onclick="showPage('release-queue')">
                    Open Release Queue
                </button>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>
                            <th>Team</th>
                            <th>Total CRs</th>
                            <th>Approved</th>
                            <th>Deployed</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${generateTeamSummary()}

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =========================================================
   ADMIN DASHBOARD
   ========================================================= */

function renderAdminDashboard(content) {

    const deployed =
        crs.filter(
            c => c.status === "DEPLOYED"
        ).length;


    const pending =
        crs.filter(
            c => c.status === "PENDING_LEAD"
        ).length;


    const rejected =
        crs.filter(
            c => c.status === "REJECTED"
        ).length;


    const approved =
        crs.filter(
            c => c.status === "APPROVED"
        ).length;


    content.innerHTML = `

        <div class="kpi-grid">

            <div class="kpi-card">
                <div class="label">Total CRs</div>
                <div class="value">${crs.length}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Pending</div>
                <div class="value">${pending}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Approved</div>
                <div class="value">${approved}</div>
            </div>

            <div class="kpi-card">
                <div class="label">Deployed</div>
                <div class="value">${deployed}</div>
            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>CR Deployment Analytics</h3>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>
                            <th>Team</th>
                            <th>Total</th>
                            <th>Pending</th>
                            <th>Approved</th>
                            <th>Rejected</th>
                            <th>Deployed</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${generateAdminSummary()}

                    </tbody>

                </table>

            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>Quick Filters</h3>

            </div>


            <div class="filter-grid">

                <select id="adminTeamFilter"
                        onchange="filterAdminCRs()">

                    <option value="">All Teams</option>
                    <option>MSD</option>
                    <option>MOB</option>
                    <option>CRM</option>
                    <option>POLICY</option>
                    <option>PAYMENT</option>

                </select>


                <select id="adminStatusFilter"
                        onchange="filterAdminCRs()">

                    <option value="">All Status</option>
                    <option value="PENDING_LEAD">Pending</option>
                    <option value="APPROVED">Approved</option>
                    <option value="REJECTED">Rejected</option>
                    <option value="DEPLOYED">Deployed</option>

                </select>


                <input
                    id="adminSearch"
                    placeholder="Search CR ID..."
                    oninput="filterAdminCRs()"
                >

            </div>


            <div id="adminFilteredResults"
                 style="margin-top:20px;">

                ${generateCRTable(crs)}

            </div>

        </div>


        <div class="ai-box">

            <div class="ai-title">
                🤖 AI Management Assistant
            </div>

            <div class="ai-text">
                Ask questions like:
                "How many MSD CRs were deployed?"
                or
                "Show me rejected CRs."
            </div>

            <br>

            <button class="primary-btn"
                    onclick="showPage('ai-assistant')">
                Ask AI
            </button>

        </div>

    `;

}


/* =========================================================
   CREATE CR
   ========================================================= */

function renderCreateCR(content) {

    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>Create New Change Request</h3>

            </div>


            <div class="form-grid">

                <div class="form-group">

                    <label>JIRA ID *</label>

                    <input
                        id="crId"
                        placeholder="Example: SALES-18550"
                    >

                </div>


                <div class="form-group">

                    <label>CR Type</label>

                    <select id="crType">

                        <option>Enhancement</option>
                        <option>Change</option>
                        <option>Bug Fix</option>
                        <option>Requirement</option>

                    </select>

                </div>


                <div class="form-group full">

                    <label>Description *</label>

                    <textarea
                        id="crDescription"
                        placeholder="Enter CR description">
                    </textarea>

                </div>


                <div class="form-group">

                    <label>Developer</label>

                    <input
                        value="${currentUser.name}"
                        readonly
                        id="crDeveloper"
                    >

                </div>


                <div class="form-group">

                    <label>Team</label>

                    <input
                        value="${currentUser.team}"
                        readonly
                        id="crTeam"
                    >

                </div>


                <div class="form-group">

                    <label>BA Name</label>

                    <input
                        id="crBA"
                        placeholder="BA name"
                    >

                </div>


                <div class="form-group">

                    <label>SPOC Name</label>

                    <input
                        id="crSPOC"
                        placeholder="SPOC name"
                    >

                </div>


                <div class="form-group">

                    <label>Release Date</label>

                    <input
                        type="date"
                        id="crReleaseDate"
                        value="2026-11-05"
                    >

                </div>


                <div class="form-group">

                    <label>Priority</label>

                    <select id="crPriority">

                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>

                    </select>

                </div>


                <div class="form-group full">

                    <label>Deployment Remarks</label>

                    <textarea
                        id="crRemarks"
                        placeholder="Additional deployment information">
                    </textarea>

                </div>

            </div>


            <div class="form-actions">

                <button class="secondary-btn"
                        onclick="showPage('dashboard')">

                    Cancel

                </button>


                <button class="primary-btn"
                        onclick="createCR()">

                    Submit CR

                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   CREATE CR FUNCTION
   ========================================================= */

function createCR() {

    const id =
        document.getElementById("crId").value.trim();


    const description =
        document.getElementById("crDescription").value.trim();


    if (!id || !description) {

        alert(
            "Please enter JIRA ID and CR Description."
        );

        return;

    }


    const newCR = {

        id: id,

        description: description,

        developer:
            currentUser.name,

        team:
            currentUser.team,

        lead:
            "Giridhar s",

        ba:
            document.getElementById("crBA").value,

        spoc:
            document.getElementById("crSPOC").value,

        releaseDate:
            document.getElementById("crReleaseDate").value,

        priority:
            document.getElementById("crPriority").value,

        type:
            document.getElementById("crType").value,

        status:
            "PENDING_LEAD",

        rejectionReason:
            ""

    };


    crs.unshift(newCR);

    saveData();


    alert(
        "CR submitted successfully to Team Lead."
    );


    showPage("dashboard");

}


/* =========================================================
   MY CRs
   ========================================================= */

function renderMyCRs(content) {

    const myCRs =
        crs.filter(
            c => c.developer === currentUser.name
        );


    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>My Change Requests</h3>

                <button class="primary-btn"
                        onclick="showPage('create-cr')">

                    + Create CR

                </button>

            </div>


            ${generateCRTable(myCRs)}

        </div>

    `;

}


/* =========================================================
   TEAM CRs
   ========================================================= */

function renderTeamCRs(content) {

    const teamCRs =
        crs.filter(
            c => c.team === currentUser.team
        );


    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>${currentUser.team} Team CRs</h3>

            </div>


            ${generateLeadTable(teamCRs)}

        </div>

    `;

}


/* =========================================================
   LEAD TABLE
   ========================================================= */

function generateLeadTable(data) {

    if (data.length === 0) {

        return "<p>No CRs found.</p>";

    }


    let rows = "";


    data.forEach(cr => {

        let action = "";


        if (cr.status === "PENDING_LEAD") {

            action = `

                <button class="success-btn"
                        onclick="approveCR('${cr.id}')">

                    Approve

                </button>

                <button class="danger-btn"
                        onclick="rejectCR('${cr.id}')">

                    Reject

                </button>

            `;

        }

        else {

            action = `

                <button class="secondary-btn"
                        onclick="viewCR('${cr.id}')">

                    View

                </button>

            `;

        }


        rows += `

            <tr>

                <td>
                    <strong>${cr.id}</strong>
                </td>

                <td>${cr.description}</td>

                <td>${cr.developer}</td>

                <td>${cr.releaseDate}</td>

                <td>
                    ${getStatusBadge(cr.status)}
                </td>

                <td>
                    ${action}
                </td>

            </tr>

        `;

    });


    return `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>CR ID</th>
                        <th>Description</th>
                        <th>Developer</th>
                        <th>Release Date</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   GENERAL CR TABLE
   ========================================================= */

function generateCRTable(data) {

    if (!data || data.length === 0) {

        return "<p>No CRs found.</p>";

    }


    let rows = "";


    data.forEach(cr => {

        rows += `

            <tr>

                <td>
                    <strong>${cr.id}</strong>
                </td>

                <td>${cr.description}</td>

                <td>${cr.developer}</td>

                <td>${cr.team}</td>

                <td>${cr.releaseDate}</td>

                <td>
                    ${getStatusBadge(cr.status)}
                </td>

                <td>

                    <button
                        class="secondary-btn"
                        onclick="viewCR('${cr.id}')">

                        View

                    </button>

                </td>

            </tr>

        `;

    });


    return `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>CR ID</th>
                        <th>Description</th>
                        <th>Developer</th>
                        <th>Team</th>
                        <th>Release Date</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}


/* =========================================================
   STATUS BADGE
   ========================================================= */

function getStatusBadge(status) {

    const statusMap = {

        PENDING_LEAD:
            ["Pending Lead", "status-pending"],

        APPROVED:
            ["Approved", "status-approved"],

        REJECTED:
            ["Rejected", "status-rejected"],

        DEPLOYED:
            ["Deployed", "status-deployed"],

        NOT_DEPLOYED:
            ["Not Deployed", "status-notdeployed"]

    };


    const item =
        statusMap[status] ||
        [status, "status-pending"];


    return `
        <span class="status ${item[1]}">
            ${item[0]}
        </span>
    `;

}


/* =========================================================
   APPROVE CR
   ========================================================= */

function approveCR(id) {

    const cr =
        crs.find(c => c.id === id);


    if (!cr) return;


    cr.status = "APPROVED";

    saveData();


    alert(
        `${id} approved successfully. It has been added to the WAS release queue.`
    );


    showPage("team-crs");

}


/* =========================================================
   REJECT CR
   ========================================================= */

function rejectCR(id) {

    const reason =
        prompt(
            "Enter rejection reason:"
        );


    if (!reason) return;


    const cr =
        crs.find(c => c.id === id);


    if (!cr) return;


    cr.status = "REJECTED";

    cr.rejectionReason =
        reason;


    saveData();


    alert(
        `${id} rejected. Developer has been notified.`
    );


    showPage("team-crs");

}


/* =========================================================
   WAS RELEASE QUEUE
   ========================================================= */

function renderReleaseQueue(content) {

    const approvedCRs =
        crs.filter(
            c => c.status === "APPROVED"
        );


    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <div>

                    <h3>Ready for Deployment</h3>

                    <p style="font-size:12px;color:#6b7280;margin-top:5px;">
                        CRs approved by respective team leads
                    </p>

                </div>


                <button class="primary-btn"
                        onclick="deploySelected()">

                    Deploy Selected

                </button>

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Select</th>
                            <th>CR ID</th>
                            <th>Team</th>
                            <th>Developer</th>
                            <th>Description</th>
                            <th>Release Date</th>
                            <th>Priority</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${
                            approvedCRs.map(cr => `

                                <tr>

                                    <td>

                                        <input
                                            type="checkbox"
                                            class="deploy-checkbox"
                                            value="${cr.id}"
                                        >

                                    </td>

                                    <td>
                                        <strong>${cr.id}</strong>
                                    </td>

                                    <td>${cr.team}</td>

                                    <td>${cr.developer}</td>

                                    <td>${cr.description}</td>

                                    <td>${cr.releaseDate}</td>

                                    <td>${cr.priority}</td>

                                </tr>

                            `).join("")
                        }

                    </tbody>

                </table>

            </div>

        </div>

    `;

}


/* =========================================================
   DEPLOY SELECTED
   ========================================================= */

function deploySelected() {

    const selected =
        Array.from(
            document.querySelectorAll(
                ".deploy-checkbox:checked"
            )
        ).map(
            checkbox => checkbox.value
        );


    if (selected.length === 0) {

        alert(
            "Please select at least one CR."
        );

        return;

    }


    selected.forEach(id => {

        const cr =
            crs.find(c => c.id === id);

        if (cr) {

            cr.status =
                "DEPLOYED";

        }

    });


    saveData();


    alert(
        `${selected.length} CR(s) deployed successfully.`
    );


    showPage("dashboard");

}


/* =========================================================
   ALL CRs
   ========================================================= */

function renderAllCRs(content) {

    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>All Organization CRs</h3>

            </div>


            ${generateCRTable(crs)}

        </div>

    `;

}


/* =========================================================
   TEAM SUMMARY
   ========================================================= */

function generateTeamSummary() {

    const teams = [
        "MSD",
        "MOB",
        "CRM",
        "POLICY",
        "PAYMENT"
    ];


    return teams.map(team => {

        const teamCRs =
            crs.filter(
                c => c.team === team
            );


        const approved =
            teamCRs.filter(
                c => c.status === "APPROVED"
            ).length;


        const deployed =
            teamCRs.filter(
                c => c.status === "DEPLOYED"
            ).length;


        return `

            <tr>

                <td>
                    <strong>${team}</strong>
                </td>

                <td>${teamCRs.length}</td>

                <td>${approved}</td>

                <td>${deployed}</td>

            </tr>

        `;

    }).join("");

}


/* =========================================================
   ADMIN SUMMARY
   ========================================================= */

function generateAdminSummary() {

    const teams = [
        "MSD",
        "MOB",
        "CRM",
        "POLICY",
        "PAYMENT"
    ];


    return teams.map(team => {

        const teamCRs =
            crs.filter(
                c => c.team === team
            );


        const pending =
            teamCRs.filter(
                c => c.status === "PENDING_LEAD"
            ).length;


        const approved =
            teamCRs.filter(
                c => c.status === "APPROVED"
            ).length;


        const rejected =
            teamCRs.filter(
                c => c.status === "REJECTED"
            ).length;


        const deployed =
            teamCRs.filter(
                c => c.status === "DEPLOYED"
            ).length;


        return `

            <tr>

                <td>
                    <strong>${team}</strong>
                </td>

                <td>${teamCRs.length}</td>

                <td>${pending}</td>

                <td>${approved}</td>

                <td>${rejected}</td>

                <td>${deployed}</td>

            </tr>

        `;

    }).join("");

}


/* =========================================================
   ADMIN FILTER
   ========================================================= */

function filterAdminCRs() {

    const team =
        document.getElementById(
            "adminTeamFilter"
        ).value;


    const status =
        document.getElementById(
            "adminStatusFilter"
        ).value;


    const search =
        document.getElementById(
            "adminSearch"
        ).value
        .toLowerCase();


    let filtered =
        crs.filter(cr => {

            const teamMatch =
                !team ||
                cr.team === team;


            const statusMatch =
                !status ||
                cr.status === status;


            const searchMatch =
                !search ||
                cr.id.toLowerCase().includes(search);


            return (
                teamMatch &&
                statusMatch &&
                searchMatch
            );

        });


    document.getElementById(
        "adminFilteredResults"
    ).innerHTML =
        generateCRTable(filtered);

}


/* =========================================================
   NOTIFICATIONS
   ========================================================= */

function renderNotifications(content) {

    const notifications = [

        {
            text:
                "SALES-18533 is waiting for Team Lead approval.",
            time:
                "Today, 09:15 AM"
        },

        {
            text:
                "SALES-18521 has been approved by Team Lead.",
            time:
                "Today, 09:05 AM"
        },

        {
            text:
                "SALES-18510 was deployed successfully.",
            time:
                "Yesterday, 10:30 PM"
        },

        {
            text:
                "SALES-18544 was rejected. Reason: Test evidence missing.",
            time:
                "Yesterday, 04:20 PM"
        }

    ];


    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>Notifications</h3>

            </div>


            ${notifications.map(n => `

                <div style="
                    padding:15px;
                    border-bottom:1px solid #eee;
                ">

                    <strong>${n.text}</strong>

                    <div style="
                        font-size:11px;
                        color:#6b7280;
                        margin-top:5px;
                    ">
                        ${n.time}
                    </div>

                </div>

            `).join("")}

        </div>

    `;

}


/* =========================================================
   VIEW CR
   ========================================================= */

function viewCR(id) {

    const cr =
        crs.find(
            c => c.id === id
        );


    if (!cr) return;


    const content =
        document.getElementById(
            "pageContent"
        );


    document.getElementById(
        "pageTitle"
    ).innerText =
        "CR Details";


    document.getElementById(
        "pageSubtitle"
    ).innerText =
        "Detailed change request information";


    content.innerHTML = `

        <div class="card">

            <div class="card-header">

                <h3>${cr.id}</h3>

                ${getStatusBadge(cr.status)}

            </div>


            <div class="form-grid">

                <div class="form-group">

                    <label>CR ID</label>

                    <input value="${cr.id}" readonly>

                </div>


                <div class="form-group">

                    <label>Team</label>

                    <input value="${cr.team}" readonly>

                </div>


                <div class="form-group full">

                    <label>Description</label>

                    <textarea readonly>${cr.description}</textarea>

                </div>


                <div class="form-group">

                    <label>Developer</label>

                    <input value="${cr.developer}" readonly>

                </div>


                <div class="form-group">

                    <label>Lead</label>

                    <input value="${cr.lead}" readonly>

                </div>


                <div class="form-group">

                    <label>BA</label>

                    <input value="${cr.ba}" readonly>

                </div>


                <div class="form-group">

                    <label>SPOC</label>

                    <input value="${cr.spoc}" readonly>

                </div>


                <div class="form-group">

                    <label>Release Date</label>

                    <input value="${cr.releaseDate}" readonly>

                </div>


                <div class="form-group">

                    <label>Priority</label>

                    <input value="${cr.priority}" readonly>

                </div>

            </div>


            ${
                cr.rejectionReason
                ?
                `
                    <div class="ai-box"
                         style="margin-top:20px;">

                        <div class="ai-title">
                            Rejection Reason
                        </div>

                        <div class="ai-text">
                            ${cr.rejectionReason}
                        </div>

                    </div>
                `
                :
                ""
            }


            <button class="secondary-btn"
                    onclick="showPage('dashboard')">

                ← Back

            </button>

        </div>

    `;

}


/* =========================================================
   AI ASSISTANT
   ========================================================= */

function renderAIAssistant(content) {

    content.innerHTML = `

        <div class="ai-box">

            <div class="ai-title">
                🤖 CR AI Assistant
            </div>

            <div class="ai-text">

                This PoC demonstrates how AI can
                assist with CR extraction, validation,
                risk analysis and management queries.

            </div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>AI CR Information Extractor</h3>

            </div>


            <p style="
                font-size:13px;
                color:#6b7280;
                margin-bottom:15px;
            ">

                Paste an email, JIRA description or
                CR information below.

            </p>


            <textarea
                id="aiInput"
                style="
                    width:100%;
                    min-height:180px;
                    padding:12px;
                    border:1px solid #d1d5db;
                    border-radius:7px;
                "
                placeholder="Example:

CR SALES-18550
C2I Plus Rider enhancement needs to be deployed on 5th Nov.
Developer: Vishal
BA: Rahul
SPOC: Naveen
Priority: High
Team: MSD
">
            </textarea>


            <br><br>


            <button class="primary-btn"
                    onclick="runAIExtraction()">

                🤖 Analyze with AI

            </button>


            <div id="aiResult"></div>

        </div>


        <div class="card">

            <div class="card-header">

                <h3>AI Management Query</h3>

            </div>


            <input
                id="aiQuery"
                style="
                    width:100%;
                    padding:12px;
                    border:1px solid #d1d5db;
                    border-radius:7px;
                "
                placeholder="Example: How many MSD CRs are deployed?"
            >


            <br><br>


            <button class="primary-btn"
                    onclick="runAIQuery()">

                Ask AI

            </button>


            <div id="aiQueryResult"></div>

        </div>

    `;

}


/* =========================================================
   AI EXTRACTION - MOCK
   ========================================================= */

function runAIExtraction() {

    const text =
        document.getElementById(
            "aiInput"
        ).value;


    if (!text.trim()) {

        alert(
            "Please paste CR information first."
        );

        return;

    }


    const crIdMatch =
        text.match(
            /(?:CR|JIRA)?\s*([A-Z]+-\d+)/i
        );


    const developerMatch =
        text.match(
            /Developer\s*:\s*(.+)/i
        );


    const baMatch =
        text.match(
            /BA\s*:\s*(.+)/i
        );


    const spocMatch =
        text.match(
            /SPOC\s*:\s*(.+)/i
        );


    const teamMatch =
        text.match(
            /Team\s*:\s*(.+)/i
        );


    const priorityMatch =
        text.match(
            /Priority\s*:\s*(.+)/i
        );


    const extractedCR =
        crIdMatch
        ?
        crIdMatch[1].toUpperCase()
        :
        "Not detected";


    const developer =
        developerMatch
        ?
        developerMatch[1].trim()
        :
        "Not detected";


    const ba =
        baMatch
        ?
        baMatch[1].trim()
        :
        "Not detected";


    const spoc =
        spocMatch
        ?
        spocMatch[1].trim()
        :
        "Not detected";


    const team =
        teamMatch
        ?
        teamMatch[1].trim()
        :
        "Not detected";


    const priority =
        priorityMatch
        ?
        priorityMatch[1].trim()
        :
        "Not detected";


    document.getElementById(
        "aiResult"
    ).innerHTML = `

        <div class="ai-result">

            <strong>
                🤖 AI Extracted Information
            </strong>

            <br><br>

            <table>

                <tr>
                    <td><strong>CR ID</strong></td>
                    <td>${extractedCR}</td>
                </tr>

                <tr>
                    <td><strong>Developer</strong></td>
                    <td>${developer}</td>
                </tr>

                <tr>
                    <td><strong>Team</strong></td>
                    <td>${team}</td>
                </tr>

                <tr>
                    <td><strong>BA</strong></td>
                    <td>${ba}</td>
                </tr>

                <tr>
                    <td><strong>SPOC</strong></td>
                    <td>${spoc}</td>
                </tr>

                <tr>
                    <td><strong>Priority</strong></td>
                    <td>${priority}</td>
                </tr>

            </table>


            <br>

            <div class="status status-approved">
                AI Validation: Basic information detected
            </div>

        </div>

    `;

}


/* =========================================================
   AI QUERY - MOCK
   ========================================================= */

function runAIQuery() {

    const query =
        document.getElementById(
            "aiQuery"
        ).value
        .toLowerCase();


    let answer =
        "I could not understand the query. Try asking about deployed, pending or rejected CRs.";


    if (
        query.includes("msd") &&
        query.includes("deployed")
    ) {

        const count =
            crs.filter(
                c =>
                    c.team === "MSD" &&
                    c.status === "DEPLOYED"
            ).length;


        answer =
            `MSD currently has ${count} deployed CR(s).`;

    }


    else if (
        query.includes("rejected")
    ) {

        const rejected =
            crs.filter(
                c =>
                    c.status === "REJECTED"
            );


        answer =
            `There are ${rejected.length} rejected CR(s).`;

    }


    else if (
        query.includes("pending")
    ) {

        const pending =
            crs.filter(
                c =>
                    c.status === "PENDING_LEAD"
            );


        answer =
            `There are ${pending.length} CR(s) pending Lead review.`;

    }


    else if (
        query.includes("total")
    ) {

        answer =
            `There are ${crs.length} CR(s) in the system.`;

    }


    document.getElementById(
        "aiQueryResult"
    ).innerHTML = `

        <div class="ai-result">

            <div class="ai-title">
                🤖 AI Response
            </div>

            <div class="ai-text">
                ${answer}
            </div>

        </div>

    `;

}


/* =========================================================
   LOGOUT
   ========================================================= */

function logout() {

    currentUser = null;

    localStorage.removeItem(
        "currentUser"
    );


    document
        .getElementById("appPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");

}


/* =========================================================
   INITIAL LOAD
   ========================================================= */

window.onload = function () {

    const savedUser =
        localStorage.getItem(
            "currentUser"
        );


    if (savedUser &&
        users[savedUser]) {

        currentUser =
            users[savedUser];


        document
            .getElementById("loginPage")
            .classList.add("hidden");


        document
            .getElementById("appPage")
            .classList.remove("hidden");


        setupUser();

        showPage("dashboard");

    }

};