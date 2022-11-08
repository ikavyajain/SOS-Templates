import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Card from '../../../components/card'

// img
import fav from '../.././../assets/images/favicon.png'
import fb from '../.././../assets/images/brands/fb.svg'
import gm from '../.././../assets/images/brands/gm.svg'
import li from '../.././../assets/images/brands/li.svg'
import im from '../.././../assets/images/brands/im.svg'
import auth09 from '../.././../assets/images/auth/09.png'

const SignIn = () => {
   let history =useHistory()
   return (
      <>
         <section className="container-fluid bg-circle-login" id="auth-sign">
            <Row className="align-items-center">
               <Col md="12" lg="7" xl="4">
                  <Card.Body>
                     <Link to="/">
                        <img src={fav} className="img-fluid logo-img" alt="img4"/>
                     </Link>
                     <h2 className="mb-2 text-center">Sign In</h2>
                     <p className="text-center">Sign in to stay connected.</p>
                     <Form>
                        <Row>
                           <Col lg="12">
                              <Form.Group className="form-group">
                                 <Form.Label htmlFor="email">Email</Form.Label>
                                 <Form.Control type="email" className="form-control-sm" id="email" aria-describedby="email" placeholder=" "/>
                              </Form.Group>
                           </Col>
                           <Col lg="12">
                              <Form.Group className="form-group">
                                 <Form.Label htmlFor="password">Password</Form.Label>
                                 <Form.Control type="password" className="form-control-sm" id="password" aria-describedby="password" placeholder=" "/>
                              </Form.Group>
                           </Col>
                           <Col lg="12" className="d-flex justify-content-between">
                              <Form.Check className="form-check mb-3">
                                 <Form.Check.Input type="checkbox" id="customCheck1"/>
                                 <Form.Check.Label htmlFor="customCheck1">Remember Me</Form.Check.Label>
                              </Form.Check>
                              <Link to="/auth/recoverpw">Forgot Password?</Link>
                           </Col>
                        </Row>
                        <div className="d-flex justify-content-center">
                           <Button onClick={() => history.push('/')} type="submit" variant="primary">Sign In</Button>
                        </div>
                        <p className="text-center my-3">or sign in with other accounts?</p>
                        <div className="d-flex justify-content-center">
                           <ul className="list-group list-group-horizontal list-group-flush">
                              <li className="list-group-item border-0 pb-0">
                                 <Link to="#"><img src={fb} alt="fb"/></Link>
                              </li>
                              <li className="list-group-item border-0 pb-0">
                                 <Link to="#"><img src={gm} alt="gm"/></Link>
                              </li>
                              <li className="list-group-item border-0 pb-0">
                                 <Link to="#"><img src={im} alt="im"/></Link>
                              </li>
                              <li className="list-group-item border-0 pb-0">
                                 <Link to="#"><img src={li} alt="li"/></Link>
                              </li>
                           </ul>
                        </div>
                        <p className="mt-3 text-center">
                           Don’t have an account? <Link to="/auth/sign-up" className="text-underline">Click here to sign up.</Link>
                        </p>
                     </Form>
                  </Card.Body>
               </Col>
               <Col md="12" lg="5" xl="8" className="d-lg-block d-none vh-100 overflow-hidden">
                  <img src={auth09} className="img-fluid sign-in-img" alt="images"/>
               </Col>
            </Row>
         </section>    
      </>
    )
}

export default SignIn
