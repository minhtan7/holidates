# Assignment: Javascript on web - Fetch APIs

## Introduction

This is an assignment for CoderSchool Fullstack Web Development bootcamp, code name Virgil

Outcome :

- Able to use JS to access and manipulating dom to create/edit/render element to the UI
- Able to read API documentation and configure appropriate HTTP requests.
- Able to understand and consume HTTP response's data into the project

## Tutorial

- Holiday API Documentation
- Exercise walkthrough : "Rendering a list of countries code"

## Requirement

1. Make the function for the `Render Languages List` button so that :

   - When click, showing a full list of languages code list that available
   - The list items are properly place inside the `Languages List` container.

2. Make the function for the `Render Holiday` button so that when click:

   - If all **input box** are empty, render a list of holiday of `VietNam` _hint: country code needed_ for the year `2020`
   - If ONLY **Country box** is inputed with correct _country code_, render a list of holiday of that country for the year `2020`
   - The title `Holiday of a Country` must be changed to the actual country requested. eg Holiday of Viet Nam ; USA ; China ...
   - The list items are properly place inside the `Holiday of a Country` container.

3. Improve your `Render Holiday` function so that :

   - When add `Day, Year, Month` then click the button, user see list of holiday of chosen country (default is Viet Nam) for that exact day.
   - When other inputs (Country, Languages) are present, the result are combined all the queries.

4. Improve your `Render Holiday` function so that :

   - When add `Holiday name`, user see a list of matching holiday of all country (**Carefully read API documentation for request's required paramenter** )

## Story

As the covid situation is subsiding , more and more countries are open their border for travellers. There is no better time to travel away from work and even home during your holidays. Actually there is, when it is also holidays time in your get away destination.

John Doe is an office worker who love to travel. For this year (2020) he is planning to visit England to visit his family and friends. He want to know what are the holidays that will be occur durring his visit so that he could also enjoy those special occasion.
So John went on `all holidays` - our website - to find out about what holidays will be happening in Enland during his journey.

As a new front-end developer, you are given with a back end API ![]() and required to build a front-end web application. To help users like John to :

- See all holidays in any chosen country. _Hint: you need to help user to choose the correct country code first because users like John will have no idea what is the code for ENGLAND_
- See all country's code to use it for searching holiday.
- Can enhance the search by choosing exact day, month, year.
- Can translate the name of the country's holiday to their prefered languagues. _Hint: you need to help user to choose the correct languages code in prior_
- See all languages code to use it for translation.
- Can use holiday name , country and year to find the exact day of that holiday occured.

! Please read the API documentation carefully before implement any features. Pay attention on **REQUIRED PARAMENTER/QUERIES** in your api document.
