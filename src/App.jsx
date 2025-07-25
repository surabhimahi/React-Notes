// import statement for named functional component
import {FirstComponent} from "./components/FirstComponents";


// import statement for default functional component
// import FirstComponent from "./components/FirstComponents";

export function App()
{
  return (
  // fragment 
    <>
    <h2> this is a sample app compoent </h2>
    {/* FirstComponent - child component,  App  - parent component */}
    <FirstComponent />
    <p> this is paragraph tag from app compoent</p>
    </>
  );
   
}
// html + javascript - jsx...

//react - jsx elements are 2 independent concepts


//if we have many functional components in a file export default will 
// export that particular component to the place where it has been rendered

//props - properties where we can send data from from one comp to another component
