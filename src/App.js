import React, { useState } from "react";
import {
	AdaptivityProvider,
	AppRoot,
	ConfigProvider,
	SplitLayout,
	SplitCol,
	ScreenSpinner,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Tabs from "./сomponents/Tabs";
import ScreensWrapper from "./сomponents/ScreensWrapper";
import { routes } from "./routes";
import { UserContext } from "./context/UserContext";
import useUser from "./hooks/useUser";

const App = () => {
	const [activePanel, setActivePanel] = useState(routes[0].id);
	const [user, loading] = useUser();

	return (
		<ConfigProvider>
			<UserContext.Provider value={user}>
				<AdaptivityProvider>
					<AppRoot>
						<SplitLayout
							popout={loading ? <ScreenSpinner state="loading" /> : null}
						>
							<SplitCol>
								<ScreensWrapper routes={routes} activePanel={activePanel} />
							</SplitCol>
						</SplitLayout>
						<Tabs
							routes={routes}
							activePanel={activePanel}
							onChangeActivePanel={setActivePanel}
						/>
					</AppRoot>
				</AdaptivityProvider>
			</UserContext.Provider>
		</ConfigProvider>
	);
};

export default App;
