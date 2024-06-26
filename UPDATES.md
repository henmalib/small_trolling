## 0.4.4

- Move theme switcher to Settings (will be populated in the future)
- Fix padding for Custom Roles page
- Fix visual name for rosebox

## 0.4.3

This update was made by @hen

- useAPI to remove onMount
- RouteGuard to remove onMount
- Changed some `sx` styles to tailwind classes, less bandwidth thanks to gzip and less classes like `.css_hkj12h3`
- API uses generics now
- Added themes

## 0.4.2

- Fix padding

## 0.4.1

- Add the ability for users to add to themselves custom roles
- Correct text error in polls

## 0.4.0

This update was made by @hen

- Extracted some code to remove duplication/improve readability
- Changed the way how footer/navbar were rendered, it was horror
- Some small changes for Box sizes for mobile
- No reload on changing theme
- Adding/changing themes now a little easier

## 0.3.9

- Fix broken redirect to rules

## 0.3.8

- Log users in on register
- Update rules

## 0.3.7

- Add percentage to polls page

## 0.3.6

- Fix bug where voting buttons would appear active even though the poll ended

## 0.3.5

- Send user to dashboard if their token is invalid

## 0.3.4

- Fix mobile (had to make desktop ultrawide tho)
- Added admin buttons

## 0.3.3

- Added pagination
- Added sorting
- Added time till end of a poll

## 0.3.2

- Fixed bug where additional buttons are randomly added

## 0.3.1

- Fixed bug where buttons to vote on users disappeared (?)

## 0.3.0

- Fixed bug where users whose global username was the same as their slug were displayed as having the name null
- Voting page now locks once a vote is cast (Votes will be editable in the future, dont worry)

## 0.2.9

- Invites can now be added to the end of a register link (Example: `https://demo.samu.lol/#/register?invite=EXAMPLE`)

## 0.2.8

- Admins can now see the invite for each poll
- Poll buttons become disabled once it ends

## 0.2.7

- Attempt to fix broken routing using hash router.
- Fix user get

## 0.2.6

- Fixed some errors not appearing in login and register page

## 0.2.5

- Fixed an endpoint being renamed

## 0.2.4

- Sorry to anyone that might've noticed (probably not), but fixed boxes being offcentered
- Added a footer with version of the frontend and the backend

## 0.2.3

- Fix profile pictures not loading in polls page

## 0.2.2

- Add proper routing for register page

## 0.2.1

- Correct API library base URL

## 0.2.0

- Change authentication system to new passworded one
- Show which events are active and which are not

## 0.1.4

- Edit API library so that the API version is specified on the baseurl

## 0.1.3 (b)

- Move to new domain
- Move to new versioning system
- (b) Fix domain

## 0.1.2

- Fix error handling for voting page
- Added new API endpoint

## 0.1.1

- Added AppBar, so that icons are now organized
- Finished adding errors to all pages

## 0.1.0

- Stop using shoelace components, and use SUID components
- Add light/dark mode (defaults to dark mode)
- Add ClosableAlert component, so now the alerts wont be fullscreen popups, but closable boxes
- Home button on logged in pages (home button just brings you to current events, might make actual dashboard at some point)
- Log out button
