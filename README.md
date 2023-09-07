# Let's Connect
![Platform - Android, IOS and Web](https://img.shields.io/badge/platform-Android%20%7C%20IOS%20%7C%20Web-green.svg) 
  MERN based Social Media Application

<!-- ABOUT THE PROJECT -->
## About The Project

Let's Connect, a social media application based on MERN Stack. The key featues of this application are:
Register,Login,Home Page with all the Posts,Navigation Bar with Icons, User's Page, Upload a Post, Like and Comments, FriendList, Advertisement Component, Search Bar enhanced with Caching, Light and Dark mode feature and a lot more...


The application consists of Resuable Registration and Login components which validates the user based on JSON WebToken generated and allows user to register and Login.


After Successful Login the User can able to see all the post and various components like User's Info and Social Media Info, Advertisement Component,FriendList and existing posts.

User can upload a Post with description and all the user's post are rendered can available to user on User's Profile Page. The uploaded post is now visible along with all the posts present.

Thhe user can like any post and can read all the comments related to the post.

The Search Bar allows an easy search for searching any existing user which is possible due to Redis cachinhg.

Based on User's mode the modes can be swithed to either Dark or Light.

The application is fully responsive and adaptaptable according to screens.


<img width="934" alt="1" src="https://github.com/shivam12prakash/lets-connect/assets/65006707/c04c07eb-b65c-4eb9-b440-b84c464f861e">
<img width="934" alt="5" src="https://github.com/shivam12prakash/lets-connect/assets/65006707/312a0965-295b-4dd3-aa72-5c674bce2326">
<img width="939" alt="2" src="https://github.com/shivam12prakash/lets-connect/assets/65006707/4794b1d5-6ff0-425c-ae64-5ac15bd9dc00">
<img width="929" alt="3" src="https://github.com/shivam12prakash/lets-connect/assets/65006707/4be41ba7-a7d4-48ae-b39e-f5fbf0115aca">
<img width="941" alt="4" src="https://github.com/shivam12prakash/lets-connect/assets/65006707/99efd62f-4f99-44fe-b357-674947200ba7">



### Built With

* ![MongoDB]
* ![Express.js]
* ![React.js]
* ![Node.js]
* Redux Toolkit
* Redis
* Redux Persist
* Formik
* Yup
* Dropzone
* Multer
* JsonWebToken

<!-- GETTING STARTED -->
## Getting Started With the Project

## Installation and usage
1) Clone this repository  
```
git clone https://github.com/shivam12prakash/lets-connect
```
2) Install dependencies  
```
cd lets-connect
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your JsonWebToken Secret
```
MONGO_URI=<YOUR_MONGO_URI> 
SECRET_KEY=<YOUR_TOKEN_KEY>
PORT=3001
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd lets-connect
cd client
npm start
```
### Todo

- Introduce Real Time Notification feature using WebSockets
- Upgrade to Typescript
- Write Test using Jest 


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [MongoDB-docs](https://www.mongodb.com/docs/)
* [ReduxToolkit-docs](https://redux-toolkit.js.org/tutorials/overview)

## Author

### *Shivam Prakash*
*I am a passionate Full Stack Developer exploring various technologies and domains*  

For more exciting updates follow me,

<a href="https://www.linkedin.com/in/shivam-prakash-2b3614193/" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/linkedin.png" width="40" height="40"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/shivam12prakash" target="_blank"><img src="https://github.com/yuvraj24/LiveSmashBar/blob/master/images/github.png" height="40"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: 	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://reactjs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongo-url]: https://reactjs.org/
