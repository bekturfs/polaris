import { AppProvider, Tooltip, TextStyle } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <div style={{padding: '75px 0'}}>
  <Tooltip active content="This order has shipping labels.">
    <TextStyle variation="strong">Order #1001</TextStyle>
  </Tooltip>
</div>
    </AppProvider>
  );
}

export default Example;
    