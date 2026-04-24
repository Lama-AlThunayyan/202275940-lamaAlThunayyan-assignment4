# Technical Documentation

## 1. Project Overview  

This project is an advanced single-page portfolio web application built using HTML, CSS, and JavaScript.

It extends previous assignments by introducing:

- External API integration  
- Multi-step application logic (filtering and sorting)  
- State management using localStorage  
- Enhanced user interaction and feedback mechanisms  

The goal is to transform a simple portfolio into a **dynamic, interactive, and user-friendly web application** that reflects real-world front-end development practices.

---

## 2. System Architecture  

The application follows a front-end architecture consisting of:

- **HTML (Structure):** Defines the layout and content of the website  
- **CSS (Presentation):** Controls styling, layout, and responsiveness  
- **JavaScript (Logic):** Handles interactivity, data processing, and dynamic updates  

All functionality is handled client-side, making the application lightweight and fast.

---

## 3. File Responsibilities  

### index.html  
Defines the structure of the application, including:

- Navigation bar  
- About section  
- Projects section (with filter and sort controls)  
- GitHub repositories section  
- Contact form  
- Footer  

---

### css/styles.css  
Responsible for:

- Layout using Flexbox and Grid  
- Responsive design for different screen sizes  
- Light/Dark theme styling  
- Card and button styling  
- Animation and transition effects  
- Form validation styling (error and success states)  

---

### js/script.js  
Handles all application logic and interactivity:

- Theme toggling and persistence  
- Mobile navigation menu  
- Project filtering and sorting  
- GitHub API data fetching  
- Form validation and feedback  
- State management using localStorage  

---

## 4. Core Functionalities  

### 4.1 Theme Toggle (State Management)
- Allows users to switch between light and dark mode  
- Stores the selected theme using `localStorage`  
- Automatically restores the theme on page reload  

---

### 4.2 Project Filtering  
- Uses `data-category` attributes to classify projects  
- Displays only projects matching the selected category  
- Updates dynamically without reloading the page  

---

### 4.3 Project Sorting  
- Uses `data-title` attributes for sorting  
- Supports:
  - Default order  
  - Alphabetical (A-Z)  
  - Reverse alphabetical (Z-A)  

---

### 4.4 Combined Logic (Filter + Sort)  
The application applies multiple steps:

1. Filter projects based on category  
2. Extract visible projects  
3. Apply sorting to the filtered list  
4. Update the DOM dynamically  

This demonstrates layered and conditional logic.

---

### 4.5 State Management  

The application stores user preferences using `localStorage`, including:

- Selected theme (dark/light)  
- Selected project filter  
- Selected sorting option  

This ensures consistency across page reloads and improves user experience.

---

## 4.6 GitHub API Integration  

The application fetches repositories using:

https://api.github.com/users/Lama-AlThunayyan/repos  

Steps:

- Send request using fetch()  
- Check response status  
- Convert response to JSON  
- Extract required data  
- Dynamically create UI elements  
- Handle errors gracefully  

If the API fails, a user-friendly message is displayed instead of leaving the section empty.

---

## 4.7 Form Validation & User Feedback  

- Validates name, email, and message fields  
- Uses regex to ensure email format is correct  
- Displays inline error messages under each field  
- Prevents form submission if input is invalid  
- Displays a success message when submission is valid  

This ensures data correctness and improves usability.

---

## 5. User Interaction Flow  

The application is designed with a clear interaction flow:

1. The user opens the website and navigates using the navigation bar  
2. The user scrolls to the Projects section  
3. The user filters projects by category  
4. The user applies sorting to reorder projects  
5. The user views GitHub repositories loaded dynamically  
6. The user toggles between light and dark themes  
7. The user fills out the contact form  
8. The system validates input and provides feedback  
9. The user receives success or error messages  

This structured flow ensures clarity and ease of use.

---

## 6. User Experience (UX) Design  

The application focuses on:

- Clear navigation across sections  
- Immediate feedback for user actions  
- Responsive layout across devices  
- Interactive UI elements (hover, transitions)  
- Friendly error and success messages  

These elements improve usability and make the application intuitive for new users.

---

## 7. Performance Optimization  

The application is optimized by:

- Using lazy loading for images (`loading="lazy"`)  
- Minimizing DOM updates  
- Avoiding unnecessary JavaScript operations  
- Using lightweight CSS and no external frameworks  

This ensures fast loading and smooth performance.

---

## 8. Browser Compatibility  

Tested on:

- Google Chrome  
- Microsoft Edge  

The application is compatible with modern web browsers.

---

## 9. Summary  

This project demonstrates:

- API integration  
- Advanced JavaScript logic  
- State management  
- Responsive and interactive UI  
- Clean and structured code  

It reflects the progression from a basic static website to a dynamic, interactive, and feature-rich web application.