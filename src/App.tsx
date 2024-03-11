import { useEffect, useState } from "react";
import mockGroups from "./mock/groups.json";
import Filter from "./components/filter";
import GroupsList from "./components/groupsList";
import { randNumber } from "./utils";
import { message } from "antd";

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

interface IFilter {
  group: string;
  colorAvatar: string;
  friends: string;
}

function App() {
  const [groups, setGroups] = useState();
  const [error, setError] = useState({});
  const [filter, setFilter] = useState<IFilter>({
    group: "undefined",
    colorAvatar: "all",
    friends: "all",
  });

  useEffect(() => {
    getGroups().then((obj) => {
      console.log(obj);
      if (obj.result === 0) {
        setError({
          message:
            "Условный сервер вернул ошибку. Попробуйте обновить страницу. Ошибка генерируется рандомно...",
        });
      } else {
        setGroups(obj.data);
      }
    });
  }, []);
  function getGroups(): Promise<GetGroupsResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const obj = { result: randNumber(1), data: mockGroups };
        resolve(obj);
      }, 1000);
    });
  }

  // groups = getGroups();
  // console.log(groups.result);

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
      ) : error[message] !== undefined ? (
        "loading"
      ) : (
        error.message
      )}
    </>
  );
}

export default App;
function getGroups() {
  throw new Error("Function not implemented.");
}
