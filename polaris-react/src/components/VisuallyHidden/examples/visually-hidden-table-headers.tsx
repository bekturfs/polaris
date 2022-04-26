import { AppProvider, VisuallyHidden } from "@shopify/polaris";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';


function Example() {
  return (
    <AppProvider i18n={translations}>
      <table>
  <thead>
    <tr>
      <th scope="col">
        <VisuallyHidden>Line item</VisuallyHidden>
      </th>
      <th scope="col">
        <VisuallyHidden>Value</VisuallyHidden>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Subtotal</th>
      <td>$184.13</td>
    </tr>
    <tr>
      <th scope="row">Tax</th>
      <td>$0.00</td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td>$184.13</td>
    </tr>
  </tbody>
</table>
    </AppProvider>
  );
}

export default Example;
    