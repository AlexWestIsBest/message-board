# Message Board

*A fast and lightweight social media message board which allows users to post text and/or images on a full CRUD application. Also, it plays with the neumorphic design style.*

**Languages:** HTML, CSS, JavaScript, Express, EJS, Mongoose

**Database:** MongoDB

---

## Getting Started

[Find the board here](https://thawing-atoll-91455.herokuapp.com/newsfeed)

Visitors are presented with a message board feed in order of newest to oldest. The message board includes text posts, image posts, and combination posts, rendering them accordingly.

![Screenshot showing landing page](https://i.imgur.com/k51h35W.png)

Users can create posts with the creator up top - uploading their name, image, and body text. The creator will add the post right below itself. It's also scalable, and the lower right corner of the description will stretch if the user needs more space. To edit posts, you simply press the edit icon and you'll be taken to an edit page. 

![Screenshot showing 5 guesses](https://i.imgur.com/uvwGEr6.png)

---

## Minutia

The message board was optimized for a clean UX and efficient code. For example, the create fields have character limtits, and the edit window is autofocused when that page is opened.

---

## Future Enhancements

-Update Schema to include likes counter and comments object
-Add "Scroll to top" button
-Add infinite scrolling loading ability so it loads less at a time when the page initially loads until the user scrolls
-Add users/authentication
-Edit button should edit post there on the newsfeed page, not on a separate page
-Enable blog post formatting of posts (line breaks do not currently render)

---

By Alex Westerlund
