import React from "react";
import { IFilter } from "../App";

interface FilterProps {
  avatarColors: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  filter: IFilter;
}

const Filter: React.FC<FilterProps> = ({ avatarColors, onChange, filter }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div>
        <label htmlFor="group">Группа: </label>
        <select
          name="group"
          id=""
          onChange={onChange}
          defaultValue={filter.group}
        >
          <option value="undefined">Все</option>
          <option value="true">Закрытая</option>
          <option value="false">Открытая</option>
        </select>
      </div>
      <div>
        <label htmlFor="colorAvatar">Цвет аватарки: </label>

        <select
          name="colorAvatar"
          id=""
          onChange={onChange}
          defaultValue={filter.group}
        >
          <option value="all">Все</option>
          {avatarColors.map((item, i) => (
            <option key={i + item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="friends">Друзья: </label>

        <select
          name="friends"
          id=""
          onChange={onChange}
          defaultValue={filter.group}
        >
          <option value="Все">Все</option>
          <option value="gotFriends">Есть друзья</option>
          <option value="notFriends">Нет друзей</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
