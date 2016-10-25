import DeviceInfo from 'react-native-device-info';

const {
  getUniqueID,
  getManufacturer,
  getBrand,
  getModel,
  getDeviceId,
  getSystemName,
  getSystemVersion,
  getBundleId,
  getBuildNumber,
  getVersion,
  getReadableVersion,
  getDeviceName,
  getUserAgent,
  getDeviceLocale,
  getDeviceCountry,
  getTimezone,
  getInstanceID,
  isEmulator
} = DeviceInfo;

const device = {
  uniqueId: getUniqueID(),
  manufacturer: getManufacturer(),
  brand: getBrand(),
  model: getModel(),
  deviceId: getDeviceId(),
  systemName: getSystemName(),
  getSystemVersion: getSystemVersion(),
  bundleId: getBundleId(),
  buildNumber: getBuildNumber(),
  version: getVersion(),
  readableVersion: getReadableVersion(),
  deviceName: getDeviceName(),
  userAgent: getUserAgent(),
  deviceLocale: getDeviceLocale(),
  deviceCountry: getDeviceCountry(),
  timezone: getTimezone(),
  instanceID: getInstanceID(),
  isEmulator: isEmulator()
};

export default device;
