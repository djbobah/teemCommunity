import {
  Icon12Verified,
  Icon28LockOpenOutline,
  Icon28LockOutline,
  Icon28MessageOutline,
  Icon28PaletteOutline,
  Icon28SettingsOutline,
  Icon28UserOutline,
  Icon28Users,
  Icon28UsersOutline,
} from "@vkontakte/icons";
import {
  Accordion,
  AppRoot,
  Avatar,
  Div,
  Group,
  Header,
  IconButton,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  SimpleCell,
  SplitCol,
  SplitLayout,
  Switch,
  View,
  platform,
  usePlatform,
} from "@vkontakte/vkui";
import React from "react";
import Group_ from "./group";
import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const GroupsList = ({ groups }) => {
  // const [activePanel, setActivePanel] = React.useState("list");

  const platform = usePlatform();
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <>
      <AppRoot mode="full">
        <SplitLayout
          header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
        >
          <SplitCol autoSpaced>
            <View activePanel="header">
              <Panel id="header">
                <Group header={<Header mode="secondary">Группы</Header>} />
                {groups.map((group) => (
                  <div key={group.id}>
                    <Group>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "24px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div style={{ display: "flex", gap: "10px" }}>
                          <div
                            style={{
                              width: "28px",
                              height: "28px",
                              border: "1px solid gray",
                              borderRadius: "14px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: 0,
                              margin: 0,
                              backgroundColor: group.avatar_color,
                            }}
                          >
                            {group.name[0]}
                          </div>
                          {group.name}
                        </div>
                        {group.closed ? (
                          <Icon28LockOutline
                            color="red"
                            style={{ display: "inline-block" }}
                          />
                        ) : (
                          <Icon28LockOpenOutline color="green" />
                        )}
                      </div>

                      <SimpleCell
                        style={{ display: "flex", alignItems: "center" }}
                        onClick={() => setActivePanel("nothing")}
                        expandable="auto"
                        before={<Icon28UsersOutline />}
                        colSpan={2}
                      >
                        Количество подписчиков {group.members_count}
                      </SimpleCell>
                      {group.friends && (
                        <Collapse
                          style={{
                            backgroundColor: "transparent",
                            margin: 0,
                            padding: 0,
                          }}
                          bordered={false}
                          expandIcon={({ isActive }) => (
                            <CaretRightOutlined rotate={isActive ? 90 : 0} />
                          )}
                          items={[
                            {
                              key: "1",
                              label:
                                "Количество друзей: " + group.friends.length,
                              children: group.friends.map((item, i) => (
                                <p key={i}>
                                  {item.first_name} {item.last_name}
                                </p>
                              )),
                            },
                          ]}
                        />
                      )}
                    </Group>
                  </div>
                ))}
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    </>
  );
};

export default GroupsList;
