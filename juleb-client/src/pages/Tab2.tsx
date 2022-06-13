import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonNote, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

import { useState,useEffect} from 'react';
import axios from 'axios';


// const Tab1: React.FC = () => {
  const Tab2 = () => {
    const [ listItems, setListItems ] = useState<any>([]);
    const baseUrl = '/tab3/'
    const setDelete = async (d: any) => {
      // alert(d)
      await axios.delete('http://localhost:3000/users/'+d);
      alert('Deleted')
    }
    const sendRequest = () => {
      return axios
          .get('http://localhost:3000/users',{
           headers:{
                    'Content-Type' : 'application/json'
      },
      })
      .then((response: { data: any; }) => {
      console.log(response);
      return response.data;
      })
      }
      useEffect(()=> {
        sendRequest().then((data: { data: any; }) => {
          console.log(data)
          setListItems(data)
        })
      })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List Users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab sss1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>


 
  {/* Multi-line sliding item with icon options on both sides */}
  { listItems.map((item:any) => (
  <IonItemSliding id="item100">
    <IonItem href={baseUrl+item.id}>
      <IonLabel>
        <h2>{item.firstName}</h2>
        <p>{item.lastName}</p>
        <p>{item.isActive}</p>
      </IonLabel>
      <IonNote slot="end">
        10:45 AM
      </IonNote>
    </IonItem>
   
    <IonItemOptions side="end">
      <IonItemOption color="danger">
        <IonIcon onClick={() => setDelete(item.id)} slot="icon-only" icon={trash} />
      </IonItemOption>
    
    </IonItemOptions>
  </IonItemSliding>
  ))}

  
</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
