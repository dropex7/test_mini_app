/**
 * Created by MIRZOEV A. on 31.03.2023
 */

import { memo, useContext } from "react";
import { PanelHeader, Text } from "@vkontakte/vkui";
import { UserContext } from "../context/UserContext";

const ScreenTwo = memo(() => {
    const user = useContext(UserContext);

    return (
        <>
            <PanelHeader>Страна</PanelHeader>
            <Text>{user?.country.title ?? ""}</Text>
        </>
    );
});

export default ScreenTwo;
