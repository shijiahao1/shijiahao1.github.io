class TestExtension {
  getInfo() {
    return {
      id: 'TestExtension',
      name: '一个扩展',

      blocks: [
        {
          opcode: 'GUID',
          blockType: Scratch.BlockType.REPORTER,
          text: '生成一个GUID',
          disableMonitor: true
        }
      ]
    };
  }

  GUID() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
      var g = Math.floor(Math.random() * 16.0).toString(16);
      guid += g;
      if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
        guid += "-";
      }
    }
    return guid;
  }
}

Scratch.extensions.register(new TestExtension());