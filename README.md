# Personal portfolio site 

## General structure

Site split into three pages:

* Main 
    * General information about myself, who i am, interests etc, short write-up and profile picture.
    * Add spotify API/ manga API?

* About
    * Link to Github account, past projects and repos
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

## Done:

* [x] Handle movement of page to page, better signpost which page I'm currently on once clicked.

## To do:

* [ ] General theming of site to be very **code-like**, with references to code throughout and maybe even an interactive command line.
* [ ] CSS flexboxes
* [ ] Properly style the general look of the site (fonts, colorscheme, overall code theme in `main.css`.
* [ ] Add CSS animation with keyframes and CSS transitions of the respective clickable buttons.
* [ ] Add animations and transitions to the text options on `about.html` page
* [ ] Add content to each web page, style and add logic accordingly *(see above in **General structure** for what else is to be added)*
* [ ] Implement respective logic for each web page in their respective TS *(compiled to JS)* files.
* [ ] Implement additional styling preferences for each web page in their respective CSS files *(create them if neccesary)*.
* [ ] Overall matcha based colorscheme
* [ ] Add repo badges to website for additional clout, google how to style accordingly.
* [ ] Add additional responsiveness for mobile devices/ design an entirely different website experience for mobile devices, unique controls and feel
* [ ] Offer Github and Wakatime integrations giving my stats
* [ ] Publish as official website I link on my Github `gongahkia.md` rendered using https://pages.github.com/.
* [ ] Unprivate this repo/ publish the website as mentioned above once everything is completed.

## Notes for self:

* No license for now, since I don't wanna make the code openly replicatable but want others to see the code.
