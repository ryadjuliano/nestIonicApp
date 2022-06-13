import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { useState,useEffect} from 'react';
import axios from 'axios';

import { useHistory } from "react-router-dom";
// const Tab1: React.FC = () => {
  const Details = () => {
    const history = useHistory();
    const [fname, setFname] = useState<string>();
    const [lname, setLname] = useState<string>();

    const setSave = async () => {
    
    
      return axios.post('http://localhost:3000/users',{
      
        "firstName": fname,
        "lastName": lname
       
    })
      .then((response) => {
       console.log('hasil',response.status)
       // eslint-disable-next-line eqeqeq
       if (response.status == 201) {
        // alert('Created')
        history.push('/tab2');
        // Redirect('/tab2')     
        }
      });
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
        // sendRequest().then((data: { data: any; }) => {
        //   console.log(data.data)
        //   setListItems(data)
        // })
      })

      // React.useEffect(() => {
      //   // sendRequest().then(data => {
      //   //         setListItems(data.data)
      //   });
      //   }, []);
    // const { state, dispatch } = useContext(AppContext);

    // const hotTracks = getHotTracks(state);
    // const newTracks = getNewTracks(state);
  
    // const doPlay = useCallback(track => {
    //   dispatch(playTrack(track));
    // });

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Input Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            
            <IonItem>
              <IonLabel position="stacked">First Name</IonLabel>
              <IonInput onIonChange={e => setFname(e.detail.value!)}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput onIonChange={e => setLname(e.detail.value!)}> </IonInput>
            </IonItem>
            <IonButton expand="full" onClick={()=> setSave()}>Submit</IonButton>
          </IonList>
        </IonContent>
      </IonPage>
    );
};

export default Details;
