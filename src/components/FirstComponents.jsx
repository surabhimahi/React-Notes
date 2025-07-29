// Component is a small part of UI and it is javascription function that returns a JSX.
// Components should always start with Capital letter.
// JSX - Syntax expansion of Javascript +html 
// Always use <> </> fragment tag if multiple jsx elements are available in return statement.
//Return statement returns the JSX element


// This is a default export functional component.
// A jsx file should contain only default export component
//  Use - This kind of import FirstComponent .... statement for default export 
export  function FirstComponent(){
    return (
        
        // code between <> </> is a JSX Element.
        <>
        <h2> This is my first component </h2>
        <app/>
        </>
    );
}


// This is a named export functional component.
// A jsx file should contain as many as named export component
//  Use - This kind of import {SecondComponent} .... statement for default export 
export function SecondComponent(){
    return (

        <>
        <h2> This is my Second component </h2>
        <app/>
        </>

    );
}
