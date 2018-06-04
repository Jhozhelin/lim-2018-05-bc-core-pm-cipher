describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () =>{
      assert.equal(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('deveria retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    });

    it('deveria retornar "4567890123" para "1234567890" con offset 33',() => {
      assert.equal(cipher.encode(33,"1234567890"), "4567890123");
    });

    it('deveria retornar "!#$%&/()=?¡¿*[]_:;¡?=" para "!#$%&/()=?¡¿*[]_:;¡?=" con offset 33', () => {
      assert.equal(cipher.encode(33, "!#$%&/()=?¡¿*[]_:;¡?="), "!#$%&/()=?¡¿*[]_:;¡?=");

    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG" ), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('deveria retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', ()=>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    });

    it('deveria retornar "1234567890" para "4567890123" con offset 33',()=> {
      assert.equal(cipher.decode(33, "4567890123"), "1234567890");
    });

    it('deveria retornar "!#$%&/()=?¡¿*[]_:;¡?=" para "!#$%&/()=?¡¿*[]_:;¡?="con offset 33',() => {
      assert.equal(cipher.decode(33, "!#$%&/()=?¡¿*[]_:;¡?="), "!#$%&/()=?¡¿*[]_:;¡?=");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado',() => {
      assert.equal(typeof cipher.createCipherWithOffset(), 'object');
    });

    it('deveria retomar una function (encode, decode) con offset fijado 33', () => {
      assert.equal(typeof cipher.createCipherWithOffset(33).encode, 'function');
    });

    it('deveria retomar una function (encode, decode) con offset fijado 33', () => {
      assert.equal(cipher.createCipherWithOffset(33).encode("abc"), 'hij');
  });

  it('deveria retomar una function (encode, decode) con offset fijado 33', () => {
    assert.equal(cipher.createCipherWithOffset(33).decode("hij"), 'abc');

});
});
});
