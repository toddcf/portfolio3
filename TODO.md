# To Do:

## Structure:

- Recode the entire website with BEM (and without Bootstrap). [IN PROGRESS]

### Homepage

- RESUME: Footer
- Convert all Font Awesome icons to SVGs instead of CDNs.
  - Using BEM directory structure, the JS should be able to be moved into its own separate file and linked to.


## About Me

- Convert animations to BEM.


## Walkthrough Pages

- Change all "Mobile, Tablet, Desktop" references to "Small, Medium, Large" to be compliant with Atomic Design.

### My Portfolio Walkthrough:

- Remove the "Live Site" header icon from the Portfolio Walkthrough.
- Redo the code snippets to reflect the new BEM structure.


### Acura of Tempe Walkthrough:

- Fix margins between each Acura button now that they are in two columns.
- Restyle secondary buttons so they don't blend into the gray card bg.
  - Use BEM to recode all buttons completely.
  - Then use this new BEM style on all the other pages, too.
- The value of the white-background rising image.
- How one of the images disappears on small screens.
- The slider button hover effect.
- NSX gradients that make section breaks blend together.
- Remove all unused CSS that was left over from the template.


### BMW of El Cajon Walkthrough:

- Show the button hover effect WITH and WITHOUT my solution so the user can see the flash. (Unless just using `background-image` for both would have allowed the transition to work?)
- H1: Show the difference WITH and WITHOUT my linear gradient behind it.

### Honda of New Rochelle:

- Original: http://rsp-hondaofnewrochelle.fzautomotive.com/2018-honda-accord
- Mockups (JPGs for mobile and desktop).
- Video background with fallback image.
- Animations and Waypoints.


## When Finished:

- Delete all unused font customizations.
- Delete all unused Bootstrap files (including JS files) except for grid.
- Run Google page speed insights test.
- Add Google Analytics throughout entire site.
- Deployment checklist on every single file.
- After everything is pushed live, update all the Acura of Tempe landing pages accordingly:
  - Remove headers.
  - Remove any CSS affiliated with the headers.
  - Push these updates live on GH Pages.
- Add SSL certificate.
  - If this alters the URL, update the URL across all my résumés, email signatures, and online job board accounts.


## Future Iterations:

- Swap out Waypoints for Vanilla JS scroll triggers. One example: https://terwanerik.github.io/ScrollTrigger/