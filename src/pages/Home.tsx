import React from 'react';
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import {
  personOutline,
  bagHandleOutline
} from 'ionicons/icons';

import Service from './Services/Service';
import Products from './Products/Product';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>

          {/* Routes for each tab */}
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/tabs/service" />
            </Route>
            <Route exact path="/tabs/service" component={Service} />
            <Route exact path="/tabs/products" component={Products} />
          </IonRouterOutlet>

          {/* Bottom tab bar */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="service" href="/tabs/service">
              <IonIcon icon={personOutline} />
              <IonLabel>Services</IonLabel>
            </IonTabButton>

            <IonTabButton tab="products" href="/tabs/products">
              <IonIcon icon={bagHandleOutline} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default Home;
