import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Actors from '../Actors/Actors';
import Description from '../Description/Description';
import Facts from '../Facts/Facts';
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
          Факты
        </Tab>
      </TabList>
      <TabPanel>
        <Description text={description} />
      </TabPanel>
      <TabPanel className={styles.tapPanel}>
        <Actors kinopoiskId={kinopoiskId} />
      </TabPanel>
      <TabPanel className={styles.tapPanel}>
        <Facts kinopoiskId={kinopoiskId} />
      </TabPanel>
    </Tabs>
  );
}

export default TabsContent;
