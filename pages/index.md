# **MDML** v1.0.0
A **beautiful**, **fast** & **simple** Markdown to Website Express app for making simple webpages **that don't suck**.

## How it works
MDML checks the `pages` folder and converts each file to a webpage using Marked & turns it into a fully working website. Go to the pages folder & in the index.md file to change this page's content ;)

## Why this?
MDML has a simple yet beautiful design. Also, using markdown makes it easier to make your webpage because you don't have to take care of making the site look good, and you just have to focus on your content. Anyone can learn Markdown syntax. Custom CSS can be completely customized.

## Setup
- [Fork this](https://replit.com/@lostintheabyss/mdml) repl
- Edit index.md to say whatever you want on the main page (the / route will be fetching from index.md)
- Run the project using the run button (node .)

## Full markdown support
Markdown is fully supported on MDML, everything works like [links](/#), `code`, and even code blocks:
```js 
console.log('hey')
```

## Low dependency count
We only use 3 third party NPM packages:
- EJS (for rendering page templates)
- Marked (for converting Markdown to HTML)
- ExpressJS (for setting up the webserver)

## Reponsive
MDML will look as beautiful on all types of devices as it is responsive. Test it yourself by decreasing the size of your browser window, the website will adapt to the changes.

## Easy to use
MDML is super easy to use, to create a page, all you have to do is to go to your `pages` folder and create a new file named `mynewpage.md` and you can go to https://yourwebsite.yourusername.repl.co/mynewpage to access the newly created page. To use your main route (https://yourwebsite.yourusername.repl.co/), you just need to name the file `index.md`. You can see the source of this exact Markdown page [here](https://replit.com/@lostintheabyss/mdml#pages/index.md)

## How to run MDML and/or make your changes go live
To run MDML, press the Run button on your repl, and to make your changes go live, press the Stop button, then press the Run button.

## A Blobby project
Made by [@lostintheabyss](https://replit.com/@lostintheabyss)