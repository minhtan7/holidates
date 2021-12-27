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

- When add `Holiday name
