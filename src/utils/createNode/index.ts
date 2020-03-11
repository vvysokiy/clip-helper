type CreateNodeType = {
  type?: string,
  id?: Element['id'],
  class?: string,
  // style?: CSSStyleDeclaration,
  style?: any,
  body?: string
}

/**
  * Создает ноду и вставляет ее перед элементом или первым скриптом на странице
  *
  * @param params - параметры для создания ноды
  * @param params.type - тег ноды
  * @param params.id - id ноды
  * @param params.style - объект стилей ноды
  * @param params.body - тело, вставляемое через innerHTML
  */
export const createNode = (params?: CreateNodeType) => {
  const elem = document.createElement(params && params.type || 'div');
  if (params && params.id) {
    elem.id = params.id;
  }

  if (params && params.class) {
    elem.classList.add(params.class);
  }

  if (params && params.style) {
    const keys = Object.keys(params.style);
    keys.forEach(key => {
      // @ts-ignore
      elem.style[key] = params.style[key];
    })
  }

  if (params && params.body) {
    elem.innerHTML = params.body;
  }

  return elem;
};
