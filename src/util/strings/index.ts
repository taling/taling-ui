export function kebabCaseToCamelCase(input: string): string {
  return input.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Kspay 불가능 문자 필터링
 * @param input
 * @returns
 */
export function filterKspayForbiddenChar(input: string): string {
  return input.replace(/[^가-힣a-zA-Z0-9\s]/g, "");
}
