
// Retrieve the saved checkbox states from localStorage
 const savedCheckboxStates =
 JSON.parse(localStorage.getItem("checkboxStates")) || {};

// Loop through each checkbox and set its state based on the savedCheckboxStates
document
 .querySelectorAll('input[type="checkbox"]')
 .forEach((checkbox) => {
   const checkboxId = checkbox.id;
   if (savedCheckboxStates[checkboxId]) {
     checkbox.checked = true;
   }

   // Add event listener to each checkbox to save its state in localStorage when clicked
   checkbox.addEventListener("change", () => {
     savedCheckboxStates[checkboxId] = checkbox.checked;
     localStorage.setItem(
       "checkboxStates",
       JSON.stringify(savedCheckboxStates)
     );
   });
 });

//   //Changing all the day to lec
//  document.addEventListener("DOMContentLoaded", function () {
//   const labels = document.querySelectorAll("label");
//   labels.forEach((label) => {
//     label.innerHTML = label.innerHTML.replace("Day", "Lec");
//   });
// });