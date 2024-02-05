/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('Hello INFSCI 2560!');

// You JavaScript here
document.addEventListener('DOMContentLoaded', loadNotes);

function validateAndSave() {
  const emailInput = document.getElementById('email');
  const noteInput = document.getElementById('note');

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  if (noteInput.value.trim() === "") {
    alert('Please enter notes.');
    return;
  }

  // Save data to localStorage
  const formData = {
    email: emailInput.value,
    day: document.querySelector('input[name="day"]:checked') ? document.querySelector('input[name="day"]:checked').value : '',
    note: noteInput.value,
  };

  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes.push(formData);
  localStorage.setItem('notes', JSON.stringify(savedNotes));

  // Clear form inputs
  emailInput.value = '';
  noteInput.value = '';

  // Reload saved notes
  loadNotes();
}

function loadNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const savedNotesContainer = document.getElementById('savedNotes');

  savedNotesContainer.innerHTML = '<h2>Saved Notes</h2>';

  if (savedNotes.length === 0) {
    savedNotesContainer.innerHTML += '<p>No notes available.</p>';
  } else {
    savedNotes.forEach((note) => {
      savedNotesContainer.innerHTML += `
        <div class="saved-note">
          <strong>Email:</strong> ${note.email} <br>
          <strong>Day:</strong> ${note.day} <br>
          <strong>Note:</strong> ${note.note} <br>
        </div>
      `;
    });
  }
}


