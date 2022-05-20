import { Box, Link, Flex } from "@chakra-ui/react";
import { RatingStar } from "rating-star";
import { useState, useEffect } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { mapTime } from "../mappers/mapTime";

export const Story = ({ storyId }) => {
	const [story, setStory] = useState({});

	useEffect(() => {
		getStory(storyId).then((data) => data && data.url && setStory(data));
	}, []);

	// return JSON.stringify(story);

	return story && story.url ? (
		<Flex flexDirection="column" align="start" bg="#AFBE87" px={10} my={8}>
			<Box>
				<Link href={story.url} textDecoration="none">
					<Box as="p">{story.title}</Box>
				</Link>
			</Box>
			<Flex w="75%" align="center" justify="space-between" my={4}>
				<Flex align="center" justify="space-between">
					<Box as="p" fontStyle="italic">
						Stars:{" "}
					</Box>
					<Box>
						{<RatingStar maxScore={5} rating={story.score} id={story.id} />}
					</Box>
				</Flex>
				<Box>
					Author: {story.by} {"  "} - {mapTime(story.time)}
				</Box>
			</Flex>
		</Flex>
	) : null;
};
