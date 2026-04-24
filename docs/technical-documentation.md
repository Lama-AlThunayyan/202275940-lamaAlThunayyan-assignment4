# Technical Documentation

## 1. Project Overview  

This project is a final, polished version of a personal portfolio web application developed across Assignments 1, 2, and 3.

It demonstrates the integration of:

- Advanced JavaScript logic  
- External API usage  
- State management  
- User interaction design  
- Responsive layout  

The goal is to deliver a **complete, professional web application** that reflects real-world front-end development practices.

---

## 2. System Architecture  

The application is built using a front-end architecture consisting of:

- **HTML (Structure):** Defines content and layout  
- **CSS (Presentation):** Controls styling, responsiveness, and animations  
- **JavaScript (Logic):** Handles interactivity, API communication, and state management  

All functionality is implemented on the client side.

---

## 3. File Responsibilities  

### index.html  
Defines the structure of the application, including:

- Navigation bar  
- Hero section with greeting  
- About section  
- Projects section (filter + sort + modal)  
- GitHub API section  
- Contact form  
- Footer  

---

### css/styles.css  
Responsible for:

- Layout (Flexbox & Grid)  
- Responsive design  
- Light/Dark theme styling  
- Animations and transitions  
- Card and modal styling  
- Form validation styling  

---

### js/script.js  
Handles:

- Navigation behavior  
- Theme toggling and persistence  
- Project filtering and sorting  
- Modal interaction  
- GitHub API integration  
- Form validation and feedback  
- Time-based greeting  

---

## 4. Core Functionalities  

### 4.1 Theme Toggle (State Management)  
- Toggles between light and dark mode  
- Uses `localStorage` to store preference  
- Restores theme on page reload  

---

### 4.2 Project Filtering  
- Uses `data-category` attributes  
- Displays only relevant project cards  
- Updates dynamically without reloading  

---

### 4.3 Project Sorting  
- Uses `data-title` for alphabetical sorting  
- Supports:
  - Default  
  - A-Z  
  - Z-A  

---

### 4.4 Combined Logic (Filter + Sort)  

The system applies multi-step logic:

1. Filter projects based on selected category  
2. Select visible projects  
3. Apply sorting to visible projects  
4. Update the DOM dynamically  

This demonstrates layered logic and real application behavior.

---

### 4.5 Project Details Modal

The application uses a modal (popup window) to display detailed information about each project when the user clicks the **"View Details"** button.

Instead of immediately redirecting the user to GitHub, the modal provides additional context about the project within the same page.

When the user clicks the button:

1. A popup window appears on top of the page  
2. The modal displays structured project information, including:
   - Problem: What issue the project solves  
   - Solution: How the problem was addressed  
   - Key Features: Main functionalities of the project  
   - Technologies: Tools and languages used  
3. The user can review this information before deciding to open the GitHub repository  
4. A button inside the modal allows the user to navigate to the project on GitHub  

The modal can be closed by:
- Clicking the close button  
- Clicking outside the modal  
- Pressing the Escape key  

This interaction simulates real-world application behavior where detailed information is presented without navigating away from the page.

---

### 4.6 GitHub API Integration  

The application fetches repositories using:

https://api.github.com/users/Lama-AlThunayyan/repos  

Steps:

- Send request using fetch()  
- Check response status  
- Convert response to JSON  
- Extract required data  
- Dynamically create UI elements  
- Handle errors gracefully  

If the API fails, a user-friendly message is displayed instead of breaking the interface.

---

### 4.7 Form Validation & User Feedback  

- Validates:
  - Name  
  - Email (using regex)  
  - Message length  
- Displays inline error messages  
- Prevents submission if invalid  
- Shows success message on valid submission  

---

### 4.8 Time-Based Greeting  

The application displays a greeting based on the current time:

- Morning  
- Afternoon  
- Evening  

This adds personalization and improves user engagement.

---

## 5. User Interaction Flow  

The application follows a clear interaction flow:

1. The user opens the homepage  
2. The user reads the About section  
3. The user navigates to the Projects section  
4. The user filters projects by category  
5. The user sorts the filtered projects  
6. The user clicks "View Details" to open the modal  
7. The user reviews project information  
8. The user optionally opens the project on GitHub  
9. The user views GitHub repositories from the API section  
10. The user toggles the theme  
11. The user fills out the contact form and receives feedback  

This structured flow ensures clarity and ease of use for new users.

---

## 6. User Experience (UX) Design  

The application focuses on:

- Clear navigation  
- Immediate feedback for user actions  
- Responsive layout across devices  
- Interactive UI elements (hover effects and transitions)  
- Accessible and readable interface  
- Friendly error and success messages  

---

## 7. Performance Optimization  

- Images use lazy loading (`loading="lazy"`)  
- Minimal DOM updates  
- Efficient JavaScript logic  
- No external frameworks  

---

## 8. Browser Compatibility  

Tested on:

- Google Chrome  
- Microsoft Edge  

The application works consistently across modern browsers.

---

## 9. Summary  

This project demonstrates:

- API integration  
- Advanced JavaScript logic  
- State management  
- Responsive and interactive UI  
- Clean and structured code  

It represents the transition from a simple static website to a fully dynamic and professional web application.