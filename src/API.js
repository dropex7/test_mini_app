import bridge from "@vkontakte/vk-bridge";

export class API {
    static async getUserInfo() {
        return await bridge.send("VKWebAppGetUserInfo");
    }
}
