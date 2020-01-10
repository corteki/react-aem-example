import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App.component";
import { ModelManager, Constants } from "@adobe/cq-spa-page-model-manager";
import {BrowserRouter} from 'react-router-dom';
import "./shared/styles/Reset.scss";
import './components';

const render = (pageModel: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
            cqChildren={pageModel[Constants.CHILDREN_PROP]} 
            cqItems={pageModel[Constants.ITEMS_PROP]} 
            cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]} 
            cqPath={pageModel[Constants.PATH_PROP]} 
            locationPathname={ window.location.pathname }/>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

document.addEventListener('DOMContentLoaded', async () => {
    ModelManager.initialize().then(render);
})
