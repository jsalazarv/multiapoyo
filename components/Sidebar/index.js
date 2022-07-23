import {useEffect, useState} from "react";
import Sidebar from "../common/Sidebar";
import SidebarOverlay from "../common/SidebarOverlay";
import Button from "../common/Button";
import IconButton from "../common/IconButton";

export const ToggleSidebar = ({open = false, onChangeState, children}) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onChangeState && onChangeState(!isOpen);
    }

    useEffect(() => {
        setIsOpen(open);
    }, [open])

    return (
        <>
        <Sidebar className={`${isOpen === true ? 'active' : ''}`}>
            <div className="sd-header">
                <IconButton background="gray" ml="10px" fontSize="10px" size="20px" onClick={toggleSidebar}>
                    <i className="fas fa-times"></i>
                </IconButton>
            </div>
            <div className="sd-body">
                {children}
            </div>
        </Sidebar>
        <SidebarOverlay className={`${isOpen === true ? 'active' : ''}`} onClick={toggleSidebar}/>
        </>
    )
}
