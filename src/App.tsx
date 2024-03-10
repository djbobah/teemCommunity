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
    group: "all",
    colorAvatar: "all",
    friends: "all",
  });
  const getGroups = (): GetGroupsResponse => {
    let result: 0 | 1;

    setTimeout(() => {
      result = 1;
      // resolve(mockGroups);
      setGroups(mockGroups);
    }, 1000);
  };
  // console.log(data);
  // return data;
  // };
  getGroups();
  console.log(groups);

  // console.log(ccc);
  // console.log(mockGroups);

  const avatarColors: string[] = groups?.reduce((acc, item) => {
    if (acc.includes(item.avatar_color)) {
      return acc;
    }
    return [...acc, item.avatar_color];
  }, []);

  const onChange = ({ target }) => {
    setFilter((prev) => ({ ...prev, [target.name]: target.value }));
  };

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
          <GroupsList groups={groups} />
        </>
      ) : (
        "loading"
      )}
    </>
  );
}

export default App;
