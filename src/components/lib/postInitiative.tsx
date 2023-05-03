const endpoint = 'http://localhost:3000/api/initiative/new';

interface InitiativePost {
  title: string;
  author: string;
  description: string;
  searching: string;
  contact: string;
}

export const postInitiative = async (initiative: InitiativePost) => {
  const path = endpoint + 'new';

  const response = await fetch(path, {
    method: 'POST',
    body: JSON.stringify(initiative),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.status;
};
