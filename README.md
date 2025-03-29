#backend
1️⃣ Go to the backend folder 

2️⃣ npm init ----------- This command is to initialize the express application (package.json file)
   npm init -y ---------This command to give default ans automatically .

3️⃣ npm i -D nodemon ---------- (-D means Dev dependency) This command to add nodemon on your json 
   file.
   for this first write "start":"nodemon index.js" in script.
   Nodemon is a package(or dependency which is continuosly running the server) that automatically 
   restarts the node application when file changes in the directory are detected.

4️⃣ npm i express body-parser cors dotenv mongoose passport passport-local  passport-local-mongoose
   
1. Core Express & Middleware:
express → A web framework for Node.js, used to build web applications and APIs.

body-parser → Middleware for parsing incoming request bodies (JSON, URL-encoded).

cors → Middleware for handling Cross-Origin Resource Sharing (CORS) to allow requests from different origins.

2. Environment Configuration:
dotenv → Loads environment variables from a .env file, keeping sensitive data secure.

3. Database (MongoDB & Mongoose):
mongoose → ODM (Object Data Modeling) library for MongoDB, used to structure and interact with databases in an object-oriented way.

4. Authentication (Passport.js & Strategies):
passport → Authentication middleware for Node.js, used for handling login systems.

passport-local → A Passport.js strategy for local username/password authentication.

passport-local-mongoose → Mongoose plugin that simplifies user authentication and session management with Passport.js.
