import {
  Icon28MessageOutline,
  Icon28PaletteOutline,
  Icon28SettingsOutline,
  Icon28UserOutline,
} from "@vkontakte/icons";
import { Avatar, Group, Header, IconButton, SimpleCell } from "@vkontakte/vkui";

const Group_ = ({ group }) => {
  function getAvatarUrl(arg0: string): string | undefined {
    return arg0;
  }
  console.log(group.name);
  return (
    <Group header={<Header mode="secondary">Меню</Header>}>
      <SimpleCell
        onClick={() => setActivePanel("nothing")}
        expandable="auto"
        before={<Icon28UserOutline />}
        // wrap="nowrap"
        // rows={1}
        colSpan={2}
        style={{ display: "flex" }}
      >
        Аккаунт
      </SimpleCell>
      <SimpleCell
        onClick={() => setActivePanel("nothing")}
        expandable="auto"
        before={<Icon28PaletteOutline />}
        subtitle="Бот"
      >
        Внешний вид
      </SimpleCell>
      <SimpleCell
        onClick={() => setActivePanel("nothing")}
        expandable="auto"
        before={<Icon28SettingsOutline />}
      >
        Основные
      </SimpleCell>
    </Group>
    // <SimpleCell
    //   before={<Avatar size={40} src={getAvatarUrl("user_xyz")} />}
    //   after={
    //     <IconButton label="Написать сообщение">
    //       {/* onClick={noop} */}
    //       <Icon28MessageOutline />
    //     </IconButton>
    //   }
    //   // onClick={noop}
    // >
    //   {group.name}
    // </SimpleCell>
  );
};

export default Group_;
