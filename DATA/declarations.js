const escapeStr = "\' \` \\ \/ \"";

const mainArr = [4,'2'];

const mainObj = {
    str : "Hello World",
    num : 123456,
    bool : true,
    undef : undefined
};

const mainNested = {
    arr : [4, undefined, '2'],
    obj : {
        str : "Hello World",
        num : 100500,
        bool : false
    }
}

const arr = Object.freeze(mainArr);
const obj = Object.freeze(mainObj);
const nested = Object.freeze(mainNested);


function deepFreeze( obj ) {
    // воз­вра­ща­ем массив, состоящий из всех имен собственных (неунаследованных) свойств
    let propNames = Object.getOwnPropertyNames( obj ); 
  
    // "замораживаем" все свойства переданного объекта
    propNames.forEach(function( name ) {
      let prop = obj[name];
  
      // "замораживаем" свойство если оно явлется объектом и не равно null
      if (typeof prop == "object" && prop !== null)
        deepFreeze( prop );
    });
  
    // "замораживаем" переданный объекта
    return Object.freeze( obj );
  }
  
  // инициализируем переменную, содержащую объект
  let myObj = {
    nestedObj: {}
};
  

deepFreeze(mainObj);
deepFreeze(mainNested);

/*
const escapeStr = "`\\/\"\'";
const arr = [4, '2']
Object.freeze(arr)
const obj = {
    str: String("Hello"),
    num: 24,
    bool:Boolean(false),
    undef: undefined
}
Object.freeze(obj)
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: String("World"),
        num: 24,
        bool: Boolean(false)
    }
}
Object.freeze(nested)
Object.freeze(nested.obj)
Object.freeze(nested.arr)
*/