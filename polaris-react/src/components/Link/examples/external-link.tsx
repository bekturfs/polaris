import { AppProvider, Link } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <Link url="https://help.shopify.com/manual" external>
  Shopify Help Center
</Link>
    </AppProvider>
  );
}

export default Example;
    