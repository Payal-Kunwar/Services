import { IonBackButton, IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { arrowBackOutline, callOutline, lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
import { IonInputCustomEvent, InputChangeEventDetail } from '@ionic/core';
import { useState } from "react";
const Register: React.FC = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [formVal, setFormVal] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: ''
    })
    const handleFormValChange = (event: IonInputCustomEvent<InputChangeEventDetail>) => {
        setFormVal(prevFormVal => ({
            ...prevFormVal,
            fullName: event.detail.value || ''
        }))
    }
    const handleSubmit = () =>{
        console.log(formVal)
    }
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle className="pl-2 text-center">Register</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonList>
            <div className="p-4 form">
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={personOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput className="p-2" placeholder="Full name" value={formVal.fullName} onIonChange={handleFormValChange}></IonInput> 
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={mailOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="email" placeholder="Email" value={formVal.fullName} onIonChange={handleFormValChange}></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={lockClosedOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="password" placeholder="Password" value={formVal.fullName} onIonChange={handleFormValChange}></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={lockClosedOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="password" placeholder="Confirm Password"></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={callOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="tel" placeholder="Phone" value={formVal.fullName} onIonChange={handleFormValChange}></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonButton color="success" onClick={handleSubmit}>Sign Up</IonButton>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonText>
                       Back to
                    </IonText>
                    <IonRouterLink routerLink="/login" className="font-medium ml-1 text-green-500">
                        Login
                    </IonRouterLink>
                </div>
            </div>
            </IonList>
        </IonContent>
        </IonPage>
    )
} 
export default Register