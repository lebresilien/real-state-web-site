import { Icon } from "./ui/icons";

const ListItem = ({ text }: { text:string }) => {
    return (
        <li className="flex text-base text-body-color gap-x-3">
            <Icon name="arrow-left" />
            {text}
        </li>
    );
};

export default ListItem;