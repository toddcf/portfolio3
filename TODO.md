# To Do:

## Non-Walkthrough Version

- Page Speed Test:
  - Homepage:
    - Before BEM:
      - Mobile: 76
      - Desktop: 94
    - After BEM:
      - Mobile: 8
      - Desktop: 26
    - After BEM Compiling & Minifying:
      - Mobile: 
      - Desktop: 
  - About Me:
    - Before BEM:
      - Mobile: 92
      - Desktop: 92
    - After BEM:
      - Mobile: 17
      - Desktop: 38
    - After BEM Compiling & Minifying:
      - Mobile: 
      - Desktop: 


### Additional Updates

- Update the new `https` URL across all my résumés, email signatures, and online job board accounts.
- Fonts:
  - Convert all font sizes from responsive to fluid.
  - Front End Developer | MarTech Programmer:
    - Make the size and font weight readable on mobile.
    - Replace the horizontal line between Front End Developer | MarTech Programmer with some sort of spinning animation icon.
- Fallback image (tropical beach):
  - Can I delete the unused background tropical beach image size from the img directory?
  - Smaller sizes for mobile, etc.
- Fix: Text box overlay touches the Acura slightly on medium-large screen.
- Add Brenda Canela Acting
  - Wait until BEM structure is finalized so that adding this project block is as easy as possible.
  - Decide which order it should go in, and whether the text box should go on the left or right.
  - Photoshop: All image sizes.
- About Me Page
  - Add sticky nav. (Ensure it can be reused on the walkthrough pages once those are ready to go.)
  - Add animations to Professional Reference cards.
- REDEPLOY.


### Optimize Non-Walkthrough Version

- Run Google Page Insights.
  - Record the speed test scores.
  - Make list of any other recommendations for speeding up the site (and do those).
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