// Dummy data for courses, users, and enrollments
let courses = [
    { id: 1, title: "Mathematics", description: "Learn basic math concepts" },
    { id: 2, title: "Physics", description: "Explore the world of physics" },
    { id: 3, title: "Programming", description: "Introduction to programming" }
];

let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Bob Brown", email: "bob@example.com" },
    { id: 5, name: "Eva Lee", email: "eva@example.com" },
    { id: 6, name: "Mike Clark", email: "mike@example.com" },
    { id: 7, name: "Sarah White", email: "sarah@example.com" },
    { id: 8, name: "David Lee", email: "david@example.com" },
    { id: 9, name: "Emily Johnson", email: "emily@example.com" },
    { id: 10, name: "Michael Smith", email: "michael@example.com" }
];

let enrollments = [
    { id: 1, userId: 1, courseId: 1 },
    { id: 2, userId: 2, courseId: 1 },
    { id: 3, userId: 2, courseId: 2 },
    { id: 4, userId: 3, courseId: 3 },
    { id: 5, userId: 4, courseId: 2 },
    { id: 6, userId: 5, courseId: 1 },
    { id: 7, userId: 6, courseId: 1 },
    { id: 8, userId: 7, courseId: 3 },
    { id: 9, userId: 8, courseId: 2 },
    { id: 10, userId: 9, courseId: 1 }
];

// Function to display courses
function displayCourses() {
    const coursesTable = document.getElementById('courses-table');
    coursesTable.innerHTML = ''; // Clear existing data
    courses.forEach(course => {
        const row = coursesTable.insertRow();
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.title}</td>
            <td>${course.description}</td>
            <td><button onclick="editCourse(${course.id})">Edit</button></td>
            <td><button onclick="deleteCourse(${course.id})">Delete</button></td>
            <td><button onclick="addCourse(${course.id})">ADD</button></td>
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
    users.forEach(user => {
        const row = usersTable.insertRow();
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><button onclick="editUser(${user.id})">Edit</button></td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
            <td><button onclick="addUser(${user.id})">ADD</button></td>
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
        alert("Title and description are required for adding a new course.");
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
    enrollments.forEach(enrollment => {
        const row = enrollmentsTable.insertRow();
        row.innerHTML = `
            <td>${enrollment.id}</td>
            <td>${enrollment.userId}</td>
            <td>${enrollment.courseId}</td>
            <td><button onclick="editEnrollment(${enrollment.id})">Edit</button></td>
            <td><button onclick="deleteEnrollment(${enrollment.id})">Delete</button></td>
        `;
    });
}

// Function to add a new enrollment
function addEnrollment() {
    const userId = prompt("Enter user ID for new enrollment:");
    const courseId = prompt("Enter course ID for new enrollment:");
    if (userId && courseId) {
        const newEnrollment = {
            id: enrollments.length + 1,
            userId: parseInt(userId),
            courseId: parseInt(courseId)
        };
        enrollments.push(newEnrollment);
        displayEnrollments();
    } else {
        alert("User ID and course ID are required for adding a new enrollment.");
    }
}
// Function to edit an enrollment
function editEnrollment(id) {
    const enrollment = enrollments.find(enrollment => enrollment.id === id);
    if (enrollment) {
        const newUserId = prompt("Enter new user ID:", enrollment.userId);
        const newCourseId = prompt("Enter new course ID:", enrollment.courseId);
        if (newUserId !== null && newCourseId !== null) {
            enrollment.userId = parseInt(newUserId);
            enrollment.courseId = parseInt(newCourseId);
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





