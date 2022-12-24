<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Password Manager</h3>
  <p align="center">
    Manage your passwords, generate new passwords randomly and store them.
    <br />
    <br />
    <a href="https://github.com/berkoca/password-manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/berkoca/password-manager/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#Screenshots">Screenshots</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- SCREENSHOTS -->
## Screenshots

![Password list](https://raw.githubusercontent.com/berkoca/password-manager/master/screenshot_1.png)
![Create a new password](https://raw.githubusercontent.com/berkoca/password-manager/master/screenshot_2.png)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [Vue.js 3 + Composition API](https://vuejs.org/)
* [Pinia](https://pinia.vuejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeScript](https://typescriptlang.org/)
* [Joi](https://joi.dev/)
* [TypeORM](https://typeorm.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/berkoca/password-manager.git
   ```
2. Install Client NPM packages
   ```sh
   cd client
   npm install
3. Install Server NPM packages
   ```sh
   cd server
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Start client application
    ```sh
    npm run serve
    ```
2. Start server application
    - vscode > Run > Start Debugging

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Front-end
    - [x] Main Components
        - [x] Password list
        - [x] New password dialog 
        - [x] View password dialog
        - [x] Edit password dialog
        - [x] Notification
    - [ ] State management
    - [ ] Vuex/Pinia
    - [ ] Login page
- [x] Back-end
    - [x] Passwords CRUD
        - [x] Listing passwords
        - [x] Creating passwords via random creating algoritm
        - [x] Editing passwords
        - [x] Deleting passwords
    - [x] Request body validation
    - [ ] User authentication
    - [ ] Logging
    - [ ] Creating env config

See the [open issues](https://github.com/berkoca/password-manager/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Berk Koca - berk1937@gmail.com

Project Link: [https://github.com/berkoca/password-manager](https://github.com/berkoca/password-manager)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/berkoca/password-manager.svg?style=for-the-badge
[contributors-url]: https://github.com/berkoca/password-manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/berkoca/password-manager.svg?style=for-the-badge
[forks-url]: https://github.com/berkoca/password-manager/network/members
[stars-shield]: https://img.shields.io/github/stars/berkoca/password-manager.svg?style=for-the-badge
[stars-url]: https://github.com/berkoca/password-manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/berkoca/password-manager.svg?style=for-the-badge
[issues-url]: https://github.com/berkoca/password-manager/issues
[license-shield]: https://img.shields.io/github/license/berkoca/password-manager.svg?style=for-the-badge
[license-url]: https://github.com/berkoca/password-manager/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/berkoca