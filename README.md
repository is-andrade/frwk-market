# frwk-market

### Live demo
https://frwk-market.surge.sh/


Demo:

![](demo.gif)

Responsiveness:
![](demo-responsividade.gif)

## Author notes:
- I've used TailwindCSS because you guys use, at first was a little bit hard to get used, but after 2 hours I was already loving it. At first I didn't planed to make all responsive, but TailwindCSS made it so easy that I've decided to do it.
- Didn't used any UI library, I've made all the components from scratch.
- Didn't have time to implement the all the tests, but I've implemented a lot of them.
- I've used the Context API to manage the state of the application.
- Authentication is mocked, but I've implemented a fake login page. Any email and password will work.
- I've used the localStorage to save the user data as if this was a token.
- I've used the react-router-dom to manage public/protected routes.
- I've used the jspdf to generate the PDF receipt. (Didn't had time to make the pdf layoutglg, but it works)

## Project definition:
Develop an app, like an e-commerce, using React.JS to sell apple, pear, banana, pineapple, and mango.

- The customer should log in (it can be mocked).
- The customer should be able to search for the product and choose what they want to buy.
- There should be a shopping cart that lists the products the customer has selected.
- Unit tests need to be implemented.
- It should have a checkout button (generate a PDF as a receipt).

## How to run the project:
```bash
npm install && npm start
```
