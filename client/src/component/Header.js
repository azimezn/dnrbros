import React from 'react';
import Nav from 'react-bootstrap/Nav';

const pages = ["Home", "Community", "Renovation"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header>
            <h1>Design & Remodel Brothers</h1>
            <Nav className="justify-content-center" activeKey={currentPage}>
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    <Nav.Item key={item}>
                        <Nav.Link onClick={() => setCurrentPage(item)}
                            style={{
                                color: currentPage === item ? "#f9f1ec" : "transparent"
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