# Thank you LinkedIn REACH

First and foremost, I would like to thank the team at LinkedIn REACH for giving me the opportunity to work on this project. This was my first time building a game, and while it was definitely challenging, I found it immensely rewarding and truly enjoyed putting my own spin on it. I hope that the REACH team enjoys playing this as much as I enjoyed working on it. I am honored to be considered for the REACH program, and proud of all the hard work I did not just on this project, but to learn the skills that led LinkedIn to move forward with my application.

# How to run this version of Mastermind on your local machine

## Initial Setup

1. Fork/Clone this repository and cd into it. 

2. Open two terminals in either your command line or your code editor of choice. One will be to run the server, and the other will be to run the client.

3. In one of your terminals, cd into the server directory. Once there, run: 

```bash
npm install
```

to install all of the necessary dependencies.

4. This application requires an API key for the ‘https://www.random.org/’ API. If you do not have an account, you can make one for free. The free tier will allow you to make 1,000 free requests per day, with a maximum of 10 per second. If you would like to make more requests, you can find their pricing tiers at https://api.random.org/pricing. 

5. Once you have an account, head over to the API dashboard at ‘https://api.random.org/dashboard’. From there, you can generate a new API key.

6. Once you have your API key, create a file called .env in the server directory. In this file, write the following: 

```bash
apiKey = <your-api-key>
``` 

On the right side of the equals sign, paste your apiKey, and make sure to save the file.

7. Once you are done installing the dependencies and setting up your API key in the .env file, run:

```bash
npm start
``` 
 
in your server-side terminal. You should see a message in the terminal confirming that the server is running on ‘http://localhost:3001’. To be sure that there were no issues with your API key, I would recommend going to ‘http://localhost:3001/rng/7’ in your browser. If everything is set up correctly, you should see an array of four numbers ranging from 0-7.

8. Next, switch over to the other terminal you opened. Make sure that this is in the main directory for the project, ‘/mastermind’. 

9. Install all of the necessary dependencies for the client by running:

```bash
npm install
```

10. Once all of the dependencies are done installing, run: 

```bash
npm start
```

11. Now, the client should be running on ‘http://localhost:3000’, where you can start playing! 

## Playing the Game

1. Once you have completed all of the installation steps above and are on ‘http://localhost:3000’, you should see a page that explains the rules of the game as well as what the various settings do. One you have chosen the settings you would like, press "Start Game." Note that if you do not fill out any specific settings, the game will default to "classic" Mastermind setttings. This means that you will not have a time limit, and there will be 8 different characters that could be in the code.

2. After pressing start game, you will see a game board and a green container on the right with buttons corresponding to the different characters. Click on the characters to form your guess, and once you have selected 4 of them(repeats allowed), you can press the button that says "check" to see the results of your guess.

3. After each guess, the board will be updated to show your guess, as well as the program's feedback for you. You will receive a star for every character that you guessed completely correctly, meaning that character is both in the secret code and in the correct spot in your guess. For each character in your guess that is in the secret code but not in the exact right spot, you will receive a coin. Finally, you will receive a banana for each character in your guess that is not included in the code at all. Please note that feedback is ordered stars first, then coins, then bananas. The order of the feedback has nothing to do with which characters in your guess are correct, just the total quantity of correct, sort of correct, and wrong answers.

4. The game ends when you either run out of your 10 guesses or guess the correct code. Either way, the code will be revealed to you. If you win, your score will increase by 1 plus the number of guesses you had left.

5. If you would like to play again, a button will appear above the revealed secret code that will allow you to play again with the same settings.

## Non-default settings

1. Timer. Whenever the timer runs out, Bowser will guess for you, meaning that you lose 1 guess. Bowser's guess will always be completely wrong, and will not provide any meaningful information in the feedback. If you choose to do a timed game, please note that the timer does NOT reset after you submit a guess. For example, if you have a 30 second timer set, and there are 10 seconds left on the clock, submitting a guess will NOT bring the timer back to 30 seconds. The timer will only reset after it has gone down to 0, or the game has ended.

