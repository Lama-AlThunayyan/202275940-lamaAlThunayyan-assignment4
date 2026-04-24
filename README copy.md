# 202275940-lamaAlThunayyan-assignment3  
# Assignment 3 – Advanced Portfolio Web Application  

**Student Name:** Lama Al Thunayyan  
**Student ID:** 202275940  
**Course:** SWE 363 (Web Engineering & Development) 

---

## Project Overview  

This project is an advanced version of a personal portfolio web application developed across Assignments 1 and 2.  

The goal is to build a **feature-rich, interactive web application** that demonstrates API integration, advanced logic, and improved user experience.

---

## Project Description  

This project is an advanced version of the personal portfolio website developed in Assignments 1 and 2.  

It focuses on extending the application by adding **API integration, more complex logic, state management, and enhanced user interaction** using JavaScript and modern front-end techniques.

The website includes:

- About Me section  
- Projects section with filtering and sorting functionality  
- GitHub repositories section (fetched dynamically using an external API)  
- Contact form with validation and user feedback  
- Dark/Light theme toggle (using localStorage)  
- Responsive design for multiple devices  
- Interactive UI elements and smooth animations  

This assignment builds on the previous foundation by transforming the website from a simple interactive portfolio into a **more dynamic and feature-rich web application**, demonstrating the ability to handle real-world functionality such as external data integration and multi-step application logic.

---

## Key New Features  

### 🔹 API Integration
- Fetches GitHub repositories dynamically  
- Displays repository details  
- Handles loading and error states  

### 🔹 Advanced Logic
- Project filtering (All / App / Web)  
- Project sorting (A-Z / Z-A)  
- Combined filtering and sorting logic  

### 🔹 State Management
- Saves theme, filter, and sort using localStorage  
- Restores preferences on reload  

### 🔹 User Feedback
- Form validation messages  
- Success/error feedback  
- Empty state messages  

### 🔹 Performance Optimization
- Lazy loading images  
- Efficient JavaScript  

---

## How to Run Locally
1. Clone or download the repository
2. Open index.html in your browser
3. Ensure internet connection for GitHub API

---

## How to Use the Website

This website is designed to be simple, interactive, and easy to use for first-time visitors.  
Follow these steps to explore the main sections and features:

### Step 1: Open the Website
When the website loads, you will first see the homepage with the main navigation bar at the top.

From here, you can quickly move to different sections of the website:
- About
- Projects
- GitHub
- Contact

If you are using a mobile device or a smaller screen, click the **menu button** to open the navigation links.

---

### Step 2: Read the About Section
Scroll down to the **About Me** section to learn basic information about the portfolio owner.

In this section, you can:
- Read a short personal introduction
- View interests and learning goals
- See listed skills such as HTML, CSS, JavaScript, and GitHub

This section gives users a quick overview of the person behind the portfolio.

---

### Step 3: Explore the Projects Section
Next, scroll to the **Projects** section.

This section displays project cards with:
- Project title
- Short description
- Image preview
- Link button

Each card presents one project in a simple and readable format.

---

### Step 4: Filter Projects by Category
At the top of the Projects section, you will find **filter buttons**.

These buttons allow you to display only the projects you want to see.

For example:
- Click **All** to show all available projects
- Click **App** to display only application-related projects
- Click **Web** to display only web-related projects

This helps users focus on the type of project they are interested in.

If no project matches the selected category, the website will display a message such as:

`No projects found.`

This makes it clear to the user that the filter is working correctly.

---

### Step 5: Sort the Projects
Next to the filter buttons, there is a **sorting option**.

Users can sort the visible projects in different ways:
- **Default** → shows projects in their original order
- **A-Z** → sorts projects alphabetically from A to Z
- **Z-A** → sorts projects alphabetically from Z to A

This means users can first filter projects and then sort the filtered results.

Example:
1. Click **Web**
2. Then choose **A-Z**

The website will first show only web projects, then sort them alphabetically.

This demonstrates multi-step interaction and makes project browsing easier.

---

### Step 6: View GitHub Repositories
Scroll to the **GitHub Repositories** section.

This section loads repository data dynamically from the GitHub API.

Users can view:
- Repository name
- Repository description
- Repository stars or additional details
- Direct link to open the repository on GitHub

This makes the portfolio feel more dynamic and up to date.

#### What happens while loading?
When the data is being fetched, the website may display a loading message such as:

`Loading repositories...`

#### What happens if something goes wrong?
If the API request fails, the user will see a friendly message instead of a broken section.

For example:
- Unable to load GitHub repositories right now
- Please try again later

This helps users understand what happened and prevents confusion.

---

### Step 7: Use the Contact Form
Scroll to the **Contact** section to interact with the form.

The form includes three fields:
- Name
- Email
- Message

To use the form:
1. Enter your name
2. Enter a valid email address
3. Write your message
4. Click **Send**

---

### Step 8: Understand Form Validation
The contact form uses validation to help the user enter correct information.

If a field is missing or invalid:
- An error message will appear under the field
- The user will know exactly what needs to be fixed

Examples:
- If the name is empty → the form asks the user to enter a name
- If the email format is invalid → the form asks for a valid email
- If the message is too short or missing → the form asks for a proper message

This prevents incorrect submission and improves usability.

---

### Step 9: Submit the Form Successfully
If all fields are filled correctly:
- The form displays a success message
- The user receives immediate confirmation
- The input is processed as expected

This gives the user clear feedback that the interaction was successful.

---

### Step 10: Change the Theme
At the top of the page, users can click the **theme toggle button** to switch between:
- Light mode
- Dark mode

This allows users to choose the appearance they prefer.

The selected theme is saved using `localStorage`, which means:
- If the user refreshes the page
- Or visits again later

the website remembers the last selected theme automatically.

---

### Step 11: Refresh the Page and Keep Preferences
The website remembers some user choices to improve consistency.

For example, after refreshing the page:
- The selected theme remains saved
- The selected project filter can remain saved
- The selected sorting option can remain saved

This makes the application feel smarter and more reliable.

---

### Step 12: Use the Website on Different Devices
The website is responsive and works on:
- Desktop
- Tablet
- Mobile

On smaller screens:
- The layout adjusts automatically
- The navigation changes into a mobile-friendly menu
- The same features remain available

This ensures users can navigate and interact with the website comfortably on different devices.

---

## Example User Journey

A new visitor can use the website like this:

1. Open the website
2. Read the About section
3. Go to Projects
4. Filter projects by category
5. Sort them alphabetically
6. Open the GitHub section and view repositories
7. Switch to dark mode
8. Scroll to Contact
9. Fill in the form
10. Receive success or error feedback

This step-by-step flow helps new users understand how to interact with the site without confusion.

---

## AI Usage Summary
AI tools were used as a supporting assistant to:

- Plan advanced features
- Implement API integration
- Improve JavaScript logic (filtering & sorting)
- Enhance UI/UX and animations
- Assist in writing documentation

All AI-generated code was reviewed, modified, and fully understood before being used.

More details are available in docs/ai-usage-report.md.

---

## Folder Structure

```bash
assignment-3/
├── assets/
│   └── images/
│       ├── profile-icon-design-free-vector.jpg 
│       ├── project1.jpg
│       └── project2.jpg
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore 
├── index.html
└── README.md