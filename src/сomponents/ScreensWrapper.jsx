import { memo } from "react";
import { Panel, View } from "@vkontakte/vkui";

const ScreensWrapper = memo(({ activePanel, routes }) => {
    return (
        <View activePanel={activePanel}>
            {routes.map(({ id, component }) => (
                <Panel key={id} id={id} centered>
                    {component}
                </Panel>
            ))}
        </View>
    );
});

export default ScreensWrapper;
