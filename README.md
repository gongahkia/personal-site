# Personal portfolio site 

## General structure

Site split into three pages:

* Main 
    * General information about myself, who i am, interests etc, short write-up and profile picture.

* About
    * Linkedin, Wordpress, Github, Letterboxd accounts
    * Link to Github account, past projects and repos that automatically update.
    * Link to Wordpress articles and latest articles, link Wordpress API to have live update of these articles.  

* Reach me 
    * Linkedin, Wordpress, Github, Letterboxd, email, other socials.

### Project structure

```console
personal-site
│
├── html
│   ├── main.html
│   ├── about.html
│   └── contact.html
├── css
│   └── main.css
├── ts
│   └── main.ts
│   └── about.ts
│   └── contact.ts
├── README.md
├── fonts
├── node_modules
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## To do:

* [ ] ***Main page***:
    * [ ] Add spotify API that updats based on what song I'm currently listening to.

* [ ] ***About page***:  
    * [ ] Github API
        * [ ] Render most recently updated github repos dynamically by referencing this article (https://stackoverflow.com/questions/12410895/changing-html-data-before-page-rendering), calling github API test code in telegram chat, and style a new flexbox div in the about page, to include relevant values (included in the Github repo display [Repo name, Repo desc, Repo language and associated emoji, embedded URL behind each clickable repo box]) => maybe use dynamic cards display for this?? for latest 4 repos updated 
    * [ ] Wordpress API
        * [ ] Add API that calls and automatically **updates** latest wordpress articles and github projects on the page
    * [ ] General styling
        * [ ] Parallex effect on background when scrolling  
        * [ ] Have aforementioned projects and articles slide and animate in only when mouse scrolls down based on https://youtu.be/T33NN_pPeNI
        * [ ] Add CSS animation with keyframes and CSS transitions of the respective clickable buttons.

* [ ] ***Contact-me page***:  
    * [ ] Add actual content referenced from **General structure** above
    * [ ] Allow for emailing and telegram and other contact options to pop up in current tab
    * [ ] Add CSS animation with keyframes and CSS transitions of the respective clickable buttons.
    * [ ] Add transparent background PNG of me that Bethel drew, add eyeballs that track the mouse based on https://youtu.be/TGe3pS5LqEw

* [ ] ***Additional stuff***:  
    * [ ] Add Light/Dark mode option that can be toggled based on https://youtu.be/rXuHGLzSmSE
    * [ ] Overall matcha based colorscheme
    * [ ] Unprivate this repo/ publish the website as mentioned above once everything is completed.
    * [ ] Publish as official website I link on my Github `gongahkia.md` rendered using https://pages.github.com/.
    * [ ] Offer Github and Wakatime integrations giving my stats
    * [ ] Add repo badges to website for about, google how to style accordingly.

* [ ] ***Mobile port***:  
    * [ ] Add additional responsiveness for mobile devices in sizing 
    * [ ] Design an entirely different website experience for mobile devices, unique controls and feel

## Done:

* [x] Handle movement of page to page, better signpost which page I'm currently on once clicked.
* [x] Add animations and transitions to the text options on `about.html` page
* [x] General theming of site to be very **code-like**, with references to code throughout.
* [x] Implement respective logic for each web page in their respective TS *(compiled to JS)* files.
* [x] Properly style the general look of the site (fonts, colorscheme, overall code theme in `main.css`.
* [x] CSS flexboxes

## Notes for self:

* No license for now, since I don't wanna make the code openly replicatable but want others to see the code.
