
## 

![App Screenshot](https://i.ibb.co/z4DXqpt/coinswipe.png)


# CoinSwipe

CoinSwipe is a fast and simple React TypeScript project that converts exchange rates using a third-party API.


## Deployed version
I have uploaded it online for your convenience, so  you can access it more easily :

[https://www.shorturl.at/bkQT5](https://www.shorturl.at/bkQT5)



## Installation

Install my-project with npm
(the .env file already include just for checking convinence. )

```bash
  npm i
```
## Run it
After Installation you can run it via :
```bash
  npm start
```
## Test it
After Installation you can test it via :
```bash
  npm test 
```
## Build it
After Installation you can test it via :
```bash
  npm run build 
```




## Design
CoinSwipe's design is inspired by modern finance websites like Xe.com and Oanda, with a focus on simplicity and ease-of-use. My goal was to make unqiue design (compare to the common ones in the field).In the website you can find patterns and background image which are svg to make them look good in every resolution .The color palette features  red  as the primary color, paired with white and light orange for the background. The design is responsive to both desktop and mobile devices using tailwind CSS library and media queries.
## Api
CoinSwipe uses the Currency Converter API by API Ninjas to convert exchange rates. This API provides up-to-date exchange rates for 170+ currencies, and is powered by Open Exchange Rates.

To use the API, I signed up for a RapidAPI account and subscribed to the API Ninjas plan. I then integrated the API into the React app using the axios library to make HTTP requests.
## Build tool
CoinSwipe uses Vite as its build tool. While there are many build tools available for modern web development, we chose Vite because of its speed and ease-of-use.

Vite provides instant server startup and lightning-fast rebuilds, allowing us to develop and test our code quickly and efficiently. It also includes features like hot module replacement and automatic TypeScript configuration, which have been invaluable for streamlining our development workflow.

While I could have used a more established build tool like Webpack, I found that Vite provided the same features with a simpler and more intuitive configuration.(fitting better for the project requirement )
## Testing
To ensure that CoinSwipe handles incorrect input properly, I used three different approaches. First, I set a default input value that would fit the expected next action. Second, I wrote the entire form under a Form tag with the required attribute and a pattern attribute that would prevent the next function from occurring unless the right input was entered. Third, I added another validation check to prevent any JavaScript manipulation using a custom-made hook.

In addition to these measures, I extensively tested the application to cover all possible scenarios. I used end-to-end and unit testing using the Cypress testing tool. My tests cover a wide range of scenarios to ensure that CoinSwipe functions correctly under different conditions and handles incorrect input gracefully.

If you have any questions or would like further explanation, please don't hesitate to reach out to me.
## Animation
For the animation i used GSAP (GreenSock Animation Platform) which is a high-performance, feature-rich JavaScript animation library used by web developers to create stunning and engaging animations for their websites and applications.
