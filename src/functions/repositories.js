const { fetchRepositories } = require('./utils/fetch');

exports.handler = async () => {
  const data = await fetchRepositories();
  if (data && data.length > 0) {
    return data;
  } else {
    return [];
  }
};
