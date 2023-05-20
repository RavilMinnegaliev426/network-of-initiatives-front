import config from '../config';

interface Application {
  initiativeID: number;
  name: string;
  about: string;
  message: string;
  contact: string;
}

export const postApplication = async (application: Application) => {
  const response = await fetch(config.POST_APPLICATION_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(application),
  });

  return response.ok;
};
