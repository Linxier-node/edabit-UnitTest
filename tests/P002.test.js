const stutter = require('../Problems/P002')

describe('stutter',()=>{
  test('should return the ah...ah...ahmed', () => { 
    expect(stutter('ahmed')).toBe('ah...ah...ahmed')
   })

   test('should return a single letter', () => { 
    expect(stutter('a')).toBe('a...a...a')
    })

    test('should return empty string', () => { 
      expect(stutter('')).toBe(`......`)
     })

     test('should return special characters', () => { 
      expect(stutter('!%^%#&*')).toBe('!%...!%...!%^%#&*')
      })
      
      test('should return numbers', () => {
        expect(stutter('225123')).toBe('22...22...225123')
      })
})