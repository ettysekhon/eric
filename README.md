# eric
Early Reporting Information Centre

### Increment 1 Tasks:
---
1. setup app to use custom font [DONE]
* create responsive text [DONE]
* add theme colors [DONE]
* create summary data view [DONE]
  * create table component [DONE]
  * create card component [DONE]
* create email entry view [DONE]
* create pin entry view [DONE]
* implement application data flow and routing [DONE]
* setup app certificates for app stores [DONE]
* create splash screens (all sizes) [DONE]
* create icons (all sizes) [DONE]
* validate app and upload [DONE]
* submit to testflight [DONE]
* create API (returning dummy data)
* wire up API calls
* create offline handling
* responsive text/orientation handling

### Increment 2 Tasks:
---
1. some minor tech tasks
  * add .eslintrc file
  * use rnpm link for fonts
* get real API data

### Screens:
---

### Components:
---

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

1. 3 pin entry failure then account is locked
* if account is real account create page to show
* expander accordian
* nav bar header with parallax
* swipeable screen (left makes you pop navigator)
* Use PixelRatio for Images?
* real data use HTTPS API?
* Responsive text - bigger text for bigger devices
* Use React Native Navigator Experimental
