Food Pick Up Ordering App
=========

## Description

A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

You can use a modern telecomm API service such as Twilio to implement SMS communication from the website to the client and restaurant.

For inspiration check out how Ritual works, but keep in mind that's implemented as a native app and serves more than one restaurant.

## Team

- [Tank-Sun](https://github.com/Tank-Sun)
- [MichaelDHuy](https://github.com/MichaelDHuy)
- [lining04111223](https://github.com/lining04111223)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username:  
  - password:  
  - database: 
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
6. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:8080/login/1` to login as the user with user.id=1

## ERD

!["ERD"](https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering/blob/restaurant/docs/ERD.drawio.png?raw=true)

## Screenshots
Screenshot of menu
!["Cart_Screenshot"](https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering/blob/master/docs/Menu%20Screen%20Shot.png?raw=true)

Screenshot of Cart
!["Ownerpage_Screenshot"](https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering/blob/master/docs/Cart%20Screen%20Shot.png?raw=true)

Screenshot of Ownerpage
!["Ownerpage_Screenshot"](https://github.com/Tank-Sun/midterm-1-Food-Pick-up-Ordering/blob/restaurant/docs/Restaurant%20Screen%20Shot.png?raw=true)

## Dependencies

- node 10.x or above
- NPM 5.x or above
- PG 6.x
- cookie-session
- dotenv
- express
- jquery
- morgan
- sass
- twilio
