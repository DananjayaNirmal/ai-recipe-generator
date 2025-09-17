import {createRoot} from "react-dom/client"
import Header from "./componants/Header"
import Main from "./componants/Main"
//import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(
    <>
    <Header/>
    <Main/>
    </>
)

