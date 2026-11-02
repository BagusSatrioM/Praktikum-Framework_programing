export interface ConfigService {
  get(key: string): string | undefined;
  getNumber(key: string): number | undefined;
}
