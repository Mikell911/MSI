import {ItemsProps} from "../../Data/Items/Items";

export interface catalogPageProps {
    item?: ItemsProps [];
    filter?: string;
    onFilterChange?: (filteredProducts: ItemsProps[]) => void;
}