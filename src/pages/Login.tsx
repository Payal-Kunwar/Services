import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { callOutline, lockClosedOutline, mailOutline, navigate, personOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import React from "react";
import { Redirect } from "react-router";
const Login: React.FC = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const history = useHistory();
    const handleVerify = (e: React.MouseEvent<HTMLIonButtonElement>) =>{
        e.preventDefault();
        history.push('/home');
    }
    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle className="text-center">Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonList>
            <div className="p-4 form">
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={mailOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="email" placeholder="Email"></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonIcon icon={lockClosedOutline} className="pr-2"/>
                    <IonItem>
                        <IonInput type="password" placeholder="Password"></IonInput>
                    </IonItem>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonButton color="success" onClick={handleVerify}>Login</IonButton>
                </div>
                <div className="p-2 flex justify-center items-center">
                    <IonText>
                        Don’t have an account?
                    </IonText>
                    <IonRouterLink routerLink="/register" className="font-medium ml-1 text-green-500">
                        Register
                    </IonRouterLink>
                </div>
            </div>
            </IonList>
        </IonContent>
        </IonPage>
    )
} 
export default Login