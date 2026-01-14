const students = [];

const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTable");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;

    const student = {
        name: name,
        course: course
    };

    students.push(student);
    displayStudents();
    form.reset();
});

function displayStudents() {
    tableBody.innerHTML = "";

    students.forEach(function (student, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>
                <button class="delete-btn" onclick="removeStudent(${index})">
                    Remove
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}
function removeStudent(index) {
    students.splice(index, 1);
    displayStudents();
}