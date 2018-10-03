import React from 'react'; 
import { Tabs } from 'antd';
import 'antd/dist/antd.css'; 
const TabPane = Tabs.TabPane;




export default class about extends React.Component{
    render(){
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="Conferences" key="1">Content of tab 2</TabPane>
                <TabPane tab="Workshops" key="2">Content of tab 2</TabPane>
                <TabPane tab="Programs" key="3">Content of tab 2</TabPane>
            </Tabs>

        );
    }
}
