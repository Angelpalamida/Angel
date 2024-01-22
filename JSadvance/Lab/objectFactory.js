function factory(library, orders) {
    function copyTemplate(template) {
      return JSON.parse(JSON.stringify(template));
    }
  
    function addFunctions(object, parts) {
      parts.forEach(part => {
        if (library.hasOwnProperty(part)) {
          object[part] = library[part];
        }
      });
    }
  
    const fulfilledOrders = orders.map(order => {
      const newObject = copyTemplate(order.template);
      addFunctions(newObject, order.parts);
      return newObject;
    });
  
    return fulfilledOrders;
    
  }
 

  
  