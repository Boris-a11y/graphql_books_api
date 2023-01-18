declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_TYPE: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DATABASE: string;
    }
  }
}
export {};
