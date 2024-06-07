import "./Dropdown.scss";
import {useState} from "react";

function Dropdown({title, content}) {
    const [open, setOpen] = useState(true);

    const rootClass = `dropdown${open ? "" : " dropdown--closed"}`;
    return (
        <div className={rootClass} onClick={() => setOpen(!open)}>
            <h1 className="title">{title}</h1>
            <p className="content">{content} {open?'open':'close'}</p>
        </div>
    );
}

export default Dropdown;