function renderProjects(data) {
    const projectsContainer = document.getElementById("projects-container");
    const countEl = document.getElementById("project-count");

    if (!projectsContainer) return;

    projectsContainer.innerHTML = "";

    // Correct count (uses filtered data)
    countEl.textContent = `${data.length} project${data.length !== 1 ? "s" : ""} found`;

    if (data.length === 0) {
        projectsContainer.innerHTML =
            "<p class='text-center col-span-full text-red-500 font-bold'>No projects found</p>";
        return;
    }

    data.forEach(function (project) {

        const card = document.createElement("div");
        card.className =
            "relative p-8 text-center bg-white rounded-3xl shadow-lg hover:scale-105 transition-all duration-300";

        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectCategory = document.createElement("h5");
        projectCategory.className = "text-sm font-bold mb-2 text-blue-800";
        projectCategory.textContent = project.category;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2";
        projectDescription.textContent = project.description;

        const projectTechnologies = document.createElement("p");
        projectTechnologies.className = "text-sm text-green-600 mb-2";
        projectTechnologies.textContent = project.technologies.join(", ");

        const projectStatus = document.createElement("span");
        projectStatus.className =
            "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded";
        projectStatus.textContent = project.status;

        const projectLinks = document.createElement("div");
        projectLinks.className = "flex justify-center gap-4 mt-3";

        const liveLink = document.createElement("a");
        liveLink.href = project.liveDemo;
        liveLink.textContent = "Live";
        liveLink.className = "text-blue-500 underline";

        const githubLink = document.createElement("a");
        githubLink.href = project.github;
        githubLink.textContent = "GitHub";
        githubLink.className = "text-blue-500 underline";

        projectLinks.appendChild(liveLink);
        projectLinks.appendChild(githubLink);

        // Append all
        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectLinks);

        projectsContainer.appendChild(card);
    });
}