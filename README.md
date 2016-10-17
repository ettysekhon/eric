# eric
Early Reporting Information Centre

## Backlog for MVP

### Screens:
---
1. create a splash screen
2. create email signup screen (email and submit)
3. create pin entry screen
3. create summary screen (on test account success show the summary page)

### Components:
5. Create form components -> form input and label (label component)

### Small Items:
---
1. Validate email address
2. Validate pin code (all numbers)
3. Create logo (icon only)
4. Create logo (icon and text)
1. Use linear gradient colour

### Assets:
---
1. Create splash Screens
2. Create Icons

### API: (email form is signup form and pin is login form)
1. /signup (send email address and device information)
2. /login (send PIN and device information) -> authenticate PIN and email (later device as well)
3. /summary (return summary data) -> authenticated request with web token

## Startup / Login

#### On exit app
1. Logout
2. Persist reducer state
#### On enter app
1. load state from Async storage (email address)
2. Have I successfully logged in with email address/PIN?
  YES --> show PIN entry screen (option to goto email entry form)
  NO --> show email entry screen

## No Internet connection
1. display appropriate message on Summary screen
2. on email or pin submit -> do not change view just show error under submit form

## Backlog

* 3 pin entry failure then account is locked
4. if account is real account create page to show
6. expander accordian (maybe earlier)
7. nav bar header with parallax
1. swipeable screen (left makes you pop navigator)
4. Use PixelRatio for Images?
5. real data use HTTPS API?

## Backlog/Nice to haves
1. Responsive text - bigger text for bigger devices
2. Use React Native Navigator Experimental
