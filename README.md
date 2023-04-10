# Personal portfolio site 

> ### This site has been deployed [here](https://personal-site-gongahkia.vercel.app/).

<h3>Technologies used:</h3>

<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50"/>
<img src="https://cdn.worldvectorlogo.com/logos/vercel.svg" width="50" height="50"/>
</p>

### Project structure

```console
personal-site
│
├── about.html
├── contact.html
├── index.html
├── css
│   └── main.css
├── ts
│   ├── about.ts
│   ├── contact.ts
│   └── main.ts
├── for-testing
│   ├── githubAPI.ts
│   └── tsconfig.json
├── README.md
├── assets
├── fonts
├── node_modules
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## Screenshots 

![Screenshot from 2023-04-10 17-10-04](https://user-images.githubusercontent.com/117062305/230871678-e63dc9c7-0298-4f4a-9fd2-00842e377758.png)
![Screenshot from 2023-04-10 17-10-29](https://user-images.githubusercontent.com/117062305/230871683-ce67441e-61af-4e80-b339-e62d1fe49814.png)
![Screenshot from 2023-04-10 17-10-41](https://user-images.githubusercontent.com/117062305/230871693-4d7dff24-7ee5-4b02-b3c0-64e85434c3f4.png)

## To implement in the future:

* [ ] ***Additional stuff***:  
    * [ ] Add Light/Dark mode option that can be toggled.

* [ ] ***Mobile port***:  
    * [ ] Responsiveness for mobile devices in sizing using JMediaQuery
    * [ ] Design an entirely different website experience for mobile devices, unique controls and feel

## Done:

* [x] Handle movement of page to page, better signpost which page I'm currently on once clicked.
* [x] Add animations and transitions to the text options on `about.html` page
* [x] General theming of site to be very **code-like**, with references to code throughout.
* [x] Implement respective logic for each web page in their respective TS *(compiled to JS)* files.
* [x] Properly style the general look of the site (fonts, colorscheme, overall code theme in `main.css`.
* [x] CSS flexboxes
* [x] Github API
    * [x] Complete Github API code to sort and choose 3 repos by most recent updated date
    * [x] Render most recently updated github repos dynamically by referencing this article (https://stackoverflow.com/questions/12410895/changing-html-data-before-page-rendering), using Github API code in `for-testing/githubAPI.ts`
    * [x] DIY style a new flexbox div in the about page, to include relevant values (included in the Github repo display [Repo name, Repo desc, Repo language and associated emoji, embedded URL behind each clickable repo box]) => (maybe use dynamic cards display for this??) for latest 4 repos updated 
    * [x] properly style the text in the repos (title), (description), (language) and centre text accordingly
* [x] About page
    * [x] Add actual content referenced from **General structure** above
    * [x] Allow for emailing and telegram and other contact options to pop up in current tab
    * [x] Add CSS animation with keyframes and CSS transitions of the respective clickable buttons.
* [x] Contact page
   * [x] Add transparent background PNG of me that Bethel drew, add eyeballs that track the mouse based on https://youtu.be/TGe3pS5LqEw
