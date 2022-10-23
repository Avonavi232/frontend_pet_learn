export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  entry: string;
  dist: string;
  html: string;
  locales: string;
  src: string;
}

export type BuildEnv = {
  mode?: BuildMode;
  port?: number;
  apiUrl: string;
}

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  hot: boolean;
  apiUrl: string
}
