// Dummy data for courses, users, and enrollments
let courses = [
    { id: 1, title: "Mathematics", description: "Learn basic math concepts", professor: "Smith" },
    { id: 2, title: "Physics", description: "Explore the world of physics", professor: "Johnson" },
    { id: 3, title: "Programming", description: "Introduction to programming", professor: "Williams" },
    { id: 4, title: "Biology", description: "Study of living organisms", professor: "Brown" },
    { id: 5, title: "Chemistry", description: "Explore the composition of substances", professor: "Taylor" },
    { id: 6, title: "History", description: "Understanding past events", professor: "Anderson" },
    { id: 7, title: "Literature", description: "Explore literary works", professor: "Martinez" },
    { id: 8, title: "Geography", description: "Study of the Earth's surface", professor: "Garcia" },
    { id: 9, title: "Computer Science", description: "Introduction to computer programming", professor: "Hernandez" },
    { id: 10, title: "Art", description: "Exploration of artistic expression", professor: "Young" }
];


let users = [
    { id: 1, name: "John Doe", email: "john@usf.edu", country: "USA", gender: "Male" },
    { id: 2, name: "Jane Smith", email: "jane@usf.edu", country: "USA", gender: "Female" },
    { id: 3, name: "Alice Johnson", email: "alice@usf.edu", country: "France", gender: "Female" },
    { id: 4, name: "Bob Brown", email: "bob@usf.edu", country: "France", gender: "Male" },
    { id: 5, name: "Eva Lee", email: "eva@usf.edu", country: "India", gender: "Female" },
    { id: 6, name: "Mike Clark", email: "mike@usf.edu", country: "India", gender: "Male" },
    { id: 7, name: "Sarah White", email: "sarah@usf.edu", country: "USA", gender: "Female" },
    { id: 8, name: "David Lee", email: "david@usf.edu", country: "India", gender: "Male" },
    { id: 9, name: "Emily Johnson", email: "emily@usf.edu", country: "France", gender: "Female" },
    { id: 10, name: "Michael Smith", email: "michael@usf.edu", country: "USA", gender: "Male" },
    { id: 11, name: "Maria Garcia", email: "maria@usf.edu", country: "India", gender: "Female" },
    { id: 12, name: "Daniel Martinez", email: "daniel@usf.edu", country: "France", gender: "Male" },
    { id: 13, name: "Laura Taylor", email: "laura@usf.edu", country: "USA", gender: "Female" },
    { id: 14, name: "Carlos Hernandez", email: "carlos@usf.edu", country: "India", gender: "Male" },
    { id: 15, name: "Sophia Brown", email: "sophia@usf.edu", country: "France", gender: "Female" },
    { id: 16, name: "William Lee", email: "william@usf.edu", country: "USA", gender: "Male" },
    { id: 17, name: "Olivia Johnson", email: "olivia@usf.edu", country: "India", gender: "Female" },
    { id: 18, name: "James Garcia", email: "james@usf.edu", country: "France", gender: "Male" },
    { id: 19, name: "Isabella Clark", email: "isabella@usf.edu", country: "USA", gender: "Female" },
    { id: 20, name: "Alexander Smith", email: "alexander@usf.edu", country: "India", gender: "Male" }
];



