export default function UserCard(props)

{
   
    // destructuring props
    const {name, age, skills} = props;
    // const name = props.name;
    // const age = props.age;
    // const skills = ["html", "css", "javascript", "react"];
    // skills.map((skill) => {
    //     console.log(skill); // This will log each skill to the console
    // });


    return (
        <>
        <h2>This is Usercard compoent</h2>
        <h3>Username :{name}</h3>
        <h3>Age :{age}</h3>
        <ul>

            {
            skills.map((skill) => (<li >{skill}</li>))
            
            }
        </ul>
        
        </>
    );
}