import type { Type as Class } from '@nestjs/common';
import type { ApiPropertyOptions } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

import { UtilsProvider } from './utils.provider';

export function BooleanProperty(
  options: Omit<ApiPropertyOptions, 'type'> = {},
): PropertyDecorator {
  return ApiProperty({ type: Boolean, ...options });
}

export function BooleanPropertyOptional(
  options: Omit<ApiPropertyOptions, 'type' | 'required'> = {},
): PropertyDecorator {
  return BooleanProperty({ required: false, ...options });
}

export function UUIDProperty(
  options: Omit<ApiPropertyOptions, 'type' | 'format'> &
    Partial<{ each: boolean }> = {},
): PropertyDecorator {
  return ApiProperty({
    type: options?.each ? [String] : String,
    format: 'uuid',
    isArray: options?.each,
    ...options,
  });
}

export function UUIDPropertyOptional(
  options: Omit<ApiPropertyOptions, 'type' | 'format' | 'required'> &
    Partial<{ each: boolean }> = {},
): PropertyDecorator {
  return UUIDProperty({ required: false, ...options });
}

export function ApiEnumProperty<TEnum>(
  getEnum: () => TEnum,
  options: Omit<ApiPropertyOptions, 'type'> & { each?: boolean } = {},
): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enumValue = getEnum() as any;

  return ApiProperty({
    type: 'enum',
    isArray: options.each,
    enum: enumValue,
    enumName: UtilsProvider.getVariableName(getEnum),
    ...options,
  });
}

export function ApiEnumPropertyOptional<TEnum>(
  getEnum: () => TEnum,
  options: Omit<ApiPropertyOptions, 'type' | 'required'> & {
    each?: boolean;
  } = {},
): PropertyDecorator {
  return ApiEnumProperty(getEnum, { required: false, ...options });
}

export function ObjectProperty<T>(
  getType: () => Class<T>,
  options: Omit<ApiPropertyOptions, 'type'> & { each?: boolean } = {},
): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { each, ...restOptions } = options;

  return ApiProperty({
    type: () => getType(),
    isArray: each,
    ...restOptions,
  });
}

export function ObjectPropertyOptional<T>(
  getType: () => Class<T>,
  options: Omit<ApiPropertyOptions, 'type' | 'required'> & {
    each?: boolean;
  } = {},
): PropertyDecorator {
  return ObjectProperty(getType, { ...options, required: false });
}
