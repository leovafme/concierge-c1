import React from 'react';
import './App.css';
import Timer from "./components/Timer";
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
        <Header />
        <Content>
          <Timer />
        </Content>
        <Footer />
    </Layout>
  );
}

export default App;