let enrollments = [
    { id: 1, userName: "John Doe", courseName: "Physics", professor: "Johnson" },
    { id: 2, userName: "Jane Smith", courseName: "Mathematics", professor: "Smith" },
    { id: 3, userName: "Jane Smith", courseName: "Physics", professor: "Johnson" },
    { id: 4, userName: "Alice Johnson", courseName: "Programming", professor: "Williams" },
    { id: 5, userName: "Bob Brown", courseName: "Physics", professor: "Johnson" },
    { id: 6, userName: "Eva Lee", courseName: "Mathematics", professor: "Smith" },
    { id: 7, userName: "Mike Clark", courseName: "Mathematics", professor: "Smith" },
    { id: 8, userName: "Sarah White", courseName: "Programming", professor: "Williams" },
    { id: 9, userName: "David Lee", courseName: "Physics", professor: "Johnson" },
    { id: 10, userName: "Emily Johnson", courseName: "Mathematics", professor: "Smith" },
    { id: 11, userName: "Maria Garcia", courseName: "Chemistry", professor: "Taylor" },
    { id: 12, userName: "Daniel Martinez", courseName: "History", professor: "Anderson" },
    { id: 13, userName: "Laura Taylor", courseName: "Literature", professor: "Martinez" },
    { id: 14, userName: "Carlos Hernandez", courseName: "Geography", professor: "Garcia" },
    { id: 15, userName: "Sophia Brown", courseName: "Computer Science", professor: "Hernandez" },
    { id: 16, userName: "William Lee", courseName: "Art", professor: "Young" },
    { id: 17, userName: "Olivia Johnson", courseName: "Biology", professor: "Brown" },
    { id: 18, userName: "James Garcia", courseName: "Physics", professor: "Johnson" },
    { id: 19, userName: "Isabella Clark", courseName: "Chemistry", professor: "Taylor" },
    { id: 20, userName: "Alexander Smith", courseName: "Mathematics", professor: "Smith" }
];


// Function to display courses
function displayCourses() {
    const coursesTable = document.getElementById('courses-table');
    coursesTable.innerHTML = ''; // Clear existing data
    const headerRow = coursesTable.insertRow();
    const idHeader = document.createElement('th');
    idHeader.textContent = 'Id';
    headerRow.appendChild(idHeader);
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'CourseName';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Description';
    headerRow.appendChild(descriptionHeader);
    const professorHeader = document.createElement('th');
    professorHeader.textContent = 'Professor';
    headerRow.appendChild(professorHeader);
    courses.forEach(course => {
        const row = coursesTable.insertRow();
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.title}</td>
            <td>${course.description}</td>
            <td>${course.professor}</td>
             <td><button onclick="editCourse(${course.id})">Edit</button></td>
            <td><button onclick="deleteCourse(${course.id})">Delete</button></td>
        `;
    });
}




// Function to add a new course

function addCourse() {
    const title = prompt("Enter title for new course:");
    const description = prompt("Enter description for new course:");
    if (title && description) {
        const newCourse = {
            id: courses.length + 1,
            title: title,
            description: description
        };
        courses.push(newCourse);
        displayCourses();
    } else {
        alert("Title and description are required for adding a new course.");
    }
}

// Function to edit a course
function editCourse(id) {
    const course = courses.find(course => course.id === id);
    if (course) {
        const newTitle = prompt("Enter new title:", course.title);
        const newDescription = prompt("Enter new description:", course.description);
        if (newTitle !== null && newDescription !== null) {
            course.title = newTitle;
            course.description = newDescription;
            displayCourses();
        }
    } else {
        alert("Course not found!");
    }
}

// Function to delete a course
function deleteCourse(id) {
    const index = courses.findIndex(course => course.id === id);
    if (index !== -1) {
        courses.splice(index, 1);
        displayCourses();
    } else {
        alert("Course not found!");
    }
}




// Function to display users
function displayUsers() {
    const usersTable = document.getElementById('users-table');
    usersTable.innerHTML = ''; // Clear existing data
    const headerRow = usersTable.insertRow();
    const idHeader = document.createElement('th');
    idHeader.textContent = 'Id';
    headerRow.appendChild(idHeader);
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'StudentName';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'Email';
    headerRow.appendChild(descriptionHeader);
    const countryHeader = document.createElement('th');
    countryHeader.textContent = 'Country';
    headerRow.appendChild(countryHeader);
    const genderHeader = document.createElement('th');
    genderHeader.textContent = 'Gender';
    headerRow.appendChild(genderHeader);

    users.forEach(user => {
        const row = usersTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.country}</td>
            <td>${user.gender}</td>
            <td><button onclick="editUser(${user.id})">Edit</button></td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
           
        `;
    });
}

