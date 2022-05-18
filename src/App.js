import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getStoryIds } from "./services/hnApi";

function App() {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then((res) => setStoryIds(res));
	}, []);

	return <Box>{storyIds}</Box>;
}

export default App;
