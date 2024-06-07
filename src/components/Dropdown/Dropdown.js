import "./Dropdown.scss";
import {useState} from "react";

function Dropdown({title, content}) {
    const [open, setOpen] = useState(true);


    return (
        <div className={{dropdown: true, dropdownClosed: !open}} onClick={setOpen(!open)}>
            <h1 className="title">{title}</h1>
            <p className="content">{content}</p>
        </div>
    );
}

export default Dropdown;