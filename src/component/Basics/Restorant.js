import React,{useState} from 'react'
import "./style.css"
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import Navbar from './navbar'

const uniqeList=[...new Set(Menu.map((currEle)=>{
    return currEle.category;
})),"All",];
const Restorant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList] =useState(uniqeList);
    const filterItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((currEle)=>{
            return currEle.category===category;
        });
        setMenuData(updatedList);
        //console.log(updatedList);
    };
    return (
        <>
           <Navbar filterItem={filterItem} menuList={menuList}/>
           <MenuCard menuData={menuData} />
        </>
    );
};

export default Restorant
