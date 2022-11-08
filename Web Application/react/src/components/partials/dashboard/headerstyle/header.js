import React from 'react'
import {Container,Nav,Dropdown,Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomToggle from '../../../dropdowns'
import Card from '../../../card'
import Logo from '../../components/logo'

//img
import user1 from '../../../../assets/images/avatars/01.png'
import lay01 from '../../../../assets/images/layouts/01.png'
import lay02 from '../../../../assets/images/layouts/02.png'
import lay03 from '../../../../assets/images/layouts/03.png'
import lay04 from '../../../../assets/images/layouts/04.png'


const Header = () => {

    const minisidebar =() =>{
        document.getElementsByTagName('ASIDE')[0].classList.toggle('sidebar-mini')
    }

    
    return (
        <>
            <Navbar expand="lg" variant="light"  className="nav iq-navbar">
                <Container fluid className="navbar-inner">
                    <Link to="/" className="navbar-brand">
                        <Logo/>
                    </Link>
                    <div className="sidebar-toggle" data-toggle="sidebar" data-active="true" onClick={minisidebar}>
                        <i className="icon">
                            <svg width="20px" height="20px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                            </svg>
                        </i>
                    </div>
                    <div className="input-group search-input">
                    <span className="input-group-text" id="search-input">
                        <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.7669" cy="11.7666" r="8.98856" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path d="M18.0186 18.4851L21.5426 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    <input type="search" className="form-control" placeholder="Search..."/>
                    </div>
                    <Navbar.Toggle  aria-controls="navbarSupportedContent">
                        <span className="navbar-toggler-icon">
                            <span className="navbar-toggler-bar bar1 mt-2"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse   id="navbarSupportedContent">
                    <Nav as="ul" className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0">
                        <Dropdown as="li" className="nav-item">
                            <Dropdown.Toggle as={CustomToggle} variant="search-toggle nav-link">
                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7695 10.1453C16.039 9.29229 15.7071 8.55305 15.7071 7.29716V6.87013C15.7071 5.23354 15.3304 4.17907 14.5115 3.12459C13.2493 1.48699 11.1244 0.5 9.04423 0.5H8.95577C6.91935 0.5 4.86106 1.44167 3.577 3.0128C2.71333 4.08842 2.29293 5.18822 2.29293 6.87013V7.29716C2.29293 8.55305 1.98284 9.29229 1.23049 10.1453C0.676907 10.7738 0.5 11.5815 0.5 12.4557C0.5 13.3309 0.787226 14.1598 1.36367 14.8336C2.11602 15.6413 3.17846 16.1569 4.26375 16.2466C5.83505 16.4258 7.40634 16.4933 9.0005 16.4933C10.5937 16.4933 12.165 16.3805 13.7372 16.2466C14.8215 16.1569 15.884 15.6413 16.6363 14.8336C17.2118 14.1598 17.5 13.3309 17.5 12.4557C17.5 11.5815 17.3231 10.7738 16.7695 10.1453Z" fill="currentColor"/>
                                <path opacity="0.4" d="M11.0097 17.7285C10.5098 17.6217 7.46364 17.6217 6.96372 17.7285C6.53636 17.8272 6.07422 18.0568 6.07422 18.5604C6.09907 19.0408 6.38033 19.4648 6.76992 19.7337L6.76893 19.7347C7.27282 20.1275 7.86416 20.3773 8.48334 20.4669C8.8133 20.5122 9.14923 20.5102 9.49111 20.4669C10.1093 20.3773 10.7006 20.1275 11.2045 19.7347L11.2035 19.7337C11.5931 19.4648 11.8744 19.0408 11.8992 18.5604C11.8992 18.0568 11.4371 17.8272 11.0097 17.7285Z" fill="currentColor"/>
                                </svg>
                                <span className="bg-danger dots"></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="sub-drop dropdown-menu-end p-0">
                                <Card className="shadow-none m-0">
                                    <Card.Header className="bg-primary mx-0 px-4">
                                        <Card.Header.Title>
                                            <h5 className="mb-0 text-white">All Notifications</h5>
                                        </Card.Header.Title>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <img className="avatar-40 rounded-pill" src={lay01} alt=""/>
                                            <div className="ms-3 w-100">
                                                <h6 className="mb-0 ">Emma Watson Bni</h6>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">95 MB</p>
                                                    <small className="float-end font-size-12">Just Now</small>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded-pill" src={lay02} alt=""/>
                                            </div>
                                            <div className="ms-3 w-100">
                                                <h6 className="mb-0 ">New customer is join</h6>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Cyst Bni</p>
                                                    <small className="float-end font-size-12">5 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <img className="avatar-40 rounded-pill" src={lay03} alt=""/>
                                            <div className="ms-3 w-100">
                                                <h6 className="mb-0 ">Two customer is left</h6>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Cyst Bni</p>
                                                    <small className="float-end font-size-12">2 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                        <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <img className="avatar-40 rounded-pill" src={lay04} alt=""/>
                                            <div className="w-100 ms-3">
                                                <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Cyst Bni</p>
                                                    <small className="float-end font-size-12">3 days ago</small>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item">
                        <Dropdown.Toggle as={CustomToggle}  href="#" variant=" nav-link" id="notification-drop" data-bs-toggle="dropdown">
                            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M20 13.441C20 16.231 17.76 18.491 14.97 18.501H14.96H5.05C2.27 18.501 0 16.251 0 13.461V13.451C0 13.451 0.006 9.02498 0.014 6.79898C0.015 6.38098 0.495 6.14698 0.822 6.40698C3.198 8.29198 7.447 11.729 7.5 11.774C8.21 12.343 9.11 12.664 10.03 12.664C10.95 12.664 11.85 12.343 12.56 11.763C12.613 11.728 16.767 8.39398 19.179 6.47798C19.507 6.21698 19.989 6.45098 19.99 6.86798C20 9.07698 20 13.441 20 13.441Z" fill="currentColor"/>
                            <path d="M19.4769 3.174C18.6109 1.542 16.9069 0.5 15.0309 0.5H5.05086C3.17486 0.5 1.47086 1.542 0.60486 3.174C0.41086 3.539 0.50286 3.994 0.82586 4.252L8.25086 10.191C8.77086 10.611 9.40086 10.82 10.0309 10.82C10.0349 10.82 10.0379 10.82 10.0409 10.82C10.0439 10.82 10.0479 10.82 10.0509 10.82C10.6809 10.82 11.3109 10.611 11.8309 10.191L19.2559 4.252C19.5789 3.994 19.6709 3.539 19.4769 3.174Z" fill="currentColor"/>
                            </svg>
                            <span className="bg-primary count-mail"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="sub-drop dropdown-menu-end p-0" aria-labelledby="notification-drop">
                            <Card className="shadow-none m-0">
                                <Card.Header className="bg-primary mx-0 px-4">
                                    <Card.Header.Title>
                                    <h5 className="mb-0 text-white">All Message</h5>
                                    </Card.Header.Title>
                                </Card.Header>
                                <Card.Body className="p-0 ">
                                    <Link to="#" className="iq-sub-card">
                                        <div className="d-flex  align-items-center">
                                            <div>
                                                <img className="avatar-40 rounded-pill" src={lay01} alt=""/>
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0 ">Bni Emma Watson</h6>
                                                <small className="float-start font-size-12">13 Jun</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <img className="avatar-40 rounded-pill" src={lay02} alt=""/>
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                <small className="float-start font-size-12">20 Apr</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <img className="avatar-40 rounded-pill" src={lay03} alt=""/>
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0 ">Why do we use it?</h6>
                                                <small className="float-start font-size-12">30 Jun</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <img className="avatar-40 rounded-pill" src={lay04} alt=""/>
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0 ">Variations Passages</h6>
                                                <small className="float-start font-size-12">12 Sep</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="#" className="iq-sub-card">
                                        <div className="d-flex align-items-center">
                                            <div className="">
                                                <img className="avatar-40 rounded-pill" src={lay01} alt=""/>
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                <small className="float-start font-size-12">5 Dec</small>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as="li" className="nav-item">
                            <Dropdown.Toggle  as={CustomToggle}  href="#" variant="nav-link py-0 d-flex align-items-center" id="mail-drop" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                                <img src={user1} alt="User-Profile" className="img-fluid avatar avatar-50 avatar-rounded"/>
                                <div className="caption ms-3 d-none d-md-block ">
                                    <h6 className="mb-0 caption-title">Austin Robertson</h6>
                                    <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu as="ul" className="dropdown-menu-end" aria-labelledby="mail-drop">
                                <li><Dropdown.Item href="/app/user-profile">Profile</Dropdown.Item></li>
                                <li><Dropdown.Item href="/app/user-privacy-setting">Privacy Setting</Dropdown.Item></li>
                                <li><Dropdown.Divider /></li>
                                <li><Dropdown.Item href="/auth/sign-in">Logout</Dropdown.Item></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
