import './App.css';
import {products} from "./products";
import ProductCard, {getPhotoFromName} from "./components/ProductCard";
import {Box, Button} from "@mui/material";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import {useState} from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function App() {
    const [itemSelected, setItemSelected] = useState(null);

    return (
        <Box className="App">
            <AppBar/>
            {itemSelected === null ?
                <>
                    <h1>Products</h1>
                    <Box style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: "30px",
                        padding: "20px",
                        justifyContent: "center"
                    }}>
                        {products.map((product) => {
                                return <ProductCard onSelect={(p) => setItemSelected(p)} product={product}/>
                            }
                        )}
                    </Box>
                </> : (
                    <div style={{minHeight: "90vh", display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <Button onClick={() => setItemSelected(null)}>
                            <ArrowBackIcon/>
                            Back to product list
                        </Button>
                        <h2>{itemSelected.name}</h2>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: "30px",
                            padding: "5px",
                            justifyContent: "center",
                            maxWidth: "800px"
                        }}>
                            <img style={{height: "350px"}} src={getPhotoFromName(itemSelected.name)}
                                 alt="no image"/>
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <div><b>Description:</b> {itemSelected.description}</div>
                                <div><b>Price:</b> {itemSelected.price}€</div>
                                <div><b>To place orders, please contact us at: <i>office@inabisvla.com</i></b></div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Footer/>
        </Box>
    );
}

export default App;
