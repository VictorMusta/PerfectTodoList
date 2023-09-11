import React, { ReactNode } from "react";

interface TaskCardProps {
    title: string;
    style: any;
}


export default function TaskCard(props: TaskCardProps) {
    const [cardColor, setcardColor] = React.useState("Yellow")
    const handleChange = (event: {
        target: {
            value: React.SetStateAction<string>;
        };
    }) => {
        setcardColor(event.target.value)
    }

    return <div className="Task-Card" style={{ ...props.style, backgroundColor: cardColor }} >
        <h1>{props.title}</h1>
        <input type="text" onChange={handleChange}>
        </input>
    </div>
}