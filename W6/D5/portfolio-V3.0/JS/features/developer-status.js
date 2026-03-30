function initDeveloperStatus() {
    const statsContainer = document.getElementById("developer-status");

    if (!statsContainer) {
        console.log("Developer status container not found");
        return;
    }

    // Developer stats data
    const statsData = [
        { label: "GitHub Commits", value: 100 },
        { label: "LeetCode Problems", value: 100 },
        { label: "Projects Completed", value: 5 }
    ];

    statsContainer.innerHTML = "";

    statsData.forEach(function (stat) {

        const card = document.createElement("div");
        card.className = "p-6 bg-white rounded-2xl shadow-lg text-center";

        const number = document.createElement("h3");
        number.className = "text-3xl font-bold text-blue-600";
        number.textContent = "0";

        const label = document.createElement("p");
        label.className = "text-sm mt-2 text-gray-600";
        label.textContent = stat.label;

        card.appendChild(number);
        card.appendChild(label);
        statsContainer.appendChild(card);

        // Animate counting
        animateCount(number, stat.value);
    });

    console.log("Developer status rendered successfully");
}

// COUNT-UP ANIMATION
function animateCount(element, target) {
    let count = 0;
    let increment = Math.ceil(target / 50); // smooth animation speed

    function updateCount() {
        count += increment;

        if (count >= target) {
            element.textContent = target;
        } else {
            element.textContent = count;
            requestAnimationFrame(updateCount);
        }
    }

    updateCount();
}