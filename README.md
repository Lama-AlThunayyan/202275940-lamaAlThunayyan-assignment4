# 202275940-lamaAlThunayyan-assignment4  
# Assignment 4 – Personal Portfolio Web Application  

**Student Name:** Lama Al Thunayyan  
**Student ID:** 202275940  
**Course:** SWE 363 (Web Engineering & Development)  

---

## Project Overview  

This project represents the final stage of developing a personal portfolio web application across Assignments 1, 2, and 3.

The goal of this assignment is to deliver a **fully polished, professional, and production-ready web application** that demonstrates mastery of front-end development concepts, including interactivity, API integration, user experience design, and state management.

The application is designed to function as a real-world portfolio that can be shared with recruiters, instructors, and collaborators.

---

## Project Description  

This is a responsive and interactive single-page portfolio web application that allows users to:

- Learn about the developer through the About section  
- Explore projects with advanced filtering and sorting  
- View detailed project information through interactive modals  
- Access live GitHub repositories using API integration  
- Submit a contact form with validation and feedback  
- Switch between light and dark themes  

The project builds on previous assignments by integrating **advanced logic, external data sources, and enhanced user experience features**, transforming it into a dynamic and feature-rich application.

---

## Key Features  

### 🔹 Project Interaction
- Filter projects by category (All / App / Web)  
- Sort projects alphabetically (A-Z / Z-A)  
- Open detailed project modal with:
  - Problem  
  - Solution  
  - Features  
  - Technologies  

---

### 🔹 GitHub API Integration
- Dynamically fetch repositories from GitHub  
- Display repository name, description, and stats  
- Show loading and error messages  

---

### 🔹 User Feedback & Form Validation
- Validate form inputs (name, email, message)  
- Show clear error messages  
- Display success message on valid submission  

---

### 🔹 State Management
- Save user preferences using localStorage:
  - Theme (dark/light mode)
  - Selected project filter
  - Sorting option  

---

### 🔹 UI & UX Enhancements
- Responsive design for all screen sizes  
- Smooth transitions and hover effects  
- Clear navigation and interaction flow  
- Time-based greeting message  

---

### 🔹 Performance Optimization
- Lazy loading images  
- Efficient DOM updates  
- No unnecessary libraries  

---

## How to Use the Website  

### Step 1: Navigate the Website  
Use the navigation bar to move between sections:  
About, Projects, GitHub, and Contact.  

---

### Step 2: Explore Projects  
- View project cards with descriptions  
- Click **View Details** to open the project modal  
- Read deeper information about each project  

---

### Step 3: Filter and Sort Projects  
- Use filter buttons to select project category  
- Use sorting dropdown to reorder projects  
- Combine both for better browsing  

---

### Step 4: View GitHub Repositories  
- Scroll to the GitHub section  
- View repositories fetched dynamically  
- Click links to open them on GitHub  

---

### Step 5: Use the Contact Form  
- Enter your name, email, and message  
- Fix any validation errors if shown  
- Submit successfully to see confirmation  

---

### Step 6: Change Theme  
- Use the theme toggle button  
- Switch between light and dark mode  
- Your preference is saved automatically  

---

### Step 7: Responsive Usage  
- Works on desktop, tablet, and mobile  
- Navigation adapts for smaller screens  

---

## Technologies Used  

- HTML5  
- CSS3 (Flexbox & Grid)  
- JavaScript (ES6)  
- GitHub API  

---

## AI Usage Summary  

AI tools were used as a supporting assistant to:

- Plan advanced features and interactions  
- Implement API integration  
- Improve JavaScript logic (filtering, sorting, modal)  
- Enhance UI/UX design  
- Assist in writing documentation  

All AI-generated code was reviewed, modified, and fully understood before being used.

More details are available in `docs/ai-usage-report.md`.

---

## Live Deployment

The application is deployed using GitHub Pages and can be accessed here:

[View Live Website](https://lama-althunayyan.github.io/202275940-lamaAlThunayyan-assignment4/)

---

## How to Run Locally

If you would like to run the project locally:

1. Clone or download the repository  
2. Open the project folder  
3. Open `index.html` in your browser  
4. Ensure you have an internet connection for GitHub API features  

---

## Notes

- The live version is recommended for full experience  
- Local version works the same but requires internet for API data  

---

## Folder Structure  

```bash
assignment-3/
├── assets/
│   └── images/
│       ├── profile-icon-design-free-vector.jpg 
│       ├── project1.jpg
│       ├── project2.jpg
│       ├── Smart Task Manager.png
│       └── Weather Dashboard.jpg
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── Prsentation/
│   ├── Slides.pdf
│   └── New Text Document.txt
├── .gitignore 
├── index.html
└── README.md

