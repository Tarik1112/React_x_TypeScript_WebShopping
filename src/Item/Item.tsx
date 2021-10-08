
//styles
import { Wrapper } from "./Item.styles";


import Button from "@material-ui/core/Button";

//types

import { CartItemType } from "../App";
import { CardContentTypeMap } from "@material-ui/core";

type Props = {
    item: CartItemType; 
    handleAddToCart: (clickedItem: CartItemType)  => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart}) => (
    <Wrapper>
        <img src = {item.image} alt = {item.title}/>
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <button onClick={() => handleAddToCart(item)}></button>
    </Wrapper>
)


export default Item