import config from "../config/config";

const GithubProfile = async () => {
  try {
    const res = await fetch(
      "https://api.github.com/users/externalPointerVariable"
    )
      .then((response) => response.json())
      .then((data) => data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const GithubHeatMap = async () => {
  const username = "externalPointerVariable";
  const query = `{
    user(login: "${username}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.personalAccessToken}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then(
        (data) => data.data.user.contributionsCollection.contributionCalendar
      );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const GithubLanguageStats = async () => {
  const username = "externalPointerVariable";
  const query = `{
      user(login: "${username}") {
        repositories(first: 100) {
          nodes {
            languages(first: 10) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }`;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.personalAccessToken}`,
      },
      body: JSON.stringify({ query }),
    })
      .then((response) => response.json())
      .then((data) => {
        const repositories = data.data.user.repositories.nodes;
        const languageMap = {};

        repositories.forEach((repo) => {
          repo.languages.edges.forEach(({ size, node }) => {
            if (languageMap[node.name]) {
              languageMap[node.name].size += size;
            } else {
              languageMap[node.name] = { size, color: node.color };
            }
          });
        });
        return languageMap;
      });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { GithubHeatMap, GithubLanguageStats, GithubProfile };
