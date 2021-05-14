# How to run this version of Mastermind on your local machine

## Initial Setup

1. Fork/Clone this repository 

2. Open two terminals in either your command line or your code editor of choice. One will be to run the server, and the other will be to run the client.

3. In one of your terminals, cd into the server directory. Once there, run: 

### 'npm install'

to install all of the necessary dependencies.

4. This application requires an API key for the ‘https://www.random.org/’ API. If you do not have an account, you can make one for free. The free tier will allow you to make 1,000 free requests per day, with a maximum of 10 per second. If you would like to make more requests, you can find their pricing tiers at https://api.random.org/pricing. 

5. Once you have an account, head over to the API dashboard at ‘https://api.random.org/dashboard’. From there, you can generate a new API key.

6. Once you have your API key, create a file called .env in the server directory. In this file, write the following: 

### ‘apiKey = <your-api-key>’ 

On the right side of the equals sign, paste your apiKey, and make sure to save the file.

7. Once you are done installing the dependencies and setting up your API key in the .env file, run:

### ‘npm start’ 
 
in your server-side terminal. You should see a message in the terminal confirming that the server is running on ‘http://localhost:3001’. To be sure that there were no issues with your API key, I would recommend going to ‘http://localhost:3001/rng’ in your browser. If everything is set up correctly, you should see an array of four numbers ranging from 0-7.

8. Next, switch over to the other terminal you opened. Make sure that this is in the main directory for the project, ‘/mastermind’. 

9. Install all of the necessary dependencies for the client by running:

### ‘npm install’

10. Once all of the dependencies are done installing, run: 

### ‘npm start’

11. Now, the client should be running on ‘http://localhost:3000’, where you can start playing! 