2. Number of options. This setting will adjust the amount of different characters you have to choose from. Mastermind is traditionally played with 8 choices. You can think of 6 options being an 'easy' mode, 8 options being 'normal', and 10 being 'hard'. Adjusting the number of options does NOT change the length of the secret code.

# How I built this game

## Early Stage/MVP

I decided to build this project with React.js because it is the JavaScript framework that I know best and enjoy working with the most. In the earliest stages of the project, I had a very bare bones application with no CSS whatsoever. My main goal at this point was just to be able to input a combination of 4 numbers, and compare it to the secret code, which I had set as "1, 2, 3, 4" for the first couple of days. Once I was able to submit a code and receive feedback on it, I shifted my focus to using the random.org API to generate a random code for me instead of using my test code.

Initially, I tried to call the API directly from my client, but was faced with a dreaded CORS error. Knowing that I would likely have to set up a server to interact with this API for me, I decided to use express.js to get around this CORS error. I am somewhat familiar with express, and chose it for it's ease of use and quick setup. After figuring out my request parameters, I was successfully sending a random secret code to my '/rng' endpoint, which I could then access from my client. At this point, I decided to start customizing the project and making it my own.

## Upgrading the UI

After successfully reaching MVP, I knew I wanted to make a game board that looked like a traditional Mastermind board. I decided that I would create a component to hold all of the pieces of state and game logic, and named it "GameContainer." If a game had started, it would render the game board, and if a game was not in progress, it would render the start menu. The component responsible for rendering the board is called "GameBoard."

In order to create the board, I knew that I needed an area to contain all of the user's past guesses, and another area to contain all of the feedback on those guesses. Since there are a maximum of 10 guesses per game, each consisting of 4 characters, I decided to run a for loop that would create 40 guess squares, and another that would create 40 feedback squares. After some thought, I chose to have each array of four guesses pushed into an array in the GameBoard's state, and did the same for feedback. This way, the GameBoard knew exactly which order both the guesses and feedback should be rendered in. For each guess and each piece of feedback, the GameBoard renders a "Guess" and "Feedback" component. Since I used .map() to render these components, I was able to pass each component an index, as well as the corresponding guess or feedback array. From here, all those components had to do was access that array at the index passed to them, and render that element.

At this point, the board was working more or less as I intended. My next major overhaul was to give this project a theme. I decided to go with a Super Mario theme since I am a lifelong Nintendo fan. If Mario can play Golf, Tennis, Soccer and more in addition to his plumbing job, why not Mastermind?

Rather than have the guess components render the numbers in the guess, I took images of Mario characters and named the files numbers from 0-7. This made it simple to interpolate the number into the src tag of an image and render the correct character, or a mystery box if the space did not yet have a corresponding guess. I used a similar process for feedback, instead rendering items from the Mario games that I felt were analogous to traditional Mastermind feedback. 

I also decided to create a separate area next to the game board for users to create their guesses with buttons corresponding to each character. I added a button to clear the current guess in case the user pressed the wrong character by accident, and a button to submit the guess. It was necessary to ensure that a guess could not be submitted unless it included exactly four characters, otherwise it would mess up the entire order of the board. I did this and made sure that a player can't keep guessing after running out of attempts by setting 'disabled' properties on the various buttons.

## Adding Game Settings

I decided to add an option to set a timer for the game. Specifically, the options are no timer, 30 seconds, or 15 seconds. If a player chooses a timed round, when the timer runs out, a guess will be made for the player of all Bowsers. Bowser is never a correct answer in the secret code, so this answer will not only be wrong, but not provide any valuable feedback for the player as another wrong guess would. Once the timer runs out and the Bowser guess has been made, the timer will reset. I did this by creating a timer component with a setInterval function that will submit the all Bowser guess when the time runs out. If the player wins or has no more attempts left, the component will unmount. The specific behavior of the timer is inspired by the older entries in the "Mario Party" series, where Bowser will occasionally interfere with the game in some way to make life more difficult for the players.

The other setting I added was for a player to adjust the difficulty by changing the number of possible characters in the secret code. I achieved this by setting adding a query parameter to the request made to the random API. The default setting is 8 different characters, so the endpoint for that would be '/rng/7'. It is 7 and not 8 because 0 is one of the options, and a range of 0-7 is 8 different choices. 
