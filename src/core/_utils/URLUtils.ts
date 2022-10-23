interface URLProps {
  url: string;
  params?: Record<string, any>;
}

const parseURL = ({ params, url }: URLProps): string => {
  if (!params) return url;

  let cUrl = url;

  Object.keys(params).forEach(key => {
    if (!params[key]) {
      let min = cUrl.indexOf(`{:${key}}`) - `${key}`.length - 2;
      let max = cUrl.indexOf(`{:${key}}`) + `{:${key}}`.length;

      if (cUrl.charAt(min) === '?') {
        min++;
        max++;
      }

      cUrl = cUrl.substr(0, min) + cUrl.substr(max);
    } else {
      cUrl = cUrl.replace(`:${key}`, params[key]);
    }
  });

  return cUrl;
};

export const URLUtils = { parseURL };
