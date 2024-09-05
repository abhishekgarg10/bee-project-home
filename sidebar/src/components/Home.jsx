import React from 'react';
import { Card, Typography, Button, Row, Col } from 'antd';
import { ArrowRightOutlined, ShopOutlined, AppstoreOutlined, CarOutlined } from '@ant-design/icons';
import '../index.css';  // Include additional styles here

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      
      {/* Welcome Section with Enhanced Animation */}
      <div className="fade-in">
        <Card
          style={{
            backgroundImage: 'url(https://source.unsplash.com/random/1600x900)',
            backgroundSize: 'cover',
            borderRadius: '15px',
            color: 'white',
            padding: '40px',
            marginBottom: '30px',
            position: 'relative',
            overflow: 'hidden',
            animation: 'fadeIn 2s'
          }}
        >
          <Title level={1} style={{ color: '#fff', zIndex: 1, position: 'relative' }}>Welcome to Our Platform</Title>
          <Paragraph style={{ color: '#fff', fontSize: '18px', zIndex: 1, position: 'relative' }}>
            Are you a Retailer, Wholesaler, or Delivery Partner? Join us to manage your business effortlessly.
          </Paragraph>
          <Button type="primary" shape="round" icon={<ArrowRightOutlined />} size="large" style={{ marginTop: '20px' }}>
            Get Started
          </Button>
          <div className="background-animation" />
        </Card>
      </div>

      {/* Role Section with Equal Sized Boxes */}
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '10px', minHeight: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s' }} className="service-card">
            <ShopOutlined style={{ fontSize: '50px', color: '#1890ff' }} />
            <Title level={3}>For Retailers</Title>
            <Paragraph>Manage your shop inventory, track orders, and stay updated with supplier offers.</Paragraph>
            <Button type="primary" shape="round">Learn More</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '10px', minHeight: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s' }} className="service-card">
            <AppstoreOutlined style={{ fontSize: '50px', color: '#52c41a' }} />
            <Title level={3}>For Wholesalers</Title>
            <Paragraph>Control your stock, accept orders, and connect with delivery partners efficiently.</Paragraph>
            <Button type="primary" shape="round">Explore More</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: '10px', minHeight: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s' }} className="service-card">
            <CarOutlined style={{ fontSize: '50px', color: '#faad14' }} />
            <Title level={3}>For Delivery Partners</Title>
            <Paragraph>Find delivery jobs, track orders, and earn more with our partner programs.</Paragraph>
            <Button type="primary" shape="round">Join Us</Button>
          </Card>
        </Col>
      </Row>

      {/* Services Section with Logos */}
      <div style={{ marginTop: '50px' }}>
        <Title level={2} className="fade-in">Our Services</Title>
        <Paragraph>We provide a range of solutions to streamline your business:</Paragraph>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card hoverable style={{ borderRadius: '10px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} className="service-card">
              <img src="./assets/inventory-icon.svg" alt="Inventory Management" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
              <Title level={4}>Inventory Management</Title>
              <Paragraph>Track, manage, and update your inventory with real-time data and reports.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ borderRadius: '10px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} className="service-card">
              <img src="./assets/order-tracking-icon.svg" alt="Order Tracking" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
              <Title level={4}>Order Tracking</Title>
              <Paragraph>Stay informed with real-time order tracking, from approval to delivery.</Paragraph>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ borderRadius: '10px', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} className="service-card">
              <img src="./assets/delivery-icon.svg" alt="Delivery Management" style={{ width: '80px', height: '80px', marginBottom: '20px' }} />
              <Title level={4}>Delivery Management</Title>
              <Paragraph>Partner with trusted delivery services and ensure timely order fulfillment.</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>

      {/* About Us Section with Enhanced Styling */}
      <div style={{ marginTop: '50px', padding: '40px', backgroundColor: '#fff', borderRadius: '15px', animation: 'fadeIn 1.5s', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2}>About Us</Title>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
          We empower businesses—whether you're a retailer, wholesaler, or delivery partner. Our mission is to simplify operations, giving you the tools to manage inventory, track sales, and handle deliveries efficiently.
        </Paragraph>
        <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Focus on delivering quality products to your customers while we handle the logistics. Our platform ensures your business stays competitive and efficient.
        </Paragraph>
        <Button type="primary" shape="round" icon={<ArrowRightOutlined />} size="large">
          Learn More About Us
        </Button>
      </div>

      {/* Footer Section */}
      <footer style={{ marginTop: '50px', padding: '20px', backgroundColor: '#001529', color: '#fff' }}>
        <Paragraph>© 2024 Your Company | All Rights Reserved</Paragraph>
      </footer>
    </div>
  );
};

export default Home;
