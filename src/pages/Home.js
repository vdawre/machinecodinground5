import React, {useState} from 'react';
import ShowRecipies from '../components/ShowRecipies';
import { Row, Col ,Container, Button} from 'react-bootstrap';
import { GrAdd } from 'react-icons/gr';
import SearchBar from '../components/SearchBar';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <div>
        <Container className='mt-4'>
            <SearchBar />
            <Row className='mb-2'>
                <h1>All Recipies</h1>
            </Row>
            <Row className='mb-4'>
                <ShowRecipies />
                <Col className=''>
                    <Button variant='outline-light' style={{ width: 'max-content'}} onClick={openModal}>{<GrAdd />}</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home;