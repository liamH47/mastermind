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