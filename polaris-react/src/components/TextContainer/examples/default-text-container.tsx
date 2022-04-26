import { AppProvider, TextContainer, Heading } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <TextContainer>
  <Heading>Install the Shopify POS App</Heading>
  <p>
    Shopify POS is the easiest way to sell your products in person. Available
    for iPad, iPhone, and Android.
  </p>
</TextContainer>
    </AppProvider>
  );
}

export default Example;
    