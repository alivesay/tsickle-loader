const JS_RXP = /\.jsx?$/;
const TS_RXP = /\.tsx?$/;

export const jsToTS = (path: string | null): string =>
  path != null ? path.replace(JS_RXP, ".ts") : "";

export const tsToJS = (path: string | null): string =>
  path != null ? path.replace(TS_RXP, ".js") : "";
