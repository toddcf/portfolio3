# To Do:

## Global

- Change all HTML and CSS to BEM.
  - Also update all code snippets on walkthroughs accordingly.

## Walkthrough Pages

### My Portfolio Walkthrough:

- After converting everything to BEM, update the code snippets on this page to match.
- Fix all mobile-responsive spacing between rows.
- Once you have finished and have used this as a template for the next walkthrough, remove the "Live Site" header icon from the Portfolio Walkthrough.
  - And then replace the header image.

#### Wireframe section
- Adobe XD wireframes for homepage, About Me, and Walkthrough.
- Make each wireframe image a link to the full-size image (opens in new tab). Zooms in on hover.

#### Animations
- How the fadeInUp animations work.
- How some animations have different delays depending on the screen size. And how others (such as the footer) animate all at once on purpose.

#### Walkthrough Header
- Inspiration: Westworld booklet.
- Icons and main header image: How I did the responsive variables, sizes, and positioning.
  - Everything is calculated from the size of the icons. I made them 100px wide and stored that value in a variable. Then I made the height equal to that variable. (I don't normally do hardcoded heights, but this was an exception. I knew I wanted the icons to be square, and at least 57px for UX.)
  - At the 992px breakpoint, the icons change to `position: absolute`. Show the calculations for the image's margins. how the calculations for the icons' positions.
  - At the 1200px breakpoint, the root variable changes to 125px, and everything is calculated accordingly. Way easier than recalculating it manually for different breakpoints!


### Acura of Tempe Walkthrough:

- The value of the white-background rising image.
- How one of the images disappears on small screens.
- The slider button hover effect.
- NSX gradients that make section breaks blend together.


### BMW of El Cajon Walkthrough:

- Show the button hover effect WITH and WITHOUT my solution so the user can see the flash. (Unless just using `background-image` for both would have allowed the transition to work?)
- H1: Show the difference WITH and WITHOUT my linear gradient behind it.

### Honda of New Rochelle:

- Mockups (JPGs for mobile and desktop).
- Video background with fallback image.
- Animations and Waypoints.


## When Finished:

- Delete all unused font customizations.
- Delete all unused Bootstrap files (including JS files).
- Run Google page speed insights test.
- Add Google Analytics throughout entire site.
- Deployment checklist on every single file.