// Function to add a new user
function addUser() {
    const name = prompt("Enter title for new user:");
    const email = prompt("Enter description for new user:");
    if (name && email) {
        const newUser = {
            id: users.length + 1,
            name: name,
            email: email
        };
        users.push(newUser);
        displayUsers();
    } else {
        alert("Title and description are required for adding a new courses.");
    }
}


// Function to edit a user
function editUser(id) {
    const name = prompt("Enter new name:");
    const email = prompt("Enter new email:");
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index].name = name;
        users[index].email = email;
        displayUsers();
    } else {
        alert("User not found!");
    }
}

// Function to delete a user
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        displayUsers();
    } else {
        alert("User not found!");
    }


}

// Function to display enrollments
function displayEnrollments() {
    const enrollmentsTable = document.getElementById('enrollments-table');
    enrollmentsTable.innerHTML = ''; // Clear existing data
    const headerRow = enrollmentsTable.insertRow();
    const idHeader = document.createElement('th');
    idHeader.textContent = 'Id';
    headerRow.appendChild(idHeader);
    const titleHeader = document.createElement('th');
    titleHeader.textContent = 'StudentName';
    headerRow.appendChild(titleHeader);
    const descriptionHeader = document.createElement('th');
    descriptionHeader.textContent = 'CourseName';
    headerRow.appendChild(descriptionHeader);
    const eProfessorHeader = document.createElement('th');
    eProfessorHeader.textContent = 'ProfessorName';
    headerRow.appendChild(eProfessorHeader);
    enrollments.forEach(enrollment => {
        const row = enrollmentsTable.insertRow();
        row.innerHTML = `
            <td>${enrollment.id}</td>
            <td>${enrollment.userName}</td>
            <td>${enrollment.courseName}</td>
            <td>${enrollment.professor}</td>
            <td><button onclick="editEnrollment(${enrollment.id})">Edit</button></td>
            <td><button onclick="deleteEnrollment(${enrollment.id})">Delete</button></td>
        `;
    });
}

// Function to add a new enrollment
function addEnrollment() {
    const userName = prompt("Enter user name for new enrollment:");
    const courseName = prompt("Enter course name for new enrollment:");
    if (userName && courseName) {
        const newEnrollment = {
            id: enrollments.length + 1,
            userName: userName,
            courseName: courseName
        };
        enrollments.push(newEnrollment);
        displayEnrollments();
    } else {
        alert("User name and course name are required for adding a new enrollment.");
    }
}

// Function to edit an enrollment
function editEnrollment(id) {
    const enrollment = enrollments.find(enrollment => enrollment.id === id);
    if (enrollment) {
        const newUserName = prompt("Enter new user name:", enrollment.userName);
        const newCourseName = prompt("Enter new course name:", enrollment.courseName);
        if (newUserName !== null && newCourseName !== null) {
            enrollment.userName = newUserName;
            enrollment.courseName = newCourseName;
            displayEnrollments();
        }
    } else {
        alert("Enrollment not found!");
    }
}

// Function to delete an enrollment
function deleteEnrollment(id) {
    const index = enrollments.findIndex(enrollment => enrollment.id === id);
    if (index !== -1) {
        enrollments.splice(index, 1);
        displayEnrollments();
    } else {
        alert("Enrollment not found!");
    }
}


// Call functions to display initial data
// Call functions to display initial data
document.addEventListener("DOMContentLoaded", function () {
    displayUsers();
    displayCourses();
    displayEnrollments();
});
document.addEventListener("DOMContentLoaded", function () {
    /*displayUsers();*/
    displayCourses();
    /*displayEnrollments();*/
});
document.addEventListener("DOMContentLoaded", function () {
    /*displayUsers();*/
    /*displayCourses();*/
    displayEnrollments();
});
// JavaScript for adding active class to clicked navigation item
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});





