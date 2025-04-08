import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon,
  IonRouterOutlet, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonInput, IonItem, IonButton, IonList, IonLabel as IonTextLabel, IonAlert
} from '@ionic/react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { clipboardOutline, constructOutline } from 'ionicons/icons';

// Static service and product data
const staticServices = [
  { id: 'S001', name: 'AC Repair', user: 'Amit', price: 1200, location: 'Vikhroli' },
  { id: 'S002', name: 'Cleaning', user: 'Pooja', price: 800, location: 'Vashi' }
];

const staticProducts = [
  { id: 'P001', name: 'Brake Pads', user: 'Rahul', price: 400, quantity: 2 },
  { id: 'P002', name: 'Coolant', user: 'Sneha', price: 300, quantity: 1 }
];

// Services Tab Content
const ServicesContent: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAdd = () => {
    if (name && price > 0) {
      setShowAlert(true);
      setName('');
      setPrice(0);
    }
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="p-4">Add Service</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput value={name} placeholder="Service Name" onIonChange={e => setName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonInput type="number" value={price} placeholder="Price (₹)" onIonChange={e => setPrice(Number(e.detail.value))} />
          </IonItem>
          <IonButton expand="block" color="success" onClick={handleAdd}>Add Service</IonButton>
        </IonCardContent>
      </IonCard>

      <IonList>
        {staticServices.map((s, idx) => (
          <IonItem key={idx}>
            <IonTextLabel>
              <strong>{s.name}</strong> | ₹{s.price} | {s.location} | User: {s.user}
            </IonTextLabel>
          </IonItem>
        ))}
      </IonList>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Service Added"
        message="This will not update the list below."
        buttons={['OK']}
      />
    </>
  );
};

// Products Tab Content
const ProductsContent: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleAdd = () => {
    if (name && price > 0 && qty > 0) {
      setShowAlert(true);
      setName('');
      setPrice(0);
      setQty(0);
    }
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="p-4">Add Product</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem>
            <IonInput value={name} placeholder="Product Name" onIonChange={e => setName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonInput type="number" value={price} placeholder="Price (₹)" onIonChange={e => setPrice(Number(e.detail.value))} />
          </IonItem>
          <IonItem>
            <IonInput type="number" value={qty} placeholder="Quantity" onIonChange={e => setQty(Number(e.detail.value))} />
          </IonItem>
          <IonButton expand="block" color="success" onClick={handleAdd}>Add Product</IonButton>
        </IonCardContent>
      </IonCard>

      <IonList>
        {staticProducts.map((p, idx) => (
          <IonItem key={idx}>
            <IonTextLabel>
              <strong>{p.name}</strong> | ₹{p.price} x {p.quantity} | User: {p.user}
            </IonTextLabel>
          </IonItem>
        ))}
      </IonList>

      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="Product Added"
        message="This will not update the list below."
        buttons={['OK']}
      />
    </>
  );
};

// Admin Page with Tabs
const Admin: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Admin</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
          <Route exact path="/admin/services" component={ServicesContent} />
          <Route exact path="/admin/products" component={ProductsContent} />
          <Route exact path="/admin" component={ServicesContent} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="services" href="/admin/services">
              <IonIcon icon={constructOutline} />
              <IonLabel>Services</IonLabel>
            </IonTabButton>
            <IonTabButton tab="products" href="/admin/products">
              <IonIcon icon={clipboardOutline} />
              <IonLabel>Products</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Admin;