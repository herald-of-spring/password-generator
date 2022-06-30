# Password Generator
A generator that runs in the browser with logic and randomness based in Javascript.

### This includes:
- Prompting the user for any features they look for in a password
- Prompting the user for desired password min and max lengths
- Sanitizing user input

### Internals:
- Randomly chooses a password length between min and max
- Randomly chooses how many of each feature will be used, assigned in the order of lowercase > uppercase > number > special char
- Randomly chooses which feature to use and which character to append to the password, one at a time

### Preview of the finished product
![Password Generator](./images/Password-result.jpeg?raw=true "Password Generator in Browser")

The webpage can be accessed [here](https://herald-of-spring.github.io/password-generator/)

Or by using the raw link: https://herald-of-spring.github.io/password-generator/

Or installed through cloning the repository and opening `index.html`