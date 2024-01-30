import { useEffect, useState } from "react";

const state = {
    puppies: []
}
const PlayerList = ({setShowDetails}) => {
    const [puppies, setPuppies] = useState([])
    
    useEffect(() => {
        const getPuppies = async() => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT/players`)
            const responseJson = await response.json();
            //console.log(responseJson)
            const puppies = await responseJson.data.players;
            setPuppies([...puppies])
            //console.log(puppies);
        }
        getPuppies();
    })
    
    return (
        <>
            <h1>Players</h1>
            {
                puppies.map((singlePuppy) => {
                    return (<div onClick={setShowDetails(true)}  key={singlePuppy.name}>
                        {singlePuppy.name}</div>
                    )
                })  
            }
        </>
    )
}

export default PlayerList;