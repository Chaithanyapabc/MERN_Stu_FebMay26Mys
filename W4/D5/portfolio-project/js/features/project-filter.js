function filterProject(){
    const projectsContainer=document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Projects were not found");
        return;
    }
    projectsContainer.textContent=""
    projectsData.forEach(function(project){
        // to create outercards first
        const card=document.createElement("div");
        card.className="relative p-8 text-center bg-white rounded-3xl shadow-lg";

        //to craete name of project 
        const projectName=document.createElement("h2");
        projectName.className="text-xl font-bold mb-2";
        projectName.textContent=project.name;

        //to create category of the project
        const projectCategory=document.createElement("h5");
        projectCategory.className="text-xl font-bold-sm mb-2 text-blue-800";
        projectCategory.textContent=project.category;

        //to create description of the project
        const projectDescription=document.createElement("p");
        projectDescription.className="text-sm font-bold-sm mb-2";
        projectDescription.textContent=project.description;

        //to create Technologies of the project
        const projectTechnologies=document.createElement("span");
        projectTechnologies.className="text-lg font-bold-lg mb-2 text-green-600 ";
        projectTechnologies.textContent=project.technologies;

        //to create status of project
        const projectStatus=document.createElement("div");
        projectStatus.className="absolute top-2 right-2 bg-red-500 text-sm font-bold-sm mb-2 rounded-lg p-1";
        projectStatus.textContent=project.status;

        //to create livedemo
        const projectliveDemo=document.createElement("div");
        projectliveDemo.className="text-blue-500 text-sm font-bold-sm mb-2 pl-5 pr-5 bg-blue-200 rounded-sm";
        projectliveDemo.textContent=project.liveDemo;

        //to create github link
        const projectgithub=document.createElement("div");
        projectgithub.className="text-blue-500 text-sm font-bold-sm mb-2 pl-5 pr-5 bg-blue-200 rounded-sm";
        projectgithub.textContent=project.github;




        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectliveDemo);
        card.appendChild(projectgithub);
        projectsContainer.appendChild(card);
    })
}