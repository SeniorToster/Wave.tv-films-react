import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Actors from '../Actors/Actors';
import styles from './TabsContent.module.scss';

function TabsContent({ description, kinopoiskId }) {
  const [tabIndex, setTabIndex] = useState(0);
  console.log(kinopoiskId);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList className={styles.header}>
        <Tab
          className={`${styles.header__title} ${
            0 === tabIndex ? styles.header__title_active : ''
          }`}
        >
          Описание
        </Tab>
        <Tab
          className={`${styles.header__title} ${
            1 === tabIndex ? styles.header__title_active : ''
          }`}
        >
          Актёры
        </Tab>
        <Tab
          className={`${styles.header__title} ${
            2 === tabIndex ? styles.header__title_active : ''
          }`}
        >
          Изображения
        </Tab>
      </TabList>
      <TabPanel>
        <h2 className={styles.description}>{description}</h2>
      </TabPanel>
      <TabPanel className={styles.tapPanel}>
        <Actors kinopoiskId={kinopoiskId} />
      </TabPanel>
      <TabPanel className={styles.tapPanel}>
        <h2>Факты</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabsContent;
