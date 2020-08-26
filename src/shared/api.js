import fetch from "isomorphic-fetch";

export const fetchPopularRepos = (lang = "all") => {
  const encodedURI = encodeURI(`https://api:github.com/search/repositories?since=364`);

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((err) => {
      console.warn(err);
      return null;
    });
};
