
// ======================================
// LOAD PORTFOLIO DATA USING FETCH API
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    fetch("data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to load portfolio data.");
            }

            return response.json();
        })
        .then(data => {
            loadPersonalDetails(data.personal);
            loadSocialLinks(data.personal.social);
            loadSkills(data.skills);
            loadProjects(data.projects);
            loadEducation(data.education);
            loadCertifications(data.certifications);
        })
        .catch(error => {
            console.error("Error:", error);

            document.querySelector("#heroIntro").textContent =
                "Portfolio information could not be loaded. Please try again later.";
        });

    // CURRENT YEAR
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();

    // CONTACT FORM VALIDATION
    setupContactForm();
});


// ======================================
// PERSONAL DETAILS
// ======================================

function loadPersonalDetails(personal) {

    document.getElementById("vivek").textContent = personal.name;

    document.getElementById("heroTitle").textContent = personal.title;

    document.getElementById("heroIntro").textContent = personal.introduction;

    document.getElementById("profileImage").src = personal.image;

    document.getElementById("aboutImage").src = personal.image;

    document.getElementById("aboutName").textContent = personal.name;

    document.getElementById("aboutDescription").textContent =
        personal.about;

    document.getElementById("vivek").textContent = personal.name;

    document.getElementById("vivek@gmail.com").textContent = personal.email;

    document.getElementById("personalPhone").textContent = personal.phone;

    document.getElementById("bvb").textContent =
        personal.location;

    document.getElementById("contactEmail").textContent = personal.email;

    document.getElementById("1234567890").textContent = personal.phone;

    document.getElementById("contactLocation").textContent =
        personal.location;

    document.getElementById("footerName").textContent = personal.name;

    document.getElementById("footerCopyright").textContent = personal.name;

    document.getElementById("resumeButton").href = personal.resume;
}


// ======================================
// SOCIAL MEDIA LINKS
// ======================================

function loadSocialLinks(social) {

    const container = document.getElementById("socialLinks");

    const footer = document.getElementById("footerSocialLinks");

    container.innerHTML = "";
    footer.innerHTML = "";

    social.forEach(item => {

        const link = document.createElement("a");

        link.href = item.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", item.name);

        const icon = document.createElement("i");

        icon.className = item.icon;

        link.appendChild(icon);

        container.appendChild(link.cloneNode(true));

        footer.appendChild(link);
    });
}


// ======================================
// DISPLAY SKILLS
// ======================================

function loadSkills(skills) {

    const container = document.getElementById("skillsContainer");

    container.innerHTML = "";

    skills.forEach(skill => {

        const column = document.createElement("div");

        column.className = "col-md-6 col-lg-4";

        const card = document.createElement("div");

        card.className = "skill-card";

        const heading = document.createElement("h5");

        heading.innerHTML =
            `<i class="${skill.icon}"></i> ${skill.name}`;

        const percentage = Math.max(
            0,
            Math.min(100, Number(skill.level) || 0)
        );

        const progress = document.createElement("div");

        progress.className = "progress";

        const bar = document.createElement("div");

        bar.className = "progress-bar";

        bar.style.width = percentage + "%";

        bar.setAttribute("role", "progressbar");

        bar.setAttribute("aria-valuenow", percentage);

        bar.setAttribute("aria-valuemin", "0");

        bar.setAttribute("aria-valuemax", "100");

        progress.appendChild(bar);

        const label = document.createElement("p");

        label.className = "mt-2 mb-0";

        label.textContent = percentage + "%";

        card.appendChild(heading);

        card.appendChild(progress);

        card.appendChild(label);

        column.appendChild(card);

        container.appendChild(column);
    });
}


// ======================================
// DISPLAY PROJECTS
// ======================================

function loadProjects(projects) {

    const container = document.getElementById("projectsContainer");

    container.innerHTML = "";

    projects.forEach(project => {

        const column = document.createElement("div");

        column.className = "col-md-6 col-lg-4";

        const card = document.createElement("div");

        card.className = "project-card";

        const image = document.createElement("img");

        image.className = "project-image";

        image.src = project.image;

        image.alt = project.title;

        image.loading = "lazy";

        const content = document.createElement("div");

        content.className = "project-content";

        const title = document.createElement("h4");

        title.textContent = project.title;

        const description = document.createElement("p");

        description.textContent = project.description;

        const techContainer = document.createElement("div");

        project.technologies.forEach(technology => {

            const badge = document.createElement("span");

            badge.className = "tech-badge";

            badge.textContent = technology;

            techContainer.appendChild(badge);
        });

        content.appendChild(title);

        content.appendChild(description);

        content.appendChild(techContainer);

        if (project.link) {

            const link = document.createElement("a");

            link.href = project.link;

            link.target = "_blank";

            link.rel = "noopener noreferrer";

            link.className = "btn btn-primary-custom mt-3";

            link.textContent = "View Project";

            content.appendChild(link);
        }

        card.appendChild(image);

        card.appendChild(content);

        column.appendChild(card);

        container.appendChild(column);
    });
}


// ======================================
// DISPLAY EDUCATION
// ======================================

function loadEducation(education) {

    const container = document.getElementById("educationContainer");

    container.innerHTML = "";

    education.forEach(item => {

        const card = document.createElement("div");

        card.className = "timeline-card";

        const title = document.createElement("h4");

        title.textContent = item.degree;

        const institution = document.createElement("p");

        institution.textContent = item.institution;

        const year = document.createElement("p");

        year.className = "year";

        year.textContent = item.year;

        const description = document.createElement("p");

        description.textContent = item.description;

        card.appendChild(title);

        card.appendChild(institution);

        card.appendChild(year);

        card.appendChild(description);

        container.appendChild(card);
    });
}


// ======================================
// DISPLAY CERTIFICATIONS
// ======================================

function loadCertifications(certifications) {

    const container =
        document.getElementById("certificationsContainer");

    container.innerHTML = "";

    certifications.forEach(item => {

        const column = document.createElement("div");

        column.className = "col-md-6 col-lg-4";

        const card = document.createElement("div");

        card.className = "certificate-card";

        const icon = document.createElement("i");

        icon.className = "bi bi-award-fill";

        const title = document.createElement("h5");

        title.className = "mt-3";

        title.textContent = item.name;

        const issuer = document.createElement("p");

        issuer.textContent = item.issuer;

        const year = document.createElement("small");

        year.textContent = item.year;

        card.appendChild(icon);

        card.appendChild(title);

        card.appendChild(issuer);

        card.appendChild(year);

        column.appendChild(card);

        container.appendChild(column);
    });
}


// ======================================
// CONTACT FORM VALIDATION
// ======================================

function setupContactForm() {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName");

        const email = document.getElementById("contactUserEmail");

        const subject = document.getElementById("contactSubject");

        const message = document.getElementById("contactMessage");

        const formMessage = document.getElementById("formMessage");

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const fields = [name, email, subject, message];

        let valid = true;

        fields.forEach(field => {

            field.classList.remove("is-invalid");

            if (!field.value.trim()) {

                field.classList.add("is-invalid");

                valid = false;
            }
        });

        if (!emailPattern.test(email.value.trim())) {

            email.classList.add("is-invalid");

            valid = false;
        }

        if (!valid) {

            formMessage.className = "mt-3 text-danger";

            formMessage.textContent =
                "Please fill in all fields correctly.";

            return;
        }

        formMessage.className = "mt-3 text-success";

        formMessage.textContent =
            "Your form is valid! This demo does not send messages to a server.";

        form.reset();

        fields.forEach(field => {
            field.classList.remove("is-invalid");
        });
    });
}

