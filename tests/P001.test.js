const arrayValuesTypes = require('../Problems/P001');

describe('test types of arrays elements due to input array', () => {
  test('Should return an array that includes types of original array elements', () => {
    const input = [1, 2, 'ahmed', { name: 'sayed' }, false];
    const output = ['number', 'number', 'string', 'object', 'boolean'];

    expect(arrayValuesTypes(input)).toEqual(output);
  });

  test('should return an empty array when input is empty', () => {
    expect(arrayValuesTypes([])).toEqual([]);
  });

  test('should return an array that includes types with nested array',()=>{
    const input = [1, [2, 3], 'text', { name: 'sayed' }];
    const output = ['number', 'object', 'string', 'object']
    expect(arrayValuesTypes(input)).toEqual(output)
  })
  
  test('should return an array that includes function & undefined & object',()=>{
    const input = [function(){},undefined,null]
    const output = ['function','undefined','object']
    expect(arrayValuesTypes(input)).toEqual(output) 
  })
  
});
