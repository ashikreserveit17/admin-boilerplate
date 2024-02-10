import Iconify from "../../../components/iconify";
import { Menu } from "antd";
import GovtSvg from "../../../assets/govt.svg"
import { useNavigate } from "react-router-dom";
import {PRIVATE_ROUTES} from "../../../routes/path"
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  
  };
}

const sidebarData = [
  getItem(
    "ড্যাশবোর্ড",
    PRIVATE_ROUTES.DASHBOARD,
    <Iconify icon="ic:baseline-dashboard-customize" />
  ),
  getItem("কৃষক", "sub1", <Iconify icon="arcticons:emoji-adult-farmer" />, [
    getItem("তালিকা",  PRIVATE_ROUTES.FARMER_LIST),
    getItem("পণ্য", PRIVATE_ROUTES.FARMER_PRODUCT),
  ]),
  getItem(
    "সরকারি",
    "5",
    <img src={GovtSvg}/>,[
      getItem("প্রণোদনা পণ্য", PRIVATE_ROUTES.INCENTIVE_PRODUCTS),
      getItem("প্রণোদনা তালিকা", PRIVATE_ROUTES.INCENTIVE_LIST),
    ]
  ),
  getItem(
    "ক্যাটাগরি ব্যবস্থাপনা",
    "8",
    <Iconify icon="iconamoon:category" />
  ),
  getItem(
    "ছবি ব্যবস্থাপনা",
    "9",
    <Iconify icon="solar:gallery-add-outline" />
  ),
  getItem(
    "তথ্য  ব্যবস্থাপনা",
    "10",
    <Iconify icon="carbon:information" />
  ),
  getItem(
    "অ্যাডমিন ব্যবস্থাপনা",
    "11",
    <Iconify icon="clarity:administrator-solid" />
  ),
  getItem(
    "প্রোফাইল",
    "12",
    <Iconify icon="healthicons:ui-user-profile" />
  ),
  // getItem(
  //   "লগ আউট",
  //   "14",
  //   <Iconify icon="material-symbols:logout" />
  // ),

];


export default function SidebarData() {
  const navigate = useNavigate();
  return (
    <Menu
      theme="light"
      mode="inline"
      className='mt-2 space-y-3 text-base'
      defaultSelectedKeys={['1']}
      items={sidebarData}
      onClick={({ key }) => {
        navigate(key);
      }}
    />
  );
}
