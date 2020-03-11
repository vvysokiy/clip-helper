type CreateNodeType = {
  type: string,
  root?: HTMLElement,
  id?: Element['id'],
  style?: CSSStyleDeclaration,
}

/**
  * Создает ноду и вставляет ее перед элементом или первым скриптом на странице
  *
  * @param params - параметры для создания ноды
  * @param params.type - тег ноды
  * @param params.id - id ноды
  * @param params.root - нода, рядом с которой встанет скрипт
  * @param params.style - объект стилей ноды
  */
export const createNode = (params: CreateNodeType) => {
  let parent: Node & ParentNode;

  const elem = document.createElement(params.type);
  if (params.id) {
    elem.id = params.id;
  }
  if (params.style) {
    // @ts-ignore
    elem.style = {
      ...elem.style,
      ...params.style,
    }
  }

  if (params.root) {
    parent = params.root;
  } else {
    parent = document.body;
  }

  const append = () => {
    parent.appendChild(elem);
  };

  append();
};
