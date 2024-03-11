import { useEffect, useState } from "react";
import mockGroups from "./mock/groups.json";
import Filter from "./components/filter";
import GroupsList from "./components/groupsList";

interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}

interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

interface User {
  first_name: string;
  last_name: string;
}

function App() {
  const [groups, setGroups] = useState();
  const [filter, setFilter] = useState({
    group: "undefined",
    colorAvatar: "all",
    friends: "all",
  });
  const getGroups = (): GetGroupsResponse => {
    let result: 0 | 1;

    setTimeout(() => {
      result = 1;
      setGroups(mockGroups);
    }, 1000);
  };
  getGroups();
  console.log(groups);

  const avatarColors: string[] = groups?.reduce((acc, item) => {
    if (acc.includes(item.avatar_color)) {
      return acc;
    }
    return [...acc, item.avatar_color];
  }, []);

  const onChange = ({ target }) => {
    // console.log(target.value);
    setFilter((prev) => ({ ...prev, [target.name]: target.value }));
  };
  let filteredGroups = groups;

  if (filter.group !== "undefined") {
    filteredGroups = groups?.filter(
      (group) => group.closed.toString() == filter.group
    );
  }

  if (filter.colorAvatar !== "all") {
    // if()
    if (filter.colorAvatar === "") {
      filteredGroups = filteredGroups.filter(
        (group) => typeof group["avatar_color"] === "undefined"
      );
    } else {
      filteredGroups = filteredGroups.filter(
        (group) => group.avatar_color === filter.colorAvatar
      );
    }
  }

  if (filter.friends !== "all") {
    if (filter.friends === "gotFriends") {
      filteredGroups = filteredGroups.filter(
        (group) => typeof group["friends"] !== "undefined"
      );
    }
    if (filter.friends === "notFriends") {
      filteredGroups = filteredGroups.filter(
        (group) => typeof group["friends"] === "undefined"
      );
    }
  }

  return (
    <>
      <h2>VK community</h2>

      {groups ? (
        <>
          <Filter
            avatarColors={avatarColors}
            onChange={onChange}
            filter={filter}
          />
          <GroupsList groups={filteredGroups} />
        </>
      ) : (
        "loading"
      )}
    </>
  );
}

export default App;
