const courses = ["HTML", "CSS", "JavaScript", "Bootstrap", "React"];
function showCourses() {
    const list = document.getElementById("courseList");
    list.innerHTML = "";
    courses.forEach(function(course) {
        const li = document.createElement("li");
        li.textContent = course;
        list.appendChild(li);
    });
}