import React, { useState, useEffect } from 'react';
import NewsAPIManager from '../../modules/NewsAPIManager';
import NewsCardHorizontal from './NewsCardHorizontal';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './News.css';

const News = () => {
  const [creNews, setCRENews] = useState([])
  const [bizNews, setBizNews] = useState([])
  const [activeTab, setActiveTab] = useState('1')

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const getCRENews = async () => {
    const res = await NewsAPIManager.getCREHeadlines()
    setCRENews(res.news)
  }

  const getBizNews = async () => {
    const res = await NewsAPIManager.getBizHeadlines()
    setBizNews(res.news)
  }

  useEffect(() => {
    getCRENews()
    getBizNews()
  }, [])

  return (
    <>
      <h4 className="news__title">Latest News <span role="img" aria-label="news">🗞</span></h4>
      <div className="articles__container">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              <span>Commercial Real Estate <span role="img" aria-label="building">🏢</span></span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              <span>Business <span role="img" aria-label="business">💼</span></span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {creNews.map(article => <NewsCardHorizontal key={article.id} article={article} />)}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
          <Row>
              <Col sm="12">
                {bizNews.map(article => <NewsCardHorizontal key={article.id} article={article} />)}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </>
  )
}

export default News;