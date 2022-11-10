import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function Checkout() {
  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          {/* Cart */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Shopping Cart
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      {/* <img
                        src="https://i.imgur.com/2DsA49b.webp"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      /> */}
                      <div className="flex-column ms-4">
                        <p className="mb-2">Medicine 1</p>
                        <p className="mb-0">Pharmacy 1</p>
                      </div>
                    </div>
                  </th>
                  
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={2}
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $9.99
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      {/* <img
                        src="https://i.imgur.com/Oj1iQUX.webp"
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      /> */}
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                            Medicine 2
                        </p>
                        <p className="mb-0">Pharmacy 2</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      $13.50
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          {/* Delivery Address */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Delivery Address
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">{' '}</th>
                  <th scope="col">{' '}</th>
                </tr>
              </MDBTableHead>
              <p> {' '}</p>
              <MDBTableBody>
                <MDBCard
                  className="shadow-2-strong mb-5 mb-lg-0"
                  style={{ width: "1062px", borderRadius: "40px" }}
                >
                  <MDBCardBody className="p2-4">

                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "482px"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "482px"}}
                              placeholder="Street Address"
                              size="lg"
                              minlength="16"
                              maxlength="16"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "313px"}}
                              placeholder="City"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 

                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "300px"}}
                              placeholder="Province"
                              size="lg"
                              minlength="3"
                              maxlength="3"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "300px"}}
                              placeholder="Postal Code"
                              size="lg"
                              minlength="6"
                              maxlength="6"
                            />
                          </MDBRow>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>        
        </MDBRow>
      </MDBContainer>    
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          {/* Payment */}
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                    Payment
                  </th>
                  {/* <th scope="col">Format</th> */}
                  <th scope="col">{' '}</th>
                  <th scope="col">{' '}</th>
                </tr>
              </MDBTableHead>
              <p> {' '}</p>
              <MDBTableBody>
                <MDBCard
                  className="shadow-2-strong mb-5 mb-lg-0"
                  style={{ width: "1062px", borderRadius: "40px" }}
                >
                  <MDBCardBody className="p2-4">

                    <MDBCol>
                      <MDBRow>
                        <MDBCol>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "500px"}}
                              placeholder="Name"
                              size="lg"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "464px"}}
                              placeholder="Card Number"
                              size="lg"
                              minlength="16"
                              maxlength="16"
                            />
                          </MDBRow>
                          <MDBRow>
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "500px"}}
                              placeholder="Expiry Date                                                           MM/YY"
                              size="lg"
                              minlength="5"
                              maxlength="5"
                            />
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p> 
                            <MDBInput
                              className="mb-10 mb-xl-5"
                              style={{width: "464px"}}
                              placeholder="CVV"
                              size="lg"
                              minlength="3"
                              maxlength="3"
                            />
                          </MDBRow>
                          <MDBRow>  
                          <button class="btn btn-primary btn-lg btn-block" type="submit">Checkout</button>
                          </MDBRow>    
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>        
        </MDBRow>
      </MDBContainer>    
    </section>
    
  );
}