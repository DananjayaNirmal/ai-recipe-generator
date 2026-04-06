import logo from "../images/logo.png"

export default function Header(){
    return(
        <div className = "header">
            <img src = {logo}/>  
            <h3>AI Recipe Generator</h3>
            
        </div>
    )
}