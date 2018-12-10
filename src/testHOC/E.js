import * as React from "react/cjs/react.development";

const modifyPropsHoc = (WrappedComponent) => class NewComponent extends WrappedComponent {

    //显示名称---debug
    static displayName = `NewComponent(${WrappedComponent.displayName||WrappedComponent.name||"Component"})`;

    render() {
        const el = super.render();
        const newStyle = {
            color: el.type === 'div' ? 'red' : "blue"
        };

        const newProps = {...this.props, style: newStyle};

        return React.cloneElement(el, newProps, el.props.children)
    }

    componentWillMount() {//控制生命周期
        console.log("====控制======componentWillMount==========");
    }



};

export default modifyPropsHoc;