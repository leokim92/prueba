import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting='Traditional korean Folk Costume'/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer greeting='Traditional korean Folk Costume'/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
