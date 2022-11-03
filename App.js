import logo from "./logo.svg";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to React...
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React, it will help you alot in your future, In Sha Allah.
//         </a>
//       </header>
//     </div>
//   );
// }

// function myApp() {
//   return (
//     <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//       </header>

//     <h1> My First Heading of React Application.</h1>
//     <p> Want to learn more about React so, kindly visit the following link:</p>
//     <a id="link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//    </div>
//   );
// }

// Assignment Number: 01 of React.js Saylani...

// function myApp()
// {
//   const name = "Hello World";
//   const obj = {name: "Hello World Object"};
//   const data = ["we", "are", "united"];
//   const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in separate tags
//   const complex = [{company: 'XYZ', jobs: ['JavaScript', 'React']}, {company: 'ABC', jobs: ['Angular', 'Ionic']}] //Show these in a Table
//   const lang = ["C", "C++","C#","Java","JavaScript","Python","Ruby","Flutter","Swift","Go"]
//   return (
//         <div className="App">
//            <header className="App-header">
//              <img src={logo} className="App-logo" alt="logo" />

//            {/* rendering the first task below: */}
//            <h3>Print Task:01 Text:</h3>
//            <p>{name}</p>

//            {/* rendering the second task below: */}
//            <h3>Print Task:02 Object:</h3>
//            <p>{obj.name}</p>

//            {/* rendering the third task below: */}

//            <h3> Task:03</h3>
//            <ol type='I'>
//            {
//               data.map(item =>{
//                 return <li>{item}</li>
//               })
//            }
//           </ol>

//            {/* rendering the fourth task below: */}

//            <h3>Task:04 Below:</h3>
//            <ul type='square'>
//             {
//               list.map(items => {
//                 return <li> {items.name}</li>
//               })
//             }
//            </ul>

//            {/* rendering the fifth task below: */}

//           <h2> Table View of Task:05</h2>
//           <table border='4'>
//              <tr>
//              <th>Company Name</th>
//              <th> Job Offers</th>
//             </tr>

//             <tr>
//               <td>{complex[0].company}</td>
//               <td>{complex[0].jobs.join(" ")}</td>
//             </tr>

//             <tr>
//               <td>{complex[1].company}</td>
//               <td>{complex[1].jobs.join(" ")}</td>
//             </tr>

//             </table>

//           </header>

//           </div>
//   )
// }

// Assignment Number: 02 of React.js Saylani...

function myThirdApp() {
  const ad = {
    title: "AC",
    price: 52000,
    ton: 1.5,
    isUsed: true,
    warantee: "1 year",
  }

  function check()
  {
    console.log(`${Object.keys(ad)} : ${Object.values(ad)}`);
    console.log("\n \n ");
    var values = [];
    Object.keys(ad).map(value => {values.push(value)});
    // console.log(values);
    values.forEach(item=>{
        console.log(item);
    })
  }
  
  

  const acs = [{
    title: 'Dawlance ABC123',
    price: 52000,
    ton: 1.5,
    isUsed: true,
    warantee: '1 year'
  }, {
    title: 'Gree XTYZ23',
    price: 40000,
    ton: 1,
    isUsed: false,
    warantee: '2 year'
  }, {
    title: 'Orient XTYZ23',
    price: 45000,
    ton: 1.5,
    isUsed: false,
    warantee: 'No'
  }]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Simple method for rendering an object into a table:</h1>
        <table border="2">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Title</td>
            <td>{ad.title}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{ad.price}</td>
          </tr>
          <tr>
            <td>Ton</td>
            <td>{ad.ton}</td>
          </tr>
          <tr>
            <td>Used</td>
            <td>{ad.isUsed ? "Yes" : "No"}</td>
          </tr>

          <tr>
            <td>Warranty</td>
            <td>{ad.warantee}</td>
          </tr>
        </table>

        <h1> Now with Dynamic method:</h1>
         <table border="2">
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
      
          {Object.keys(ad).map(key => {
            if(typeof ad[key] == 'boolean')
            {
              ad[key] = ad[key] ? "yes" :"no"
              return <tr>
              <td>{key}</td>
              <td> {ad[key]}</td>
              </tr>
            }
            else{
            return <tr>
            <td>{key}</td>
            <td> {ad[key]}</td>
            </tr>
            }

          })}
          
      </table>

          {/* Task 2: Use the below code and code it using .map in order to practice the 
          dynamic approach. */}
          
          <h1>Rendering an array of objects into table:</h1>
          <table id="third_table" border="3">
            <tr>
              {Object.keys(acs[0]).map(item => <th>{item}</th>)}
          
            </tr>
            {acs.map(item => {
              return <tr>
                {Object.values(item).map(value => {
                  if (typeof value == 'boolean')
                  {
                    return <td>{value ? 'Yes' : 'No'}</td>
                  }
                  return <td>{value}</td>

                })}
              </tr>
            })
          }

          </table>

          


      </header>
    </div>
  );
}
export default myThirdApp;

/*
For running the file, first of all do the following things:
1) Open terminal then move to the your respective app name.
   Like cd my-first-react-app.
2) Then write npm start there in the terminal.
*/
