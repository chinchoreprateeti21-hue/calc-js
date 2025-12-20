/**
 * @jest-environment jsdom
 */

beforeEach(() => {
  document.body.innerHTML = `
    <div id="second-sub-container">
      <button>2</button>
      <button>+</button>
      <button>3</button>
    </div>
    <input id="display" />
  `;
  jest.resetModules(); // important
  ({ equate } = require('./script'));
});

describe('Calculator Operation', ()=>{
    // const { equate } = require('./script');

    test('to add two numbers', () => {
    expect(equate('2', '3', '+')).toBe(5);
});

test("sub 2 numbers", () =>{
    // const {equate} = require('./script');
    expect(equate("5", "2", '-')).toBe(3);
});

test("mul of two numbers", () => {
    // const {equate} = require('./script');
    expect(equate('3','2', "*")).toBe(6);
});
test("div of two numbers", ()=>{
    // const {equate} = require('./script');
    expect(equate('4', '2', '/')).toBe(2);
});
test("divide", ()=>{
    expect(equate('4','0', '/')).toBe(Infinity);
});

test("exponent", ()=>{
    expect(equate('2','2', '^')).toBe(4);
});
test("Modulos", ()=>{
    expect(equate('4','2', '%')).toBe(0);
});
test("AND", ()=>{
    expect(equate('6','2', 'AND')).toBe(2);
});
test("OR", ()=>{
    expect(equate('6','2', 'OR')).toBe(6);
});
test("NOT", ()=>{
    expect(equate('6', '','NOT')).toBe(-7);
});

test("Greater", ()=>{
    expect(equate('6', '2','>')).toBe(true);
});
test("Less", ()=>{
    expect(equate('6', '8','<')).toBe(true);
});
test("Greater or equal", ()=>{
    expect(equate('6', '6','>=')).toBe(true);
});
test("lesser or equal", ()=>{
    expect(equate('6', '9','<=')).toBe(true);
});
test("NOT equal to", ()=>{
    expect(equate('6', '6','!=')).toBe(false);
});

test("unknown operator returns undefined", () => {
  expect(equate('2', '3', '$')).toBeUndefined();
});

});

