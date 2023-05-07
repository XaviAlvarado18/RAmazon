import React from "react";
import "./Home.css";
import Product from "../header/Product";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cmp1 from "./../../img/cmp1.png";
import cmp2 from "./../../img/cmp2.png";
import cmp3 from "./../../img/cmp3.png";
import cmp4 from "./../../img/cmp4.png";
import cmp5 from "./../../img/cmp5.png";
import cmp6 from "./../../img/cmp6.png";
import cmp7 from "./../../img/cmp7.png";
import cmp8 from "./../../img/cmp8.png";

function Home() {

    return(
        <div className="home">
            <div className="home_container">
            <Carousel showThumbs={false} showStatus={false}>
                <div>
                <img src="https://m.media-amazon.com/images/I/71qEsRtEnbL._SX3000_.jpg" alt="Imagen 1" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/719fZ4d8gwL._SX3000_.jpg" alt="Imagen 2" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/61UQQeoWdvL._SX3000_.jpg" alt="Imagen 3" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/61tX6L542kL._SX3000_.jpg" alt="Imagen 4" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/610UHMnjeYL._SX3000_.jpg" alt="Imagen 5" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/61IUQBqfQ1L._SX3000_.jpg" alt="Imagen 6" />
                </div>
                <div>
                <img src="https://m.media-amazon.com/images/I/7174eQSxuFL._SX3000_.jpg" alt="Imagen 7" />
                </div>
            </Carousel>
                <div className="home_row">
                    <Product 
                        id='btnuno'
                        title="Inicia sesión para vivir tu mejor experiencia"
                        image={cmp1}
                        showButton={false}
                    />
                    
                    <Product 
                        id='btn2'
                        title="Accesorios para juegos"
                        image={cmp2}
                        showButton={false}
                    />
                    <Product 
                        id='btn3'
                        title="Computadoras y Accesorios"
                        image={cmp3}
                    />
                    <Product 
                        id='btn4'
                        title="AmazonBasics"
                        image={cmp4}
                    />
                </div>
                <div className='home_row2'>
                    <Product 
                        id='btn5'
                        title="Salud y Cuidado Personal"
                        image={cmp5}
                    />
                    <Product 
                        id='btn6'
                        title="Ofertas y Promociones"
                        image={cmp6}
                    />

                    <Product 
                        id='btn7'
                        title="Electrónicos"
                        image={cmp7}
                    />

                    <Product 
                        id='btn8'
                        title="Devoluciones fáciles"
                        image={cmp8}
                    />
                </div> 
            
            </div>
        </div>
        
    )
}

export default Home;