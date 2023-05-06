const endpoint = 'http://localhost:3000/application';

interface Application {
  initiativeID: number;
  name: string;
  about: string;
  message: string;
  contact: string;
}

export const postApplication = async (application: Application) => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(application),
  });

  return response.ok;
};
