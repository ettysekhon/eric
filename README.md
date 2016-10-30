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
* create API (returning dummy data) [DONE]
* send device data on API calls (for logging) [DONE]
* wire up API calls [DONE]
* handle signup/login errors from API [DONE]
* handle summary error from API [DONE]
* add loading spinners [DONE]
* security logging/analytics [DONE]
* create offline handling [DONE]

FRIDAY:
-------
* JWT
* create test credentials to return test data for app store testers:

  1. on startup loadDeviceToken
    a) do i have a device token?
      Y => show login screen
      N => show signup screen

  2. onSignup call api/signup and return a device token [SAVE DEVICE TOKEN]
      request: { emailAddress: '', device: {} }
      response: { emailAddress: '', deviceToken: {} }

      SAVE THE DEVICE ID!

  3. onLogin  call api/login and return a session token [SAVE SESSION TOKEN]
      request: { pinCode: '', device: {} }
      response: { sessionToken: '', device: {} }
      response: error {
        message: ['invalid PIN code', 'account locked']
      }

* use fixed accounts setup test account:
{
  emailAddress: 'eric@blackfriday.com'
  pinCode: '2511'
}

* summary view => authenticate credentials api/summary request
    on fail => do we have email address? then show login view otherwise signup view

* on app exit => always log user out!
  https://facebook.github.io/react-native/docs/appstate.html

* add signup link on login screen
* persist signup/email address on device (so user does not have to re-enter)


### Increment 1 or 2 Tasks:
---
* create tab view
* responsive text/orientation handling (see signup screen)
* update landscape view to include additional columns
* accordian/expander to hide data               [https://github.com/naoufal/react-native-accordion]
[https://github.com/oblador/react-native-collapsible]
* update final screen shots and descriptions for app store listing
* submit to app store
* update android assets
* test on android
* submit to play store

### Increment 2 Tasks (no app store deployment required):
---
* use IP range/firewall (to restrict usage/add security)
* IP security testing
* use real API data (summary)
* use real API data (top 10)

### Increment 3 Tasks:
---
* use HTTPS on API - remove IP range/firewall
* app notifications
* web dashboard:
  -> enable/disable accounts
  -> view usage logs/analytics
  -> send custom notifications
  -> control adobe data refresh/poll frequency
* lock account on n failed login attempts
* persist data on device for offline viewing?
* submit to app/play store

### Any other features:
---
* nav bar header with parallax
* swipeable screen (left makes you pop navigator)
* Add animations
  * signup/login buttons on failure
  * summary entrance animation
* Use PixelRatio for Images?
* Responsive text - bigger text for bigger devices

### Screens:
---

### Components:
---

### Assets:
---

### API: (email form is signup form and pin is login form)
1. /signup (send email address and device information)
2. /login (send PIN and device information) -> authenticate PIN and email (later device as well)
3. /summary (return summary data) -> authenticated request with web token

## Startup / Login

#### On exit app
1. Logout
2. Persist reducer state (email address for now)
#### On enter app
1. load state from Async storage (email address)
2. Do i have persisted email address?
  YES -> show PIN entry screen (can goto email entry form via link)
  NO -> show email entry screen

## No Internet connection
1. display appropriate message on Summary screen
2. on email or pin submit -> do not change view just show error under submit form

## Backlog

* Other minor tech tasks
  * add .eslintrc file
  * use rnpm link for fonts
