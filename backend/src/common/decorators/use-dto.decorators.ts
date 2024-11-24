/* eslint-disable @typescript-eslint/ban-ts-comment*/
// @ts-ignore
export function UseDto(dtoClass): ClassDecorator {
  return (ctor) => {
    ctor.prototype.dtoClass = dtoClass;
  };
}
