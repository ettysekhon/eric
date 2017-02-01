# Notifications

### Server side
---
1. setup an instance of mongodb (use mlab then move it to docker)
2. setup a node/express parse server example (use the parse server example)
3. setup parse dashboard

### Client side
---
Create the certificate:
---

https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppDistributionGuide/AddingCapabilities/AddingCapabilities.html#//apple_ref/doc/uid/TP40012582-CH26-SW6

https://calvium.com/how-to-make-a-p12-file/

Configure the client:
---
a) Things you need to do in XCode/Objective C
---
Manual linking process:
* Add the following to your Project: node_modules/react-native/Libraries/PushNotificationIOS/RCTPushNotification.xcodeproj
* Add the following to Link Binary With Libraries: libRCTPushNotification.a
* Add the following to your Header Search Paths: $(SRCROOT)/../node_modules/react-native/Libraries/PushNotificationIOS and set the search to recursive

Finally, to enable support for notification and register events you need to augment your AppDelegate.

At the top of your AppDelegate.m:

#import "RCTPushNotificationManager.h"

And then in your AppDelegate implementation add the following:

```
// Required to register for notifications
   - (void)application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings
   {
    [RCTPushNotificationManager didRegisterUserNotificationSettings:notificationSettings];
   }
   // Required for the register event.
   - (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
   {
    [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
   }
   // Required for the notification event. You must call the completion handler after handling the remote notification.
   - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo
                                                          fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
   {
     [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
   }
   // Required for the registrationError event.
   - (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
   {
    [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];
   }
   // Required for the localNotification event.
   - (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification
   {
    [RCTPushNotificationManager didReceiveLocalNotification:notification];
   }
```



b) Things you need to do in JS
---

1. You need to store device tokens in Parse server somehow from your React Native app

How do you obtain the device token?

```
PushNotificationIOS.addEventListener('register', (token) => {  
  console.log("I got the token yeehaw! "+token);
});

PushNotificationIOS.requestPermissions();
```

How do you store that token in Parse server so that Parse finds the tokens automatically and you can send push notifications to devices through parse dashboard? You need to now send this token to Parse, this is how you do it:

1. You need to create an _Installation object for that device in Parse.
2. That object should have the push token obtained in the PushNotificationIOS's register event listener.

```
PushNotificationIOS.addEventListener('register', (token) => {  
  Parse._getInstallationId()
    .then(function(id) {
      var Installation = Parse.Object.extend("_Installation");
      var query = new Parse.Query(Installation);
      query.equalTo("installationId", id);
      query.find()
        .then((installations) => {
          var installation;
          if (installations.length == 0) {
            // No previous installation object, create new one.
            installation = new Installation();
          } else {
            // Found previous one, update.
            installation = installations[0];
          }
          installation.set("channels", []);
          installation.set("deviceToken", token);
          installation.set("deviceType", "ios");
          installation.set("installationId", id);
          return installation.save()
        })
        .catch((error) => {
          console.log("Error:");
          console.log(error);
        });
    });
});
```
Add that to your React Native code, re-run the application.

Now if you go to parse dashboard (remember to refresh) you should see a new class called "Installation" and your device in it.

If that is true, you should be able to send push notifications through parse dashboard UI and receive them in your device.


### Links
1. http://absurd.tech/parse-server-react-native-push/
2. https://github.com/zo0r/react-native-push-notification/blob/master/trouble-shooting.md
### F8App implementation analysis:
