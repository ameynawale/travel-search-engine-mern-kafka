# Travel Search Engine MERN + Kafka

A full-stack travel search engine application built with the MERN stack (MongoDB, Express, React, Node.js) and Kafka for asynchronous messaging.

## Project Structure

```
.gitattributes
.project
README.md
.idea/
.settings/
back-end/
    app.js
    package.json
    bin/
    public/
    routes/
    views/
front-end/
    package.json
    public/
    src/
kafka-back-end/
    package.json
    server.js
    kafka/
    public/
    services/
```

### Main Directories

- **back-end/**: Node.js/Express server, REST API, and MongoDB integration.
- **front-end/**: React application for user/admin interfaces.
- **kafka-back-end/**: Kafka microservices for asynchronous processing.

## Getting Started

### Prerequisites

- Node.js (v12+)
- MongoDB
- Kafka (locally or via Docker)

### Installation

1. **Clone the repository:**
    ```sh
    git clone <repo-url>
    cd travel-search-engine-mern-kafka
    ```

2. **Install dependencies:**

    - Back-end:
      ```sh
      cd back-end
      npm install
      ```
    - Front-end:
      ```sh
      cd ../front-end
      npm install
      ```
    - Kafka Back-end:
      ```sh
      cd ../kafka-back-end
      npm install
      ```

3. **Start MongoDB and Kafka services.**

### Running the Application

- **Back-end:**
  ```sh
  cd back-end
  npm start
  ```
- **Kafka Back-end:**
  ```sh
  cd kafka-back-end
  npm start
  ```
- **Front-end:**
  ```sh
  cd front-end
  npm start
  ```
  The React app will be available at [http://localhost:3000](http://localhost:3000).

## Features

- User authentication and registration
- Search and booking for flights, hotels, and cars
- Admin dashboard for managing listings and reports
- Kafka-based asynchronous processing for bookings and reports

## Folder Details

- **back-end/routes/**: Express route handlers (e.g., `mongo.js`, `passport.js`)
- **front-end/src/**: React components for user and admin interfaces
- **kafka-back-end/kafka/**: Kafka producers/consumers and related logic

## License

This project is for educational purposes.

---

For more details, see the [front-end/README.md](front-end/README.md).
