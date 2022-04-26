import { AppProvider, Badge, Card, Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import '@shopify/polaris/build/esm/styles.css';
import translations from '@shopify/polaris/locales/en.json';

function TabsWithBadgeExample() {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-fitted-3',
      content: (
        <span>
          All <Badge status="new">10+</Badge>
        </span>
      ),
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-fitted-content-3',
    },
    {
      id: 'accepts-marketing-fitted-3',
      content: (
        <span>
          Accepts marketing <Badge status="new">4</Badge>
        </span>
      ),
      panelID: 'accepts-marketing-fitted-content-3',
    },
  ];

  return (
    <Card>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <Card.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </Card.Section>
      </Tabs>
    </Card>
  );
}

function Example() {
  return (
    <AppProvider i18n={translations}>
      <TabsWithBadgeExample />
    </AppProvider>
  );
}

export default Example;
    