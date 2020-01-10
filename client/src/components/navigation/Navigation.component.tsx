import React, {PureComponent} from "react";
import { Editable } from "../../annotations/Editable";
import { ComponentResources } from "../ComponentResources";
import { NavigationProperties } from "./Navigation.properties";
import { Link } from "react-router-dom";

@Editable(ComponentResources.Navigation)
export class Navigation extends PureComponent<NavigationProperties> {
    getLink(item: any) {
        if (!item || !item.url || !item.title) {
            return;
        }

        return <Link className="nav-item" to={ item.url }>{ item.title }</Link>;
    }

    getRecursiveNavigationContent(item: any) {
        if (!item || !item.url) {
            return;
        }

        let childItems;

        if (item.children && item.children.length) {
            childItems = <ul>
                { item.children && item.children.map((childItem: any) => {
                    return this.getRecursiveNavigationContent(childItem);
                })
                }</ul>;
        }

        return <li key={ item.url }>
            {this.getLink(item)}
            {childItems}
        </li>;
    }
    render() {
        console.log(this.props)
        return (
            <nav>
                {this.props.items.map(item => this.getRecursiveNavigationContent(item))}
            </nav>
        )
    }
}