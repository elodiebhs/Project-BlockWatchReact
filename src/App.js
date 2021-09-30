
import Header from "./Components/Header";
import Table from "./Components/Table"
import UserFormParent from "./Components/Form/UserFormParent"
import Table2 from './Components/Table2'
import {useState} from 'react';

//example
// function Parent(){

//   const onChildClick =(param1)=>{
//     console.log(param1);
//   }

//   const demo = () => {
//     onChildClick("a")
//   }

//   return (
//     <Child name={"child a"} onChildClick={onChildClick}/>
//   )
// }

// function Child(prop){
  
//   // in child            vs   in parent
//   // prop.onChildClick() => onChildClick()
//   return (
//     <>
//     <div>{prop.name}</div>
//     <button onClick={()=> prop.onChildClick("child calling")}>click</button>
//     </>
//   )
// }


function App() {

 const [userDetails, setUserDetails] = useState({});

  const submittedData = (userDetails)=>{
    console.log("data");
    console.log(userDetails);
    // render the compoenent, updated state data will be passed to all the childs as props
    setUserDetails(userDetails)
  }

  return (
    <div className="app-container">
      {/* <Parent/> */}
      <Header />

      <UserFormParent  submittedData={submittedData}/>

      {/* <Form /> */}

      <Table userDetails={userDetails} />

      {/* <Table2 /> */}


    </div>
  );
}

export default App;
