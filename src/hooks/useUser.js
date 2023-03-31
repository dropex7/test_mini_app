import { useEffect, useState } from "react";
import { API } from "../API";

function useUser() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            const vkUser = await API.getUserInfo();
            setUser(vkUser);
            setLoading(false);
        };

        if (!user) {
            load();
        }
    }, []);

    return [user, loading];
}

export default useUser;
