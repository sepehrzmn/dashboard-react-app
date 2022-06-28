import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContentProvider } from "./contexts/ContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
	<>
		<ContentProvider>
			<App />
		</ContentProvider>
	</>
);
