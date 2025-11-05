// scripts/bom.js

// 1. Get references ONCE when page loads
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2. Listen for clicks on Add button
button.addEventListener('click', function() {

  // 3. Only proceed if input isn't empty
  if (input.value.trim() !== '') {
    alert('You have entered: ' + input.value);

    // 4. Create new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // 5. Fill with user's chapter
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // 6. Put delete button inside <li>
    li.append(deleteButton);

    // 7. Add <li> to the list
    list.append(li);

    // 8. Make delete button remove its own <li>
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus(); // Ready for next entry
    });

    // 9. Clean up: clear input and refocus
    input.value = '';
    input.focus();

  } else {
    // Optional: if empty, just refocus
    input.focus();
  }

  
});

 //Allow pressing Enter to add
input.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    button.click(); // Triggers the same add logic!
}
});