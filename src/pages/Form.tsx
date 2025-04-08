import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { callOutline, lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
import { IonInputCustomEvent, InputChangeEventDetail } from '@ionic/core';
import { useState } from "react";

const Form: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                    <IonTitle>Form</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                <IonList>
                    <div className="p-4 form">
                        <div className="p-2 flex justify-center items-center">
                            <IonIcon icon={personOutline} className="pr-2"/>
                            <IonItem>
                                <IonInput className="p-2" placeholder="Full name"></IonInput> 
                            </IonItem>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <IonIcon icon={mailOutline} className="pr-2"/>
                            <IonItem>
                                <IonInput type="email" placeholder="Email" ></IonInput>
                            </IonItem>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <IonIcon icon={lockClosedOutline} className="pr-2"/>
                            <IonItem>
                                <IonInput type="password" placeholder="Password" ></IonInput>
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
                                <IonInput type="tel" placeholder="Phone" ></IonInput>
                            </IonItem>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <IonButton color="success">Submit</IonButton>
                        </div>
                        <div className="p-2 flex justify-center items-center">
                            <IonText>
                               Back to
                            </IonText>
                            <IonRouterLink routerLink="/login" className="text-primary font-medium ml-1">
                                Login
                            </IonRouterLink>
                        </div>
                    </div>
                    </IonList>
                </IonContent>
                </IonPage>
    )
}

export default Form