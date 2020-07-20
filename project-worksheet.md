# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Mon 7/13|Styling Homepage and About Me page (without content) | Complete
|Tues 14|Add Content to Homepage and About Me page| Complete
|Wed 15| Add Screenshots of Projects | Complete
|Thu 16|Add LinkedIn, GitHub Links, Contact Me button.|Complete
|Fri 17| Deploy (Finish MVP).| Complete
|Fri 17| Add HTML Resume| Incomplete
|Weekend 18 & 19|Animations, Dark Mode, CMS (If I get to these)| Incomplete
|Mon 20| Present | Incomplete


## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

## Google Sheet

[My Google Sheet](https://docs.google.com/spreadsheets/d/1-S0iSnrlC29OradtL2hbRa7mQ5LIr-P0m0kV7WKp_7s/edit?usp=sharing) 

## Wireframes

Most of the wireframes can be found [here](https://wireframepro.mockflow.com/view/Ma189ce4fd4a2aff16320ec3a5320aec31594603996392)

Mockflow did not let me use more than three pages, so I hand-drew a [wireframe](https://live.staticflickr.com/65535/50106739446_2c791aca9b_b.jpg) for the mobile home page.

## Time/Priority Matrix 

[View Here](https://res.cloudinary.com/donovanrichardson/image/upload/v1595256491/Time_Priority_Matrix_wxtraj.jpg) 

### MVP/PostMVP - 5min

#### MVP (examples)

- Home Page Style
- Home Page Content
- About Me (content and styling
- Contact Me form
- LI GH links
- Screenshots
- Deploy

#### PostMVP 

- CMS Integration
- Resume with HTML and CSS
- Dark Mode and Hover Shading
- Add Animations
- Enable Low-Motion to disable animations

## Functional Components

#### MVP
|Component|Priority|Estimated Time|Time invested|Actual Time|
|-|-|-|-|-|
|Home Page Style|H|4h|11h|-|
|Home Page Content|H|4h|3h|-|
|About Me (content and styling|M|3h|4.5h|-|
|Contact Me form|H|4.5h|1.5h|-|
|LI GH links|M|1.5h|.5h|-|
|Screenshots|M|4h|.5h|-|
|Deploy|H|4h|.1h|-|
|**Total**|-|**23.5h**|**21.1h**|-|

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CMS Integration | L | 10h | -h | -h|
| Resume with HTML and CSS | M | 3h | -h | -h|
| Dark Mode and Hover Shading | M | 2h | -h | -h|
| Add Animations | M | 2h | -h | -h|
| Enable low-motion to disable animations | H | 1h | -h | -h|
| **Total** | H | **18h**| **--** | **--** |

## Additional Libraries
 - jQuery
 - Bootstrap

## Code Snippet

The function below is in [app.js](app.js) and is adapted from the lesson done in class on Monday the 13th. This function is used to add `article` elements which contain information about my projects. I add the project title, description, and image to this article. As shown in the if-statement, if the `project.url` is truthy, meaning it evaluates to a value that is a synonym for `true`, then the url is added as a link, to the project's title. If the value is falsy, meaning it evaluates to one of `0`, `''`, `null`, `undefined`, `NaN` or `false`, then the title is added without a link. Where I haven't added a URL in my projects api for a specific project, the `project.url` will evaluate to one of the falsy values above and refrain from adding a link. This is appropriate behavior for displaying some of my projects which haven't been published online.

```js
const createProjectElement = (project) => {
        const $art = $('<article>').addClass("gray")
        if(project.url){
            $art.append($('<a>').attr('href', project.url).append($('<h3>').text(project.title)))
        }else{
            $art.append($('<h3>').text(project.title))
        }
        $art.append($('<p>').addClass("description").text(project.description))
        $art.append($('<img>').attr('src',project.image).attr('alt',project.title))
        return $art
    }
```

## Issues and Resolutions
During the touch-up process, I noticed that the Homepage link did not have the same margin as the other links in the nav bar in Desktop view. The Homepage link had the desired margin, but the other two links were too far from the side of the screen. I ended up figuring out that this was because the other links were housed in a flexbox that had the `justify-content: space-around;` property. Changing this to `flex-end` in commit #f4d1818 fixed the issue, and the links now have equal margins on either side of the nav bar.

### Code Snippet

```css
    #others > ul{
        display: flex;
        justify-content: flex-end;
    }
```