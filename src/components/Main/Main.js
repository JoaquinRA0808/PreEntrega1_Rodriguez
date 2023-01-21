import React, { Children } from "react"
import Carousel from "../Carousel/Carousel"
import Navbar from "../Navbar/Navbar"

const Main = (props) => {

        const {children} = props
    return (
        <main>
            <Carousel/>
            <Navbar/>
            {children}
            <h1>Yo soy el footer </h1>
        </main>
    )
}

export default Main