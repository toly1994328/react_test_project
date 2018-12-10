export class Data {
    static getAttrData() {

        let justifyContent = {
            index: 0,
            data: ["normal", "flex-start", "flex-end", "center", "space-between", "space-around"]
        };
        let flexDirection = {
            index: 0,
            data: ["row", "row-reverse", "column", "column-reverse"]
        };
        let flexWrap = {
            index: 0,
            data: ["nowrap", "wrap", "wrap-reverse"]
        };
        let alignItems = {
            index: 0,
            data: ["normal", "stretch", "flex-start", "flex-end", "center", "baseline"]
        };
        let alignContent = {
            index: 0,
            data: ["normal", "stretch", "flex-start", "flex-end", "center", "space-between", "space-around"]
        };

        return {justifyContent, flexDirection, flexWrap, alignItems, alignContent};
    }

    /**
     * 设置属性
     * @param attr
     * @returns {*}
     */
    static getAttrLooped(attr) {
        return attr.data[attr.index % attr.data.length];
    }

    /**
     * 获取属性
     * @param attr
     * @returns {*}
     */
    static getAttr(attr) {
        return attr.data[attr.index];
    }
}