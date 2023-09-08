
interface ButtonProps {
    onClick: () => void;
    textValue: string
}
export default function TaskManagementButton(props: ButtonProps ){
    return <button className="Task-button" onClick={props.onClick}>{props.textValue}</button>;
}
  