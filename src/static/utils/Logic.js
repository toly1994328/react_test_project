class Logic {

    static loadImg(name) {
        return require("../imgs/" + name)
    }

    static formatTime(time) {
        time = Math.floor(time);
        let m = Math.floor(time / 60);
        let s = Math.floor(time % 60);
        s = s < 10 ? `0${s}` : s;
        return `${m}:${s}`;
    }

    /**
     * 弧度制化为角度制
     * @param rad 弧度
     * @returns {number} 角度
     */
    static deg(rad) {
        return rad * 180 / Math.PI;
    }

    /**
     * 角度制化为弧度制
     * @param deg 角度
     * @returns {number} 弧度
     */
    static rad(deg) {
        return deg * Math.PI / 180;
    }

    /**
     * 两点间夹角，以p0为旋转点 ，逆时针度数
     * @param p0 第一点
     * @param p1 第二点
     * @returns {number}
     */
    static angleOf2Pos(p0, p1) {
        return Math.atan((p1.x - p0.x) / (p1.y - p0.y));
    }

    /**
     * 两点间距离函数
     * @returns number
     * @param p0 第一点
     * @param p1 第二点
     */
    static disPos2d(p0, p1) {
        return Math.sqrt((p0.x - p1.x) * (p0.x - p1.x) + (p0.y - p1.y) * (p0.y - p1.y));
    }


    /**
     * 一元二次函数解
     * @param a 二次项系数
     * @param b 一次项系数
     * @param c 常数项参数
     * @returns {{x1: number, x2: number}}
     */
    static getOyTc(a, b, c) {
        var delta = b * b - 4 * a * c;
        if (delta >= 0) {
            var x1 = -b / (2 * a) + Math.sqrt(delta) / (2 * a);
            var x2 = -b / (2 * a) - Math.sqrt(delta) / (2 * a);
        } else {
            return;
        }
        return {x1: x1, x2: x2}
    }

    /**
     * 判断参数是否存在
     */
    static isExist(...args) {
        //ES5
        var isExist = true;
        args.forEach(function (arg) {
            if (arg === undefined) {
                isExist = false;
                return;
            }
        });
        return isExist;
    }

    static isNum(num, bigThan = 0) {
        return typeof (num) === 'number' && num > bigThan;
    }

    /**
     * 随机颜色
     * @param a 透明度--默认为1
     * @returns {string}
     */
    static randomRGB(a = 1) {
        return `rgba(${this.rangeInt(0, 255)},${this.rangeInt(0, 255)},${this.rangeInt(0, 255)},${a})`
    }

    /**
     * 获取范围随机整数：如 rangeInt(1,9)
     * @param s 前数(包括)
     * @param e 后数(包括)
     * @returns {number}
     */
    static rangeInt(s, e) {
        let max = Math.max(s, e);
        let min = Math.min(s, e) - 1;
        return min + Math.ceil(Math.random() * (max - min));
    };

    /**
     * 获取范围随机数：如 rangeInt(1,9) : 1.XXX~8.XXX
     * @param s
     * @param e
     * @returns {number}
     */
    static range(s, e) {
        let max = Math.max(s, e);
        let min = Math.min(s, e);
        return min + Math.random() * (max - min);
    }


    /**
     * 取随机个英文字母
     * @param len 字符串长度
     * @param hasBig 是否有大写字母
     * @returns {string}
     */
    static rangeChar(len, hasBig = false) {
        let allLen = 25;
        let chars = ["a", "b", "c", "d", "e", "f", "g",
            "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z"];
        let charsBig = chars.map(item => item.toUpperCase());

        if (hasBig) {
            chars = chars.concat(charsBig);
            allLen = 49;
        }
        let result = [];
        for (let i = 0; i < len; i++) {
            let char = chars[this.rangeInt(0, allLen)];
            result.push(char);
        }
        return result.join('');
    };

    /**
     * 将字符串仅首字母大写
     * @param str
     * @returns {string | *}
     */
    static upAChar(str) {
        let chars = [];
        str.split('').map((value, i) => {
            chars.push(i === 0 ? value.toUpperCase() : value)
        });

        return chars.join('')
    }

}

export default Logic;