document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const school = document.getElementById('school').value.trim();

  firebase.database().ref('registrations').push({
    name: name,
    email: email,
    school: school,
    timestamp: Date.now()
  }).then(() => {
    alert("Registration successful!");
    document.getElementById('registerForm').reset();
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
