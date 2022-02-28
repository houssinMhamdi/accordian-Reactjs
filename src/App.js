import { useState } from 'react';
import './App.css';
import data from './data'
import Qestion from './Qestion';
function App() {
 const [questions ,setQuestions] = useState(data)

  return (
    <main>
        <div className="container">
          <h3>question and answers about login</h3>
          <section className="info">
            {questions.map((question)=>{
              return(
                <Qestion key={question.id} {...question}/>
              )
            })}
          </section>
        </div>
    </main>
  );
}

export default App;
