import { useState } from "react";

export default function Liste() {
    const [value, setvalue] = useState("");
    const [values, setvalues] = useState([
        { id: 1, name: "mustapha" },
        { id: 2, name: "mustapha" },
        { id: 3, name: "mustapha" },
        { id: 4, name: "mustapha" },
    ]);

    // إضافة عنصر جديد
    function addelemnt() {
        if (value.trim() === "") return;

        const newlist = [...values, { id: Date.now(), name: value }];
        setvalues(newlist);
        setvalue("");
    }

    // حذف عنصر عبر الـ id
    function moddifer(id) {
        const newvalue = values.filter((item) => item.id !== id);
        setvalues(newvalue);
    }

    // تعديل عنصر عبر الـ id
    function edit(id) {
        const newliste = values.map((advice) => {
            if (advice.id === id) {
                return {...advice,name:advice.name +10}
            }else{  return advice;}
          
        });
        setvalues(newliste);
    }

    return (
        <div>
            <ul>
                {values.map((event) => (
                    <li key={event.id}>
                        {event.name}{" "}
                        <button onClick={() => moddifer(event.id)}>
                            Delete
                        </button>{" "}
                        <button onClick={() => edit(event.id)}>
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={value}
                onChange={(event) => setvalue(event.target.value)}
            />
            <button onClick={addelemnt}>add</button>
        </div>
    );
}