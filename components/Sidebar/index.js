import {useEffect, useState} from "react";
import Sidebar from "../common/Sidebar";
import SidebarOverlay from "../common/SidebarOverlay";
import Button from "../common/Button";
import Title from "../common/Title";

export const ToggleSidebar = ({open = false, onChangeState, children, header}) => {
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
                {header}
                <Button className="btn btn-primary" onClick={toggleSidebar}>x</Button>
            </div>
            <div className="sd-body">
                {children}
            </div>
        </Sidebar>
        <SidebarOverlay className={`${isOpen === true ? 'active' : ''}`} onClick={toggleSidebar}/>
        </>
    )
}
