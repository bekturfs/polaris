import { AppProvider, Page, Badge, Card } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <Page
  breadcrumbs={[{content: 'Products', url: '/products'}]}
  title="Jar With Lock-Lid"
  titleMetadata={<Badge status="attention">Verified</Badge>}
  primaryAction={{content: 'Save', disabled: true}}
  secondaryActions={[{content: 'Duplicate'}, {content: 'View on your store'}]}
  pagination={{
    hasPrevious: true,
    hasNext: true,
  }}
>
  <Card title="Credit card" sectioned>
    <p>Credit card information</p>
  </Card>
</Page>
    </AppProvider>
  );
}

export default Example;
    