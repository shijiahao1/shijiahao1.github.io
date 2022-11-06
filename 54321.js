class A {
	getInfo() {
		return {
			id: 'a',
			name: 'test',
      color1: '#2a2ba5',
      color2: '#000000',
			blocks: [
				{
					opcode: 'a',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '1'
				},
				{
					opcode: 'b',
					blockType: Scratch.BlockType.COMMAND,
					text: '2'
				},
				{
					opcode: 'c',
					blockType: Scratch.BlockType.CONDITIONAL,
					text: '3'
				},
				{
					opcode: 'd',
					blockType: Scratch.BlockType.EVENT,
					text: '4'
				},
				{
					opcode: 'e',
					blockType: Scratch.BlockType.HAT,
					text: '5'
				},
				{
					opcode: 'f',
					blockType: Scratch.BlockType.LOOP,
					text: '6'
				},
				{
					opcode: 'g',
					blockType: Scratch.BlockType.REPORTER,
					text: '7'
				}
			]
		}
	}
	a() { };
	b() { };
	c() { };
	d() { };
	e() { };
	f() { };
	g() { }
}
class B {
	getInfo() {
		return {
			id: 'a',
			name: 'test',
      color1: '#2a2ba5',
      color2: '#000000',
			blocks: [
				{
					opcode: 'a',
					blockType: Scratch.BlockType.BOOLEAN,
					text: '1'
				},
				{
					opcode: 'b',
					blockType: Scratch.BlockType.COMMAND,
					text: '2'
				},
				{
					opcode: 'c',
					blockType: Scratch.BlockType.CONDITIONAL,
					text: '3'
				},
				{
					opcode: 'd',
					blockType: Scratch.BlockType.EVENT,
					text: '4'
				},
				{
					opcode: 'e',
					blockType: Scratch.BlockType.HAT,
					text: '5'
				},
				{
					opcode: 'f',
					blockType: Scratch.BlockType.LOOP,
					text: '6'
				},
				{
					opcode: 'g',
					blockType: Scratch.BlockType.REPORTER,
					text: '7'
				}
			]
		}
	}
	a() { };
	b() { };
	c() { };
	d() { };
	e() { };
	f() { };
	g() { }
}

Scratch.extensions.register(new A());
Scratch.extensions.register(new B())