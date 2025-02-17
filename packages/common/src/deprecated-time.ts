import * as time from './time';
import { Timestamp } from './time';

/**
 * Lossy conversion function from Timestamp to number due to possible overflow.
 * If ts is null or undefined returns undefined.
 *
 * @hidden
 * @deprecated - meant for internal use only
 */
export function optionalTsToMs(ts: Timestamp | null | undefined): number | undefined {
  return time.optionalTsToMs(ts);
}

/**
 * Lossy conversion function from Timestamp to number due to possible overflow
 *
 * @hidden
 * @deprecated - meant for internal use only
 * @deprecated - meant for internal use only
 */
export function tsToMs(ts: Timestamp | null | undefined): number {
  return time.tsToMs(ts);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function msNumberToTs(millis: number): Timestamp {
  return time.msNumberToTs(millis);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function msToTs(str: string | number): Timestamp {
  return time.msToTs(str);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function msOptionalToTs(str: string | number | undefined): Timestamp | undefined {
  return time.msOptionalToTs(str);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function msOptionalToNumber(val: string | number | undefined): number | undefined {
  return time.msOptionalToNumber(val);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function msToNumber(val: string | number): number {
  return time.msToNumber(val);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function tsToDate(ts: Timestamp): Date {
  return time.tsToDate(ts);
}

/**
 * @hidden
 * @deprecated - meant for internal use only
 */
export function optionalTsToDate(ts: Timestamp | null | undefined): Date | undefined {
  return time.optionalTsToDate(ts);
}
