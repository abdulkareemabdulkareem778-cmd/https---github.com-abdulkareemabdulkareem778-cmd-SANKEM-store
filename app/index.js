import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://abdulkareemabdulkareem778-cmd.github.io/SANKEM-store/shop.html' }}
      style={{ flex: 1 }}
    />
  );
}
