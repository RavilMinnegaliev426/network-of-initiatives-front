const dataFetcher = async (endpoint: string) => {
  const response = await fetch(endpoint, {
    method: 'GET',
  });

  if (response.ok) {
    const contentType = response.headers.get('Content-Type');

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();

      const parsedData = data.map((initiative: { dateOfCreation: string }) => ({
        ...initiative,
        dateOfCreation: new Date(Date.parse(initiative.dateOfCreation)),
      }));

      return parsedData;
    }
  }
};

export default dataFetcher;
