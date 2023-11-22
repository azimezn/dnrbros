import React from 'react';
import Nav from 'react-bootstrap/Nav';

const pages = ["Home", "Community", "Renovation", "Showroom", "Cabinets", "Countertops", "LVP", "Tile", "Hardware", "SALE", "Blog", "Financing", "Contact"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header>
            <h1>DESIGN & REMODEL BROTHERS</h1>
            <p>YOUR HOME, REIMAGINED</p>
            <Nav className="justify-content-center" activeKey={currentPage}>
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    <Nav.Item key={item}>
                        <Nav.Link onClick={() => setCurrentPage(item)}
                            style={{
                                color: currentPage === item ? "gray" : "transparent"
                            }}
                            className="nav-link">
                            {item}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </header>
    )
}

export default Header