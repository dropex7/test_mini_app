import { memo } from "react";
import { Tabbar, TabbarItem } from "@vkontakte/vkui";
import { Icon24UserCircleOutline } from "@vkontakte/icons";

const Tabs = memo(({ routes, activePanel, onChangeActivePanel }) => {
    return (
        <Tabbar style={{ position: "absolute" }}>
            {routes.map(({ id, title }) => (
                <TabbarItem
                    key={id}
                    selected={activePanel === id}
                    onClick={() => onChangeActivePanel(id)}
                    text={title}
                >
                    <Icon24UserCircleOutline />
                </TabbarItem>
            ))}
        </Tabbar>
    );
});

export default Tabs;
