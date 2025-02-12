import "../styles/details.css";
import { useState } from "react";

function Details() {
  const [isclicked, setisclicked] = useState(false);

  const [name, setname] = useState("");
  const [math, setmath] = useState(0);
  const [phy, setphy] = useState(0);
  const [che, setche] = useState(0);
  const [eng, seteng] = useState(0);
  const [ele, setele] = useState(0);
  const [array, setarray] = useState([]);

  function handelchange() {
    const newele = {
      name: name,
      math: math,
      phy: phy,
      che: che,
      eng: eng,
      ele: ele,
    };
      if(name !="" && math !=0 && phy !=0 && che !=0 && eng !=0 && ele !=0){
      setarray((a) => [...a, newele]);
      setname("");
      setmath(0);
      setphy(0);
      setche(0);
      seteng(0);
      setele(0);
    }


  }


  

  const submit = () => {
    setisclicked(true);
  };

  return (
    <>
      <div className="details-header">
        <h1>Click here to add student details ➡️</h1>
        <button onClick={submit}>ADD</button>
      </div>
      {isclicked && (
        <div className="table-container">
          <input
            placeholder="student name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          ></input>
          <input
            placeholder="MATH"
            value={math}
            type="number"
            onChange={(e) => setmath(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="PHYSICS"
            value={phy}
            onChange={(e) => setphy(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="CHEMISTRY"
            value={che}
            onChange={(e) => setche(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="ENGLISH"
            value={eng}
            onChange={(e) => seteng(e.target.value)}
          ></input>
          <input
            type="number"
            placeholder="ELECTRONICS"
            value={ele}
            onChange={(e) => setele(e.target.value)}
          ></input>
          <button onClick={handelchange} className="submit-btn">Submit</button>
          <table>
            <thead>
              <tr>
                <th>Student Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th>Maths&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th> Physics&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th> Chemistry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th> English&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                <th> Electronics</th>
              </tr>
            </thead>
            <tbody>
              {array.map((element, index) => (
                <tr key={index}>
                  <th>{element.name}</th>
                  <th>{element.math}</th>
                  <th>{element.phy}</th>
                  <th>{element.che}</th>
                  <th>{element.eng}</th>
                  <th>{element.ele}</th>
                </tr>
              ))}
            </tbody>  
          </table>
        </div>
      )}
    </>
  );
}
export default Details;
