import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'hot-update',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    LiveUpdates: {
      appId: 'cec51269',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 4,
    },
  },
};

export default config;
