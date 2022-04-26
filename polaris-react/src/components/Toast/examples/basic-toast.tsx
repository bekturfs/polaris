import { AppProvider, Toast, Frame, Page, Button } from "@shopify/polaris";
import { useState, useCallback } from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';

function ToastExample() {
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} />
  ) : null;

  return (
    <div style={{height: '250px'}}>
      <Frame>
        <Page title="Toast example">
          <Button onClick={toggleActive}>Show Toast</Button>
          {toastMarkup}
        </Page>
      </Frame>
    </div>
  );
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <ToastExample />
    </AppProvider>
  );
}

export default Example;
    