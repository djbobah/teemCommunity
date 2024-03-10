import { useState } from "react";

const Filter = ({ avatarColors, onChange, filter }) => {
  // const onChange = () => {};

  // const [componentSize, setComponentSize] = useState<SizeType | "default">(
  //   "default"
  // );

  // };

  // function onFinish(values) {
  //   console.log("finish", values);
  //   // const newAsset = {
  //   //   id: coin.id,
  //   //   amount: values.amount,
  //   //   price: values.price,
  //   //   date: values.date?.$d ?? new Date(),
  //   // };
  //   // assetRef.current = newAsset;
  //   // setSubmitted(true);
  //   // addAsset(newAsset);
  // }

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
          // placeholder="Выберите фильтр по группам"
        >
          <option value="all">Все</option>
          <option value="closed">Закрытая</option>
          <option value="opened">Открытая</option>
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
// <Form
//   labelCol={{ span: 4 }}
//   wrapperCol={{ span: 14 }}
//   layout="horizontal"
//   initialValues={{ group: undefined }}
//   // onValuesChange={onFormLayoutChange}
//   // onFinish={onFinish}
//   // size={componentSize as SizeType}
//   style={{ maxWidth: 600 }}
// >
//   <Form.Item label="Группа" name="group" id="group">
//     <Select
//       onChange={onChange}
//       placeholder="Выберите фильтр по группам"
//       name="group"
//     >
//       <Select.Option value="Все">Все</Select.Option>{" "}
//       <Select.Option value="Закрытая">Закрытая</Select.Option>{" "}
//       <Select.Option value="Открытая">Открытая</Select.Option>
//     </Select>
//   </Form.Item>
//   <Form.Item label="Цвет аватарки">
//     <Select
//       onChange={onChange}
//       placeholder="Выберите фильтр по цвету аватарки"
//     >
//       {avatarColors.map((color, i) => (
//         <Select.Option key={i + color} value={color}>
//           {color}
//         </Select.Option>
//       ))}
//     </Select>
//   </Form.Item>

//   <Form.Item label="Друзья">
//     <Select
//       onChange={onChange}
//       placeholder="Выберите фильтр по наличию друзей"
//     >
//       <Select.Option value="All">Все</Select.Option>{" "}
//       <Select.Option value="gotFriends">Есть друзья</Select.Option>{" "}
//       <Select.Option value="notFriends">Нет друзей</Select.Option>
//     </Select>
//   </Form.Item>
// </Form>
