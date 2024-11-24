export const getCsrfToken = (): string => {
  const csrfEl = document.querySelector('[name~=_token][content]') as HTMLMetaElement;

  return csrfEl ? csrfEl.content : '';
};
