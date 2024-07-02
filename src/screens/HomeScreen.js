import React from 'react'
import { Row, Col} from 'react-bootstrap'

import Sidebar from '../components/HomeScreen/Sidebar'
import Carousel from '../components/HomeScreen/Carousel'
import HomeScreenAllArticles from '../components/HomeScreen/Articles'
import HomeScreenAdebiSyn from '../components/HomeScreen/AdebiSyn'
import HomeScreenRuhaniyat from '../components/HomeScreen/Ruhaniyat'
import HomeScreenProza from '../components/HomeScreen/Proza'


function HomeScreen() {
  return (
    <div>        
        <Row>
            <Col md={8}>
                <h2 className='my-3 heading-text'>Бас тақырып</h2>
                <Carousel />
            </Col>

            <Col className='mt-4 text-center' md={4}>
                <Sidebar />
            </Col>
        </Row>
        
        <HomeScreenAllArticles />
        
        <HomeScreenAdebiSyn />

        <HomeScreenProza />
        
        <HomeScreenRuhaniyat />
    </div>
  )
}

export default HomeScreen