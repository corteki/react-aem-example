import React, { PureComponent } from 'react';
import { Editable } from '../../annotations/Editable';
import { ComponentResources } from '../ComponentResources';
import { NavigationProperties } from './Navigation.properties';
import { Link } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';

@Editable(ComponentResources.Navigation)
export class Navigation extends PureComponent<NavigationProperties> {
  getRecursiveNavigationContent(item: NavigationItem): any {
    if (!item || !item.url) {
      return;
    }

    let childItems;

    if (item.children && item.children.length) {
      childItems =
        item.children &&
        item.children.map((childItem: NavigationItem) => {
          return this.getRecursiveNavigationContent(childItem);
        });
    }

    return (
      <div key={item.url}>
        {(item?.url || item?.title) && (
          <Link className="nav-item" to={item.url}>
            {item.title}
          </Link>
        )}
        {childItems}
      </div>
    );
  }

  render() {
    return (
      <nav>
        {this.props.items.map(item => this.getRecursiveNavigationContent(item))}
      </nav>
    );
  }
}
