import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "./json";
import * as SurveyTheme from "survey-core/themes";


function SurveyComponent({setValue,
        setValueYes, 
        setValueNo ,
        setNameCom,
        setProcentYes,
        setProcentNo
    }) {

    const survey = new Model(json);
        survey.applyTheme(SurveyTheme.DefaultDark);
    survey.onComplete.add((sender, options) => {



        let data = sender.data;
        let countYes = 0, countNo = 0;

        for( let i in data){
            if( data[i] === "Yes"){
                countYes++;
                setValueYes(countYes);
                setProcentYes((countYes/38)*100);
                
            }else if(data[i] === "No"){
                countNo++;
                setValueNo(countNo);
                setProcentNo((countNo/38)*100);
            }
        }


        setNameCom(data["Denumirea interprinderii"])



        if(Object.keys(data).length > 0 ){
            setValue(true)
        }

        
    });
    return (<Survey model={survey} />);
    

}

export default SurveyComponent;


// function SurveyComponent() {
//     const survey = new Model(json);
//     survey.applyTheme(SurveyTheme.DefaultDark);
//     survey.onComplete.add((sender, options) => {
//         console.log(JSON.stringify(sender.data, null, 3));
//     });
//     return (<Survey model={survey} />);
// }