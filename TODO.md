# To Do:

## Non-Walkthrough Version

- Condense each HTML page's CSS files into one CSS file.
  - But group each section together: Main, Footer, Fonts.
- Update letter-spacing and text-shadowing at different screen sizes for:
  - `.header__text-overlay_h1_main-name`
  - `.header__text-overlay_h1_main-subheading`
  - `.header__text-overlay_h1_main-subheading_divider`
- Replace the horizontal line between Front End Developer | MarTech Programmer with a slowly-spinning compass.
- Fallback image (tropical beach):
  - Can I delete the unused background tropical beach image size from the img directory?
  - Smaller sizes for mobile, etc.
- Add a slim, white, fixed nav to all pages. Link it to:
  - Home
  - About
  - Résumé
- Do everything Google Page Insights recommends to optimize the site.
- Add Adobe DTM and Launch logos to "About Me" page.
- Add Brenda Canela Acting
  - Wait until the portfolio's BEM structure is finalized so that adding this project block is as easy as possible.
  - Photoshop: All image sizes.
- Acura:
  - Figure out better UX for a hub that links out to all six pages. (Maybe in each car's footer? I didn't notice the menu at the top of the NSX page.)
- Update the new `https` URL across all my online job board accounts.
- Remove jQuery
  - Swap out Waypoints for Vanilla JS scroll triggers.
    - One example: https://terwanerik.github.io/ScrollTrigger/
    - Also revisit Wes Bos tutorial.
  - Refactor background video in vanilla JS.
  - Delete jQuery link.
- Convert icons to SVG and remove links to fontawesome library.
- Add Google Analytics throughout entire site.


## Walkthrough Version

### Flowchart

- Create a flowchart for the portfolio user experience.


### Walkthrough Pages

- Header:
  - Fix icons and their placements.
- Redo all mobile responsive font sizes.
- Change all "Mobile, Tablet, Desktop" references to "Small, Medium, Large" to be compliant with Atomic Design.
- Convert to BEM.
  - Remove Bootstrap grid and create your own flexbox.
  - Delete all unused CSS links.
- Once this is done, delete the actual Bootstrap files (except for jQuery).
- Also delete all non-BEM files.


#### My Portfolio Walkthrough:

- Convert all icons (header, panels) to BEM *blocks*.
- Redo the code snippets to reflect the new BEM structure.
- Remove the "Live Site" header icon from the Portfolio Walkthrough.


#### Acura of Tempe Walkthrough:

- Fix margins between each Acura button now that they are in two columns.
- Restyle secondary buttons so they don't blend into the gray card bg.
  - Use BEM to recode all buttons completely.
  - Then use this new BEM style on all the other pages, too.
- The value of the white-background rising image.
- How one of the images disappears on small screens.
- The slider button hover effect.
- NSX gradients that make section breaks blend together.
- Remove all unused CSS that was left over from the template.


#### BMW of El Cajon Walkthrough:

- Show the button hover effect WITH and WITHOUT my solution so the user can see the flash. (Unless just using `background-image` for both would have allowed the transition to work?)
- H1: Show the difference WITH and WITHOUT my linear gradient behind it.


#### Brenda Canela Acting Walkthrough



#### Honda of New Rochelle:

- Original: http://rsp-hondaofnewrochelle.fzautomotive.com/2018-honda-accord
- Mockups (JPGs for mobile and desktop).
- Video background with fallback image.
- Animations and Waypoints.


#### Finally Deploy Walkthrough Version!

- Deployment checklist.
- After walkthrough version is pushed live, update all the Acura of Tempe landing pages accordingly:
  - Remove headers.
  - Remove any CSS affiliated with the headers.
  - Push these updates live on GH Pages.


## Future Refinements

- Refactor Omnifood project. (Create separate project list.)
  - Use BEM.
  - Minimize images.
  - Mobile-first.
  - Remove jQuery and Waypoints -- convert to vanilla JS.
  - Deploy via GH Pages instead of Heroku.
  - Update all portfolio links (here and on any job boards) to point to the new GH Pages site.