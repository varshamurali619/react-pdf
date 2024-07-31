import React from 'react'
import { Page,Text,Image,Document,StyleSheet} from '@react-pdf/renderer';
import logo1 from './asset/logo1.png';
const styles = StyleSheet.create({
    body: {
      paddingTop: 1,
      paddingBottom: 65,
      paddingHorizontal: 1,
     
     
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    text: {
      marginLeft:42,
      fontSize: 10,
      textAlign: 'justify',
      fontFamily: 'Times-Roman',
      color:"#353935",
    },
    
    section1:{
      textAlign:'center'
    },
    image: {
      width: '58px',
      height: '58px',
      objectfit: 'cover',
      objectposition: '15% 100%',
      marginRight:10,
      
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 5,
      marginBottom: 5, 
      marginLeft:42,
     
    },
    column: {
      fontSize: 10,
      fontFamily: 'Times-Roman',
      color: "#353935",
      
    },
    sn: {
      width: 30
    },
    medicine: {
      flex: 4,
     
    },
    timing: {
      flex: 1.5
    },
    frequency: {
      flex: 1.5 
    },
    duration: {
      flex: 1.5
    },
    quantity: {
      width: 48, 
      
    },
    remarks: {
      flex: 1,
     
    },

    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      textAlign:'left',
      marginBottom: 20,
      borderBottom:2,
      borderBottomColor:"#4ba5fa",
      color:"#4ba5fa",
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    text_line:{
       color:"#4ba5fa",
       fontSize:10,
       fontWeight:400,
       padding:10,
       marginLeft:32, 
    },
    bold:{
      fontWeight:'bold'
    },
    
  });
  
const Pdf=() => {
  return (
      <Document title='Prescription'>
        <Page size="A4" style={styles.body}>
          <view style={styles.flexContainer}>
            <Image style={styles.image} src={logo1}/> 
            <view>
            <Text style={{marginBottom:8,fontSize:12,marginTop:4}}>Dr.LAVANYA </Text>
            <Text style={{fontSize:10,fontWeight:'normal',marginBottom:8}}>Gynecology service</Text>
             <Text style={{fontSize:10,fontWeight:'normal'}}>74159 </Text>
             </view>
             <view>
             <Text style={{fontSize:12,marginLeft:152,marginTop:16,marginBottom:8}}>Health care</Text>
             <Text style={{fontSize:10,fontWeight:'normal',
              marginLeft:152
             }}>7th cross street,Ashok nagar,Chennai,Karnataka,India,600115.</Text>
             </view>
          </view>
           
            <Text style={{marginLeft:42}}>Rx</Text>
            <view style={{flexDirection:'row'}}>
            <Text style={[styles.text,{marginRight:180}]}>Mr.Sakshi | Female | 9841528897</Text>
            <Text style={styles.text}>Date & Time:24-07-2024, 18:32:06</Text>
            </view>
           
            <Text style={styles.text_line}>Reason for visit</Text>
            <Text style={styles.text}>Fever, Colotomy, Eye pain</Text>
            <Text style={styles.text_line}>Symptoms</Text>
            <Text style={styles.text}>Leg swelling symptom,Hip pain</Text>
            <Text style={styles.text_line}>History of Present Illness</Text>
            <Text style={styles.text}>Cold, pain</Text>
            <Text style={styles.text_line}>Vitals</Text>
            <Text style={[styles.text,{marginBottom:16,paddingBottom:8,borderBottom:1,borderBottomColor:'#d6d2d1'}]}>Height: <Text style={styles.bold}>158cm </Text>
             Weight: <Text  style={styles.bold}>56kg </Text>
             BMI: <Text  style={styles.bold}>22.43 </Text>
             Newborn adaptation:12

            </Text>

            <Text style={[styles.text,{marginBottom:16,paddingBottom:8,borderBottom:1,borderBottomColor:'#d6d2d1'}]}>BP: <Text>120/80 </Text>
            Time: Wed jul 24 2024 18:11:26
            </Text>
            <Text style={styles.text}>Pulse: <Text>72 </Text>
            SPO2: <Text>95% </Text>
            Temp: <Text> 39 Deg F </Text>
            Resp: <Text> 16rpm </Text>
            Time: Wed jul 24 2024 18:11:26
            </Text>
            <Text style={styles.text_line}>Allergies</Text>
            <Text style={styles.text}>Dust,Milk</Text>
            <Text style={styles.text_line}>Physical Examinations</Text>
            <Text  style={styles.text}>Consiousness-Normal Orientation-Abnormal Acne-Abnormal-Check Build_Normal-Normal 22.43
              Thyroid-Abnormal-Hypothyroidism P/A-Normal-pale not fair P/V-Normal-ut term good
            </Text>
            <Text style={styles.text_line}>Diagnosis</Text>
            <Text  style={styles.text}>Papillon-lefevre syndrome, Malaria</Text>
            <Text style={styles.text_line}>Report Finding</Text>
            <Text  style={styles.text}>Type:Blood,IssueDate:24-07-2024,Description:blood text,IssueDate:24-07-2024</Text>
            <Text style={styles.text_line}>Prescribe</Text>
            
            <view style={styles.row}>
              <Text style={[styles.column, styles.sn]}>S.no</Text>
              <Text style={[styles.column, styles.medicine]}>Medicine</Text>
              <Text style={[styles.column, styles.timing]}>Timing</Text>
              <Text style={[styles.column, styles.frequency]}>Frequency</Text>
              <Text style={[styles.column, styles.duration]}>Duration</Text>
              <Text style={[styles.column, styles.quantity]}>Quantity</Text>
              <Text style={[styles.column, styles.remarks]}>Remarks</Text>
            </view>
            <view style={styles.row}>
              <Text style={[styles.column, styles.sn]}>1</Text>
              <Text style={[styles.column, styles.medicine]}>Paracetamol 100 MG Oral Tablet</Text>
              <Text style={[styles.column, styles.timing]}>After Food</Text>
              <Text style={[styles.column, styles.frequency]}>1-0-0-1</Text>
              <Text style={[styles.column, styles.duration]}>5 days</Text>
              <Text style={[styles.column, styles.quantity]}>10</Text>
              <Text style={[styles.column, styles.remarks]}>-</Text>
            </view>
            <view style={styles.row}>
              <Text style={[styles.column, styles.sn]}>2</Text>
              <Text style={[styles.column, styles.medicine]}>ApplyGel</Text>
              <Text style={[styles.column, styles.timing]}>After Food</Text>
              <Text style={[styles.column, styles.frequency]}>1-0-0-0</Text>
              <Text style={[styles.column, styles.duration]}>2 week</Text>
              <Text style={[styles.column, styles.quantity]}>1</Text>
              <Text style={[styles.column, styles.remarks]}>-</Text>
            </view>
            <view style={styles.row}>
              <Text style={[styles.column, styles.sn]}>3</Text>
              <Text style={[styles.column, styles.medicine]}>L 30 Mg Oral Capsule</Text>
              <Text style={[styles.column, styles.timing]}>After Food</Text>
              <Text style={[styles.column, styles.frequency]}>0-1-0-0</Text>
              <Text style={[styles.column, styles.duration]}>1 month</Text>
              <Text style={[styles.column, styles.quantity]}>15</Text>
              <Text style={[styles.column, styles.remarks]}>-</Text>
            </view>
            <view style={styles.row}>
              <Text style={[styles.column, styles.sn]}>4</Text>
              <Text style={[styles.column, styles.medicine]}>
                Folitrax 20 MG/Ml solution for injection</Text>
              <Text style={[styles.column, styles.timing]}>After Food</Text>
              <Text style={[styles.column, styles.frequency]}>1-1-0-1</Text>
              <Text style={[styles.column, styles.duration]}>4 days once</Text>
              <Text style={[styles.column, styles.quantity]}>12</Text>
              <Text style={[styles.column, styles.remarks]}>-</Text>
            </view>
            

            <Text style={styles.text_line}>Advice</Text>
            <Text style={styles.text}>Normal-tale rest Emergency-call ambulance</Text>
            <Text style={styles.text_line}>Follow Up</Text>
            <Text style={styles.text}>29-07-2024</Text>
            <Text style={styles.text_line}>Prescribe Investigation</Text>
            <Text style={styles.text}>urine ratio Date:2024-07-24, Blood test Date:2024-07-24 </Text>
            
            <Text style={styles.text_line}>Service Fees</Text>
            <Text style={[styles.text,{marginBottom:16,paddingBottom:8,borderBottom:1,borderBottomColor:'#d6d2d1'}]}>S.no{'                                     '}
           Service name{'                                                         '}
           Fees</Text>
           
           <Text style={[styles.text,{marginBottom:16,paddingBottom:8,borderBottom:1,borderBottomColor:'#d6d2d1'}]}> 1{'                                          '}
            consultation Fees{'                                                   '} 
            200.00
           </Text>
           <Text style={[styles.text,{marginBottom:16,paddingBottom:8,borderBottom:1,borderBottomColor:'#d6d2d1'}]}> 2{'                                          '}
            wound cleaning{'                                                      '} 
            500.00
           </Text>
           <Text style={[styles.text,{marginLeft:42,paddingBottom:80}]}>Total: 700.00</Text>
         
            <Text style={[styles.text,{fontSize:8,paddingBottom:4}]}>
             This prescription electronically signed by Dr. LAVANYA, Gynecology service,74159,Wed Jul 24 2024 18:32:06 
             GMT+0530(India Standard Time) powered by
           </Text>
           <Image style={styles.image} src={logo1}/> 
            <Text style={styles.pageNumber} render={({pageNumber,totalPages})=>(`${pageNumber} / ${totalPages}`)} fixed/>
        </Page>
      </Document>
  )
}

export default Pdf;
