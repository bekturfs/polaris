import { AppProvider, MediaCard } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <MediaCard
  title="Get closer to launching your store"
  primaryAction={{
    content: 'Add a product',
    onAction: () => {},
  }}
  secondaryAction={{
    content: 'Learn more',
    onAction: () => {},
  }}
  description="Start your business with eye-catching inventory."
  popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
>
  <img
    alt=""
    width="100%"
    height="100%"
    style={{objectFit: 'cover', objectPosition: 'center'}}
    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
  />
</MediaCard>
    </AppProvider>
  );
}

export default Example;
    