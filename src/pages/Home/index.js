import React, { useState, useRef, useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { Col, Row, Form, Input, Button } from "antd";
// import { Link } from "react-router-dom";

import product from "../../data/product.json";

const Home = () => {
  const [products, setProducts] = useState(product);
  const inputKey = useRef(null);
  const [search, setSearch] = useState(localStorage.getItem("search"));

  useEffect(() => {
    if (localStorage.getItem("searchResult")) {
      searchProductByName(localStorage.getItem("searchResult"));
    }
  }, []);

  const onClickSearch = () => {
    localStorage.setItem("searchResult", search);

    searchProductByName(search);
  };

  const searchProductByName = (search) => {
    const result = product.filter((product) => {
      return product.title.trim().toLowerCase().includes(search.trim().toLowerCase());
    });

    setProducts(result);
  };

  const columns = [
    {
      title: "No",
      key: "index",
      render: (text, record, index) => index + 1,
      width: "4%",
    },
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      width: "20%",
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      width: "60%",
      render: (imgs, record) => (
        <div>
          <img
            src={record.thumbnail}
            alt="product"
            style={{
              marginLeft: "20%",
              width: "200px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "2px",
              boxShadow: "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px"
            }}
          />
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: `price`,
      key: "price",
    },
  ];

  return (
    <div>
      <Row justify="center">
        <Col span={18}>
          <h1 style={{fontSize:"50px", color: "Brown"}}>Home</h1>
          <Form
            wrapperCol={{ span: 24 }}
            onFinish={onClickSearch}
            autoComplete="off"
          >
            <Form.Item name="search" style={{ marginBottom: "15px" }}>
              <Row>
                <Col span={6}>
                  <Input
                    ref={inputKey}
                    style={{
                      marginBottom: 10,
                      display: "block",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Col>
                <Col span={1} style={{ backgroundColor: "primary" }}>
                  <Button
                    style={{ width: "100%" }}
                    type="primary"
                    htmlType="submit"
                    icon={<SearchOutlined />}
                  ></Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Table style={{boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset", backgroundColor:"brown"}} columns={columns} dataSource={products} rowKey="id" />
        </Col>
      </Row>
    </div>
  );
}

export default Home