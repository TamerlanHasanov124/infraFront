import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Content from '../components/Content/Content';
import SideBar from '../components/SideBar/SideBar';
import { Outlet, Link } from 'react-router-dom';
const MainLayout = () => {
    return (
        <div className="container">
            <NavBar/>
                <Content>
                    <Outlet/>
                </Content>
            <SideBar/>
        </div>
     
    );
};

export default MainLayout;