# Answers

- [ ] Why are forms used so often in web applications and software?

Simply put, forms are the simplest way to get user input into your app.

- [ ] What advantages are there by using a forms library like Formik?

Formik strips away much of the 'overhead' necessary in writing forms from scratch, which both saves us time and from making errors.

- [ ] What is stateful logic?

Stateful logic is the logic of state within a component. There's a value the component holds (the state) and a function specially made to modify that state variable.

- [ ] What is a custom hook, and what does it mean to compose hooks together?

A custom hook is a variable/function pairing that act similar in the way regular React hooks do, allowing us to use stateful logic in unique ways. An example could be a wrapper around useState that stores the variable in localStorage, for example.

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.

When logging in/registering, the server responds with a token string. Every subsequent request we make to the server should be made with that string in our request headers to be properly authenticated.
