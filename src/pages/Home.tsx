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
            <Route exact path="/home/service" component={Service} />
            <Route exact path="/home/products" component={Products} />
            <Route exact path="/home" component={Service} />
          </IonRouterOutlet>

          {/* Bottom tab bar */}
          <IonTabBar slot="bottom">
            <IonTabButton tab="service" href="/home/service">
              <IonIcon icon={personOutline} />
              <IonLabel>Services</IonLabel>
            </IonTabButton>

            <IonTabButton tab="products" href="/home/products">
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
