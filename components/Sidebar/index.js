import {useEffect, useState} from "react";
import Sidebar from "../common/Sidebar";
import SidebarOverlay from "../common/SidebarOverlay";
import Button from "../common/Button";

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
                <Button onClick={toggleSidebar}>x</Button>
            </div>
            <div className="sd-body">
                {children}
            </div>
        </Sidebar>
        <SidebarOverlay className={`${isOpen === true ? 'active' : ''}`} onClick={toggleSidebar}/>
        </>
    )
}
