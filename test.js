//我们使用类语法来定义扩展对象
//这实际上没有必要，但它看起来最好

class MyExtension {
    /**
    *当加载扩展时，Scratch将调用此方法*一次*。
    *这个方法的任务是告诉Scratch扩展的ID、名称以及它支持的积木。
    */
    getInfo() {
        return {
            //`id`是扩展的内部id
            //它永远不会改变！
            //如果您选择进行实际扩展，请将其更改为其他内容。
            //只能使用字符a-z和0-9。没有空格或特殊字符。
            id: 'myextensionexample',

            //“name”是用户在工具箱中看到的内容
            //它可以在不中断项目的情况下进行更改。
            name: 'Cool Extension',

            blocks: [
                {
                    //`opcode`是积木的内部ID
                    //它永远不会改变！
                    //它对应于同名的类方法。
                    opcode: 'hello',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Hello, world!'
                }
            ]
        };
    }

    /**
    *对应于上面的“opcode:'hello'”
    */
    hello() {
        //您可以只返回一个值：任何字符串、布尔值或数字都可以。
        //如果必须执行请求之类的异步操作，只需返回Promise即可。
        //该积木将等待Promise解析并返回解析的值。
        return 'Hello, world!';
    }
}


//调用Scratch.extensions.register以注册你的扩展
//确保每个扩展只注册一次
Scratch.extensions.register(new MyExtension());
