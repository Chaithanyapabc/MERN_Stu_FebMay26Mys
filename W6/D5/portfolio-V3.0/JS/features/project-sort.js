function initProjectSort() {
  const sortSelect = document.getElementById("project-sort");

  if (!sortSelect) return;

  sortSelect.addEventListener("change", function () {
    let sortedProjects = [...projectsData]; // copy array

    if (this.value === "name-asc") {
      sortedProjects.sort((a, b) => a.name.localeCompare(b.name));
    } 
    else if (this.value === "name-desc") {
      sortedProjects.sort((a, b) => b.name.localeCompare(a.name));
    } 
    else if (this.value === "status") {
      sortedProjects.sort((a, b) => a.status.localeCompare(b.status));
    }

    // IMPORTANT: re-render sorted data
    renderProjects(sortedProjects);
  });
}