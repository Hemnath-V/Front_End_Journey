// Select all tab items
const tabs = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

// Function to remove active class from all tabs
function removeActiveTab() {
    tabs.forEach(tab => tab.classList.remove("tab-border"));
}

// Function to hide all tab content
function hideTabContent() {
    tabContents.forEach(content => content.classList.remove("show"));
}

// Add event listeners to tabs
tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        removeActiveTab();
        hideTabContent();

        // Add active class to clicked tab
        this.classList.add("tab-border");

        // Show corresponding content
        const targetId = this.getAttribute("data-target");
        document.getElementById(targetId).classList.add("show");
    });
});
