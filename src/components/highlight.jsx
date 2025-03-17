import Carousel from 'react-bootstrap/Carousel';
function ProductSlider() {
  return (
    <Carousel data-bs-theme="warning" wrap="true" autoFocus>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/homebg.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-white fw-bold'>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src="/homebg.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        src="/vite.svg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductSlider;
