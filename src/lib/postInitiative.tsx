import config from '../config';

interface InitiativePost {
  title: string;
  author: string;
  description: string;
  searching: string;
  contact: string;
}

export const postInitiative = async (initiative: InitiativePost) => {
  const response = await fetch(config.POST_INITIATIVE_ROUTE, {
    method: 'POST',
    body: JSON.stringify(initiative),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.status;
};
