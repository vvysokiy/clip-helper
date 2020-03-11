/**
 * Безопасное получение свойства объекта, возвращает fallback при ошибке
 *
 * @param getPropFn - Функция возращающая свойство объекта
 * @param fallback - Вернется если произошла ошибка при получении свойства
 */

// eslint-disable-next-line arrow-parens
export const safeGet = <T, V = null>(getPropFn: () => T, fallback: V | null = null) => {
  try {
    const result = getPropFn();
    return result || fallback;
  } catch (e) {
    return fallback;
  }
};