
import {PDFViewer} from '@react-pdf/renderer';
import './App.css';
import Pdf from './Pdf';

const App = () => {
  return (
    <div className="App">
      <PDFViewer height={760} width={1200}>
        <Pdf/>
       
      </PDFViewer>
      <button>Submit</button>
    </div>
  );
}

export default App;
