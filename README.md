<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
<!--
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Golang][golang-shield]][golang-url] -->
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7003be3d0ea5476e98760cb305c2b424)](https://app.codacy.com/gh/paulmuenzner/react-comment-component-ts/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Issues][issues-shield]][issues-url]
[![React][react-shield]](https://reactjs.org/)
[![TypeScript][ts-shield]](https://www.typescriptlang.org/)
[![GNU License][license-shield]][license-url]
![GitHub repo size](https://img.shields.io/github/repo-size/paulmuenzner/react-comment-component-ts) 
[![paulmuenzner github][github-shield]][github-url] 
[![Contributors][contributors-shield]][contributors-url]
 <!-- [![paulmuenzner.com][website-shield]][website-url] -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/paulmuenzner/react-comment-component-ts">
    <img src="src/assets/logo.png" alt="Logo" width="128" height="128">
  </a>

  <h3 align="center">React TS Comment Component</h3>

  <p align="center">
    Votes - Pagination - Answer option
    <br />
    <a href="#about-the-project"><strong>EXPLORE DOCS</strong></a>
    <br />
    <br />
    <a href="#settings">High Flexibility</a>
    ·
    <a href="https://github.com/paulmuenzner/react-comment-component-ts/issues">Report Bug</a>
    ·
    <a href="https://github.com/paulmuenzner/react-comment-component-ts/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#settings">Settings</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This React Comment Component stands out as a robust and highly customizable commenting solution specifically crafted for React applications. Notably, it is fortified with strongly typed TypeScript, ensuring a solid and reliable foundation. What sets this component apart is its unique integration within a Vite project, allowing users to effortlessly extract it from 'src/component/comment.' This approach offers unparalleled flexibility and simplifies the customization process, setting it apart from conventional black-box packages.

In the landscape of open-source internet solutions, the React Comment Component addresses a noticeable gap by providing a comprehensive and flexible commenting system. Many existing options fall short in delivering a satisfying balance of style and functionality. This React Comment Component fills this void, offering users an all-encompassing solution that addresses common limitations found in other open-source comment components. Its adaptability and ease of integration make it a standout choice for React developers who seek a robust and highly customizable commenting solution.


## Features

-   **Super Clean Design**: Enjoy a sleek and intuitive user interface, providing an elegant commenting experience.

-   **Flexibility at Its Core**: Customize the component effortlessly by defining maximum character limits for each input field.

-   **Voting System**: Enable or disable upvoting and downvoting functionality with the flexibility to control the counter update and disable specific voting options. Configure the display of top and bottom comment buttons and change button text seamlessly via the settings in `settings.tsx`.

-   **Modal Form with React Portal**: Enhance security with a modal form for adding and answering comments, implemented using React Portal.

-   **Input Validation**: Ensure data integrity with input validations such as character limits, email validation, and prevention of special characters.

-   **Pagination Configuration**: Tailor the number of parent comments displayed per page by configuring the maximum number in the settings.

-   **Threaded Comments**: Enable answering of parent comments in the first level, with answers displayed in the second level and indented for clarity.

-   **Dynamic Date Display**: Dynamically present the age of comments, ranging from seconds for comments less than a minute old to days for comments older than 5 days. Dates older than 5 days are displayed in the US date format.

-   **Character Counter**: Provide users with a character counter in the comment field for easy reference.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Tech Stack <a name="tech-stack"></a>

This project is basically built with and for:

*   [![React][react-shield]](https://reactjs.org/)
*   [![TypeScript][ts-shield]](https://www.typescriptlang.org/)
*   [![Vite][vite-shield]](https://vitejs.dev/)
*   [![Styled Components][styled-components-shield]](https://styled-components.com/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Demo
Coming soon ...



<!-- GETTING STARTED -->
## Getting Started

### Option 1

1. Extract the component from 'src/component/comment' into your project.

2. Configure the component with your desired settings in `settings.tsx`.

3. Integrate the component into your React application for a feature-rich commenting experience.

### Option 2

1. Download as zip or clone this project
 ```sh
 git clone https://github.com/paulmuenzner/react-comment-component-ts.git
 ```
2. Navigate to the project directory
```sh
cd react-comment-component-ts
```
3. Install dependencies using npm 
 ```sh
 npm install
 ```
or using yarn
 ```sh
 yarn
 ```
3. Run project
 ```sh
 npm run dev
 ```
or using yarn
 ```sh
 yarn dev
 ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- Settings -->
## Settings

This React Comment Component offers a variety of customizable settings to tailor the behavior and appearance of the comment system. These settings can be found in the 'src/component/comment' directory in the 'settings.tsx' file. Here's an overview of the available settings:

### Define Max Allowed Characters for Comment Fields

- **maxCharsName:** Defines the maximum allowed characters for the commenter's name. Default: 20
- **maxCharsEmail:** Defines the maximum allowed characters for the commenter's email. Default: 30
- **maxCharsWebsite:** Defines the maximum allowed characters for the commenter's website. Default: 40
- **maxCharsComment:** Defines the maximum allowed characters for the comment content. Default: 1000

### Further Settings

- **allowUpVoting:** Enables or disables the upvoting functionality for comments. Default: true
- **allowDownVoting:** Enables or disables the downvoting functionality for comments. Default: true
- **allowCommentButtonTop:** Enables or disables the comment button at the top of the comments section. Default: true
- **allowCommentButtonBottom:** Enables or disables the comment button at the bottom of the comments section. Default: true

### Change & Define Descriptions

- **textButtonTop:** Defines the text for the comment button at the top of the comments section. Default: 'WRITE COMMENT'
- **textButtonBottom:** Defines the text for the comment button at the bottom of the comments section. Default: 'WRITE COMMENT'

### Miscellaneous

- **maxMainCommentsPerPaginationUnit:** Defines the maximum number of parent comments per pagination unit. Default: 2

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

-   ✅ Configure maximum number of comments per pagination page
-   ✅ Colorize vote buttons on hover
-   ⬜️ Implement Testing
-   ⬜️ Replace 'react-icons' package with local scg solution
-   ⬜️ Add option to collapse nested comments



See the [open issues](https://github.com/paulmuenzner/react-comment-component-ts/issues) to report bugs or request fatures.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Contributions are more than welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for
more info.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v2.0. See [LICENSE](LICENSE.txt) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Paul Münzner: [https://paulmuenzner.com](https://paulmuenzner.com) 

Project Link: [https://github.com/paulmuenzner/react-comment-component-ts](https://github.com/paulmuenzner/react-comment-component-ts)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

*   [Vite](https://vitejs.dev/)
*   [React](https://react.dev/)
*   [Styled Components](https://styled-components.com/)
*   [Typescript](https://www.typescriptlang.org/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[github-shield]: https://img.shields.io/badge/paulmuenzner-black.svg?logo=github&logoColor=ffffff&colorB=000000
[github-url]: https://github.com/paulmuenzner
[contributors-shield]: https://img.shields.io/github/contributors/paulmuenzner/react-comment-component-ts.svg
[contributors-url]: https://github.com/paulmuenzner/react-comment-component-ts/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/paulmuenzner/react-comment-component-ts.svg
[issues-url]: https://github.com/paulmuenzner/react-comment-component-ts/issues
[license-shield]: https://img.shields.io/badge/license-GPL_2.0-orange.svg?colorB=FF5733
[license-url]: https://github.com/paulmuenzner/react-comment-component-ts/blob/master/LICENSE.txt
[react-shield]: https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white
[ts-shield]: https://img.shields.io/badge/TypeScript-5.2.2-007ACC?logo=typescript&logoColor=white
[vite-shield]: https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite&logoColor=white
[styled-components-shield]: https://img.shields.io/badge/Styled%20Components-5.3.1-DB7093?logo=styled-components&logoColor=white
<!-- [website-shield]: https://img.shields.io/badge/www-paulmuenzner.com-blue
[website-url]: https://paulmuenzner.com -->

