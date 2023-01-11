import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from './TabsContent.module.scss';

function TabsContent({ components }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList className={styles.header}>
        {components.map((tabName, index) => (
          <Tab
            key={tabName.name}
            className={`${styles.header__title} ${
              index === tabIndex ? styles.header__title_active : ''
            }`}
          >
            {tabName.name}
          </Tab>
        ))}
      </TabList>
      {components.map(component => (
        <TabPanel key={component.name}>{component.component}</TabPanel>
      ))}
    </Tabs>
  );
}

export default TabsContent;
