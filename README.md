
# Cyethack_Solutions_Task Documentaion
<p>Cyethack is a web application designed for vulnerability management and security scanning.</p>



![Screenshot (1053)](https://github.com/user-attachments/assets/96635fcf-67c0-4a7b-8e6a-9c4fe9d0a957)
## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Folder Structure](#folder-structure)
3. [Setup Instructions](#setup-instructions)
4. [Default Credentials](#default-credentials)
5. [Usage](#usage)
7. [License](#license)

 ## Technologies Used
 The following technologies and libraries are used in the development of Cyethack:
- **React.js**: Frontend library for building user interfaces. <br/>
- **Redux Toolkit**: State management library for managing application state. <br/>
- **React Router DOM**: Routing library for navigating between pages in a React application. <br/>
- **Material UI**: UI library with a set of high-quality React components. <br/>
- **Chart.js**: Simple yet flexible JavaScript charting library. <br/>
- **React D3 Speedometer**: React component for creating speedometer-style charts. <br/>


## Folder Structure
   The project follows a structured organization to maintain scalability and clarity:
    ```sh
    
          src
           ├── components # Reusable UI components
           │ ├── Boxs.jsx # Component for displaying box elements
           │ ├── Dashboard.jsx # Main dashboard component
           │ ├── Header.jsx # Header component with navigation and user actions
           │ ├── ListDetail.jsx # Detailed view component for list items
           │ ├── Lists.jsx # Component for displaying a list of items
           │ ├── NavBar.jsx # Navigation bar component
           │ ├── SearchBar.jsx # Search bar component
           │ ├── TableComponent.jsx # Component for displaying data in a table format
           │ ├── UserData.jsx # Component for displaying user data and charts
           │ └── withHeader.jsx # HOC for adding a header to components
           ├── constants # Constants used across the application
           │ └── Vulnerabilities.js # List of vulnerabilities and their details
           ├── pages # Page components used by React Router
           │ ├── HomePage
           │ │ └── Home.jsx # Home page component
           │ ├── ListPage
           │ │ └── List.jsx # Page component displaying a list of items
           │ └── ListDetailsPage
           │ └── ListDetails.jsx # Page component displaying detailed information about an item
           ├── store # Redux store setup and slices
           │ ├── slices
           │ ├── authSlice.js # Redux slice for authentication state management
           │ │ └── studentSlice.js # Redux slice for student-related state management      
           ├── styles # Global styles or CSS files
           │ └── index.css
           ├── App.js # Root component defining application routes
           ├── index.js # Entry point of the application
           └── reportWebVitals.js # Utility for measuring web vitals


3. ## Setup Instructions
   To set up and run the Cyethack application locally, follow these steps:
    Clone the repository:
   1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/cyethack.git

  2. **Install dependencies:**
      ```sh
       npm install
       Run the application:
   
  3. **Run the development server**
     ```sh
     npm start

   The application will run in development mode at http://localhost:5173.

  4. **Build for production:**
     ```sh
       npm run build
       
4. ## Default Credentials
   For testing purposes, the default username and password to access the application are both set to "admin".

5. ## Usage
    When logging in during development or testing:
     ```sh
       Username: admin
       Password: admin


 6. ## License
     Specify the license under which your project is distributed.


