import React from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel
} from '@ionic/react';

// Static service prices
const SERVICE_PRICES: { [key: string]: number } = {
  'AC repair': 500,
  'Denting & painting': 800,
  'Cleaning & detailing': 300,
  'Roadside assistance': 400,
  'Clutch Repair': 600,
};

// Charges
const LABOR_CHARGE = 200;
const TOW_CHARGE = 500;
const SUBSCRIPTION_CHARGE = 1000;

// Static mock invoice data
const data = {
  location: 'Navi Mumbai',
  address: 'A 215 Ganesh Chowk, Navi Mumbai 400073',
  chassis: '1HGCM82633A123456',
  engine: 'PJ12345U123456P',
  vehicle: 'SUV',
  details: 'None',
  services: ['AC repair', 'Cleaning & detailing', 'Clutch Repair'],
  isSubscribed: false,
};

const Invoice: React.FC = () => {
  const towCharge = data.isSubscribed ? 0 : TOW_CHARGE;
  const servicesTotal = data.services.reduce((acc, item) => acc + (SERVICE_PRICES[item] || 0), 0);
  const totalAmount = servicesTotal + LABOR_CHARGE + towCharge;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Invoice</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="pl-2 py-4">Service Invoice</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem><IonLabel>Location: {data.location}</IonLabel></IonItem>
              <IonItem><IonLabel>Address: {data.address}</IonLabel></IonItem>
              <IonItem><IonLabel>Chassis Number: {data.chassis}</IonLabel></IonItem>
              <IonItem><IonLabel>Engine Number: {data.engine}</IonLabel></IonItem>
              <IonItem><IonLabel>Vehicle: {data.vehicle}</IonLabel></IonItem>
              <IonItem><IonLabel>Additional Details: {data.details}</IonLabel></IonItem>

              <IonItem><IonLabel>Selected Services:</IonLabel></IonItem>
              {data.services.map((service, idx) => (
                <IonItem key={idx}>
                  <IonLabel>{service} - ₹{SERVICE_PRICES[service]}</IonLabel>
                </IonItem>
              ))}

              <IonItem><IonLabel>Labor Charges: ₹{LABOR_CHARGE}</IonLabel></IonItem>
              <IonItem><IonLabel>Tow Charges: ₹{towCharge}</IonLabel></IonItem>

              <IonItem color="light">
                <IonLabel className="text-lg font-bold text-primary">
                  Total Amount: ₹{totalAmount}
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Invoice;
