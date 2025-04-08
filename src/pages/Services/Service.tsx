import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,
  IonInput, IonSelect, IonSelectOption, IonCheckbox, IonLabel, IonButton, IonIcon, IonAlert
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import {
  carOutline, constructOutline, documentTextOutline, homeOutline,
  locationOutline, settingsOutline
} from 'ionicons/icons';

const Service: React.FC = () => {
  const history = useHistory();

  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [chassis, setChassis] = useState('');
  const [engine, setEngine] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [details, setDetails] = useState('');
  const [services, setServices] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const serviceOptions = [
    { name: 'AC repair', price: 1200 },
    { name: 'Denting & painting', price: 2500 },
    { name: 'Cleaning & detailing', price: 800 },
    { name: 'Roadside assistance', price: 1500 },
    { name: 'Clutch Repair', price: 1800 },
  ];

  const toggleService = (service: string) => {
    setServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = () => {
    setShowAlert(true);
  };

  const proceedToInvoice = (subscribed: boolean) => {
    setIsSubscribed(subscribed);

    const selectedServiceDetails = serviceOptions.filter(s => services.includes(s.name));
    let totalAmount = selectedServiceDetails.reduce((acc, s) => acc + s.price, 0);
    let towingCharge = 0;
    let serviceTime = '';

    if (subscribed) {
      totalAmount += 1000; // Subscription cost
      towingCharge = 0;
      serviceTime = 'Within 1 hour';
    } else {
      towingCharge = 500;
      totalAmount += towingCharge;
      serviceTime = 'Within 12 hours';
    }

    const invoiceData = {
      location,
      address,
      chassis,
      engine,
      vehicle,
      details,
      services: selectedServiceDetails,
      subscription: subscribed,
      towingCharge,
      serviceTime,
      totalAmount,
    };

    history.push({
      pathname: '/invoice',
      state: invoiceData,
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Services</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <div className="p-2 w-full">
            {/* Form Inputs */}
            <div className="flex items-center">
              <IonIcon icon={locationOutline} className="px-2" />
              <IonItem className="w-full font-light">
                <IonSelect value={location} onIonChange={e => setLocation(e.detail.value)} label="Location">
                  <IonSelectOption value="Vikhroli">Vikhroli</IonSelectOption>
                  <IonSelectOption value="Vashi">Vashi</IonSelectOption>
                  <IonSelectOption value="Navi Mumbai">Navi Mumbai</IonSelectOption>
                  <IonSelectOption value="Borivali">Borivali</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>

            <div className="flex items-center">
              <IonIcon icon={homeOutline} className="px-2" />
              <IonItem className="w-full">
                <IonInput value={address} onIonChange={e => setAddress(e.detail.value!)} placeholder="Address" />
              </IonItem>
            </div>

            <div className="flex items-center">
              <IonIcon icon={documentTextOutline} className="px-2" />
              <IonItem className="w-full">
                <IonInput value={chassis} onIonChange={e => setChassis(e.detail.value!)} placeholder="Chassis Number" />
              </IonItem>
            </div>

            <div className="flex items-center">
              <IonIcon icon={constructOutline} className="px-2" />
              <IonItem className="w-full">
                <IonInput value={engine} onIonChange={e => setEngine(e.detail.value!)} placeholder="Engine Number" />
              </IonItem>
            </div>

            <div className="flex items-center">
              <IonIcon icon={carOutline} className="px-2" />
              <IonItem className="w-full">
                <IonSelect value={vehicle} onIonChange={e => setVehicle(e.detail.value)} label="Select Vehicle">
                  <IonSelectOption value="SUV">SUV</IonSelectOption>
                  <IonSelectOption value="Yamaha">Yamaha</IonSelectOption>
                  <IonSelectOption value="TVS">TVS</IonSelectOption>
                  <IonSelectOption value="Suzuki">Suzuki</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>

            {/* Services with Price */}
            <div className="my-4">
              <IonIcon icon={settingsOutline} className="px-2" />
              <IonLabel className="font-bold">Select Services</IonLabel>
              {serviceOptions.map((serviceObj, index) => (
                <IonItem key={index}>
                  <IonCheckbox
                    justify="start"
                    checked={services.includes(serviceObj.name)}
                    onIonChange={() => toggleService(serviceObj.name)}
                  >
                    {`${serviceObj.name} — ₹${serviceObj.price}`}
                  </IonCheckbox>
                </IonItem>
              ))}
            </div>

            <IonItem className="w-full">
              <IonInput
                value={details}
                onIonChange={e => setDetails(e.detail.value!)}
                placeholder="Additional Details"
              />
            </IonItem>

            <div className="pt-4 mt-4 flex justify-center items-center">
              <IonButton color="success" onClick={handleSubmit}>
                Submit
              </IonButton>
            </div>
          </div>
        </IonList>

        {/* Subscription Alert */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Subscribe for ₹1000/year?"
          message={`
            👉 Free towing charges (Save ₹500 per service)!
            👉 Fast service delivery within 3 hour.
            Without subscription: ₹500 towing + service in 12 hours.
          `}
          buttons={[
            {
              text: 'No, Continue Without',
              role: 'cancel',
              handler: () => proceedToInvoice(false),
            },
            {
              text: 'Yes, Subscribe',
              handler: () => proceedToInvoice(true),
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Service;
