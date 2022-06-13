import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { useState,useEffect} from 'react';
import axios from 'axios';
// import { useSearchParams } from "react-router-dom";
import { useHistory,useLocation  } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const Tab1: React.FC = () => {
  const Tab3 = () => {
    const history = useHistory();
    const [fname, setFname] = useState<string>();
    const [lname, setLname] = useState<string>();
    // let [searchParams, setSearchParams] = useSearchParams();

    const setSave = async () => {
    
      const last_segment = window.location.pathname.split('/').pop();
      return axios.post('http://localhost:3000/users',{
      
        "firstName": fname,
        "lastName": lname,
        "id" : last_segment
       
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
    
      const last_segment = window.location.pathname.split('/').pop();
      const baseURl = 'http://localhost:3000/users/'+last_segment
      return axios
          .get(baseURl,{
           headers:{
                    'Content-Type' : 'application/json'
      },
      })
      .then((response: { data: any; }) => {
      // console.log(response);
      return response.data;
      })
      }
      useEffect(()=> {
        // sendRequest();
        sendRequest().then((data) => {
          console.log(data)
          setFname(data.firstName)
          setLname(data.lastName)
        })
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
              <IonInput onIonChange={e => setFname(e.detail.value!)}  value={fname}> </IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput onIonChange={e => setLname(e.detail.value!)} value={lname}> </IonInput>
            </IonItem>
            <IonButton expand="full" onClick={()=> setSave()}>Submit</IonButton>
          </IonList>
        </IonContent>
      </IonPage>
    );
};

export default Tab3;
function serializeFormQuery(target: any) {
  throw new Error('Function not implemented.');
}

