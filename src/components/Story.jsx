import { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
	const [story, setStory] = useState({});

	useEffect(() => {
		getStory(storyId);
	}, []);

	return <div> This is an ID: {storyId}</div>;
};
