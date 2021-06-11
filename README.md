<h1> Project Flash Cards </h1>
A flash card application to create decks of flash cards for the subjects, stores them in an api, and retrieves them to be studied.
<h2> Screenshots </h2>
<strong>Home</strong><br />
The Home screen has the following features:<br />
-A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.<br />
-Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and “Delete” button.<br />
-Clicking the “Study” button brings the user to the Study screen.<br />
-Clicking the “Edit” button brings the user to the Edit Deck screen.<br />
-Clicking the “Delete” button shows a warning message before deleting the deck.<br />
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/8ad6e17b7d849280a619e4bb69c26baa-home.png" />

<strong>Delete Deck Prompt</strong><br />
When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen.
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/ae0a66039ae79eee10554cc7af2fcc20-lete-deck-prompt.png" />

<strong>Study page</strong><br />
The Study screen is displayed at ```/decks/:deckId/study.```<br /><br />
The Study screen has the following features:<br />
-There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).<br />
-Cards are shown one at a time, front-side first and a button at the bottom of each card "flips" it to the other side.<br />
-After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.<br />
-After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.
If the user does not restart the deck, they should return to the home screen.<br />
-Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/e5adaf57aef5e38f4dcd8e7efd0a5dc9-study-first-card.png" />

<strong>Create Deck</strong><br />
The Home screen has a "Create Deck" button that brings the user to the Create Deck screen.<br /><br />
-The Create Deck screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
-A form is shown with the appropriate fields for creating a new deck.<br />
-If the user clicks "submit", the user is taken to the Deck screen.<br />
-If the user clicks "cancel", the user is taken to the Home screen.
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/c5806a5777aa468623767d8fa4fa8fe8-deck-create.png" />

<strong>Deck</strong><br />
The Deck screen displays all of the information about a deck.<br /><br />
The Deck screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).<br />
-The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").<br />
-The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination<br />
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/f63b8bedaaf37cd8c3245febe6f0275f-deck.png" />

<strong>Delete Card Prompt</strong><br />
When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/987a95a7cc4470316b38425b8cdb7c84-lete-card-prompt.png" />

<strong>Edit Deck</strong><br />
The Edit Deck screen allows the user to modify information on an existing deck.<br /><br />
The Edit Deck screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).<br />
-It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.<br />
-The user can edit and update the form.<br />
-If the user clicks "Cancel", the user is taken to the Deck screen.<br />
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/6c34e4b94ba7e983719eda4aa6f60592-deck-edit.png" />

<strong>Add Card</strong><br />
The Add Card screen allows the user to add a new card to an existing deck.<br /><br />
The Add Card screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck to which the cards are being added, and finally the text Add Card (e.g., Home/React Router/Add Card).<br />
-The screen displays the "React Router: Add Card" deck title.<br />
-A form is shown with the "front" and "back" fields for a new card. Both fields use a <textarea> tag that can accommodate multiple lines of text.<br />
-If the user clicks "Save", a new card is created and associated with the relevant deck. Then the form is cleared and the process for adding a card is restarted.<br />
-If the user clicks "Done", the user is taken to the Deck screen.<br />
 <img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/fcc7dde129ed17b6ee199313e1dbc542-card-add.png" />
  
 <strong>Edit Card</strong><br />
The Edit Card screen allows the user to modify information on an existing card.<br /><br />
The Edit Card screen has the following features:<br />
-There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).<br />
-It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.<br />
-If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen.<br />
<img src="https://github.com/AudreyMargolis/ProjectFlashCards/blob/master/cd6a1f07574bf8544b0a30d45020a274-card-edit.png" />
<h2>Technology</h2>
Built with:<br />
<a href="https://facebook.github.io/react/">React</a> - View Library<br />
<a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap</a> - View Documentation<br />
