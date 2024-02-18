import { useEffect, useState,Fragment } from 'react';

import LayoutPage from '../layouts/LayoutPage';
import { theme } from 'antd';
import type { TableProps } from 'antd';

import { Article } from '../services/types';
import fetchArticles from '../services/article';
import {
  Table,Modal,Menu,
  Card
} from "antd";
import {
  EyeOutlined,
} from "@ant-design/icons";

function ArticlePage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [articles, setArticles] = useState<Article[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articleDetail, setArticleDetail] = useState<Article>();

  useEffect(() => {
    async function fetchAndSetArticles() {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
    }
    fetchAndSetArticles();
  }, []);

  const columns: TableProps<Article>['columns'] = [
    {
      title: "Image",
      width: 120,
      dataIndex: "urlToImage",
      sorter: true,
      render: (urlToImage) => (
        <img src={urlToImage} width={100} height={70}/>
      ),
    },
    {
      title: "Author",
      dataIndex: "author",
      sorter: true,
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: true,
    },
    {
      title: "Published At",
      dataIndex: "publishedAt",
      sorter: true,
    },
    {
      title: "Source Name",
      dataIndex: "source",
      render: (source) => (source && source.name ? source.name : "")
    },
    {
      title: "",
      dataIndex: "source",
      align: "right",
      sorter: true,
      fixed: "right",
      width: 50,
      render: (source) => {
  
        return (
          <Fragment>
            
            
                <Menu>
                  <Menu.Item
                    key="1"

                    onClick={() => handleDetail(source)}
                    >
                    <EyeOutlined /> Edit
                  </Menu.Item>
                </Menu>
            
            </Fragment> 
          
        );
      },
    },
    
    
  ];

  const handleDetail = (source: any) => {
    const filterDetail = articles.filter((article) => article.source.name === source.name);
    console.log(filterDetail);
    setIsModalOpen(true);
    setArticleDetail(filterDetail[0]);
    
  }
  return (
    <LayoutPage>
      <Modal
        title="Article Detail"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
         <Card className="body-data">
          <div>
            <p>Url: {articleDetail?.url}</p>
            <p>Description: {articleDetail?.description}</p>
            <p>Content: {articleDetail?.content}</p>
          </div>
        </Card>
        </Modal>
      <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
           <Table
                    scroll={{ x: 1200 }}
                    columns={columns}
                    dataSource={articles}
                    rowKey={(data) => data.source.id}
                 
                   
                  />
        </div>
    </LayoutPage>
  );
}

export default ArticlePage;
