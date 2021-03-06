import React, { useState } from 'react';
import Item from './Item';
import {useAdminContext} from '../context/useAdminContext';


function SideBar(props) {

    const {
        NavigationConfig,
        updateTitleContent,
        titleContent
    } = useAdminContext();

    function handleOnClickItem(title){
        updateTitleContent(title);
    }

    const [show, setShow] = useState(false)

    function onHandleClickShow(){
        setShow(!show);
    }

    return (
        <div id="sidebar">
            <div className="makeStyles-logo-8" onClick= {onHandleClickShow} >
                <a href="#" className="makeStyles-logoLink-9" >
                    <div className="makeStyles-logoImage-11">
                        <img src={process.env.PUBLIC_URL + "/download.png"}alt="logo" className="makeStyles-img-12"/>
                    </div>
                    Booking Party
                </a>
            </div>
            <div className={"makeStyles-sidebarWrapper-27 "+ (show && "show")} style ={{}}>
                <ul className="MuiList-root makeStyles-list-14 MuiList-padding">
                    {
                        NavigationConfig.map((item,index)=>{
                            if (item.display !== 'none'){
                                return (
                                    <div key = {index} onClick = {()=>handleOnClickItem(item.title)}  className={`makeStyles-item-15 ${item.title === titleContent &&"makeStyles-orange-25"} `} ><Item title = {item.title}/></div>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
