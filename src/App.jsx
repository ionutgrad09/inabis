import './App.css';
import {products} from "./products";
import ProductCard from "./components/ProductCard";
import {Box} from "@mui/material";
import AppBar from "./components/AppBar";

function App() {
    return (
        <Box className="App">
            {/*<header className="App-header">*/}
            {/*    <h1>Hello from INABIS! Work in progress...</h1>*/}
            {/*</header>*/}
            <AppBar />
            <Box style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30px", padding: "20px", justifyContent: "center"}}>
                {products.map((product) => {
                        return <ProductCard name={product.name} price={product.price} image={product.photo}/>
                    }
                )}
            </Box>
        </Box>
    );
}

export default App;
