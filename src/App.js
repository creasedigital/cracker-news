import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getStoryIds } from "./services/hnApi";
import { StoriesContainer } from "./containers/StoriesContainer";

const App = () => <StoriesContainer />;

export default App;
