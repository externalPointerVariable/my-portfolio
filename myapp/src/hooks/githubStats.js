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
  const query = `{
    user(login: "externalPointerVariable") {
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
    });

    const json = await res.json();
    console.log("GitHub API Response:", json); // ✅ Check full response

    if (!json || !json.data || !json.data.user) {
      console.error("Invalid API response:", json);
      throw new Error("GitHub API returned invalid or missing data.");
    }

    return json.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching GitHub Heatmap:", error);
    return null; // Prevent UI crashes
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
