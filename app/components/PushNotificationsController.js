// var React = require('react');
// var PushNotification = require('react-native-push-notification');
// var { connect } = require('react-redux');
// var {
//   storeDeviceToken,
//   receivePushNotification,
//   updateInstallation,
// } = require('./actions');
//
// import type { Dispatch } from './actions/types';
//
// const PARSE_CLOUD_GCD_SENDER_ID = '1076345567071';
//
// class PushNotificationController extends React.Component {
//   props: {
//     enabled: boolean;
//   };
//
//   componentDidMount() {
//     const {dispatch} = this.props;
//     PushNotification.configure({
//       onRegister: ({token}) => dispatch(storeDeviceToken(token)),
//       onNotification: (notif) => dispatch(receivePushNotification(notif)),
//       senderID: PARSE_CLOUD_GCD_SENDER_ID,
//       requestPermissions: this.props.enabled,
//     });
//   }
//   componentDidUpdate(prevProps) {
//     if (!prevProps.enabled && this.props.enabled) {
//       PushNotification.requestPermissions();
//     }
//   }
//   render() {
//     return null;
//   }
// }
//
// function select(store) {
//   return {
//     enabled: store.notifications.enabled === true,
//   };
// }
//
// module.exports = connect(select)(PushNotificationController);
