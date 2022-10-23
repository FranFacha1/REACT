import { useEffect } from "react";

const Effect = () => {
    
    useEffect(() => {
        console.log("despues de render")

        return () => {
            console.log("antes de desmontarse")
        }
    }, [])

    console.log("render")

    return (
        <div>
            <h1>Effect</h1>
        </div>
    )
}

export default Effect