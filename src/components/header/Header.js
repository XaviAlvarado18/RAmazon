import React, {useState} from "react";
import "./css/Header.css";
import searchIcon from './../../img/searchIcon.png';
import ShoppingBasketIcon from './../../img/ShoppingBasketIcon.jpg'
import es from "./../../img/es.png"
import envGt from "./../../img/envGt.png"
import { Dropdown, DropdownButton } from 'react-bootstrap';


function Header() {

    const [text, setText] = useState("");

    const handleInputClick = () => {
        setText("");
    };

    return(
        <div className="header">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            <div className="header_search">
                <input className="header_searchInput" type="text" style={{position: "relative", width:"400px", height:"36px", left: "226px"}} placeholder="Buscar Amazon" onClick={handleInputClick} value={text} onChange={(e) => setText(e.target.value)}/>
                {/* LOGO */}
                <img src={searchIcon} alt="Search Icon"  style={{ width: "38px", height: "auto",position: "relative", left: "226px",top:"1px"}}/>
                <div className="header_gt">
                        <img src={envGt} alt="Search Icon" style={{position: "relative", right: "440px",top: "3px"}}/>
                </div>


                <Dropdown style={{ position: 'absolute', left:"290px"}}>
                    <Dropdown.Toggle variant="light" style={{ backgroundColor: '#f4f4f4', height: "36px",right:"15px"}} size="md" rounded={false} id="dropdown-basic">
                        Todos
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu">
                        <Dropdown.Item href="#/action-1">Todos los departamentos</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Arte y artesanías</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Automotriz</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Bebé</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Belleza y cuidado personal</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Cine y TV</Dropdown.Item>
                        <Dropdown.Item href="#/action-7">Computadoras</Dropdown.Item>
                        <Dropdown.Item href="#/action-8">Deportes y actividades al aire libre</Dropdown.Item>
                        <Dropdown.Item href="#/action-9">Electrónicos</Dropdown.Item>
                        <Dropdown.Item href="#/action-10">Equipaje</Dropdown.Item>
                        <Dropdown.Item href="#/action-11">Herramientas y mejoramiento del hogar</Dropdown.Item>
                        <Dropdown.Item href="#/action-12">Hogar y cocina</Dropdown.Item>
                        <Dropdown.Item href="#/action-13">Industrial y científico</Dropdown.Item>
                        <Dropdown.Item href="#/action-14">Insumos para mascotas</Dropdown.Item>
                        <Dropdown.Item href="#/action-15">Juguetes y juegos</Dropdown.Item>
                        <Dropdown.Item href="#/action-16">Libros</Dropdown.Item>
                        <Dropdown.Item href="#/action-17">Moda de niñas</Dropdown.Item>
                        <Dropdown.Item href="#/action-18">Moda de niños</Dropdown.Item>
                        <Dropdown.Item href="#/action-19">Moda para Hombre</Dropdown.Item>
                        <Dropdown.Item href="#/action-20">Moda para Mujer</Dropdown.Item>
                        <Dropdown.Item href="#/action-21">Música MP3</Dropdown.Item>
                        <Dropdown.Item href="#/action-22">Música, CD y vinilos</Dropdown.Item>
                        <Dropdown.Item href="#/action-23">Ofertas</Dropdown.Item>
                        <Dropdown.Item href="#/action-24">Prime Video</Dropdown.Item>
                        <Dropdown.Item href="#/action-25">Salud y productos para el hogar</Dropdown.Item>
                        <Dropdown.Item href="#/action-26">Software</Dropdown.Item>
                        <Dropdown.Item href="#/action-27">Tienda Kindle</Dropdown.Item>
                        <Dropdown.Item href="#/action-28">Videojuegos</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>   
            </div>
            <div className="header_nav">
                <div className="header_es">
                        <img src={es} alt="Search Icon" style={{position: "relative", left: "260px",top: "10px"}}/>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne" style={{position: "relative", left: "280px",top: "10px"}}>Hola, Identifícate</span>
                    <span className="header_optionLineTwo" style={{position: "relative", left: "280px",top: "10px"}}>Cuenta y Listas ↓</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne" style={{position: "relative", left: "280px",top: "10px"}}>Devoluciones</span>
                    <span className="header_optionLineTwo" style={{position: "relative", left: "280px",top: "10px"}}>y Pedidos ↓</span>
                </div>
                <div className="header_optionBasket">
                    <img src={ShoppingBasketIcon} alt="Search Icon" style={{ width: "15%", height: "auto",position: "relative", left: "300px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Header;