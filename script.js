//your code here!
const infiList = document.getElementById('infi-list');
let isLoading = false;

// Function to add new list items
function addItems() {
  isLoading = true;

  // Simulating a delay to mimic fetching data from a server
  setTimeout(() => {
    for (let i = 0; i < 2; i++) {
      const newItem = document.createElement('li');
      newItem.textContent = `Item ${infiList.childElementCount + 1}`;
      infiList.appendChild(newItem);
    }

    isLoading = false;
  }, 1000); // Adjust the delay as needed
}

// Initially add 10 list items
for (let i = 0; i < 10000; i++) {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${i + 1}`;
  infiList.appendChild(newItem);
}

// Listen for scroll events
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
    // Add more items when the user reaches the end
    addItems();
  }
});

