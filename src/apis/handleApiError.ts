import { isHttpError } from 'tosslib';

export const handleApiError = async <T>(apiFn: () => Promise<T>) => {
  try {
    return await apiFn();
  } catch (e) {
    if (isHttpError(e)) {
      console.log(e.message);
    }
    throw e;
  }
};
