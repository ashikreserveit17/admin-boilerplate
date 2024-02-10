import { useState } from "react";
import { Layout, theme } from "antd";
import {Button } from "@mui/material"
import SidebarData from "./sidebarData";
import Iconify from "../../../components/iconify";
const { Header, Sider, Content } = Layout;
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG, heightFull },
  } = theme.useToken();
  return (
    <Layout style={{ height: heightFull }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: colorBgContainer }}
      >
        <div className="demo-logo-vertical bg-white mt-2 flex justify-center">
          {collapsed ? (
            <img src="/bd.svg" width={50} />
          ) : (
            <img src="/araihazar-logo.png" />
          )}
        </div>
       {!collapsed && <p className="mt-4 text-md ml-7 font-semibold" >জেনারেল</p>}
        <SidebarData />
        
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,

          }}
          className="flex items-center justify-between"
        >
          <Button
            // type="text"
            variant="text"
            // icon={
            //   collapsed ? (
            //     <Iconify icon="ant-design:menu-unfold-outlined" />
            //   ) : (
            //     <Iconify icon="ant-design:menu-fold-outlined" />
            //   )
            // }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "20px",
              width: 64,
              height: 64,
            }}
          >{
            collapsed ? (
              <Iconify icon="ant-design:menu-unfold-outlined" />
            ) : (
              <Iconify icon="ant-design:menu-fold-outlined" />
            )
          }</Button>
          {/* logo */}
            <img src="/smart-farmer.svg" width={60}/>

            {/* regi button */}
          <Button variant="contained" endIcon={<Iconify icon="arcticons:emoji-adult-farmer"/>} style={{borderRadius:"20px" ,marginRight:"20px"}}>কৃষক নিবন্ধন</Button>
           
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
