import './App.css';
import { PieChart } from '@mui/x-charts/PieChart';
import SurveyComponent from './component/SurveyComponent'
import { useState } from 'react';


function App() {
  const [value,setValue] = useState(false);
  const [valueYes,setValueYes] = useState(0);
  const [valueNo,setValueNo] = useState(0);
  const [nameCom,setNameCom] = useState("");
  const [procentYes,setProcentYes] = useState(0);
  const [procentNo,setProcentNo] = useState(0);
  let passed  = (pas) =>{
    if(pas >= 80){
      return " compania a trecut testul de securitate cibernetică " 
    }
    return " compania nu a trecut testul de securitate cibernetică"
  }


  return (
    <div className='mainPage'>
      {value ? <div className='diagram'>
        <p>Denumirea companiei: {nameCom}</p>
        <p>Raspunsuri corecte: {valueYes}</p>
        <p>Raspunsuri gresite: {valueNo}</p>
        <p>Total raspunsuri: 38</p>
        <p className='finalR'>Securitatea:{passed(procentYes.toFixed(2))} {procentYes.toFixed(2)}%</p>
        <PieChart
        series={[
          {
            data: [
              { id: 0, value: valueYes,  },
              { id: 1, value: valueNo,  },
            ],
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        width={400}
        height={200}
      />
      </div>: <SurveyComponent setValue={setValue} 
        setValueYes={setValueYes}
        setValueNo={setValueNo}
        setNameCom={setNameCom} 
        setProcentYes={setProcentYes}
        setProcentNo={setProcentNo}
      />  }

    </div>
  );
}

export default App;
