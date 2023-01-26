import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >

      <div className='text-black' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom border-top border-1 border-secondary' >
          <div className='me-5 d-none d-lg-block'>
            <span>Nuestras redes sociales:</span>
          </div>

          <div>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' className='me-4 text-reset'>
              <MDBIcon fab icon='youtube' />
            </a>
            <a href='https://github.com/HenryPG13/PG-FRONT' className='me-4 text-reset'>
              <MDBIcon fab icon='github' />
            </a>
            <a href='https://github.com/HenryPG13/Back-PG' className='me-4 text-reset'>
              <MDBIcon fab icon='github' />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4' color='light'>
                  <MDBIcon icon='gem' className='me-3' />
                  FootShop
                </h6>
                <p>
                  Somos una compañía dedicada a la venta de calzados de primera categoría.
                  <br />
                  Con nosotros encontrarás zapatillas de edición limitada.
                  <br />
                  Empresa líder en la obtención y distribución de productos de carácter exclusivo.
                </p>
              </MDBCol>

              {/* <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Angular
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Vue
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Laravel
                  </a>
                </p>
              </MDBCol> */}

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Links útiles</h6>
                <p>
                  <a href='/zapatillas' className='text-reset'>
                    Productos
                  </a>
                </p>
                <p>
                  <a href='/zapatillas/ofertas' className='text-reset'>
                    Ofertas
                  </a>
                </p>
                <p>
                  <a href='/login' className='text-reset'>
                    Ingresar
                  </a>
                </p>
                <p>
                  <a href='/compras' className='text-reset'>
                    Carrito
                  </a>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon='home' className='me-2' />
                  P. Sherman, calle Wallaby 42, Sidney
                </p>
                <p>
                  <MDBIcon icon='envelope' className='me-3' />
                  grupo13@henry.com
                </p>
                <p>
                  <MDBIcon icon='phone' className='me-3' /> + 1 234 56
                </p>
                <p>
                  <MDBIcon icon='print' className='me-3' /> + 244466666
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4 bg-primary bg-gradient text-white border-top border-2 '>
          © 2023 Copyright:
          <a className='text-reset fw-bold' href='#'>
            HenryPG
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}