import React, { useState } from 'react';
import { Button, Input, Form, Modal, Table, notification } from 'antd';
import { PlusOutlined ,DeleteOutlined,EditOutlined  } from '@ant-design/icons';
import '../index.css';

const InventoryManagement = ({ searchText }) => {
  const [inventory, setInventory] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingItem(null);
  };

  const handleFinish = (values) => {
    if (editingItem) {
      setInventory((prev) =>
        prev.map((item) => (item.key === editingItem.key ? { ...item, ...values } : item))
      );
    } else {
      setInventory([...inventory, { ...values, key: Date.now() }]);
    }
    setIsModalVisible(false);
    setEditingItem(null);
  };

  const handleEdit = (record) => {
    setEditingItem(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setInventory((prev) => prev.filter((item) => item.key !== key));
  };

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total',
      key: 'total',
      render: (_, record) => record.price * record.quantity,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
        
          <Button onClick={() => handleEdit(record)} type="link"> <Button type="text" icon={<EditOutlined />} /></Button>
          <Button onClick={() => handleDelete(record.key)} type="link" danger><Button type="text" icon={<DeleteOutlined /> } /></Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={handleAdd} icon={<PlusOutlined />}>
        Add Product
      </Button>
      <Table columns={columns} dataSource={filteredInventory} style={{ marginTop: 20 }} />
      <Modal
        title={editingItem ? 'Edit Product' : 'Add Product'}
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter the product name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please enter the price' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please enter the quantity' }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InventoryManagement;
 
