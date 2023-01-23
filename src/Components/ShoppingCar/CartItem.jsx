import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToCart } from '../../Actions';
import Button from 'react-bootstrap/Button';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const CartItem = ({ item }) => {

  const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeToCart(item._id))
  };

  return (
    <div>

      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10">

              {/* <div>
                <img src={item.imagenes[0]} alt="imagen" width={"20%"} />
              </div>

              <Link to={`/product/${item._id}`}>
                <p>{item.modelo}</p>
              </Link>

              <p>{item.precio}</p>

              <select>
                <option> {item.inventario} </option>
              </select>

              <button onClick={handleDelete}>X (delete)</button> */}

              <MDBCard className="rounded-3 mb-4">
                <MDBCardBody className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage className="rounded-3" fluid
                        src={item.imagenes[0]}
                        alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <h3 className="lead fw-normal mb-2">{item.marca}</h3>
                      <h7>{item.modelo}</h7>
                      <p>
                        <span className="text-muted">Talle: </span>{item.talle}

                        <span className="text-muted"> Color: </span> {item.color}
                      </p>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2"
                      className="d-flex align-items-center justify-content-around">
                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput min={0} defaultValue={item.qty} type="number" size="sm" />

                      <MDBBtn color="link" className="px-2">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                        ${item.precio}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <Button color='light' onClick={handleDelete}>Quitar estos productos</Button>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
    </div >
  )
};

export default CartItem;
              

