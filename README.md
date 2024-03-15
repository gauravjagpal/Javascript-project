![Page Logo](assets/images/logo.jpeg)

Welcome to [The GCSE Quiz!](https://gauravjagpal.github.io/Javascript-project/)!

This app has been designed to help students through their GCSE's.

Within this app, you can select a topic and complete a quiz to test your knowledge.

### Technologies used
HTML5, CSS, JavaScript

## CONTENTS
* [Code Structure](#code-structure)
    - HTML Files
    - Assets Folder
    - README File
    - Media Folder

* [User Experience (UX)](#user-experience-ux)
    - User Stories
        - Visitor Goals

* [Design](#design)
    - Colour Scheme
    - Background Colours
    - Button Colours

* [Wireframes](#wireframes)
    - Home page
    - Quiz pages
        - Maths
        - Physics
        - History
    - End page

* [Features](#features)
    - Landing Page
    - Features left to implement

* [Testing](#testing)
    - Validator Testing
        - W3C validator
        - Jigsaw Validator
        - JSHint
    
    - Lighthouse Testing
        - Home page
        - Maths page
        - Physics page
        - History page
        - End page

    - Unfixed Bugs

* [Deployment](#deployment)

* [Credits](#credits)

## Code Structure
### HTML files
I have stored all of my HTML5 files at the directory level

### Assets folder
All files complimenting my HTML have been included in the assets folder. Broken down by:
- css
- images
- js

### README file
The README file is also at directory level and the assosciated files are stored in a "media" folder

### Media Folder
The Media folder contains all of the images used in the README file

## User Experience (UX)

### User Stories

#### Visitor Goals
- A place to test knowledge gained in preparation for exams 
- Test themselves on different subjects

## Design
### Colour Scheme
I decided to use orange colours as they are bright and could help keep the user engaged. Throughout the whole app there are different shades of orange.

#### Colours used:
- color1: rgb(255, 136, 0)
- color2: rgb(255, 63, 5)
- color3: rgb(255, 105, 5)
- color4: rgb(255, 90, 5)
- color5: rgb(255, 119, 28)
- progress: rgba(255, 63, 5, 0.568) *(used for the progress bar)* 
- correct: rgb(39,161,67) *(used for the correct answer)*
- incorrect: rgb(220,53,69) *(used for the incorrect answer)*

## Wireframes
### Home page
![Home Page Wireframe](media/home-wireframe.jpg)

### Quiz page
![Quiz Page Wireframe](media/quiz-wireframe.jpg)

### End page
![End Page Wireframe](media/end-wireframe.jpg)

## Features
This app has 3 views:
- A home page - A page to navigate towards different quizzes
- Quiz pages - The place the user can complete different quizzes
- End page - The checkout page where the user can see there score and return to the home page

### Landing Page

The landing page is an easy to use page. Minimal information keeping it clear for the user to navigate.

![Home Page](media/home-screen-responsive.jpg)


### Quiz page

After selecting the topic, you will be directed to one of the quizzes.

Maths:

![Maths Quiz](media/maths-screen-responsive.jpg)

Physics:

![Physics Quiz](media/physics-screen-responsive.jpg)

History:

![History Quiz](media/history-screen-responsive.jpg)

### End page

After completing the quiz, you will be redirected to the end page which will look like below:
End:

![End Quiz](media/end-screen-responsive.jpg)

### Features left to implement
- Replace the subject buttons with level buttons
- Place more subjects withing each level

## Testing
### Validator testing
#### W3C validator
The html files have been run through the <a href="https://validator.w3.org/#validate_by_input"> W3C </a>validator and the below are the current status:
- [index.html](index.html) - pass - No errors or warnings
- [maths.html](index.html) - pass - No errors or warnings
- [physics.html](index.html) - pass - No errors or warnings
- [history.html](index.html) - pass - No errors or warnings
- [end.html](index.html) - pass - No errors or warnings

#### Jigsaw validator
The CSS files have been run through the <a href="https://jigsaw.w3.org/css-validator/#validate_by_input">Jigsaw </a>validator and the below are the current status:
- [style.css](assets/css/style.css) - pass - No error found

#### JSHint validator

The code has been passed through the JSHint validator and had 0 error, 32 warnings:
![JSHint pic 1](media/JSHint-1.jpg) ![JSHint pic 2](media/JSHint-2.jpg)

### Lighthouse testing
#### Index page
    - Desktop Testing, the following shows the results from desktop testing the home page. With a score of 100 on performance:
![Home Desktop Testing](media/home-lighthouse.jpg)
    
    - Mobile Testing:
![Home Mobile Testing](media/home-mobile-lighthouse.jpg)


#### Maths page
    - Desktop Testing, the following shows the results from desktop testing the home page. With a score of 100 on performance:
![Maths Desktop Testing](media/maths-lighthouse.jpg)
    
    - Mobile Testing:
![Maths Mobile Testing](media/maths-mobile-lighthouse.jpg)


#### Physics page
    - Desktop Testing, the following shows the results from desktop testing the home page. With a score of 100 on performance:
![Physics Desktop Testing](media/physics-lighthouse.jpg)
    
    - Mobile Testing:
![Physics Mobile Testing](media/physics-mobile-lighthouse.jpg)

#### History page
    - Desktop Testing, the following shows the results from desktop testing the home page. With a score of 100 on performance:
![History Desktop Testing](media/history-lighthouse.jpg)
    
    - Mobile Testing:
![History Mobile Testing](media/history-mobile-lighthouse.jpg)

#### End page
    - Desktop Testing, the following shows the results from desktop testing the home page. With a score of 100 on performance:
![End Desktop Testing](media/end-lighthouse.jpg)
    
    - Mobile Testing:
![End Mobile Testing](media/end-mobile-lighthouse.jpg)

### Bugs
- The end page was not loadign. I realised I was using absolute paths for images and changed this to relative paths.

### Unfixed Bugs
As of yet, I have not found any further bugs which still need fixing.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [GCSE QUIZ](https://gauravjagpal.github.io/Javascript-project/).

1. Login (or signup) to Github.
2. Go to my repository for the project, [gauravjagpal/Javascript-project](https://github.com/gauravjagpal/Javascript-project).
3. Click the settings button in the banner near the top of the screen.
4. On the menu on the left hand side, select "Pages".
5. From the Branch dropdown select main branch and press save.
6. The site has now been deployed (this may take a few minutes to action).

#### How to Fork

To fork the repository:

1. Login (or signup) to Github.
2. Go to my repository for the project, [gauravjagpal/Javascript-project](https://github.com/gauravjagpal/Javascript-project).
3. Click the Fork button in the top right corner.

To clone the repository:

1. Login (or signup) to Github.
2. Go to my repository for the project, [gauravjagpal/Javascript-project](https://github.com/gauravjagpal/Javascript-project).
3. Click on the Green code button, choose whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Launch the terminal within your code editor and set the current working directory to the desired location for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits
- Sources I used to help me build this site include: https://schoolsweek.co.uk/wp-content/uploads/2016/08/GCSE-Banner-1000x525.gif
for the:

![Page Logo](assets/images/logo.jpeg)