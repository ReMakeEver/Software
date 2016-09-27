 var i3 = { REVISION: '1' };
 if(typeof define ==== 'function' && define.amd ){
  define( 'i3', i3 );
 }else if('undefined' !== typeof exports && 'undefined' !== typeof module ){
  module.exports = i3;
 }
 if( Number.EPSILON === undefined ){
  Number.EPSILON = Math.pow( 2, - 52 );
 }
 if( Math.sign === undefined ){
  Math.sign = function ( x ){
   return ( x < 0 ) ? - 1 : ( x > 0 ) ? 1 : + x;
  };
 }
 if( Function.prototype.name === undefined && Object.defineProperty !== undefined ){
  Object.defineProperty( Function.prototype, 'name', {
   get: function(){
    return this.toString().match(/^\s*function\s*(\S*)\s*\(/ )[ 1 ];
   }
  });
 }
