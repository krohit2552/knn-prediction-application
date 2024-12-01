# K-Nearest Neighbors (KNN) Prediction Application

This is a web application that demonstrates the K-Nearest Neighbors (KNN) algorithm for classification. The app allows you to:

- Generate a random dataset for two classes.
- Visualize the generated dataset in a table format.
- Input a new data point and make a prediction on its class based on the KNN algorithm.

## Features

- **Random Dataset Generator:** Users can specify the range of data and the number of points per class. The application will generate a random dataset with two classes and display it in a table.
- **K-Nearest Neighbors (KNN) Prediction:** Users can input a new data point, specify the number of neighbors (k), and the app will predict which class the point belongs to based on the KNN algorithm.
- **Frontend and Backend:** The frontend is built with React, and the backend is built with Node.js and Express.

## Technologies Used

- **Frontend:** React, HTML, CSS,javascript
- **Backend:** Node.js, Express.js
- **Database:** No database is used; data is stored in-memory for simplicity.
- **Other Tools:** Axios for API calls, CORS for handling cross-origin requests.

## Running the Application Locally

### Prerequisites
- Node.js installed on your machine.
- npm or yarn for package management.

### Steps to Run Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   cd <repository-name>

2.Set up the backend:
	cd backend
	npm install
	npm start

3.Set up the frontend:
	cd frontend
	npm install
	npm start

