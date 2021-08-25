# Allevi Coding Challenge

## Overview  
- [Brief](#brief)  
- [Setup](#setup) 
- [Pages](#pages)  
- [API Routes](#api-routes)  
- [Test Data](#test-data)  
- [Evaluation Criteria](#evaluation-criteria)  
- [Deliverables](#deliverables)  


## Brief
Your task is to design a simple **React site** that has a /login page and a /home page. The task is designed to take 2 hours at most however we have allocated a 3rd hour to assist with setup or any other issues that may arise. Please keep track of time and ensure that you commit all code at most 3 hours after cloning this repo - the repo will lock after this point and you will not be able to commit anymore changes.

## Setup
We have not provided boilerplate code. It is recommended that you use a boilerplate generator e.g. [create-react-app](https://create-react-app.dev/) however this is completely optional. Your application can run on any port and include any external packages you need. 

## Pages
Your application should have the following two pages:

### /login Page
- This page should prompt the user for two pieces of information, `email` and `password` which should then be used to authenticate the user (see authenticate api route below)
- If the user is successfully authenticated they should be redirected to the `/home` page. 

### /home Page
- This page should make a request to the printers route (see printers api routes below) and obtain the list of printers for the authenticated user. 
- After obtaining the list of printers the following information should be display:
    - User's full name (first and last name)
    - A list with their printers and printer details
- Very basic (and acceptable) example:
    ```
    <div>
        <div>Hello Alice Smith, these are your printers:</div>
        
        <div>
            <p> Allevi 2 Printer </p>
            <p> serial: 381f78571ed7eaabe9157b4658a087f6 </p>
            <p> model: 2 </p>
        </div>

        <div>
            <p> Alice Lab Printer </p>
            <p> serial: f0d1376c44c003163d683546909d18c3 </p>
            <p> model: 3 </p>
        </div>

        <div>    
            <p> Cell Printer </p>
            <p> serial: b47229b6762509ab5fff87fa8e4c2005 </p>
            <p> model: 2 </p>
        </div>
    </div>
    ```

## API Routes

The following two API routes should be used in your implementation:

### Authenticate Route

Sample Request:
```
Method: POST 
Host: https://us-central1-allevi-cloud-dev.cloudfunctions.net/authenticate 
Content-Type: application/json
{
    "email": "alice@gmail.com",
    "password": "secure_password"
}
```

Sample Response:
```
{
    "email": "alice@gmail.com",
    "firstName": "Alice",
    "lastName": "Smith",
    "token": "SAMPLE_TOKEN_VALUE"
}
```
### Printers Route

Sample Request:
```
Method: POST 
Host: https://us-central1-allevi-cloud-dev.cloudfunctions.net/printers
Content-Type: application/json
{
    "token": "SAMPLE_TOKEN_VALUE" 
}
```

Sample Response:
```
{
    "printers": [
        {
            "name": "Allevi 2 Printer",
            "modelNumber": 2,
            "serialNumber": "381f78571ed7eaabe9157b4658a087f6"
        },
        {
            "name": "Alice Lab Printer",
            "modelNumber": 3,
            "serialNumber": "f0d1376c44c003163d683546909d18c3"
        },
        {
            "name": "Cell Printer",
            "modelNumber": 2,
            "serialNumber": "b47229b6762509ab5fff87fa8e4c2005"
        }
    ]
}
```

## Test Data
The above authentication route will successfully authenticate the following users:
- Email: `alice@gmail.com`, Password: `secure_password`
- Email: `bob@yahoo.com`, Password: `canthackme05`
- Email: `admin@allevi.com`, Password: `password123`

## Evaluation Criteria
- The main question we will ask when reviewing your challenge is: `Can we navigate to the /login page, type in the correct login information and successfully be redirected to the /home page where we can see the users printers?` 
- State: Basic data from the /login page will be required in the /home page. Please keep this in mind when implementing your solution
- Design: Please focus on functionality over design - a simple design is perfectly acceptable - we are more concerned with how your application works
- Implementation details: All other implementation details will be left up to you.


## Deliverables
- Make sure to include and commit all source code in this repository. Any code that is not committed by the deadline will not be considered as submitted
- Please include running instructions for your app below:
```
Example:
> npm install
> npm start

# TODO: Add your running instructions here
```

