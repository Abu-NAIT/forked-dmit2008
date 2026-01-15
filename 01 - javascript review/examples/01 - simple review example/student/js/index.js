/* eslint-disable indent */
/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/
// Select topic list & form

let topicForm = document.querySelector(".new-topic-form");
let topicList = document.querySelector(".topics-list");

// Create function to add text input to topic list
let addTopicToPage = (topicName, topicListElement) => {
	let newTopicElement = `<li class="list-group-item">${topicName}</li>`;
	topicListElement.innerHTML += newTopicElement;
};

topicForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let topicInput = event.target.elements["new-topic"];
	let topicText = topicInput.value;
	
	if (topicText === "") {
		topicInput.classList.addEventListener("is-invalid");
	} else {
		topicInput.classList.remove("is-invalid");
	}

	addTopicToPage(topicText, topicList);
});