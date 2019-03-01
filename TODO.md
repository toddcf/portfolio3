# To Do:

## Global

- Abstract the font CSS files so that they do not interfere with each other.

## Walkthrough Pages

### My Portfolio Walkthrough:

- Wireframe section.

- Redraw wireframes for homepage, About Me, and Walkthrough. Scan and add to Walkthrough.
- How I solved the white-gradient background issue.
  - Two separate divs, one going from 0 to 50% opacity, the second going from 50% to 100% opacity.
- How the portfolio cards have a different layout and style for every screen size.
- How I structured and styled the mobile cards: Secondary buttons have an inverse hover effect compared to medium and large screens; Created blurry (12px) bg image in Photoshop just for mobile; Negative margin-top for the smaller image at the top; Box shadow for depth.
- How the linear-gradient button hover effects work.
- How the fadeInUp animations work, and how they have different delays depending on the screen size.
- Parallax effect on About Me page.
- Icons and main header image: How I did the responsive variables, sizes, and positioning.
  - Everything is calculated from the size of the icons. I made them 100px wide and stored that value in a variable. Then I made the height equal to that variable. (I don't normally do hardcoded heights, but this was an exception. I knew I wanted the icons to be square, and at least 57px for UX.)
  - At the 992px breakpoint, the icons change to `position: absolute`. Show the calculations for the image's margins. how the calculations for the icons' positions.
  - At the 1200px breakpoint, the root variable changes to 125px, and everything is calculated accordingly. Way easier than recalculating it manually for different breakpoints!
- Responsive font sizes. (Something I'd always wanted to do, but couldn't at FZ due to backend code.)

### Acura of Tempe Walkthrough:

- The value of the white-background rising image.
- How one of the images disappears on small screens.
- The slider button hover effect.
- NSX gradients that make section breaks blend together.


### BMW of El Cajon Walkthrough:

- Show the button hover effect WITH and WITHOUT my solution so the user can see the flash.
- Show the difference WITH and WITHOUT my linear gradient behind the H1.

### Honda of New Rochelle:

- Mockups.
- Video background with fallback image.
- Animations and Waypoints.


## When Finished:

- Delete all unused font customizations.
- Run Google page speed insights test.
- Add Google Analytics throughout entire site.
- Deployment checklist on every single file.