# Envelope
An envelope method budgeting app. This project is a work in progress.

## Description
This is a basic envelope method budgeting web application. The envelope method is a budgeting technique that is meant to heighten one's awareness of their spending habits. The method itself is very simple. First, you label an envelope with it's purpose (i.e. Rent, Utilities, Eating Out, etc.), and then you add money to the envelope. When you want to use the money, you have to actually remove the money from the envelope. To learn more about this budgeting method, click [here](https://en.wikipedia.org/wiki/Envelope_system). 

This web application was made with HTML, CSS and JavaScript. It employs JS to make forms and envelopes appear dynamically. Users can create new envelopes with unique names, and then click on the envelope to add or subtract funds. Envelopes are made using an Envelope class in JS, and they are tracked with a dictionary of envelopes with the envelope name as the key and an Envelope object as the value.

## Future Work
I started working on this project to teach myself JavaScript and get a better understanding of basic front end development. As such, I tried to do everything with vanilla JS. In the future, I would like to improve the look of the app by using Angular or React to make proper pop-up forms instead of dynamically showing and hiding HTML forms. I would also like to use this project to learn Node.js in the future so I can keep track of a user's envelopes. That way, I could automatically refresh envelopes periodically (i.e. monthly, weekly).
