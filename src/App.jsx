// import statement for named functional component
import {FirstComponent} from "./components/FirstComponents";
import UserCard from "./components/UserCard";


// import statement for default functional component
// import FirstComponent from "./components/FirstComponents";

// props - properties where we can send data from one component to another component
export function App()
{
  const userName = "react developer";
  const userAge = 25;
  const skills = ["html", "css", "javascript", "react"];
  return (
  // fragment 
    <>
    <h2>This is app component </h2>
    <div className ="container">
    <UserCard name ={userName} age ={userAge} skills ={skills} />
    </div>
    <UserCard name ={userName} age ={userAge} skills ={skills} />
    <UserCard name ={userName} age ={userAge} skills ={skills} />
    
    {/* sending data /passing props to a component */}
   
    </>
  );
   
}
// html + javascript - jsx...

//react - jsx elements are 2 independent concepts


//if we have many functional components in a file export default will 
// export that particular component to the place where it has been rendered

//props - properties where we can send data from from one comp to another component
