/**
 * Created by MIRZOEV A. on 31.03.2023
 */

import { memo, useContext } from "react";
import { PanelHeader, Text } from "@vkontakte/vkui";
import { UserContext } from "../context/UserContext";

const ScreenThree = memo(() => {
    const user = useContext(UserContext);

    return (
        <>
            <PanelHeader>Город</PanelHeader>
            <Text>{user?.city.title ?? ""}</Text>
        </>
    );
});

export default ScreenThree;
