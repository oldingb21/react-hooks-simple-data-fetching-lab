import React, {useState, useEffect} from "react"
const App = () => {
    const [image, setImage] = useState(null)
    const dogURL = "https://dog.ceo/api/breeds/image/random"

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random').then(r=>r.json())
        .then(dog=>setImage(dog.message))
    }, [])

    if(!image) return <p>Loading...</p>
    return (
        <>
            <img src={image} alt="A Random Dog"></img>
        </>
    )
}

export default App