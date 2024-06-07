export type StepType = 'input' | 'slider' | 'default';

export const convertStringToNumber = (value: string) => {
  return +value.replace(/[^0-9]/g, '')
}