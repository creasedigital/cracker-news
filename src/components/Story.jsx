import { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";

export const Story = ({ storyId }) => {
	useEffect(() => {}, []);

	return <div> This is an ID: {storyId}</div>;
};
