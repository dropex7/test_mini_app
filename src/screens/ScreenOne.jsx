/**
 * Created by MIRZOEV A. on 31.03.2023
 */

import { memo, useContext } from "react";
import { PanelHeader, Text } from "@vkontakte/vkui";
import { UserContext } from "../context/UserContext";

const ScreenOne = memo(() => {
    const user = useContext(UserContext);

    return (
        <>
            <PanelHeader>Имя и фамилия</PanelHeader>
            <Text>
                {user?.first_name && user?.last_name
                    ? `${user.first_name} ${user?.last_name}`
                    : ""}
            </Text>
        </>
    );
});

export default ScreenOne;
