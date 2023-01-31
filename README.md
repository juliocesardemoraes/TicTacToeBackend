# TicTacToeBackend

This is the backend of the tictactoe multiplayer. Made with socket.io and nodejs

To run it you should probably change the cors method to the frontend vite is running into, in my case is http://127.0.0.1:5173

How to run it is explained on the <a href="https://github.com/juliocesardemoraes/TicTacToeReact" target="_blank">frontend repo</a>

```
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
```
