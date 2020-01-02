import React from 'react';
import { Page, withModel } from "@adobe/cq-react-editable-components";

class App extends Page {
    render() {
        return (
            <section>
                { this.childComponents && this.childComponents }
                { this.childPages && this.childPages }
            </section>
        )
    }
}

export default withModel(App)