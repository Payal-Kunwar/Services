import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,
  IonInput, IonLabel, IonButton, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardContent
} from '@ionic/react';

const Admin: React.FC = () => {
  const [products, setProducts] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [services, setServices] = useState<{ name: string; price: number }[]>([]);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productQty, setProductQty] = useState<number>(0);

  const [serviceName, setServiceName] = useState('');
  const [servicePrice, setServicePrice] = useState<number>(0);

  const addProduct = () => {
    if (!productName || productPrice <= 0 || productQty < 0) return;
    setProducts([...products, { name: productName, price: productPrice, quantity: productQty }]);
    setProductName('');
    setProductPrice(0);
    setProductQty(0);
  };

  const addService = () => {
    if (!serviceName || servicePrice <= 0) return;
    setServices([...services, { name: serviceName, price: servicePrice }]);
    setServiceName('');
    setServicePrice(0);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Admin Panel</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {/* Product Form */}
        <IonCard className="mb-6 p-4">
          <IonCardHeader>
            <IonCardTitle>Add Product</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Product Name</IonLabel>
              <IonInput value={productName} onIonChange={e => setProductName(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Price (₹)</IonLabel>
              <IonInput type="number" className="mt-4" value={productPrice} onIonChange={e => setProductPrice(Number(e.detail.value))} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Quantity</IonLabel>
              <IonInput type="number" className="mt-4" value={productQty} onIonChange={e => setProductQty(Number(e.detail.value))} />
            </IonItem>
            <IonButton expand="block" className="mt-4" color="success" onClick={addProduct}>
              Add Product
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Product List */}
        {products.length > 0 && (
          <IonCard className="mb-6 p-4">
            <IonCardHeader>
              <IonCardTitle>Products</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                {products.map((p, index) => (
                  <IonItem key={index} lines="full">
                    <IonLabel className="flex justify-between w-full">
                      <span className="font-medium">{p.name}</span>
                      <span>₹{p.price} | Qty: {p.quantity}</span>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        )}

        {/* Service Form */}
        <IonCard className="mb-6 p-4">
          <IonCardHeader>
            <IonCardTitle>Add Service</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Service Name</IonLabel>
              <IonInput value={serviceName} onIonChange={e => setServiceName(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating" >Price (₹)</IonLabel>
              <IonInput type="number" className="mt-4" value={servicePrice} onIonChange={e => setServicePrice(Number(e.detail.value))} />
            </IonItem>
            <IonButton expand="block" color="success" onClick={addService}>
              Add Service
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Service List */}
        {services.length > 0 && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Services</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonList>
                {services.map((s, index) => (
                  <IonItem key={index} lines="full">
                    <IonLabel className="flex justify-between w-full">
                      <span className="font-medium">{s.name}</span>
                      <span>₹{s.price}</span>
                    </IonLabel>
                  </IonItem>
                ))}
              </IonList>
            </IonCardContent>
          </IonCard>
        )}

      </IonContent>
    </IonPage>
  );
};

export default Admin;
