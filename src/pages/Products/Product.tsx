import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonButton,
  IonIcon
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';

const products = [
    {
      name: 'Rider Helmet',
      image: 'src\\Media\\shopping.webp',
      price: '₹1,299',
    },
    {
      name: 'Engine Oil',
      image: 'src\\Media\\engineOil.jpg',
      price: '₹499',
    },
    {
      name: 'Bike Gloves',
      image: 'src\\Media\\bikeGloves.webp',
      price: '₹699',
    },
    {
      name: 'Car Wax Polish',
      image: 'src\\Media\\carWax.jpg',
      price: '₹299',
    },
    {
      name: 'Air Freshener',
      image: 'src\\Media\\airFreshner.jpg',
      price: '₹149',
    },
    {
      name: 'Tyre Inflator',
      image: 'src\\Media\\tyreInflator.jpg',
      price: '₹999',
    },
    {
      name: 'Mobile Holder',
      image: 'src\\Media\\mobileHolder.jpg',
      price: '₹349',
    },
    {
      name: 'Car Vacuum Cleaner',
      image: 'src\\Media\\vacuumCleaner.jpg',
      price: '₹1,299',
    },
    {
      name: 'Seat Cover',
      image: 'src\\Media\\seatCover.jpg',
      price: '₹899',
    },
    {
      name: 'Raincoat for Bikers',
      image: 'src\\Media\\rainCoat.jpg',
      price: '₹799',
    },
    {
      name: 'Motorbike Cover',
      image: 'src\\Media\\bikeCover.jpg',
      price: '₹599',
    },
    {
      name: 'Car Duster',
      image: 'src\\Media\\carDuster.jpg',
      price: '₹199',
    }
  ];
 
const Products: React.FC = () => {
  const handleAdd = (productName: string) => {
    console.log(`Added ${productName} to cart.`);
    // Add to cart logic here
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="text-center">Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonList>
  {products.map((product, index) => (
    <IonItem
      key={index}
      className="items-center"
      style={{ marginBottom: '12px', borderRadius: '12px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}
    >
      <IonImg
        src={product.image}
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginRight: '12px',
        }}
        slot="start"
      />
      <IonLabel>
        <h2 className="font-medium">{product.name}</h2>
        <p className="text-sm text-gray-500">Price: {product.price}</p>
      </IonLabel>
      <IonButton
        slot="end"
        fill="outline"
        size="small"
        color="primary"
        onClick={() => handleAdd(product.name)}
      >
        <IonIcon icon={addOutline} slot="icon-only" />
      </IonButton>
    </IonItem>
  ))}
</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Products;
